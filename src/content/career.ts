import type { ExperienceEntry, StackGroup } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Rubikon Labs Pvt. Ltd.",
    href: "https://rubikonlabs.com/",
    role: "AI Engineer",
    period: "Sep 2025 — Present",
    location: "Pune, India",
    summary:
      "Building on an enterprise agentic AI platform — the workflow automation layer, the observability and cost work behind it, and the production code, tests and tooling that keep all of it honest.",
    highlights: [
      "Built an agentic assistant that converts natural-language requirements into complete multi-step, node-based automation workflows across a React and Python/FastAPI platform, alongside custom nodes in a 20+ node registry.",
      "Delivered the Dubai operations platform for an international client — a multi-persona, order-to-billing workflow with team and role-based access — and six end-to-end sales-automation workflows, owning delivery from requirements through to production.",
      "Led a production LLM cost and observability initiative: instrumented and analysed 340+ live traces and 200+ agent runs, benchmarked four models on identical workloads, and delivered a costed optimisation roadmap.",
      "Closed a spec-compliance gap in the platform's Skill Builder against Anthropic's published skill specification — 18 improvements across 5 files, including a spec validator and a rewritten authoring-rules module, raised as three draft pull requests.",
      "Contributed bug fixes to Workbench, the platform's self-improving AI engineering teammate — reproducing and fixing agent-execution and file-handling issues on the QA instance and raising them as reviewed pull requests.",
      "Built out a reusable Playwright action-library for the platform's end-to-end test suite — composable page-object blocks, new coverage for the Workflow and Agent Builder modules, and seed-independent assertions on top of an existing 100+ test suite.",
      "Ran a full data-analytics engagement over a 51,000+ record dataset: profiling, schema re-architecture, an integrity-gated enrichment pipeline, and a costed buy-versus-build vendor evaluation.",
      "Shipped and hardened production code in a live multi-service system — a byte-identical event-streaming refactor validated by 13 regression tests, and root-cause analysis of multi-minute latency across chained model pipelines.",
      "Contributed to an autonomous AI software-engineering agent and an AI skill-authoring framework aligned to a published specification.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (Science)",
    school: "MIT World Peace University",
    href: "https://mitwpu.edu.in/",
    period: "2024 — 2026",
    detail:
      "Machine Learning · Big Data · Data Structures and Algorithms · Python · RDBMS · Research Methodology",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Tilak Maharashtra Vidyapeeth",
    href: "https://www.tmv.edu.in/",
    period: "2021 — 2024",
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
    label: "Backend and frontend",
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
      "Code review",
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
      "Built and presented a data-driven software solution to a judging panel inside a 24-hour window.",
  },
  {
    title: "TCS National Qualifier Test",
    detail: "Cleared the TCS NQT.",
  },
  {
    title: "Stage host and anchor",
    detail:
      "Hosted and anchored several annual college programmes — the reason I am comfortable explaining a system to a room that does not read code.",
  },
];

export const languages = ["English", "Hindi", "Gujarati", "Marathi", "Arabic"];
