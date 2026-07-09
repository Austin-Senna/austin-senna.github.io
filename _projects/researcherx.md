---
layout: page
title: ResearcherX
description: Local-first AI research IDE with graph-based RAG and citation verification.
importance: 1
category: ai-data-swe
github: https://github.com/Austin-Senna/ResearcherX
external: https://austin-senna.github.io/researcherx-pitch/
---

`ResearcherX` is a local-first AI research editor that helps researchers write against a bounded source library, using graph-based RAG to produce cited answers and flag unsupported claims, contradictions, or citation drift in drafts.

## Highlights

- Implemented the retrieval and verification pipeline behind the editor: turned PDFs, notes, and links into provenance-tracked source nodes, then checked draft paragraphs against relevant evidence with batched LLM calls.
- Built a dual-routing pipeline with FastAPI and `litellm` to balance latency and API cost between local and frontier models.
- Engineered asynchronous hybrid retrieval across Neo4j and LanceDB, with node-level provenance and Cypher-based garbage collection to preserve graph integrity and reduce hallucinations.

## Tech Stack

Python (FastAPI), TypeScript (Next.js), Neo4j (Cypher), LanceDB, litellm, ProseMirror.
