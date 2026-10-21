import type { Capability, Metric } from "@/lib/types";

export const profile = {
  fullName: "Shabbir Malegaonwala",
  /** Full legal name, used only in the footer copyright line. */
  legalName: "Shabbir Shk.Ezzuddin Malegaonwala",
  firstName: "Shabbir",
  accentName: "Malegaonwala",
  initials: "S.M.",
  role: "AI Engineer",
  roleLong: "AI Engineer · AI Products · Automation",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  available: true,
  availabilityLine: "Available for new projects and consulting work",

  headline: "AI systems that run the work.",
  subhead:
    "I design and build AI agents, automation platforms and full-stack products that turn repetitive work into outcomes, live in production and built to scale.",

  /** Used for meta description and the about intro. Humanised, first person, no em-dashes. */
  bio: [
    "I build AI products and automation that remove repetitive work and give people their time back. My path ran through a Bachelor's in Computer Applications, a Master's at MIT World Peace University, and into AI and automation as a discipline.",
    "I learned by owning the full data lifecycle: scraping, cleaning, feature engineering, modelling, and turning the results into decisions for people who do not read code. That set my standard. A model in a notebook is a starting point; a system in production is the deliverable.",
    "Today I am an AI Engineer at Rubikon Labs, building on an enterprise agentic AI platform. My focus is making models answer correctly, cheaply and consistently at scale. Getting an agent to respond once is a demo; keeping it reliable, fast and cost-efficient under real demand is the engineering I own.",
    "Outside the day job, I run SEM Corp, the same mission in product form: AI agents, automation and software that take repetitive work off people's desks. One touch or one voice, and the result simply appears.",
  ],

  email: "shabbirmalegaon786@gmail.com",
  github: "https://github.com/Shabbir-Ezzuddin-Malegaonwala",
  linkedin: "https://www.linkedin.com/in/shabbir-malegaonwala-950546267/",
  instagram: "https://www.instagram.com/mwshabbir",
  ctaHref:
    "mailto:shabbirmalegaon786@gmail.com?subject=New%20project&body=Hi%20Shabbir%2C%0A%0AHere%20is%20what%20I%20need%3A%0A%0A",
  ctaLabel: "Start a project",
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
    label: "Lower AI operating cost",
    note: "proven on live production traffic",
  },
  {
    value: "Zero",
    label: "Users disrupted by a platform-wide AI upgrade",
    note: "four experiences, one seamless switch",
  },
  {
    value: "6 → 1",
    label: "Marketplaces unified into one intelligence engine",
    note: "every recommendation explained",
  },
  {
    value: "100+",
    label: "Production-ready AI capabilities",
    note: "built, proven and reused",
  },
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "AI automation",
    body: "Your team stops doing the repetitive work, and the business keeps moving.",
    points: [
      "AI agents that handle support, sales and back-office work",
      "Plain-English workflow automation with 10+ building blocks",
      "Invoice, document and voice capture that fills the system for you",
      "Operations that run around the clock without adding headcount",
    ],
  },
  {
    index: "02",
    title: "AI products",
    body: "From a blank page to a live product people rely on every day.",
    points: [
      "Multi-tenant SaaS with enterprise-grade isolation",
      "Role-based platforms built around how teams work",
      "Real-time AI experiences that feel instant",
      "Dashboards and reports decision-makers open every morning",
    ],
  },
  {
    index: "03",
    title: "Intelligence and data",
    body: "Messy data becomes a decision you can defend.",
    points: [
      "Market and competitor intelligence from scattered sources",
      "Valuation, pricing and forecasting models with explainable outputs",
      "Document, voice and image data turned into structured records",
      "Reporting that shows the evidence behind every number",
    ],
  },
];
