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

Austin is a Columbia University computer science student and undergraduate research assistant focused on agentic systems, machine learning, GraphRAG, and data infrastructure.

Site/config wording emphasizes:

- building agentic systems, ML pipelines, and data infrastructure
- large-scale data infrastructure
- academic/research-facing AI systems

## Education

- Columbia University, Bachelor of Science in Computer Science
- Start: August 2024
- Graduation date is inconsistent across sources:
- `_data/cv.yml` says May 2028
- `assets/pdf/Austin_Wijaya_AI-ML_Engineer.pdf` says Expected May 2027
- GPA listed as 4.25/4.0
- Full-tuition / full-ride scholarship recipient
- Dean's List
- Relevant coursework:
- Natural Language Processing
- Data Structures and Algorithms
- Systems Programming
- Linear Algebra and Probability
- Competitive Programming

## Current Roles

- Data Agents Research Assistant, Columbia Data, Agents, and Processes Lab (DAPLab), New York
- Contributing to DataSeek for deep-research agents over TB-scale multimodal data
- Re-architected a legacy discovery tool into an Agentic GraphRAG engine
- Reduced retrieval complexity to `O(N log K)` using LSH and Min-Heap Top-K pruning
- Reported 10% accuracy gain across a 10 TB S3 data lake
- Built benchmark/evaluation infrastructure using AWS Bedrock for autonomous data tasks and multi-step reasoning
- Added agentic tool capabilities to DeepSeek R1
- Core stack: Python, SQL, AWS (EC2, S3, Bedrock), Docker

- Machine Learning Research Assistant, Columbia Zuckerman Institute, New York
- Works on mapping Qwen-Audio-2-7B embeddings to ECoG neural signals
- Uses Ridge Regression / linear probes to isolate orthogonal latent feature vectors
- Built GPU-optimized HPC pipelines on NCSA Delta for large-scale TTS generation and embedding extraction
- Core stack: Python, PyTorch, Hugging Face, scikit-learn, NumPy

## Prior Industry Experience

- Data Engineering Intern, Ruangguru, Jakarta, Indonesia
- Consolidated millions of payment events into user sessions in BigQuery for funnel analysis
- Automated Google Review scraping and sentiment analysis with Puppeteer and Hugging Face
- Processed large tutor scheduling datasets into a Looker Studio availability heatmap
- Core stack: BigQuery, Looker Studio, Apps Script, Puppeteer, Hugging Face

## Projects

### ResearcherX

AI-powered IDE and GraphRAG engine for academic writing.

- Built real-time logical contradiction linting for academic writing workflows.
- Developed a dual-routing FastAPI + `litellm` pipeline to balance latency and API cost between local and frontier models.
- Engineered asynchronous hybrid retrieval across Neo4j and LanceDB.
- Added node-level provenance and Cypher-based garbage collection to preserve graph integrity and reduce hallucinations.
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

## Source Files Used

- `_config.yml`
- `_data/socials.yml`
- `_data/cv.yml`
- `_pages/about.md`
- `_pages/cv.md`
- `_projects/researcherx.md`
- `_projects/lakeagent.md`
- `_projects/targeted-neural-audio-embeddings-for-cortical-prediction.md`
- `_projects/untukmu-karyamu.md`
- `_projects/unstructured-cloud-elt.md`
- `_data/repositories.yml`
- `assets/pdf/Austin_Wijaya_AI-ML_Engineer.pdf`

## Ignore These Default Or Placeholder Files

- `assets/json/resume.json` is still the Albert Einstein theme placeholder, not Austin's resume
- `assets/rendercv/rendercv_output/Albert_Einstein_CV.pdf` is also placeholder output
- `_bibliography/papers.bib` still contains only the default placeholder comment and no personalized publications

## Usage Guidance For Future Answers

- Treat this file plus `_data/cv.yml` as the primary source of truth for Austin's background
- Use the project markdown files for richer project-specific details
- If graduation year matters, call out the repo inconsistency instead of guessing
- Do not use `assets/json/resume.json` or the RenderCV output PDF as biography context
