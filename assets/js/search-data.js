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
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-experience",
          title: "experience",
          description: "Research, software engineering, and data engineering roles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-lakeqa",
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
