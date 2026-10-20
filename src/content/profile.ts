import type { Capability, Metric } from "@/lib/types";

export const profile = {
  fullName: "Shabbir Malegaonwala",
  firstName: "Shabbir",
  accentName: "Malegaonwala",
  initials: "S.M.",
  role: "AI Engineer",
  roleLong: "AI Engineer · LLM Systems · Data Science",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  available: true,
  availabilityLine: "Open to AI / LLM engineering roles and consulting work",

  headline: "I build AI systems that reach production.",
  subhead:
    "Agentic workflows, LLM cost and observability engineering, and data platforms, taken from a prompt on a whiteboard to code that is reviewed, tested, and running.",

  /** Used for meta description and the about intro. Humanised, first person, no em-dashes. */
  bio: [
    "My interest in technology started with a simple question: how can it actually solve a real problem, not just look impressive in a demo? That question took me through a Bachelor's in Computer Applications and then a Master's at MIT World Peace University, and somewhere along the way it turned into a focus on AI and automation specifically.",
    "I spent my first proper year in the field doing the full data lifecycle by hand: scraping, cleaning, feature engineering, building models, and then explaining all of it to people who don't read code. That year taught me something a lot of AI tutorials skip. A model that works in a notebook and a system that works in production are two very different things.",
    "Right now I am an AI Engineer at Rubikon Labs in Pune, building on an enterprise agentic AI platform. The part of the job I care about most is the unglamorous half: making a model answer correctly, cheaply, and the same way tomorrow as it did today. Anyone can get an agent to respond once. Keeping it honest at scale is the actual work.",
    "Outside the day job, I run SEM Corp, which is really just a name for the same mission stated plainly. Make people's lives simpler through AI agents, automation, and software that removes repetitive work. One touch or one voice, and the result should just appear.",
  ],

  email: "shabbirmalegaon786@gmail.com",
  github: "https://github.com/Shabbir-Ezzuddin-Malegaonwala",
  linkedin: "https://www.linkedin.com/in/shabbir-malegaonwala-950546267/",
  instagram: "https://www.instagram.com/mwshabbir",
  resumeHref:
    "mailto:shabbirmalegaon786@gmail.com?subject=R%C3%A9sum%C3%A9%20request&body=Hi%20Shabbir%2C%0A%0ACould%20you%20send%20me%20your%20r%C3%A9sum%C3%A9%3F%0A%0A",
  resumeLabel: "Request résumé",
  siteUrl: "https://mwshabbirport1.vercel.app",
} as const;

/** Section 02: numbers before claims. */
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
    body: "Agentic systems that survive contact with real users, and the observability to prove it.",
    points: [
      "Natural language to multi-step workflow automation",
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
      "Ensembles: XGBoost, Random Forest, voting classifiers, SMOTE",
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
      "PostgreSQL, MySQL, MongoDB, SQLite: schema design and migrations",
      "Docker, CI/CD, pytest and Playwright suites, code review",
    ],
  },
];
