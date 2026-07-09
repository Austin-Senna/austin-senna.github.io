---
layout: page
title: SANA
description: A diagnostic framework for isolating why QA agents fail over massive data lakes.
importance: 2
category: research
external: https://sana-ablation.github.io/
github: https://github.com/Austin-Senna/exploratory-qa-eval
---

`SANA` is a diagnostic framework for evaluating question-answering agents over massive data lakes, built on the observation that end-to-end accuracy alone cannot distinguish failures in search, planning, data analysis, or an agent's action policy. SANA records runtime profiles — reference source sequences, refined subquestions, and execution traces — and swaps in idealized versions of individual components to isolate exactly where agents break down. Across benchmarks, data analysis emerges as a consistent bottleneck while planning is comparatively less so, and search limitations bite hardest at the largest data-lake scales.

## Highlights

- Optimized core evaluation infrastructure for question-answering agents over a 9.5 TB, ~40M-document data lake, including parallel sandboxed benchmark workers, tool-call and reasoning telemetry, and BM25 and hybrid search engines.
- Improved GPT-5-mini's semantic match score from 2.22% to 56.3% by adding context compaction, loop-detection plugins, structured search-result context, and stronger data-analysis tools.
- Built an ablation framework that swaps in idealized search, planning, and data-analysis tools to isolate where agents fail on grounded question-answering over long context windows.

## Context

Research led as a Data Agents Research Assistant at the Columbia Data, Agents, and Processes Lab (DAPLab), submitted to VLDB DASHSys 2026 and currently under review. Read the preprint on [arXiv](https://arxiv.org/abs/2606.13904).
