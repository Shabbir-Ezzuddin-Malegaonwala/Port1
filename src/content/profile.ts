import type { Capability, Metric } from "@/lib/types";

export const profile = {
  fullName: "Shabbir Malegaonwala",
  /** Full legal name, used only in the footer copyright line. */
  legalName: "Shabbir Shk.Ezzuddin Malegaonwala",
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
    "Agentic workflows, LLM cost and observability engineering, and data platforms, taken from a whiteboard to tested, production-grade systems.",

  /** Used for meta description and the about intro. Humanised, first person, no em-dashes. */
  bio: [
    "I build technology around one question: how does it solve a real problem, not just look impressive in a demo? That question carried me through a Bachelor's in Computer Applications and a Master's at MIT World Peace University, and into AI and automation as a discipline.",
    "I began by owning the full data lifecycle: scraping, cleaning, feature engineering, modelling, and translating the results for people who do not read code. That experience set my standard. A model that works in a notebook is a starting point; a system that works in production is the deliverable.",
    "Today I am an AI Engineer at Rubikon Labs, building on an enterprise agentic AI platform. My focus is making models answer correctly, cheaply, and consistently at scale. Getting an agent to respond once is a demo; keeping it reliable, fast and cost-efficient under production load is the engineering I own.",
    "Outside the day job, I run SEM Corp, the same mission in product form: AI agents, automation and software that remove repetitive work from people's lives. One touch or one voice, and the result should simply appear.",
  ],

  email: "shabbirmalegaon786@gmail.com",
  github: "https://github.com/Shabbir-Ezzuddin-Malegaonwala",
  linkedin: "https://www.linkedin.com/in/shabbir-malegaonwala-950546267/",
  instagram: "https://www.instagram.com/mwshabbir",
  resumeHref:
    "mailto:shabbirmalegaon786@gmail.com?subject=R%C3%A9sum%C3%A9%20request&body=Hi%20Shabbir%2C%0A%0ACould%20you%20send%20me%20your%20r%C3%A9sum%C3%A9%3F%0A%0A",
  resumeLabel: "Request résumé",
  siteUrl: "https://semcorp.vercel.app",
} as const;

/** Section 02: numbers before claims. */
/**
 * Outcome and judgment metrics, deliberately not activity counts. Lines of
 * code, raw record counts and bare test-pass numbers read as effort, not
 * impact, so none of those lead here even though they are all true and
 * cited in detail inside the relevant case studies.
 */
export const proofMetrics: Metric[] = [
  {
    value: "67%",
    label: "Real LLM cost cut, verified against live traces",
    note: "trace-level evidence, not an estimate",
  },
  {
    value: "Zero",
    label: "Output drift in a production refactor",
    note: "13 byte-identical regression tests",
  },
  {
    value: "6 → 1",
    label: "Scraped sources reconciled into one explainable engine",
    note: "every number traces to its source, no black box",
  },
  {
    value: "4",
    label: "Domains delivered in",
    note: "real estate, operations, SME automation, AI platforms",
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
    body: "Shipping is part of building it: multi-tenant applications, production-grade code, real deploys.",
    points: [
      "FastAPI, Flask, Elysia / Bun, REST API design",
      "Next.js, React, TypeScript, Tailwind",
      "PostgreSQL, MySQL, MongoDB, SQLite: schema design and migrations",
      "Docker, CI/CD, pytest and Playwright suites, release engineering",
    ],
  },
];
