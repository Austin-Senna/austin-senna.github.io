---
layout: about
title: about
permalink: /
subtitle: Computer Science @ Columbia University

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>New York, NY</p>
    <p><a href="mailto:asw2215@columbia.edu">asw2215@columbia.edu</a></p>

selected_papers: false # rendered manually below
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm an undergraduate at Columbia University studying computer science. Most of my work is on agentic systems and retrieval, right now through agent-based retrieval and question-answering research at the [Columbia Data, Agents, and Processes Lab (DAPLab)](https://daplab.cs.columbia.edu/). I'm also interested in machine learning, data infrastructure, and software observability.

<h2>
  <a href="{{ '/cv/' | relative_url }}" style="color: inherit">experience</a>
</h2>

<ul class="home-experience">
  <li><span><span class="status-tag">current</span> AI Research Assistant, <a href="https://daplab.cs.columbia.edu/">DAPLab</a></span><span class="home-experience-dates">Dec 2025 – Present</span></li>
  <li><span>Software Engineer Intern, <a href="https://www.getgarner.com/">Garner Health</a></span><span class="home-experience-dates">Jun 2026 – Aug 2026</span></li>
  <li><span>Machine Learning Research Assistant, <a href="https://zuckermaninstitute.columbia.edu/">Columbia Zuckerman Institute</a></span><span class="home-experience-dates">Dec 2025 – May 2026</span></li>
</ul>

## news

{% include news.liquid %}

<h2>
  <a href="/publications/" style="color: inherit">selected publications</a>
</h2>

{% include selected_papers.liquid %}
