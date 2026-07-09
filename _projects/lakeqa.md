---
layout: page
title: LakeQA
description: An exploratory QA benchmark for LLM agents searching and reasoning over a 9.5 TB data lake.
importance: 1
category: research
external: https://lakeqa-bench.github.io/
---

`LakeQA` is a benchmark for evaluating LLM agents on exploratory question answering over a heterogeneous, roughly 9.5 TB data lake of Wikipedia and open-source government data, requiring agents to first discover relevant documents across structured and unstructured sources before composing multi-hop answers from the evidence they find.

## Highlights

- Introduces an exploratory QA setting where agents must first locate relevant documents in a massive data lake before composing multi-hop answers, addressing a gap in QA benchmarks that assume evidence is already provided.
- Spans roughly 9.5 TB of heterogeneous, structured and unstructured text drawn from Wikipedia and open-source government sources, with every sample reviewed by Ph.D.-level annotators.
- Optimized core evaluation infrastructure for question-answering agents over the 9.5 TB / ~40M-document data lake, including parallel sandboxed benchmark workers, tool-call and reasoning telemetry, and BM25 and hybrid search engines.

## Context

Co-authored with the Columbia Data, Agents, and Processes Lab (DAPLab) research group as one of fourteen contributors; accepted to ICML 2026. Read the full paper, ["LakeQA: An Exploratory QA Benchmark over a Million-Scale Data Lake"](https://arxiv.org/abs/2606.10460), on arXiv.
