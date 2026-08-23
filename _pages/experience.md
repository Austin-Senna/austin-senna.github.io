---
layout: page
permalink: /experience/
title: experience
# nav: true # hidden from navbar; page still live at /experience/ (delete the # to restore)
nav_order: 5
description: Research, software engineering, and data engineering roles.
---

<div class="experience-list">
  <section class="experience-entry">
    <div class="experience-org">Garner Health</div>
    <div class="experience-heading">
      <h2>Software Engineer Intern</h2>
      <div class="experience-meta">New York, NY · Jun 2026 - Aug 2026</div>
    </div>
    <ul>
      <li>Engineered a full-stack observability pipeline with automated dashboard and alert provisioning, using distributed tracing across <strong>Datadog</strong> RUM/Replay and <strong>OpenTelemetry</strong> (Loki, Prometheus, Tempo) to correlate frontend sessions with backend traces.</li>
      <li>Architected an autonomous on-call triage AI agent that ingests cross-stack telemetry to run root-cause analysis and generate verifiable fix pull requests under zero-PHI guardrails, resolving <strong>15+</strong> production incidents.</li>
    </ul>
  </section>

  <section class="experience-entry">
    <div class="experience-org">Columbia Data, Agents, and Processes Lab</div>
    <div class="experience-heading">
      <h2>AI Research Assistant <span class="status-tag">current</span></h2>
      <div class="experience-meta">New York, NY · Dec 2025 - Present</div>
    </div>
    <ul>
      <li>Optimized core evaluation infrastructure for question-answering agents over a <strong>9.5 TB</strong>/<strong>~40M</strong>-document data lake, including parallel sandboxed benchmark workers, tool-call and reasoning telemetry, and <strong>BM25</strong> and hybrid search engines.</li>
      <li>Improved <strong>GPT-5-mini</strong> semantic match from <strong>5.16%</strong> to <strong>56.3%</strong> by adding context compaction, loop-detection plugins, structured search-result context, and stronger data-analysis tools.</li>
      <li>Built an ablation framework that swaps in idealized search, planning, and data-analysis tools to isolate where agents fail on grounded question-answering over long context windows.</li>
    </ul>
  </section>

  <section class="experience-entry">
    <div class="experience-org">Columbia Zuckerman Institute</div>
    <div class="experience-heading">
      <h2>Machine Learning Research Assistant</h2>
      <div class="experience-meta">New York, NY · Dec 2025 - May 2026</div>
    </div>
    <ul>
      <li>Compressed <strong>Qwen2-Audio</strong>'s <strong>4096-D</strong> hidden states into <strong>10-100D</strong> feature-specific representations, each preserving one linguistic or paralinguistic feature — such as emotion or reasoning — while suppressing the others.</li>
      <li>Curated training-ready datasets from <strong>12</strong> speech and language benchmarks, including converting text benchmarks into audio through parallel <strong>Kokoro-TTS</strong> generation.</li>
      <li>Built and parallelized a GPU-optimized <strong>PyTorch</strong> pipeline for Qwen2-Audio inference and hidden-state extraction, bottleneck-width sweeps, and supervised classification under cross-validation across <strong>12</strong> speech attributes and <strong>120K+</strong> audios.</li>
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
