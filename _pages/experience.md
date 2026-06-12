---
layout: page
permalink: /experience/
title: experience
nav: true
nav_order: 5
description: Research, software engineering, and data engineering roles.
---

<div class="experience-list">
  <section class="experience-entry">
    <div class="experience-org">Garner Health</div>
    <div class="experience-heading">
      <h2>Software Engineer Intern <span class="status-tag">current</span></h2>
      <div class="experience-meta">New York, NY · May 2026 - Present</div>
    </div>
    <ul>
      <li>Building a backend observability pipeline with <strong>OpenTelemetry</strong>, <strong>Prometheus</strong>, and <strong>Grafana LGTM</strong> so engineers can trace failures across employer insurance workflows.</li>
      <li>Instrumented <strong>Litestar</strong> services and agent-support tooling for <strong>1K+</strong> daily sessions; added dashboards for latency, errors, failed agent/tool calls, and funnel drop-offs.</li>
    </ul>
  </section>

  <section class="experience-entry">
    <div class="experience-org">Columbia Data, Agents, and Processes Lab</div>
    <div class="experience-heading">
      <h2>Data Agents Research Assistant <span class="status-tag">current</span></h2>
      <div class="experience-meta">New York, NY · Dec 2025 - Present</div>
    </div>
    <ul>
      <li>Optimized core evaluation infrastructure for agents answering questions over a <strong>9.5 TB</strong>/<strong>~40M</strong>-document data lake, including process-based benchmark workers, isolated task sandboxes, tool-call and reasoning telemetry, and <strong>BM25</strong> and hybrid retrieval engines.</li>
      <li>Improved <strong>GPT-5-mini</strong> semantic match from <strong>2.22%</strong> to <strong>56.3%</strong> by adding context compaction, loop-detection plugins, structured search-result context, and stronger data-analysis tools.</li>
      <li>Built a diagnostic ablation framework that swaps in idealized search, planning, and data-analysis tools to isolate whether agents failed from retrieval, decomposition, SQL/Python execution, or final answer policy.</li>
    </ul>
  </section>

  <section class="experience-entry">
    <div class="experience-org">Columbia Zuckerman Institute</div>
    <div class="experience-heading">
      <h2>Machine Learning Research Assistant <span class="status-tag">current</span></h2>
      <div class="experience-meta">New York, NY · Dec 2025 - Present</div>
    </div>
    <ul>
      <li>Developed targeted embeddings for <strong>Qwen2-Audio</strong> by bottlenecking <strong>4096-D</strong> hidden states into feature-specific representations, each preserving one of <strong>12</strong> linguistic or paralinguistic features while suppressing off-target signal.</li>
      <li>Curated training-ready datasets from <strong>12</strong> speech and language benchmarks, including parallel <strong>Kokoro-TTS</strong> generation to convert linguistic-feature examples into audio.</li>
      <li>Built and parallelized a GPU-optimized <strong>PyTorch/Hugging Face</strong> pipeline for batched Qwen2-Audio inference, hidden-state extraction, bottleneck-width sweeps, and classification-probe training under leakage-aware cross-validation across <strong>12</strong> speech attributes and <strong>120K+</strong> audio examples.</li>
    </ul>
  </section>

  <section class="experience-entry">
    <div class="experience-org">Ruangguru</div>
    <div class="experience-heading">
      <h2>Data Engineering Intern</h2>
      <div class="experience-meta">Jakarta, Indonesia · Jun 2025 - Aug 2025</div>
    </div>
    <ul>
      <li>Consolidated millions of payment events into user sessions in <strong>BigQuery</strong>, producing a product funnel used to identify major checkout drop-off points.</li>
      <li>Automated Google Review scraping and sentiment analysis with <strong>Puppeteer</strong> and <strong>Hugging Face</strong>; processed tutor-scheduling data into live <strong>Looker Studio</strong> heatmaps for operations teams.</li>
    </ul>
  </section>
</div>
