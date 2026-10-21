import type { CaseStudy, SideProject } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "digivyapar",
    index: "01",
    title: "Digivyapar",
    kicker: "Business automation for India's small businesses",
    summary:
      "A live AI chat interface for Indian MSMEs: invoicing, inventory, expenses and marketing, run from a single Telegram conversation. I lead the AI automation layer across a six-person team.",
    year: "2026",
    role: "AI automation lead, team of 6",
    status: "Live, team project",
    featured: true,
    span: "wide",
    stack: [
      "n8n",
      "Telegram Bot API",
      "Document OCR",
      "Voice transcription",
      "Prompt engineering",
      "Docker",
    ],
    context:
      "Over 63 million Indian MSMEs run on notebooks, WhatsApp chats and manual effort: no CRM, no structured data, no automation. With Hussein Saifee Petladwala, Siddhant Tripathi and the rest of a six-person team, I lead the AI automation layer that puts that daily operational work behind one chat conversation instead of a dashboard nobody would open.",
    problem:
      "A small business owner will not learn a new app. Whatever we built had to live inside a channel they already check every day, and had to turn a photo or a spoken sentence directly into a finished business action, not a ticket for someone else to process later.",
    built: [
      "An invoice-capture workflow: the owner photographs a paper invoice on Telegram and it comes back as a structured, logged record, cutting a manual data-entry step down to seconds.",
      "A Telegram-based voice sales agent that takes a spoken lead straight from the owner's voice note and runs it through qualification without any typing.",
      "A business-operations-manager workflow giving the owner one place to edit and manage daily operational data from simple chat commands.",
      "An automated social-media posting pipeline that drafts and schedules posts with AI-generated captions, solving the inconsistent-marketing problem that was the team's second-highest priority.",
      "All of it orchestrated on a self-hosted n8n instance, so the business logic lives in version-controlled workflow definitions the whole team can read and extend.",
    ],
    architecture: {
      caption:
        "Telegram is the only interface the owner sees. Everything else runs behind it on self-hosted workflows.",
      layers: [
        {
          label: "Channel",
          nodes: ["Telegram", "Photo", "Voice note", "Text"],
        },
        { label: "Capture", nodes: ["Invoice OCR", "Voice transcription"] },
        {
          label: "Orchestrate",
          nodes: ["Self-hosted n8n", "Version-controlled workflows"],
        },
        {
          label: "Operate",
          nodes: ["Business-ops manager", "Auto social posting"],
        },
        { label: "Replace", nodes: ["Notebooks", "Scattered WhatsApp chats"] },
      ],
    },
    decisions: [
      {
        title: "Meet the owner inside a channel they already use",
        body: "Adoption is the product. Telegram was already open on every owner's phone, so every automation lives there: no new app to learn, no dashboard to ignore. The workflow meets the business where it already operates, and the result arrives in the same conversation the owner already checks every day.",
      },
      {
        title: "Workflow-as-config over a bespoke backend",
        body: "Choosing n8n instead of writing a custom backend was deliberate. It keeps the business logic inspectable and editable by the whole team, not buried in application code only one engineer can touch, and it let a six-person team move fast without stepping on each other.",
      },
      {
        title: "Ship the two highest-hour problems first",
        body: "Discovery surfaced a long list of possible automations. We shipped invoice capture and social posting first because they were the two problems measured as costing the most owner-hours and the most lost revenue, rather than building every planned feature before anything went live.",
      },
    ],
    results: [
      {
        value: "Live",
        label: "At digivyapar.in",
        note: "real users, not a demo",
      },
      { value: "4", label: "Core automations shipped" },
      { value: "6", label: "Person team" },
      {
        value: "1",
        label: "Channel for the entire business",
        note: "invoicing, inventory, sales and marketing",
      },
    ],
    links: [{ label: "Visit digivyapar.in", href: "https://digivyapar.in" }],
  },

  {
    slug: "jordan-valuation-engine",
    index: "02",
    title: "Real-Estate Valuation Intelligence",
    kicker: "Explainability is the product",
    summary:
      "An evidence-backed launch-pricing engine for a Jordanian developer. Six portals scraped into one provenance-tracked database, then a statistical appraisal engine that shows its working instead of guessing a number.",
    year: "2026",
    role: "Architect and sole engineer",
    status: "Delivered to client",
    featured: true,
    span: "narrow",
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
      "A builder-developer in Jordan had a finished tower and one decision to make: the launch price. In that market a launch price can be raised later but must never be cut: a public cut destroys buyer trust, so it has to be right the first time, and it has to be defensible to a board.",
    problem:
      "Jordan publishes no unit-level transaction prices. There is no ground truth to train against and no public comparable set. Every available signal is an asking price on a listing portal, scattered across six sites, heavily cross-posted, and inconsistent about the attributes that actually move value.",
    built: [
      "A six-portal scraping pipeline collecting 56,854 raw listings, refined to 52,647 after cross-portal deduplication.",
      "A 19-table analytical database that carries provenance on every row, so any number in the final report can be traced back to the listing it came from.",
      "A comparable-selection engine: same-submarket pooling with a log-space MAD outlier filter, near-duplicate collapsing for units cross-posted on multiple portals, and a size band that auto-widens until a minimum comparable count is met.",
      "An attribute adjustment grid with no hardcoded premiums anywhere: categorical premiums are paired median differentials against the pool's modal baseline, continuous premiums are OLS slopes residualised by finish class.",
      "A recommendation layer blending the comparable estimate with the submarket robust median by inverse-variance weighting, bounded below by a construction-cost floor and above by a rent-yield ceiling.",
      "An interactive dashboard over MapLibre GL, and a grounded LangGraph assistant that answers natural-language questions against the underlying market data.",
      "A related 51,532-row lead and market-data enrichment pass feeding the same engagement, profiled column by column, rebuilt to a frozen 92-column schema, chunked and gated (12/12 integrity checks, 17/17 QA) before being folded into the client deliverable.",
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
        title: "A transparent engine, not a black-box model",
        body: "Jordan publishes no unit-level transaction prices, so there is no ground truth to train a model against. A model fitted on asking prices learns seller expectation, not buyer behaviour, and conceals that behind a single number. A transparent appraisal grid wins in a board room: every adjustment can be inspected, challenged and defended. The comparable-selection step is a similarity-ranked search over size, recency, attribute match and distance; the similarity score ranks the shortlist, and the price comes from the adjustment grid, exactly as the client's methodology prescribes.",
      },
      {
        title: "Pure Python, built for speed and auditability",
        body: "The whole pricing engine runs on the standard library. The dataset fits comfortably in memory, the operations are medians and linear fits over a few thousand rows, and dropping the heavy dependency stack made the deploy trivial and the logic auditable line by line. Reach for the heavy tool when the problem is heavy, and not before.",
      },
      {
        title: "A plausibility gate over the statistics",
        body: "Statistics will happily tell you that older buildings are worth more if the sample says so. Any premium that violates an economic prior (a non-monotonic finish schedule, a positive building-age slope) is dropped and replaced with a human-readable suppression note. The engine is built to say nothing rather than something absurd.",
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
      { value: "19", label: "Database tables", note: "provenance on every row" },
      { value: "11", label: "API endpoints" },
      {
        value: "161",
        label: "Automated tests",
        note: "zero failures",
      },
      {
        value: "51,532",
        label: "Rows in the related enrichment pass",
        note: "92-column frozen schema",
      },
    ],
    links: [
      {
        label: "Real-Estate-Jordan on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Real-Estate-Jordan",
      },
    ],
  },

  {
    slug: "dubai-operations-platform",
    index: "03",
    title: "Dubai Operations Platform",
    kicker: "Nine personas, one order-to-billing lifecycle",
    summary:
      "An enterprise operations platform for an international client: order intake through to billing, with team and role-based access across nine distinct personas doing nine different jobs.",
    year: "2026",
    role: "Engineer, requirements through production",
    status: "Delivered to client",
    featured: true,
    span: "wide",
    stack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "React",
      "Bun / Elysia",
      "RBAC",
    ],
    context:
      "An international operations client needed their order-to-billing process automated end to end. Nine distinct personas, from sales through to billing, each needed their own view and their own permissions over the same underlying orders.",
    problem:
      "The hard part was never the business logic. It was representing nine different people's jobs inside one coherent workflow and permission model without the interface becoming unusable for any single one of them.",
    built: [
      "Modelled the full order lifecycle as six workflows spanning intake, production, quality checks, dispatch and billing, each with its own approval gates.",
      "Built a team and role-based access model where a person's project access comes from team membership or a direct grant, and their permitted actions follow their role rather than being hardcoded per screen.",
      "Designed a persona-aware in-app help system, so each of the nine roles sees guidance relevant to their own screens instead of one generic manual nobody reads.",
      "Ran a focused requirement-documentation pass directly against each of the nine personas' real workflows, then rebuilt the interface around exactly what they needed to do their jobs.",
    ],
    architecture: {
      caption:
        "Nine personas, six workflows, one access model underneath both.",
      layers: [
        { label: "Personas", nodes: ["9 roles", "Sales → Billing"] },
        {
          label: "Access",
          nodes: ["Team membership", "Direct grants", "Role-scoped actions"],
        },
        {
          label: "Workflows",
          nodes: ["Intake", "Production", "QA", "Dispatch", "Billing"],
        },
        { label: "Gates", nodes: ["3 approval checkpoints"] },
        { label: "Surface", nodes: ["Persona-aware in-app help"] },
      ],
    },
    decisions: [
      {
        title: "Role, not screen, as the unit of permission",
        body: "Hardcoding what each screen shows per persona does not scale past a handful of roles. Attaching permitted actions to a role, and roles to a team, meant a tenth persona would be a configuration change, not a new branch of conditional UI.",
      },
      {
        title: "Design directly from the personas, not around them",
        body: "I ran a focused requirement-documentation pass against each of the nine roles' actual day-to-day workflow before touching the interface, then built screens around exactly what each persona needed to see and do. Designing from the real job, not from an assumed one, is what kept nine distinct workflows usable inside one coherent platform.",
      },
      {
        title: "Team-based access over per-user flags",
        body: "Granting access through team membership, with a direct-grant escape hatch for exceptions, meant onboarding a new person onto a project was adding them to a team, not auditing and re-granting nine separate permission flags by hand.",
      },
    ],
    results: [
      { value: "9", label: "Personas supported" },
      { value: "6", label: "Workflows modelled", note: "intake to billing" },
      { value: "3", label: "Approval gates" },
      {
        value: "1",
        label: "Platform, nine jobs",
        note: "one coherent interface",
      },
    ],
  },

  {
    slug: "sse-event-centralisation",
    index: "04",
    title: "Streaming Event Centralisation",
    kicker: "Merged into a live platform",
    summary:
      "Server-sent event emission was scattered as inline yields across four agent classes. I centralised it into one module and proved, byte for byte, that the output stream did not change.",
    year: "2026",
    role: "Engineer",
    status: "Merged to production",
    featured: true,
    span: "narrow",
    stack: ["Python", "FastAPI", "SSE", "pytest", "Git"],
    context:
      "An enterprise agentic AI platform streams its reasoning to the browser over server-sent events. The emission logic for those events had grown organically as inline `yield` statements buried inside the `run()` methods of several agent classes.",
    problem:
      "Every new event type meant editing four files and keeping their shapes in sync. The frontend parsed this stream in production, so the refactor had to be invisible: not equivalent, identical.",
    built: [
      "A centralised `sse_events` module with one typed emitter helper per event type, replacing the scattered inline yields.",
      "Migration of the inline emissions inside four agent `run()` methods: the base agent, the router, the multi-step base, and the platform Q&A agent.",
      "A regression suite that captures the full event stream before and after and asserts byte-for-byte equality, so any drift fails the build before it ever reaches a user.",
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
        title: "Byte-identical as the acceptance bar",
        body: "A refactor of a production stream is only safe if you can prove the output did not move. Semantic equivalence is an opinion; byte equality is a test. Capturing the stream on both sides of the change and diffing it turned the refactor into something provably safe to ship.",
      },
      {
        title: "Scope discipline: one verifiable change",
        body: "The refactor touched exactly the emission layer and nothing else, which is what let the byte-identical guarantee hold end to end. Keeping a change surgical rather than opportunistic is what makes a large refactor ship confidently on the first pass instead of needing a second one.",
      },
    ],
    results: [
      {
        value: "Live",
        label: "In production",
        note: "zero regressions",
      },
      {
        value: "13/13",
        label: "Regression tests passing",
        note: "byte-identical output",
      },
      {
        value: "3/3",
        label: "CI checks green",
        note: "lint · build · security scan",
      },
      { value: "4", label: "Agent classes migrated" },
    ],
  },

  {
    slug: "llm-cost-optimisation",
    index: "05",
    title: "LLM Cost and Token Engineering",
    kicker: "Where the money actually goes",
    summary:
      "A rapidly growing inference bill needed a precise answer. I pulled the live traces, decomposed a single one-word request down to its prompt blocks, and benchmarked four models on identical real workloads.",
    year: "2026",
    role: "Analysis lead",
    status: "Delivered",
    featured: true,
    span: "narrow",
    stack: ["Python", "Langfuse", "REST APIs", "openpyxl", "Cost modelling"],
    context:
      "The platform's inference bill was growing fast. I led the cost investigation: trace the spend to its source, quantify the real drivers, and return a costed plan the team could act on.",
    problem:
      "Cost at the invoice level tells you nothing actionable. The question is not 'what did we spend' but 'which prompt block, on which call path, is buying us the least'. That needs trace-level evidence.",
    built: [
      "Authenticated pulls of production traces from Langfuse across the full fleet of chats and agent runs.",
      "A decomposition of one trivial request (a user typing 'Hi') into the five named prompt blocks that made it bill 8,334 input tokens.",
      "A benchmark of four leading models against identical real workloads taken from those traces, rather than synthetic prompts.",
      "A costed action plan with ten items ranked P1–P3, packaged as a five-sheet workbook plus eight analysis documents, ready to circulate across the team.",
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
        body: "A synthetic benchmark measures a model. A benchmark replayed over production traces measures the actual bill. The two diverge badly once system prompts, retrieval context and tool schemas are in play, which is exactly where the cost was hiding.",
      },
      {
        title: "Quantifying the real saving at 67%",
        body: "One provider looked 90% cheaper on paper, but its reasoning variant emits chain-of-thought tokens at an entirely different order of magnitude from the chat variant. Tracing both across live traffic showed the real net saving was 67%, not the headline estimate. The number came from production traces, not from a pricing page.",
      },
      {
        title: "Attribution beats negotiation",
        body: "The largest finding was not a model price at all. Short acknowledgement calls, the ones that exist purely to say 'working on it', were consuming 28–36% of a heavy trace's cost, at input:output ratios of 50:1 to 100:1. You cannot negotiate your way out of that. You can delete it.",
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
        label: "Real net saving, verified",
        note: "trace-level evidence",
      },
    ],
  },

  {
    slug: "workflow-builder-assistant",
    index: "06",
    title: "Agentic Workflow Builder",
    kicker: "Plain English to a running graph",
    summary:
      "A natural-language assistant that turns a business requirement into a complete multi-step, node-based automation on a visual canvas, laid out, labelled, and valid.",
    year: "2026",
    role: "Feature lead across 3 repositories",
    status: "Delivered across 3 repositories",
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
      "The platform had a visual workflow builder: a canvas where a user wires nodes together into an automation. Powerful, and a blank page. New users opened it and closed it.",
    problem:
      "Generating a workflow from a prompt is not a text problem, it is a graph problem. The output has to be a valid directed graph over a real node registry, with correct ports, resolvable branch conditions, and a layout a human can actually read.",
    built: [
      "The assistant end to end across three repositories: the conversational service, the main service, and the frontend.",
      "Dagre-based automatic layout so generated graphs are readable rather than piled on the origin.",
      "Colour-coded node bands, branch labels on decision edges, and synthetic end-node convergence so every path visibly terminates.",
      "A plain-English error translator that turns engine validation failures into something a non-engineer can act on.",
      "Multi-format file upload as workflow input, plus an extensive refinement programme that brought the experience to production quality.",
      "Unified the feature across four repositories into one coherent, end-to-end build.",
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
        body: "The model never invents a node. It selects from the registry the engine actually exposes, and the output is validated against that registry before it reaches the canvas. A workflow built from nodes that do not exist is worse than no workflow, because the user only finds out at run time.",
      },
      {
        title: "Layout is part of correctness",
        body: "A graph that is technically valid and visually unreadable has not solved the user's problem. Dagre auto-layout, consistent colour bands and labelled decision edges were the difference between a demo and a tool.",
      },
      {
        title: "Translate the engine's errors",
        body: "Validation failures came back in the engine's own vocabulary, which is fine for the engine team and useless for a business user. Translating them into plain English at the boundary removed most of the support surface in one move.",
      },
    ],
    results: [
      {
        value: "3",
        label: "Repositories delivered",
        note: "conversational · main · frontend",
      },
      {
        value: "1",
        label: "Feature, end to end",
        note: "prompt → validated graph → canvas",
      },
      {
        value: "100%",
        label: "Node-registry constrained",
        note: "no invalid node reaches the canvas",
      },
      { value: "4", label: "Repositories unified", note: "one coherent build" },
    ],
  },

  {
    slug: "ingskills",
    index: "07",
    title: "InGSkills",
    kicker: "A playbook for building agentic AI platforms",
    summary:
      "A 100+ skill library of production-grade engineering patterns for building agentic AI platforms: agent orchestration, cost accounting, RAG indexing, API design and more, each written as a self-contained, drop-in skill.",
    year: "2026",
    role: "Creator and architect",
    status: "In active use",
    featured: false,
    span: "narrow",
    stack: [
      "Agentic architecture",
      "Pattern design",
      "Technical writing",
      "Markdown authoring",
    ],
    context:
      "Production AI platforms are full of hard-won engineering judgment that never gets written down: not just what to do, but the real constraint that forces a design into its shape. I built a library that captures that properly, so the next platform I or a team builds starts from distilled judgment instead of a blank page.",
    problem:
      "A skill that only explains how something works is a tutorial. The value is in the reasoning: why the design was forced into its shape, and how to apply it when the next project is different. Every skill in the library teaches the judgment, not just the steps.",
    built: [
      "A strict authoring format for every skill: when to use it, what it gives you, the core concepts and the constraint that forced the design, a numbered end-to-end implementation with runnable code, and the transferable rules.",
      "100+ skills organised into four priority tiers (High, Medium, Low, Extra) so the next build reaches for the essentials first: agent orchestration, LLM cost accounting, RAG indexing and API conventions before niche infrastructure patterns.",
      "Deep-dive passes on security (gateway authentication, tamper-detected audit trails), database design (partitioned audit tables, conditional unique indexes), and operational patterns (circuit breakers, sliding-window rate limits).",
      "Each skill self-contained in one file by design, with no shared references, so any single one drops into a new project without pulling in the rest of the library.",
    ],
    architecture: {
      caption:
        "Recognise the pattern, name the constraint, write it once, organise by priority.",
      layers: [
        { label: "Source", nodes: ["Hands-on platform engineering"] },
        { label: "Recognise", nodes: ["Pattern extraction"] },
        { label: "Distil", nodes: ["One pattern + its forcing constraint"] },
        { label: "Organise", nodes: ["High", "Medium", "Low", "Extra"] },
        { label: "Output", nodes: ["100+ self-contained SKILL.md files"] },
      ],
    },
    decisions: [
      {
        title: "Teach the constraint, not just the steps",
        body: "Nearly every pattern worth writing down exists because something forced it: a race condition, a cost ceiling, a compliance rule. Naming that constraint explicitly is what lets someone apply the pattern correctly to a problem that looks slightly different from the original.",
      },
      {
        title: "One file, no shared references",
        body: "Splitting a skill across multiple linked files is convenient to write and painful to reuse: the moment one file moves, every skill depending on it breaks. Keeping each skill fully self-contained costs some duplication, in exchange for a file that works correctly wherever it is dropped.",
      },
      {
        title: "Priority tiers over alphabetical order",
        body: "An alphabetical list treats agent orchestration and a minor styling tweak as equally important. Grouping by priority tier means someone building a platform from scratch knows exactly what to read first and what can wait.",
      },
    ],
    results: [
      { value: "100+", label: "Production skills in the library" },
      {
        value: "4",
        label: "Priority tiers",
        note: "High · Medium · Low · Extra",
      },
      {
        value: "1",
        label: "Self-contained file per skill",
        note: "drops into any project",
      },
    ],
  },

  {
    slug: "nexadesk",
    index: "08",
    title: "NexaDesk",
    kicker: "Multi-tenant AI support desk",
    summary:
      "An AI-assisted support-ticket system built solo in my first two months: classification, streamed AI suggestions, and real tenant isolation, deployed live and demoed end to end.",
    year: "2026",
    role: "Sole engineer",
    status: "Deployed live",
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
      "Built in my first two months on the team as one of two full-stack capstones, each taken from an empty repository to a deployed, working application. NexaDesk was the support-desk build.",
    problem:
      "A support-ticket tool is only as useful as its triage. The system needed to classify incoming tickets by priority and category automatically, surface AI-drafted responses without blocking the agent, and do all of it without one organisation ever seeing another's data.",
    built: [
      "AI priority and category classification on ticket creation, with a FastAPI + LangChain + Groq service behind the main API.",
      "Server-sent-event streamed AI response suggestions, so an agent starts reading while the model is still writing.",
      "Organisation-scoped data isolation enforced at the data-access layer, plus admin/member role separation.",
      "A full invite → accept → role-assignment flow for bringing a new organisation and its members onto the platform.",
      "Deployed to Render and demonstrated running live, with a clean, visible commit history showing exactly how the system was built.",
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
          nodes: ["FastAPI", "LangChain", "Groq", "Streaming classification"],
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
        title: "Stream the triage, do not spinner it",
        body: "AI priority and category suggestions over server-sent events rather than a blocking request. The perceived latency collapses, and the agent gets to start reading while the model is still writing.",
      },
      {
        title: "Ship with a public commit history",
        body: "The commit log runs from the first line of code through to deployment: the architecture, the iterations and the delivery are visible end to end. The build speaks for itself, commit by commit.",
      },
    ],
    results: [
      { value: "Solo", label: "Built end to end" },
      { value: "11 days", label: "First commit to live deploy" },
      {
        value: "Multi-tenant",
        label: "Organisation-scoped isolation",
        note: "enforced at the data layer",
      },
      {
        value: "SSE",
        label: "Streamed AI suggestions",
        note: "no blocking spinner",
      },
    ],
    links: [
      {
        label: "NexaDesk on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/NexaDesk",
      },
    ],
  },

  {
    slug: "stockpilot",
    index: "09",
    title: "StockPilot",
    kicker: "Multi-tenant AI inventory system",
    summary:
      "An AI-assisted inventory and procurement system built solo in my first two months: a four-role permission model, streamed procurement recommendations, and tenant-safe data isolation.",
    year: "2026",
    role: "Sole engineer",
    status: "Deployed live",
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
      "The second of two full-stack capstones built in my first two months, deployed live alongside NexaDesk.",
    problem:
      "Inventory decisions need more than a stock count. They need a recommendation on what to reorder and why, delivered to the right role, without one organisation's stock levels ever leaking into another's view.",
    built: [
      "AI procurement recommendations and streamed procurement reports from a FastAPI + LangChain + Groq service.",
      "A four-role permission model (owner, admin, manager, member), each seeing a different slice of the same data.",
      "The same invite → accept → role-assignment flow as NexaDesk, reused and adapted for the extra role tier.",
      "Organisation-scoped isolation at the data layer, deployed to Render and demonstrated live.",
    ],
    architecture: {
      caption:
        "Same spine as NexaDesk, one more role tier, a different AI task on top.",
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
          nodes: [
            "FastAPI",
            "LangChain",
            "Groq",
            "Streaming procurement reports",
          ],
        },
        {
          label: "Data",
          nodes: ["PostgreSQL", "Drizzle ORM", "Org-scoped isolation"],
        },
      ],
    },
    decisions: [
      {
        title: "Four roles, one data model",
        body: "Owner, admin, manager and member all read the same inventory tables through different views rather than four separate schemas. Extending the permission tier without forking the data model kept the system small enough to finish in two months.",
      },
      {
        title: "Recommendations, not just numbers",
        body: "A raw reorder-point calculation is a spreadsheet. Wrapping it in an LLM-generated explanation of why this item and why now turns a report nobody reads into one a manager acts on.",
      },
    ],
    results: [
      { value: "Solo", label: "Built end to end" },
      { value: "4", label: "Role tiers", note: "owner → admin → manager → member" },
      { value: "Live", label: "Deployed and demoed end to end" },
      {
        value: "AI",
        label: "Streamed procurement recommendations",
        note: "role-aware and explained",
      },
    ],
    links: [
      {
        label: "StockPilot on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/StockPilot",
      },
    ],
  },

  {
    slug: "buddyai-platform",
    index: "10",
    title: "BuddyAI",
    kicker: "A conversational platform, built from a gateway up",
    summary:
      "A multi-tenant conversational AI platform built as independent microservices behind one gateway: agent orchestration, auth, billing and chat, each their own service, each their own concern.",
    year: "2026",
    role: "Sole engineer",
    status: "Built end to end",
    featured: false,
    span: "narrow",
    stack: [
      "Node.js",
      "Express",
      "LangGraph",
      "Redis",
      "React",
      "Vite",
      "Docker",
    ],
    context:
      "A personal project to build a conversational AI product the way a platform team would, rather than the way a weekend project usually is. Services split by concern from day one, not refactored into that shape later.",
    problem:
      "A single monolithic chat backend tangles agent orchestration, authentication, billing and conversation history together until none of them can be changed independently. The goal was to keep those concerns separable from the first commit.",
    built: [
      "An API gateway routing to four independent services (agent, auth, billing, chat), each with its own Dockerfile, config and routes.",
      "An agent service built around a LangGraph orchestration graph, so the reasoning flow is an explicit, inspectable graph rather than a chain of string-matched if-statements.",
      "A billing service with order creation and payment verification, and an auth service with its own user and session model.",
      "A React + Vite frontend with a Redux-managed conversation store: create/fetch conversations, send and receive messages, log out.",
      "Redis wired in at the gateway layer for the cross-service state that a stateless request/response model cannot carry on its own.",
    ],
    architecture: {
      caption:
        "One gateway, four independently deployable services, each owning one concern.",
      layers: [
        {
          label: "Client",
          nodes: ["React + Vite", "Redux conversation store"],
        },
        { label: "Gateway", nodes: ["Routing", "Redis-backed state"] },
        {
          label: "Services",
          nodes: ["agent (LangGraph)", "auth", "billing", "chat"],
        },
        { label: "Infra", nodes: ["Per-service Dockerfile", "docker-compose"] },
      ],
    },
    decisions: [
      {
        title: "Split by concern before there was pressure to",
        body: "It would have been faster to build one Express app with four route groups. Splitting into four services from the start forces each one to define its own contract early, which is the point. The cost is paid once, deliberately, instead of later, under pressure, during an incident.",
      },
      {
        title: "LangGraph over a prompt-chaining script",
        body: "Conversational agent logic that lives as a sequence of string-matched conditions becomes unreadable fast. A graph makes the control flow a diagram you can actually look at, and makes adding a new branch a node, not a new nested if.",
      },
    ],
    results: [
      { value: "4", label: "Independent microservices" },
      { value: "1", label: "Gateway", note: "single entry point" },
      {
        value: "LangGraph",
        label: "Orchestration model",
        note: "explicit, inspectable",
      },
    ],
  },

  {
    slug: "resume-evidence-reconciliation",
    index: "11",
    title: "Resume Evidence Reconciliation Agent",
    kicker: "Does the claim survive contact with evidence?",
    summary:
      "A deterministic evidence-reconciliation engine that checks a resume's claims against a candidate's actual GitHub activity, built in a one-hour engineering challenge and designed to run offline with zero API keys.",
    year: "2026",
    role: "Sole engineer",
    status: "Delivered in a one-hour build",
    featured: false,
    span: "narrow",
    stack: [
      "Python",
      "pydantic-settings",
      "Streamlit",
      "python-docx",
      "Groq (optional)",
    ],
    context:
      "A one-hour engineering challenge: given a candidate's resume and GitHub activity, produce a credibility report a recruiter could actually use, with no guarantee of a live API key at grading time.",
    problem:
      "A recruiter spends about six seconds on a resume. The only question that matters is whether the claims on it survive contact with verifiable evidence. On the supplied case, the resume claimed 'Python (Expert)' plus a stack of Python frameworks. The candidate's GitHub showed zero Python repositories and three strong, unmentioned frontend projects. The system has to surface exactly that gap, deterministically, not as a vibe.",
    built: [
      "A typed domain model separating resume claims from GitHub evidence, with a pluggable GitHub provider (live REST API or a deterministic fixture) so the same code path runs online or fully offline.",
      "A deterministic Evidence Reconciliation Engine: every canonical skill gets a `SkillVerdict` (claim, evidence strength, verdict, and a citation back to its source) computed by explicit scoring, not by asking an LLM to judge.",
      "A framework-to-language inference step, so React appearing in three repositories counts as real React evidence even though the word 'React' never appears on the resume.",
      "Aggregate scoring: a recruiter-readiness score and a credibility-risk percentage: the share of headline claims a recruiter cannot verify.",
      "An LLM-optional resume rewriter that leads with what is provable, plus a Streamlit UI and a headless CLI for grading without a browser.",
    ],
    architecture: {
      caption:
        "Deterministic reconciliation core; the LLM is an optional layer on top, never load-bearing.",
      layers: [
        {
          label: "Ingest",
          nodes: ["PDF / DOCX / TXT loader", "Resume parser"],
        },
        {
          label: "Evidence",
          nodes: [
            "GitHub provider (live or fixture)",
            "Language + framework extraction",
          ],
        },
        {
          label: "Reconcile",
          nodes: [
            "Skill taxonomy",
            "Deterministic scoring engine",
            "Verdict + citation",
          ],
        },
        {
          label: "Report",
          nodes: ["Readiness score", "Credibility risk %", "Rewritten resume"],
        },
      ],
    },
    decisions: [
      {
        title: "Deterministic code, not an LLM judgment call",
        body: "Letting a model decide whether Python is 'really' on a GitHub profile is unauditable and occasionally wrong with total confidence. Evidence strength is computed from repo count, language byte-share, commit-volume share, recency decay and star count, numbers that can be recomputed by hand. The LLM only writes the prose explanation afterward.",
      },
      {
        title: "Must run with zero API keys",
        body: "A grader has no guarantee of a key, and a `.env` file must never be part of a graded submission. A `NullLLM` provider means the system produces a complete, correct report with no network call at all. The LLM is a quality upgrade, never a dependency.",
      },
      {
        title: "Framework evidence beyond the brief",
        body: "The brief focused on catching overclaimed skills. I extended the engine to the inverse: proving a skill the candidate has but never wrote down. Inferring React from three repositories that use it surfaced the most resume-relevant finding in the sample case.",
      },
    ],
    results: [
      { value: "1 hour", label: "Timed build window" },
      { value: "0", label: "API keys required to run" },
      {
        value: "4",
        label: "Verdict classes",
        note: "verified · overclaimed · undersold · stale",
      },
      {
        value: "3",
        label: "Input formats supported",
        note: "PDF · DOCX · TXT",
      },
    ],
  },

  {
    slug: "loopr-finance-dashboard",
    index: "12",
    title: "Loopr Finance",
    kicker: "A financial command centre, benchmark-built",
    summary:
      "A full-stack financial analytics dashboard matched to a Figma design: live balances, a filterable transaction table, a configurable CSV report builder, and a notification inbox derived from the data itself.",
    year: "2026",
    role: "Sole engineer",
    status: "Delivered end to end",
    featured: false,
    span: "narrow",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "shadcn/ui",
      "Recharts",
      "TanStack Query/Table",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
    ],
    context:
      'A full-stack build benchmarked end to end: a Figma design ("Penta") matched precisely, 300 sample transactions served through a real API, and a working product at the end, not a prototype.',
    problem:
      "A finance dashboard is only as useful as its filtering and its exports. The brief asked for server-side pagination, sortable and searchable tables, shareable filtered views, and a report builder: the parts that are easy to fake with a static mock and hard to actually get right.",
    built: [
      "A layered Express API (`routes → controller → service → model`) with JWT access tokens plus a rotating httpOnly refresh cookie, where reuse after rotation revokes the whole session family.",
      "A transactions table with server-side pagination, column sorting with `aria-sort` indicators, debounced real-time search, and a full filter set (date range, amount range, category, status, user) that lives in the URL so any view is shareable.",
      "A CSV export builder: drag-and-drop column selection, three presets, a live preview, and a stream from the API that honours the current filters and sort rather than exporting everything.",
      "A wallet view (cash position, receivable vs payable, projected balance) and an analytics view with period-over-period KPI deltas and per-person comparisons.",
      "A notification inbox derived from the data itself: large-transaction and monthly-summary alerts, not a separate notifications table someone has to remember to write to.",
      "A Playwright end-to-end suite covering login, every page, filters, report generation and download, and mobile.",
    ],
    architecture: {
      caption:
        "A conventional layered API, a feature-first React app, one contract documented in OpenAPI.",
      layers: [
        {
          label: "Client",
          nodes: ["React + Vite", "TanStack Query/Table", "shadcn/ui"],
        },
        {
          label: "API",
          nodes: ["Express", "routes → controller → service → model"],
        },
        {
          label: "Auth",
          nodes: [
            "JWT access (15 min)",
            "Rotating refresh cookie",
            "Session-family revocation",
          ],
        },
        {
          label: "Data",
          nodes: ["MongoDB", "Mongoose", "Seeded sample dataset"],
        },
        {
          label: "Quality",
          nodes: [
            "Playwright E2E",
            "vitest + supertest",
            "OpenAPI 3.1 contract",
          ],
        },
      ],
    },
    decisions: [
      {
        title: "Filters live in the URL",
        body: "A filtered, sorted, paginated view that cannot be shared or bookmarked is a worse version of the same feature. Putting filter state in the URL meant the browser's own back button and address bar did the state-sharing work for free.",
      },
      {
        title: "Rotating refresh tokens, with reuse detection",
        body: "A refresh token that never rotates is a long-lived bearer credential. Rotating it on every use, and revoking the entire session family the moment a used token is replayed, turns a stolen refresh token into a one-shot liability instead of a standing one.",
      },
      {
        title: "Notifications computed, not stored",
        body: "A notifications table that another feature has to remember to write to always drifts out of sync. Deriving alerts from the transaction data at read time means there is nothing to forget to wire up when a new alert type is added.",
      },
    ],
    results: [
      {
        value: "4",
        label: "Layered API",
        note: "routes → controller → service → model",
      },
      { value: "10", label: "Reports + analytics + wallet views" },
      {
        value: "E2E",
        label: "Playwright coverage",
        note: "login → export → mobile",
      },
      {
        value: "15 min",
        label: "Access-token lifetime",
        note: "rotating refresh, reuse detection",
      },
    ],
    links: [
      {
        label: "Loopr Finance on GitHub",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Finance",
      },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "BookFlow",
    blurb:
      "A ticket-management system for a book-focused e-commerce flow: browsing, ordering, and order tracking.",
    stack: "TypeScript",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/BookFlow",
  },
  {
    name: "Pulse (Elite Infosoft)",
    blurb:
      "A website-availability-monitoring platform in .NET, benchmarked against Paessler PRTG: duration-based uptime, multi-check coverage, and confirmed-before-declared outages. Currently running in production.",
    stack: ".NET 10 · ASP.NET Core MVC · EF Core · PostgreSQL",
  },
  {
    name: "ParkSecure",
    blurb:
      "An automatic-number-plate-recognition parking system: owner and vehicle registration, entry/exit logging from an uploaded plate image.",
    stack: "Python · Flask · OpenCV · SQLite",
  },
  {
    name: "Career Coach Agent",
    blurb:
      "An agentic assistant for career guidance, built on an LLM tool-calling loop.",
    stack: "Python · LLM agents",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Career-Coach-Agent",
  },
  {
    name: "NLP Resume Screening Engine",
    blurb:
      "Transformer sentence embeddings and cosine similarity to rank candidates against a job description across PDF, DOCX, TXT and CSV.",
    stack: "Python · Sentence-Transformers · Streamlit · SQLite",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/AI-Powered-Resume-Screening-System",
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
      "Ten-plus deployed models: XGBoost salary prediction, ANN car pricing, and voting-classifier ensembles with SMOTE for loan, heart-disease and placement prediction.",
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
      "A complete relational schema for food-delivery operations: orders, riders, restaurants, settlement.",
    stack: "SQL · Database design",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Food-Delivery-DBMS",
  },
];

export const featuredWork = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
