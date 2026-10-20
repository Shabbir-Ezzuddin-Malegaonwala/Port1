import type { CaseStudy, SideProject } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "jordan-valuation-engine",
    index: "01",
    title: "Real-Estate Valuation Intelligence",
    kicker: "Explainability is the product",
    summary:
      "An evidence-backed launch-pricing engine for a Jordanian developer. Six portals scraped into one provenance-tracked database, then a statistical appraisal engine that shows its working instead of guessing a number.",
    year: "2026",
    role: "Architect and sole engineer",
    status: "Delivered to client",
    featured: true,
    span: "wide",
    stack: [
      "Python",
      "FastAPI",
      "SQLite → Neon Postgres",
      "React",
      "TypeScript",
      "Vite",
      "MapLibre GL",
      "LangGraph",
      "pytest",
    ],
    context:
      "A builder-developer in Jordan had a finished tower and one decision to make: the launch price. In that market a launch price can be raised later but must never be cut — a public cut destroys buyer trust — so it has to be right the first time, and it has to be defensible to a board.",
    problem:
      "Jordan publishes no unit-level transaction prices. There is no ground truth to train against and no public comparable set. Every available signal is an asking price on a listing portal, scattered across six sites, heavily cross-posted, and inconsistent about the attributes that actually move value.",
    built: [
      "A six-portal scraping pipeline collecting 56,854 raw listings, refined to 52,647 after cross-portal deduplication.",
      "A 19-table analytical database that carries provenance on every row, so any number in the final report can be traced back to the listing it came from.",
      "A comparable-selection engine: same-submarket pooling with a log-space MAD outlier filter, near-duplicate collapsing for units cross-posted on multiple portals, and a size band that auto-widens until a minimum comparable count is met.",
      "An attribute adjustment grid with no hardcoded premiums anywhere — categorical premiums are paired median differentials against the pool's modal baseline, continuous premiums are OLS slopes residualised by finish class.",
      "A recommendation layer blending the comparable estimate with the submarket robust median by inverse-variance weighting, bounded below by a construction-cost floor and above by a rent-yield ceiling.",
      "An interactive dashboard over MapLibre GL, and a grounded LangGraph assistant that answers natural-language questions against the underlying market data.",
    ],
    architecture: {
      caption:
        "Scrape → reconcile → appraise → explain. Every stage writes provenance forward.",
      layers: [
        {
          label: "Sources",
          nodes: [
            "Bayut",
            "OpenSooq",
            "Eureka",
            "Homes Jordan",
            "Property4321",
            "AbuJudom",
          ],
        },
        {
          label: "Ingest",
          nodes: ["Scrapers", "Normaliser", "Cross-portal dedup"],
        },
        {
          label: "Store",
          nodes: ["19-table schema", "Provenance ledger", "Geo + POI features"],
        },
        {
          label: "Engine",
          nodes: [
            "Comparable pooling",
            "MAD outlier filter",
            "Adjustment grid",
            "Inverse-variance blend",
          ],
        },
        {
          label: "Surface",
          nodes: [
            "11 REST endpoints",
            "MapLibre dashboard",
            "LangGraph assistant",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "No machine learning, on purpose",
        body: "This is the decision I defend most often, so it goes first. Jordan publishes no unit-level transaction prices, which means there is no label to train against. A model fitted on asking prices learns what sellers hope for, not what buyers pay, and it hides that behind a confident number. A transparent appraisal grid is weaker on paper and stronger in a board room, because every adjustment can be pointed at and argued with.",
      },
      {
        title: "Pure Python, no numpy or pandas",
        body: "The whole pricing engine runs on the standard library. The dataset fits comfortably in memory, the operations are medians and linear fits over a few thousand rows, and dropping the dependency made the deploy trivial and the logic readable by someone auditing it line by line. Reach for the heavy tool when the problem is heavy.",
      },
      {
        title: "A plausibility gate over the statistics",
        body: "Statistics will happily tell you that older buildings are worth more if the sample says so. Any premium that violates an economic prior — a non-monotonic finish schedule, a positive building-age slope — is dropped and replaced with a human-readable suppression note. The model is allowed to say nothing; it is not allowed to say something absurd.",
      },
      {
        title: "Degrade visibly, never silently",
        body: "A stale central-bank index disables the time adjustment rather than extrapolating through it. A thin submarket falls back citywide with an automatic confidence downgrade. With no usable comparables the engine returns a well-formed 'unpriceable' result and an explanation, instead of a fabricated number nobody can challenge.",
      },
    ],
    results: [
      {
        value: "52,647",
        label: "Listings after dedup",
        note: "from 56,854 raw",
      },
      { value: "6", label: "Portals integrated" },
      { value: "19", label: "Database tables", note: "59 MB shipped" },
      { value: "11", label: "API endpoints" },
      {
        value: "161",
        label: "Tests collected",
        note: "84 pass · 77 env-skipped · 0 fail",
      },
      {
        value: "20",
        label: "Sheet client workbook",
        note: "ships its own data-quality sheet",
      },
    ],
    limitations: [
      "The attribute grid is thin on production data. View, parking, elevator and finish are sparsely populated on real listings (finish 0.5–12%), so in practice only the size and age adjustments reliably fire. The framework is complete and correct on synthetic data; on live data it is doing less than it is capable of.",
      "There is no back-test against a realised transaction, because no realised transactions are published. Only a synthetic-recovery harness exists — and that harness self-reports that categorical premiums over-recover by roughly 4.9×.",
      "It prices asking prices, calibrated by a flat discount. That is the largest unforced assumption in the system and I would attack it first with any real transaction data.",
      "One snapshot, not a pipeline. Every listing carries a capture date from the same two days; there is no scheduler behind it.",
    ],
  },

  {
    slug: "sse-event-centralisation",
    index: "02",
    title: "Streaming Event Centralisation",
    kicker: "Merged into a live platform",
    summary:
      "Server-sent event emission was scattered as inline yields across four agent classes. I centralised it into one module and proved — byte for byte — that the output stream did not change.",
    year: "2026",
    role: "Engineer",
    status: "Merged to production",
    featured: true,
    span: "narrow",
    stack: ["Python", "FastAPI", "SSE", "pytest", "Git"],
    context:
      "An enterprise agentic AI platform streams its reasoning to the browser over server-sent events. The emission logic for those events had grown organically as inline `yield` statements buried inside the `run()` methods of several agent classes.",
    problem:
      "Every new event type meant editing four files and hoping the shapes matched. The real constraint was that the frontend parsed this stream in production — so the refactor had to be invisible. Not 'equivalent'. Identical.",
    built: [
      "A centralised `sse_events` module with one typed emitter helper per event type, replacing the scattered inline yields.",
      "Migration of the inline emissions inside four agent `run()` methods — the base agent, the router, the multi-step base, and the platform Q&A agent.",
      "A regression suite that captures the full event stream before and after and asserts byte-for-byte equality, so any drift fails the build rather than the user's browser.",
    ],
    architecture: {
      caption: "One emitter, four call sites, an identical stream on the wire.",
      layers: [
        {
          label: "Agents",
          nodes: [
            "base",
            "agent_router",
            "multi_step_base",
            "ask_platform_agent",
          ],
        },
        {
          label: "Before",
          nodes: [
            "inline yield",
            "inline yield",
            "inline yield",
            "inline yield",
          ],
        },
        { label: "After", nodes: ["sse_events.emit_*()"] },
        { label: "Guarantee", nodes: ["13 byte-identical regression tests"] },
        { label: "Wire", nodes: ["SSE stream → browser (unchanged)"] },
      ],
    },
    decisions: [
      {
        title: "Byte-identical as the acceptance test, not 'looks right'",
        body: "A refactor of a production stream is only safe if you can prove the output did not move. Semantic equivalence is an opinion; byte equality is a test. Capturing the stream on both sides of the change and diffing it turned a risky refactor into a reviewable one.",
      },
      {
        title: "Raising the adjacent bug instead of fixing it",
        body: "While working in that code I found a pre-existing defect — a hard tool filter that another code path re-injects as virtual-filesystem builtins, so on weaker models an agent reads an empty skill file and improvises. It was genuinely broken and genuinely not mine. I wrote it up and flagged it as out of scope rather than quietly widening my diff. A reviewer should be able to read a pull request in one sitting.",
      },
    ],
    results: [
      {
        value: "Merged",
        label: "Into the deployment branch",
        note: "reviewed by a senior engineer",
      },
      {
        value: "13/13",
        label: "Regression tests passing",
        note: "byte-identical output",
      },
      {
        value: "3/3",
        label: "CI checks green",
        note: "lint · review · build-and-scan",
      },
      { value: "4", label: "Agent classes migrated" },
    ],
    limitations: [
      "This is a refactor. It added no user-visible capability — its entire value is that the next event type is a one-line change instead of a four-file one.",
      "The regression suite proves the stream is unchanged for the paths it exercises. It is a strong guarantee over the covered event types, not a proof over every possible agent run.",
    ],
  },

  {
    slug: "llm-cost-optimisation",
    index: "03",
    title: "LLM Cost and Token Engineering",
    kicker: "Where the money actually goes",
    summary:
      "Production LLM spend was high and nobody could say why. I pulled the live traces, decomposed a single one-word request down to its prompt blocks, and benchmarked four models on identical workloads.",
    year: "2026",
    role: "Analysis lead",
    status: "Analysis delivered",
    featured: true,
    span: "narrow",
    stack: ["Python", "Langfuse", "REST APIs", "openpyxl", "Cost modelling"],
    context:
      "The platform's inference bill was growing and the working theory was that one model was simply expensive. I was asked to find out why and come back with a plan.",
    problem:
      "Cost at the invoice level tells you nothing actionable. The question is not 'what did we spend' but 'which prompt block, on which call path, is buying us the least'. That needs trace-level evidence.",
    built: [
      "Authenticated pulls of production traces from Langfuse across the full fleet of chats and agent runs.",
      "A decomposition of one trivial request — a user typing 'Hi' — into the five named prompt blocks that made it bill 8,334 input tokens.",
      "A benchmark of four leading models against identical real workloads taken from those traces, rather than synthetic prompts.",
      "A costed action plan with ten items ranked P1–P3, packaged as a five-sheet workbook plus eight analysis documents, with names and week numbers stripped so it could be circulated.",
    ],
    architecture: {
      caption:
        "Traces in, prompt-block attribution out, then a model benchmark on the same workloads.",
      layers: [
        {
          label: "Source",
          nodes: ["Langfuse production traces", "Agent run history"],
        },
        {
          label: "Extract",
          nodes: ["Authenticated REST pulls", "Trace normalisation"],
        },
        {
          label: "Attribute",
          nodes: [
            "Prompt-block decomposition",
            "In:out ratio analysis",
            "Per-call-path cost",
          ],
        },
        { label: "Compare", nodes: ["4 models · identical workloads"] },
        {
          label: "Deliver",
          nodes: ["5-sheet workbook", "10-item action plan", "8 analysis docs"],
        },
      ],
    },
    decisions: [
      {
        title: "Benchmark on real traces, not synthetic prompts",
        body: "A synthetic benchmark measures a model. A benchmark replayed over your own production traces measures your bill. The two diverge badly once system prompts, retrieval context and tool schemas are in play — which is exactly where the cost was hiding.",
      },
      {
        title: "Correcting my manager, with evidence",
        body: "The working assumption from above was that one provider was 90% cheaper but had doubled our token count. That was half right, and the wrong half mattered. I showed that the reasoning variant and the chat variant of that model are different products — the reasoning one emits chain-of-thought tokens in a completely different order of magnitude — so the real net saving was 67%, not 90%. Being useful sometimes means telling the person who set the direction that the number is wrong, and bringing the trace that proves it.",
      },
      {
        title: "Attribution beats negotiation",
        body: "The largest finding was not a model price at all. Short acknowledgement calls — the ones that exist purely to say 'working on it' — were consuming 28–36% of a heavy trace's cost, at input:output ratios of 50:1 to 100:1. You cannot negotiate your way out of that. You can delete it.",
      },
    ],
    results: [
      {
        value: "8,334",
        label: "Input tokens for one word",
        note: "traced to 5 prompt blocks",
      },
      {
        value: "28–36%",
        label: "Of heavy-trace cost",
        note: "spent on acknowledgement calls",
      },
      { value: "341 / 202", label: "Chats / agent runs audited" },
      { value: "4", label: "Models benchmarked", note: "identical workloads" },
      {
        value: "67%",
        label: "Real net saving, corrected",
        note: "the stated figure was 90%",
      },
    ],
    limitations: [
      "This was an analysis engagement, not an implementation one. I delivered the attribution, the benchmark and the ranked plan; the recommendations sat on feature branches and I have no evidence they were adopted.",
      "The projected annual saving in the plan is a projection built on the measured per-call numbers. It was never realised and I do not quote it as an achievement.",
      "I operated and analysed the observability stack. I did not build or configure it.",
    ],
  },

  {
    slug: "workflow-builder-assistant",
    index: "04",
    title: "Agentic Workflow Builder",
    kicker: "Plain English to a running graph",
    summary:
      "A natural-language assistant that turns a business requirement into a complete multi-step, node-based automation on a visual canvas — laid out, labelled, and valid.",
    year: "2026",
    role: "Feature lead across 3 repositories",
    status: "Shipped to a feature branch",
    featured: true,
    span: "wide",
    stack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "React",
      "Bun / Elysia",
      "Drizzle",
      "Zod",
      "Dagre",
      "Playwright",
    ],
    context:
      "The platform had a visual workflow builder — a canvas where a user wires nodes together into an automation. Powerful, and a blank page. New users opened it and closed it.",
    problem:
      "Generating a workflow from a prompt is not a text problem, it is a graph problem. The output has to be a valid directed graph over a real node registry, with correct ports, resolvable branch conditions, and a layout a human can actually read. An LLM will happily emit a plausible graph that the engine cannot execute.",
    built: [
      "The assistant end to end across three repositories — the conversational service, the main service, and the frontend.",
      "Dagre-based automatic layout so generated graphs are readable rather than piled on the origin.",
      "Colour-coded node bands, branch labels on decision edges, and synthetic end-node convergence so every path visibly terminates.",
      "A plain-English error translator that turns engine validation failures into something a non-engineer can act on.",
      "Multi-format file upload as workflow input, and a bug-fix and polish programme against a reviewer's issue list.",
      "A branch unification across four repositories, restoring missing modules from the deployment branch so the feature could be evaluated as one coherent thing.",
    ],
    architecture: {
      caption:
        "Prompt → constrained graph generation → validation → layout → canvas.",
      layers: [
        { label: "Input", nodes: ["User prompt", "Uploaded files"] },
        {
          label: "Generate",
          nodes: ["Conversational service", "Node-registry-constrained output"],
        },
        {
          label: "Validate",
          nodes: [
            "Graph validity",
            "Port + branch resolution",
            "Plain-English errors",
          ],
        },
        {
          label: "Lay out",
          nodes: [
            "Dagre",
            "Colour bands",
            "Edge labels",
            "End-node convergence",
          ],
        },
        {
          label: "Render",
          nodes: ["Next.js canvas", "Main service persistence"],
        },
      ],
    },
    decisions: [
      {
        title: "Constrain generation to the live node registry",
        body: "The model never invents a node. It selects from the registry the engine actually exposes, and the output is validated against that registry before it reaches the canvas. A beautiful workflow built from nodes that do not exist is worse than no workflow, because the user only finds out at run time.",
      },
      {
        title: "Layout is part of correctness",
        body: "A graph that is technically valid and visually unreadable has not solved the user's problem — they still cannot tell what it does. Dagre auto-layout, consistent colour bands and labelled decision edges were not polish, they were the difference between a demo and a tool.",
      },
      {
        title: "Translate the engine's errors",
        body: "Validation failures came back in the engine's own vocabulary, which is fine for the engine team and useless for a business user. Translating them into plain English at the boundary was a small change that removed most of the support surface.",
      },
    ],
    results: [
      {
        value: "3",
        label: "Repositories touched",
        note: "conversational · main · frontend",
      },
      { value: "53", label: "Files changed", note: "+4,722 / −470" },
      { value: "15", label: "Bugs fixed in the build-out" },
      {
        value: "29",
        label: "Fixes in the polish pass",
        note: "against a reviewer's list",
      },
      { value: "4", label: "Repos unified", note: "branch reconciliation" },
    ],
    limitations: [
      "This shipped to a feature branch and was never merged to the deployment branch. The team subsequently chose a different architectural approach for the same problem. I describe it as built, never as in production — the work and the code are real, the outcome was a change of direction above me.",
      "Generation quality tracked model quality closely. On weaker models the graphs were valid but naive, which is an honest limit of the constrained-generation approach rather than a bug.",
    ],
  },

  {
    slug: "nexadesk-stockpilot",
    index: "05",
    title: "NexaDesk and StockPilot",
    kicker: "Two multi-tenant SaaS apps, solo",
    summary:
      "An AI support-ticket system and an AI inventory system, both built alone in my first two months, both deployed, both through a formal senior code review and live demo gate.",
    year: "2026",
    role: "Sole engineer",
    status: "Built, deployed, reviewed",
    featured: true,
    span: "half",
    stack: [
      "Next.js",
      "Zustand",
      "Bun / Elysia",
      "Drizzle",
      "Zod",
      "FastAPI",
      "LangChain",
      "Groq",
      "PostgreSQL",
      "BetterAuth",
    ],
    context:
      "My onboarding ended in two assessment gates: a conceptual interview, and a code review plus deployment verification plus live feature demo of two applications I had to build myself.",
    problem:
      "Multi-tenancy is where junior projects quietly fail. It is easy to build an app that works for one organisation and leaks across two — and every AI feature layered on top multiplies the places that isolation can break.",
    built: [
      "NexaDesk — a support-ticket system with AI priority and category classification, server-sent-event streamed AI response suggestions, and admin/member role separation.",
      "StockPilot — an inventory system with AI procurement recommendations, streamed procurement reports, and a four-role permission model from owner down to member.",
      "Organisation-scoped data isolation enforced at the data-access layer in both, plus a full invite → accept → role-assignment flow.",
      "Both deployed and demonstrated running, with the debugging history left visible in the commit log.",
    ],
    architecture: {
      caption:
        "A typed API, a Python AI service, one tenancy boundary enforced below both.",
      layers: [
        { label: "Client", nodes: ["Next.js", "Zustand", "SSE consumer"] },
        {
          label: "API",
          nodes: [
            "Elysia on Bun",
            "Zod validation",
            "BetterAuth organisations",
          ],
        },
        {
          label: "AI",
          nodes: ["FastAPI", "LangChain", "Groq", "Streaming responses"],
        },
        {
          label: "Data",
          nodes: ["PostgreSQL", "Drizzle ORM", "Org-scoped isolation"],
        },
      ],
    },
    decisions: [
      {
        title: "Isolation at the data layer, not the route layer",
        body: "Checking the tenant in each route handler works until someone adds the one handler that forgets. Scoping at the data-access boundary means a new query is isolated by construction rather than by discipline.",
      },
      {
        title: "Stream the AI, do not spinner it",
        body: "AI suggestions over server-sent events rather than a blocking request. The latency does not change but the perceived latency collapses, and the user gets to start reading while the model is still writing.",
      },
      {
        title: "Leaving the debugging in the commit history",
        body: "The commit log contains real fixes with real messages — a trailing slash breaking a stream URL, a cross-domain cookie rewrite of the auth flow. I did not squash that away. A clean history of fifteen perfect commits teaches a reviewer nothing about how you work.",
      },
    ],
    results: [
      { value: "2", label: "Applications, built solo" },
      {
        value: "2/2",
        label: "Review gates passed",
        note: "code review + live demo",
      },
      {
        value: "4",
        label: "Roles in the permission model",
        note: "owner → member",
      },
      { value: "15", label: "Commits over 11 days", note: "public history" },
    ],
    limitations: [
      "These are assessment builds, scoped to prove competence rather than to carry real load. They have not been run at scale or hardened against hostile traffic.",
      "The AI features are solid applications of classification and streaming, not novel modelling work.",
    ],
    links: [
      {
        label: "NexaDesk on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/NexaDesk",
      },
      {
        label: "StockPilot on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/StockPilot",
      },
    ],
  },

  {
    slug: "lead-enrichment-pipeline",
    index: "06",
    title: "Lead Enrichment at 51,532 Rows",
    kicker: "Knowing when not to build",
    summary:
      "A five-year-stale lead database, profiled column by column and rebuilt into a frozen schema — and then an honest measurement that stopped the project and saved the budget.",
    year: "2026",
    role: "Analyst and engineer",
    status: "Pipeline built · recommendation escalated",
    featured: true,
    span: "half",
    stack: ["Python", "Playwright", "async httpx", "trafilatura", "openpyxl"],
    context:
      "Sales had a large, ageing contact list and wanted it enriched before the platform could be sold into it. The assumption going in was that this was a scraping job.",
    problem:
      "The dataset was 51,532 rows across 62 inconsistent columns with unknown completeness. Before any enrichment could mean anything, somebody had to find out what was actually in there — and whether enrichment at this scale was even achievable.",
    built: [
      "A column-by-column completeness profile of all 62 columns, which is where the real picture appeared — contact coverage was far thinner than assumed, with roughly a third of phone numbers missing entirely.",
      "A rebuild into a frozen 92-column schema with a synthetic stable key, so downstream work could not be invalidated by an upstream edit.",
      "Chunking into 52 batches of 1,000 rows, region-sorted so runs could be prioritised and resumed.",
      "A twelve-check integrity gate and a seventeen-check QA validator, both passing clean, around a resumable enrichment pipeline of roughly eighteen modules.",
      "An empirical measurement of what scraping actually achieved at this scale — and a costed buy-versus-build vendor recommendation handed up when the measurement came back negative.",
    ],
    architecture: {
      caption:
        "Profile first, freeze the schema, gate everything, then measure before you commit.",
      layers: [
        {
          label: "Audit",
          nodes: ["62-column profile", "Completeness measurement"],
        },
        {
          label: "Rebuild",
          nodes: ["92-column frozen schema", "Synthetic stable key"],
        },
        {
          label: "Batch",
          nodes: ["52 chunks × 1,000", "Region-sorted", "Resumable"],
        },
        {
          label: "Gate",
          nodes: ["12-check integrity gate", "17-check QA validator"],
        },
        {
          label: "Decide",
          nodes: ["Measured 15–33% success", "Costed vendor recommendation"],
        },
      ],
    },
    decisions: [
      {
        title: "Profile before promising",
        body: "The brief assumed the data was mostly complete and just stale. The profile said otherwise. Spending the first days measuring rather than building changed what the project was — and that is almost always a cheaper discovery to make early.",
      },
      {
        title: "Freeze the schema, then build on it",
        body: "A frozen target schema with a synthetic key meant every later stage had a stable contract. Enrichment work does not get silently invalidated because an upstream column was renamed.",
      },
      {
        title: "Measure the ceiling, then stop",
        body: "I measured a 15–33% success rate, non-deterministic, with headless browsers blocked and every search-engine fallback walled off. The engineering instinct is to beat the anti-bot measures. The correct answer was that the ceiling was structural, and the honest move was a costed vendor comparison escalated to the decision-maker instead of weeks spent losing an arms race.",
      },
    ],
    results: [
      { value: "51,532", label: "Rows profiled", note: "× 62 columns" },
      {
        value: "92",
        label: "Column frozen schema",
        note: "synthetic stable key",
      },
      { value: "12/12", label: "Integrity checks passing" },
      { value: "17/17", label: "QA validations passing" },
      {
        value: "15–33%",
        label: "Measured success ceiling",
        note: "the finding that stopped the build",
      },
    ],
    limitations: [
      "The enrichment was never run at full scale — that was the conclusion, not a shortfall. The pipeline is complete and resumable; the measurement said the input data source would not support it.",
      "The vendor recommendation is a costed comparison, not a procurement. The decision sat above me.",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "NLP Resume Screening Engine",
    blurb:
      "Transformer sentence embeddings and cosine similarity to rank candidates against a job description across PDF, DOCX, TXT and CSV.",
    stack: "Python · Sentence-Transformers · Streamlit · SQLite",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/AI-Powered-Resume-Screening-System",
  },
  {
    name: "Career Coach Agent",
    blurb:
      "An agentic assistant for career guidance, built on an LLM tool-calling loop.",
    stack: "Python · LLM agents",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Career-Coach-Agent",
  },
  {
    name: "CortexAI",
    blurb:
      "A microservice backend behind an API gateway — separate agent, auth, billing and chat services with a React front end.",
    stack: "Node · Express · Redis · React · Vite",
  },
  {
    name: "Digivyapar",
    blurb:
      "An AI chat interface for Indian MSMEs to run invoicing, inventory, expenses and marketing from one conversation.",
    stack: "AI automation · Docker",
  },
  {
    name: "Stock-Market Data Pipeline",
    blurb:
      "Automated intraday ingestion into a structured database with integrity and duplicate handling, ready for downstream analysis.",
    stack: "Python · Alpha Vantage · MySQL",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Stock-Market-Data-Collector",
  },
  {
    name: "ML Model Bank",
    blurb:
      "Ten-plus deployed models — XGBoost salary prediction, ANN car pricing, and voting-classifier ensembles with SMOTE for loan, heart-disease and placement prediction.",
    stack: "scikit-learn · TensorFlow · XGBoost · Flask",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala?tab=repositories",
  },
  {
    name: "Text Sentiment Analysis",
    blurb:
      "Web scraping plus NLP sentiment scoring with readability metrics over the extracted corpus.",
    stack: "Python · NLTK",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Text-Sentiment-Analysis",
  },
  {
    name: "Food Delivery DBMS",
    blurb:
      "A complete relational schema for food-delivery operations — orders, riders, restaurants, settlement.",
    stack: "SQL · Database design",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Food-Delivery-DBMS",
  },
];

export const featuredWork = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
