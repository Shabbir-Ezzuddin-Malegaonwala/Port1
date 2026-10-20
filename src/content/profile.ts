import type { Capability, Metric } from "@/lib/types";

export const profile = {
  fullName: "Shabbir Malegaonwala",
  firstName: "Shabbir",
  accentName: "Ezzuddin",
  lastName: "Malegaonwala",
  initials: "S.E.M.",
  role: "AI Engineer",
  roleLong: "AI Engineer · LLM Systems · Data Science",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  available: true,
  availabilityLine: "Open to AI / LLM engineering roles and consulting work",

  headline: "I build AI systems that reach production.",
  subhead:
    "Agentic workflows, LLM cost and observability engineering, and data platforms — taken from a prompt on a whiteboard to code that is reviewed, tested, and running.",

  /** Used for meta description and the about intro. */
  bio: [
    "I am an AI Engineer at Rubikon Labs in Pune, working on an enterprise agentic AI platform. My work sits at the point where language models stop being demos and start being systems: natural-language to multi-step automation, token and cost engineering against live traces, streaming event architecture, and the regression tests that let any of it ship safely.",
    "Before that I spent a year building the full data stack end to end — scraping and schema design, feature engineering, ensemble models, and the dashboards that made the output legible to people who do not read code. I hold a Master of Computer Applications from MIT World Peace University.",
    "What I care about is the unglamorous half of AI engineering. Anyone can get a model to answer. Making it answer correctly, cheaply, observably, and the same way tomorrow as it did today — that is the work.",
  ],

  email: "shabbirmalegaon786@gmail.com",
  github: "https://github.com/Shabbir-Ezzuddin-Malegaonwala",
  linkedin: "https://www.linkedin.com/in/shabbir-malegaonwala-950546267/",
  /** The CV is sent on request rather than published — it carries personal details. */
  resumeHref:
    "mailto:shabbirmalegaon786@gmail.com?subject=R%C3%A9sum%C3%A9%20request&body=Hi%20Shabbir%2C%0A%0ACould%20you%20send%20me%20your%20r%C3%A9sum%C3%A9%3F%0A%0A",
  resumeLabel: "Request résumé",
  siteUrl: "https://mwshabbirport1.vercel.app",
} as const;

/** Section 02 — numbers before claims. */
export const proofMetrics: Metric[] = [
  {
    value: "52,647",
    label: "Property listings engineered",
    note: "6 portals, deduplicated",
  },
  {
    value: "13/13",
    label: "Regression tests on a merged PR",
    note: "byte-identical output",
  },
  {
    value: "4,722",
    label: "Lines shipped across 3 repos",
    note: "single feature",
  },
  {
    value: "51,532",
    label: "Records profiled and re-schemad",
    note: "92-column rebuild",
  },
  {
    value: "10+",
    label: "ML models built and deployed",
    note: "regression and classification",
  },
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Production AI",
    body: "Agentic systems that survive contact with real users — and the observability to prove it.",
    points: [
      "Natural language to multi-step, node-based automation",
      "RAG, LangChain / LangGraph, tool-grounded agents",
      "Streaming event architecture (SSE) and latency root-cause work",
      "LLM cost and token engineering against live production traces",
    ],
  },
  {
    index: "02",
    title: "Data and ML",
    body: "The whole lifecycle, from a page that has not been scraped yet to a model someone trusts.",
    points: [
      "Multi-source scraping, deduplication, provenance-tracked schemas",
      "Feature engineering, EDA, statistical modelling",
      "Ensembles — XGBoost, Random Forest, voting classifiers, SMOTE",
      "Deep learning and NLP: ANN, transformer sentence embeddings",
    ],
  },
  {
    index: "03",
    title: "Full-stack delivery",
    body: "Shipping it is part of building it. Multi-tenant apps, reviewed code, real deploys.",
    points: [
      "FastAPI, Flask, Elysia / Bun, REST API design",
      "Next.js, React, TypeScript, Tailwind",
      "PostgreSQL, MySQL, SQLite — schema design and migrations",
      "Docker, CI/CD, pytest and Playwright suites, code review",
    ],
  },
];
