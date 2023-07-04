# KokoMind

Download data and evaluate your model on [KokoMind](https://chats-lab.github.io/KokoMind).

## Pre-requisite

```bash
pip install -r requirements.txt
```

## Generate model answers

``` bash
# Generate local model anwers
# Use vicuna-7b as an example
python eval/get_model_answer.py --model-path ${PATH_TO_LOCAL_HF_MODEL} --model-id vicuna-7b --question-file data/question_nonverbal_yes_v0.1.jsonl --answer-file data/answer/answer_vicuna-7b.jsonl --num-gpus 8

# GPT-3 answer (reference for alpaca-eval)
python eval/qa_baseline_gpt3.py -q data/question_nonverbal_yes_v0.1.jsonl -o data/answer/answer_gpt3.jsonl

# GPT-3.5 answer
python eval/qa_baseline_gpt35.py -q data/question_nonverbal_yes_v0.1.jsonl -o data/answer/answer_gpt35.jsonl

# GPT-4.0 answer
python eval/qa_baseline_gpt4.py -q data/question_nonverbal_yes_v0.1.jsonl -o data/answer/answer_gpt4.jsonl

# Claude answer
python eval/qa_baseline_claude.py -q data/question_nonverbal_yes_v0.1.jsonl -o data/answer/answer_claude.jsonl
```

## Alpaca-Eval

```bash
# Convert to alpaca_eval input format
python eval/generate_alpaca_eval.py -q data/question_nonverbal_yes_v0.1.jsonl -a data/answer/answer_gpt3.jsonl -o data/alpaca_eval/answer_gpt3.json

alpaca_eval make_leaderboard --leaderboard_path data/alpaca_results/leaderboard.csv --all_model_outputs "./data/alpaca_eval/answer_*" --reference_outputs data/alpaca_eval/answer_gpt3.json --is_overwrite_leaderboard True
```

## Citation

``` bib
@misc{kokomind2023,
title = {KokoMind: Can Large Language Models Understand Social Interactions?},
url = {https://chats-lab.github.io/KokoMind/},
author = {Shi, Weiyan and Qiu, Liang and Xu, Dehong and Sui, Pengwei and Lu, Pan and Yu,
Zhou},
month = {July},
year = {2023}
}
```

## License

This project is an early-stage research showcase, designed solely for non-commercial purposes. It adheres to [OpenAI's data usage terms](https://openai.com/policies/terms-of-use), and [ShareGPT's privacy practices](https://chrome.google.com/webstore/detail/sharegpt-share-your-chatg/daiacboceoaocpibfodeljbdfacokfjb). Let us know if you spot any potential violations. The software's code is available under the Apache License 2.0.
