# Austin Context

This file summarizes the personalized content currently present in this repo and is intended to be the safest high-signal context file for future answers. It intentionally excludes theme defaults and placeholder content.

## Identity

- Full name: Austin Senna Wijaya
- Preferred short name in repo/site copy: Austin
- Location: New York, NY
- Email: asw2215@columbia.edu
- Phone: +1 646-295-5341
- Website: https://austin-senna.github.io
- GitHub: https://github.com/Austin-Senna
- LinkedIn: https://www.linkedin.com/in/austin-senna/

## Headline

Austin is a Columbia University computer science student focused on agentic systems, machine learning, retrieval systems, data infrastructure and pipelines, and software observability. He does agent-based retrieval and question-answering research at Columbia DAPLab.

Site/config wording emphasizes:

- agentic systems, retrieval systems, and data infrastructure/pipelines
- software observability
- agent-based retrieval and QA research at DAPLab
- academic/research-facing AI systems

## Education

- Columbia University, Bachelor of Science in Computer Science
- Start: August 2024
- Graduation date is inconsistent across sources:
- `_data/cv.yml` says May 2028
- `assets/pdf/Austin_Wijaya_SWE.pdf` says Expected May 2027
- GPA listed as 4.22/4.0
- Full-tuition / full-ride scholarship recipient
- Dean's List
- Relevant coursework:
- Natural Language Processing
- Data Structures and Algorithms
- Systems Programming
- Linear Algebra and Probability
- Competitive Programming

## Current Roles

- Software Engineer Intern, Garner Health, New York (Jun 2026 - Present)
- Engineered a full-stack observability pipeline with automated dashboard/alert provisioning, using distributed tracing across Datadog RUM/Replay and OpenTelemetry (Loki, Prometheus, Tempo)
- Architected an autonomous on-call triage AI agent that runs root-cause analysis and generates verifiable fix PRs under zero-PHI guardrails, resolving 10+ production incidents
- Core stack: Datadog (RUM, Replay), OpenTelemetry, Loki, Prometheus, Tempo

- Data Agents Research Assistant, Columbia Data, Agents, and Processes Lab (DAPLab), New York (Dec 2025 - Present)
- Optimized core evaluation infrastructure for question-answering agents over a 9.5 TB/~40M-document data lake: parallel sandboxed benchmark workers, tool-call/reasoning telemetry, BM25 and hybrid search
- Improved GPT-5-mini semantic match from 2.22% to 56.3% via context compaction, loop-detection plugins, structured search-result context, stronger data-analysis tools
- Built an ablation framework isolating where agents fail on grounded question-answering over long context windows
- Core stack: Python, BM25, hybrid search, GPT-5-mini

## Prior Research and Industry Experience

- Machine Learning Research Assistant, Columbia Zuckerman Institute, New York (Dec 2025 - Jun 2026)
- Compressed Qwen2-Audio's 4096-D hidden states into 10-100D feature-specific representations, each isolating one linguistic/paralinguistic feature (e.g. emotion, reasoning)
- Curated training-ready datasets from 12 speech/language benchmarks, converting text benchmarks to audio via parallel Kokoro-TTS generation
- Built a GPU-optimized PyTorch pipeline for Qwen2-Audio inference, hidden-state extraction, bottleneck-width sweeps, and supervised classification across 12 speech attributes and 120K+ audios
- Core stack: Python, PyTorch, Kokoro-TTS

- Data Engineering Intern, Ruangguru, Jakarta, Indonesia
- Consolidated millions of payment events into user sessions in BigQuery for funnel analysis
- Automated Google Review scraping and sentiment analysis with Puppeteer and Hugging Face
- Processed large tutor scheduling datasets into a Looker Studio availability heatmap
- Core stack: BigQuery, Looker Studio, Apps Script, Puppeteer, Hugging Face

## Publications

