import argparse
import os
import json


def main(args):
    with open(args.q, "r") as f:
        questions = [json.loads(line) for line in f]
    with open(args.a, "r") as f:
        answers = [json.loads(line) for line in f]

    with open(args.o, "w") as f:
        all_data = []
        for question, answer in zip(questions, answers):
            assert question["question_id"] == answer["question_id"]
            instruction = question["text"]
            output = answer["text"]
            category = question["category"]
            source = question["source"]
            generator = args.a.split("_")[-1].split(".")[0]

            data = {
                "question_id": question["question_id"],
                "instruction": instruction,
                "generator":generator,
                "output": output,
                "category": category,
                "source": source,
            }
            all_data.append(data)
        print("Done")
        json.dump(all_data, f)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-q", type=str, help="question file")
    parser.add_argument("-a", type=str, help="answer file")
    parser.add_argument("-o", type=str, help="output file")

    args = parser.parse_args()

    os.makedirs("./data/alpaca_eval/", exist_ok=True)
    main(args)
