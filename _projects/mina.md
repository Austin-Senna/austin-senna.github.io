---
layout: page
title: MINA
description: Linear-probing benchmark showing frozen DNA encoders recover coding-sequence family signal, not generic context.
importance: 3
category: research
external: https://www.biorxiv.org/content/10.64898/2026.05.25.727711v2
github: https://github.com/Austin-Senna/dna_to_text
---

`MINA` (Model Interrogation of Nucleotide Architectures) is a homology-aware probing benchmark that tests whether frozen DNA encoders linearly encode gene-family identity. Across 3,244 human protein-coding genes spanning five families, linear probes are trained to recover a 5-way protein-family label and the 1,536-dimensional GenePT natural-language gene-summary embedding, comparing signal from canonical coding sequence against TSS-centered genomic windows.

## Highlights

- Built a probing benchmark that trains linear probes on frozen DNA-encoder embeddings to recover 5-way protein-family labels and 1,536-D GenePT text embeddings for 3,244 human genes, isolating how much of that signal comes from coding sequence versus broader TSS-centered genomic context.
- Benchmarked four frozen DNA encoders (DNABERT-2, Nucleotide Transformer v2, GENA-LM, HyenaDNA) against k-mer composition baselines, the supervised Enformer regulatory-genomics model, and ESM-2 protein-language-model embeddings.
- Found that NT-v2 with mean pooling recovered protein-family labels most clearly from coding sequence (macro-F1 0.828 / κ 0.821, versus 0.672 / κ 0.702 for a 4-mer composition baseline), while alignment to GenePT descriptions was weaker and performance dropped substantially on TSS-centered windows — indicating the recoverable signal is specific to coding sequence rather than generic genomic context.

## Tech Stack

Python (≥3.11), PyTorch, Hugging Face Transformers, Parquet feature caching, UMAP, bootstrap confidence intervals, `uv`.

## Context

Austin's own solo research project, built end-to-end independently of his DAPLab and Zuckerman Institute work. Posted as a [bioRxiv preprint (v2)](https://www.biorxiv.org/content/10.64898/2026.05.25.727711v2) and currently under review at iscbAI'26.