- LakeQA: An Exploratory QA Benchmark over a Million-Scale Data Lake — ICML 2026 (Austin is a co-author; title/authors verified against arXiv 2606.10460, do not rephrase from the resume's shorthand wording)
- SANA: What Matters for QA Agents over Massive Data Lakes? — VLDB DASHSys 2026, arXiv preprint 2606.13904 (Austin is lead author)
- MINA: Linear Probes Reveal Coding-Sequence Family Signal in Frozen DNA Encoders — bioRxiv preprint (v2), now also under review at iscbAI'26 (Austin is lead author)
- Targeted Embeddings: An Interpretable Framework for Neural Speech Encoding with Large Audio-Language Models — NeurIPS 2026, under review (Austin is a co-author; corresponds to the Zuckerman Institute audio-embedding work)
- Be CARE-ful with Text-to-SQL Benchmarks — NeurIPS 2026, under review (Austin is a co-author)

## Projects

### ResearcherX

Local-first AI research IDE with graph-based RAG and citation verification.

- Built a local-first AI research editor that answers against a bounded source library using graph-based RAG, flagging unsupported claims, contradictions, and citation drift in drafts.
- Implemented the retrieval and verification pipeline: turned PDFs, notes, and links into provenance-tracked source nodes, then checked draft paragraphs against relevant evidence with batched LLM calls.
- Built a dual-routing FastAPI + `litellm` pipeline to balance latency and API cost between local and frontier models.
- Engineered asynchronous hybrid retrieval across Neo4j and LanceDB, with node-level provenance and Cypher-based garbage collection to preserve graph integrity and reduce hallucinations.
- Stack: Python (FastAPI), TypeScript (Next.js), Neo4j (Cypher), LanceDB, `litellm`, ProseMirror.
- Links: GitHub https://github.com/Austin-Senna/ResearcherX, demo https://austin-senna.github.io/researcherx-pitch/

### LakeAgent

Deep-research system over structured and unstructured data-lake sources.

- Extends deep-research agents to operate over heterogeneous data at data-lake scale.
- Supports enumeration, aggregation, and causal reasoning with provenance-backed answers.
- Includes automated dataset discovery, integration, and verifiable output generation.
- Research context: Columbia DAPLab.
- Link: https://daplab.cs.columbia.edu/projects/lakeagent/

### Targeted Neural Audio Embeddings

Brain-encoding pipeline mapping speech and audio representations to cortical activations.

- Builds task-targeted subspaces from large audio-language embeddings.
- Processed 150k+ audio examples across 15 benchmark datasets.
- Focused on isolating task-relevant auditory signals such as emotion and reasoning.
- Research context: Columbia Zuckerman Institute.

### Untukmu Karyamu

Generative website builder and deployment workflow for MSMEs.

- Won 2nd place at Tencent Kepler Plan S3 Competition 2025.
- Also received Best Code, Best Product Idea, and Popularity Award.
- Built a generative web-builder with Next.js and Gemini API.
- Automated deployment to Tencent EdgeOne for faster launch and lower infrastructure overhead.
- Stack: Next.js, Supabase, Puppeteer, EdgeOne Pages.
- Link: https://github.com/arkankau/umkm

### Unstructured Cloud ELT

Multimodal ELT pipeline for unstructured business communication data.

- Ingests chat screenshots into BigQuery using Vision AI for text extraction.
- Adds sentiment and intent classification with BigQuery ML.
- Connects outputs to analytics dashboards in Looker Studio.
- Stack: BigQuery, Gemini API, Looker Studio, Vision AI, Python.
- Link: https://github.com/Austin-Senna/umkm360

## Skills

- Languages: Python, SQL, JavaScript, Java, C, Rust
- Libraries/frameworks: Pandas, NumPy, PyTorch, scikit-learn, Puppeteer, Selenium, BeautifulSoup, React, Next.js, Node.js
- Cloud/data systems: Google Cloud, BigQuery, Looker Studio, AWS, EC2, S3, Bedrock, Supabase, PostgreSQL, MongoDB
- Tools: GitHub, Docker, Claude Code, n8n, Copilot, Arduino, Notion

## Honors And Awards

- Databricks Grounded Reasoning Cup 2026: Columbia representative; worked with Google
- Jane Street Mystery Planet Trading & Puzzle Competition 2026: 1st place
- Hack@Brown 2026: finalist; awarded Strongest Product Thinking; worked with Google Ventures and Partiful
- Millard Chan Technology '99 Startup Competition (2026): finalist (Top 6) with ResearcherX
- Columbia Lion Cage Startup Competition (2026): 2nd place with ResearcherX
- Tencent Kepler Plan S3 Competition 2025: 2nd place; Best Code; Best Product Idea; Popularity Award
- Clash of Champions Season 2: Top 9
- Indonesia Maju Scholarship: full-ride scholarship recipient; 1 of 350 recipients
- 55th International Chemistry Olympiad 2023: final stage, 10th rank for national team selection

## Site-Level Notes

- Subtitle on the about page: `Computer Science @ Columbia University`
- Contact note in `_config.yml`: email is the best way to reach Austin
- Social links are enabled on the site
- Repositories explicitly highlighted on the site:
- `Austin-Senna/austin-senna.github.io`
- `Austin-Senna/ResearcherX`
- `/cv/` is a simple two-button download page (not a rendered CV): "General CV" links to `assets/pdf/Austin_Wijaya_SWE.pdf`, "Research CV" links to `assets/pdf/Austin_Wijaya_Research.pdf`
- The sidebar "CV" icon (`_data/socials.yml` `cv_pdf` field) links to `/cv/`, not directly to a PDF

## Source Files Used

- `_config.yml`
- `_data/socials.yml`
- `_data/cv.yml`
- `_bibliography/papers.bib`
- `_pages/about.md`
- `_pages/cv.md`
- `_projects/researcherx.md`
- `_projects/lakeagent.md`
- `_projects/targeted-neural-audio-embeddings-for-cortical-prediction.md`
- `_projects/untukmu-karyamu.md`
- `_projects/unstructured-cloud-elt.md`
- `_data/repositories.yml`
- `assets/pdf/Austin_Wijaya_SWE.pdf`

## Ignore These Default Or Placeholder Files

- `assets/json/resume.json` is still the Albert Einstein theme placeholder, not Austin's resume
- `assets/rendercv/rendercv_output/Albert_Einstein_CV.pdf` is also placeholder output

## Usage Guidance For Future Answers

- Treat this file plus `_data/cv.yml` as the primary source of truth for Austin's background
- Use the project markdown files for richer project-specific details
- If graduation year matters, call out the repo inconsistency instead of guessing
- Do not use `assets/json/resume.json` or the RenderCV output PDF as biography context
