import type { ExperienceEntry, StackGroup } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Rubikon Labs Pvt. Ltd.",
    href: "https://rubikonlabs.com/",
    role: "AI Engineer",
    period: "Sep 2025 – Present",
    location: "Dubai, UAE",
    summary:
      "Building the AI products and automation behind an enterprise agentic platform, from a sentence-to-workflow assistant to a cost programme that cut AI spend by 67%.",
    highlights: [
      "Built an AI assistant that turns a plain-English requirement into a complete, runnable automation workflow, backed by a library of 10+ node types.",
      "Delivered a Dubai operations platform that runs an international client's order-to-billing lifecycle across nine roles, plus six sales automations.",
      "Cut AI operating costs by 67% by tracing live production traffic and rebuilding how the platform used models.",
      "Upgraded the real-time delivery layer behind four AI experiences with zero disruption to users.",
      "Raised the platform's Skill Builder to the industry's published specification, strengthening security and portability.",
      "Hardened the platform's AI engineering teammate so agent execution and file handling hold up under real workloads.",
      "Turned a 51,000-record dataset into a decision-ready asset with a costed buy-versus-build recommendation.",
      "Built an autonomous AI software-engineering agent and the skill-authoring framework behind it.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (Science)",
    school: "MIT World Peace University",
    href: "https://mitwpu.edu.in/",
    period: "2024 – 2026",
    detail:
      "Machine Learning · Big Data · Data Structures and Algorithms · Python · RDBMS · Research Methodology",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Tilak Maharashtra Vidyapeeth",
    href: "https://www.tmv.edu.in/",
    period: "2021 – 2024",
    detail: "Programming · DBMS · Web Development · Cloud Technology",
  },
];

export const stackGroups: StackGroup[] = [
  {
    label: "Languages and data",
    items: [
      "Python",
      "SQL",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
    ],
  },
  {
    label: "Generative AI and LLMs",
    items: [
      "LLM application design",
      "Prompt engineering",
      "RAG",
      "Agentic systems",
      "LangChain",
      "LangGraph",
      "Vector databases (FAISS, ChromaDB)",
      "Embeddings",
      "LLM evaluation and observability",
    ],
  },
  {
    label: "Machine learning",
    items: [
      "Deep learning",
      "Neural networks (ANN)",
      "XGBoost",
      "Random Forest",
      "Ensemble methods",
      "SMOTE",
      "Feature engineering",
      "NLP",
      "scikit-learn",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    label: "Data engineering",
    items: [
      "ETL and data pipelines",
      "Web scraping",
      "Data cleaning and wrangling",
      "Exploratory data analysis",
      "Statistical analysis",
      "Schema and data modelling",
      "Pandas",
      "NumPy",
    ],
  },
  {
    label: "Application engineering",
    items: [
      "FastAPI",
      "Flask",
      "Express",
      "Streamlit",
      "Elysia / Bun",
      "REST API design",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    label: "Engineering practice",
    items: [
      "Git and GitHub",
      "Quality gates",
      "Docker",
      "CI/CD",
      "pytest",
      "Playwright",
      "Langfuse",
      "Redis",
      "JWT auth",
      "Agile",
    ],
  },
];

export const certifications = [
  {
    name: "IBM Generative AI Engineering",
    issuer: "Coursera · Professional Certificate",
  },
  {
    name: "Google Data Analytics",
    issuer: "Coursera · Professional Certificate",
  },
  {
    name: "Data Science and AI",
    issuer: "I.T. Vedant",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon",
    detail:
      "Built a data-driven product prototype and presented it to a national judging panel inside 24 hours.",
  },
  {
    title: "Founder, SEM Corp",
    detail:
      "Building AI agents, automation and software products that remove repetitive work for real businesses.",
  },
  {
    title: "Stage host and anchor",
    detail:
      "Hosted several annual college programmes, which is why explaining a complex system to a room feels natural.",
  },
];

export const languages = ["English", "Hindi", "Gujarati", "Marathi", "Arabic"];
