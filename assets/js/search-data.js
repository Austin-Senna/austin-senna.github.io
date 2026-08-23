// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-joined-the-columbia-data-agents-and-processes-lab-daplab-as-an-ai-research-assistant",
          title: 'I joined the Columbia Data, Agents, and Processes Lab (DAPLab) as an AI...',
          description: "",
          section: "News",},{id: "news-researcherx-was-a-finalist-at-the-columbia-millard-chan-technology-startup-competition-and-took-2nd-place-at-the-columbia-lion-cage-startup-competition",
          title: 'ResearcherX was a finalist at the Columbia Millard Chan Technology Startup Competition and...',
          description: "",
          section: "News",},{id: "news-lakeqa-a-benchmark-for-complex-exploratory-qa-over-a-million-scale-data-lake-was-accepted-at-icml-2026",
          title: 'LakeQA: A Benchmark for Complex Exploratory QA over a Million-Scale Data Lake was...',
          description: "",
          section: "News",},{id: "news-i-joined-garner-health-as-a-software-engineer-intern",
          title: 'I joined Garner Health as a Software Engineer Intern!',
          description: "",
          section: "News",},{id: "news-sana-what-matters-for-qa-agents-over-massive-data-lakes-was-accepted-at-vldb-dashsys-2026",
          title: 'SANA: What Matters for QA Agents over Massive Data Lakes? was accepted at...',
          description: "",
          section: "News",},{id: "news-mina-linear-probes-reveal-coding-sequence-family-signal-in-frozen-dna-encoders-was-accepted-at-pmlr-mlcb-2026",
          title: 'MINA: Linear Probes Reveal Coding-Sequence Family Signal in Frozen DNA Encoders was accepted...',
          description: "",
          section: "News",},{id: "projects-lakeqa",
          title: 'LakeQA',
          description: "An exploratory QA benchmark for LLM agents searching and reasoning over a 9.5 TB data lake.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lakeqa/";
            },},{id: "projects-mina",
          title: 'MINA',
          description: "Linear-probing benchmark showing frozen DNA encoders recover coding-sequence family signal, not generic context.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mina/";
            },},{id: "projects-researcherx",
          title: 'ResearcherX',
          description: "Local-first AI research IDE with graph-based RAG and citation verification.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/researcherx/";
            },},{id: "projects-sana",
          title: 'SANA',
          description: "A diagnostic framework for isolating why QA agents fail over massive data lakes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sana/";
            },},{id: "projects-targeted-neural-audio-embeddings",
          title: 'Targeted Neural Audio Embeddings',
          description: "Task-targeted brain encoding from Qwen-Audio speech features to cortical activations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/targeted-neural-audio-embeddings-for-cortical-prediction/";
            },},{id: "projects-untukmu-karyamu",
          title: 'Untukmu Karyamu',
          description: "Generative website builder and deployment workflow for MSMEs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/untukmu-karyamu/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/cv/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%77%32%32%31%35@%63%6F%6C%75%6D%62%69%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Austin-Senna", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/austin-senna", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=wV6oy8wAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
