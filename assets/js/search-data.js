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
  },{id: "nav-projects",
          title: "projects",
          description: "AI, data, and software engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, projects, skills, and honors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-lakeagent",
          title: 'LakeAgent',
          description: "Deep research over data lakes with verifiable, provenance-backed answers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lakeagent/";
            },},{id: "projects-researcherx",
          title: 'ResearcherX',
          description: "AI-powered IDE and GraphRAG engine for academic writing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/researcherx/";
            },},{id: "projects-targeted-neural-audio-embeddings",
          title: 'Targeted Neural Audio Embeddings',
          description: "Task-targeted brain encoding from Qwen-Audio speech features to cortical activations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/targeted-neural-audio-embeddings-for-cortical-prediction/";
            },},{id: "projects-unstructured-cloud-elt",
          title: 'Unstructured Cloud ELT',
          description: "Multimodal ELT pipeline for unstructured business communication data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unstructured-cloud-elt/";
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
          window.open("/assets/pdf/Austin_Wijaya_AI-ML_Engineer.pdf", "_blank");
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
