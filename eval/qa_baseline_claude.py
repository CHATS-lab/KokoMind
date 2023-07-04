import argparse
import json
import os
import time
import concurrent.futures
import dotenv
from datetime import datetime

import anthropic
import tqdm
import shortuuid

MODEL = "claude-v1"
timestamp = datetime.now().strftime("%Y%m%d")
MODEL_ID = f"claude-v1:{timestamp}"

try:
    config = dotenv.dotenv_values(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), '../.env'))
    client = anthropic.Client(config['ANTHROPIC_API_KEY'])
except:
    try:
        client = anthropic.Client(config['ANTHROPIC_API_KEY'])
    except:
        pass


def get_answer(question_id: int, question: str, max_tokens: int):
    ans = {
        "answer_id": shortuuid.uuid(),
        "question_id": question_id,
        "model_id": MODEL_ID,
    }
    for _ in range(3):
        try:
            print(f"Submitted answer for question: {question_id}")

            response = client.completion(
                prompt=
                f"{anthropic.HUMAN_PROMPT} {question}{anthropic.AI_PROMPT}",
                stop_sequences=[anthropic.HUMAN_PROMPT],
                max_tokens_to_sample=1024,
                model=MODEL)
            ans["text"] = response["completion"]
            print(f"Received answer for question: {question_id}")
            return ans
        except Exception as e:
            print("[ERROR]", e)
            ans["text"] = "#ERROR#"
            time.sleep(5)
    return ans


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="ChatGPT answer generation.")
    parser.add_argument("-q", "--question")
    parser.add_argument("-o", "--output")
    parser.add_argument(
        "--max-tokens",
        type=int,
        default=1024,
        help="maximum number of tokens produced in the output",
    )
    args = parser.parse_args()

    questions_dict = {}
    with open(os.path.expanduser(args.question)) as f:
        for line in f:
            if not line:
                continue
            q = json.loads(line)
            questions_dict[q["question_id"]] = q["text"]

    answers = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = []
        for qid, question in questions_dict.items():
            time.sleep(1)
            future = executor.submit(get_answer, qid, question,
                                     args.max_tokens)
            futures.append(future)

        for future in tqdm.tqdm(concurrent.futures.as_completed(futures),
                                total=len(futures)):
            answers.append(future.result())

    answers.sort(key=lambda x: x["question_id"])

    with open(os.path.expanduser(args.output), "w") as f:
        table = [json.dumps(ans) for ans in answers]
        f.write("\n".join(table))