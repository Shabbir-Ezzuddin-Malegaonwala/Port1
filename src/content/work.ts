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
      "A related 51,532-row lead and market-data enrichment pass feeding the same engagement — profiled column by column, rebuilt to a frozen 92-column schema, chunked and gated (12/12 integrity checks, 17/17 QA) before being folded into the client deliverable.",
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
        value: "51,532",
        label: "Rows in the related enrichment pass",
        note: "92-column frozen schema",
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
    slug: "nexadesk",
    index: "05",
    title: "NexaDesk",
    kicker: "Multi-tenant AI support desk",
    summary:
      "An AI-assisted support-ticket system built solo in the first two months on the job — classification, streamed AI suggestions, and real tenant isolation — then deployed and defended in a senior review.",
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
      "My onboarding ended in two assessment gates: a conceptual interview, and a code review plus deployment verification plus live feature demo of an application I had to build myself. NexaDesk was one of the two.",
    problem:
      "A support-ticket tool is only as useful as its triage. The system needed to classify incoming tickets by priority and category automatically, surface AI-drafted responses without blocking the agent, and do all of it without one organisation ever seeing another's data.",
    built: [
      "AI priority and category classification on ticket creation, with a FastAPI + LangChain + Groq service behind the main API.",
      "Server-sent-event streamed AI response suggestions, so an agent starts reading while the model is still writing.",
      "Organisation-scoped data isolation enforced at the data-access layer, plus admin/member role separation.",
      "A full invite → accept → role-assignment flow for bringing a new organisation and its members onto the platform.",
      "Deployed to Render and demonstrated running live, with the debugging history left visible in the commit log.",
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
        body: "AI priority and category suggestions over server-sent events rather than a blocking request. The latency does not change but the perceived latency collapses, and the agent gets to start reading while the model is still writing.",
      },
      {
        title: "Leave the debugging in the commit history",
        body: "The public commit log contains real fixes with real messages — a trailing slash breaking a stream URL, a cross-domain cookie rewrite of the auth flow. I did not squash that away. A clean history of perfect commits teaches a reviewer nothing about how you actually work.",
      },
    ],
    results: [
      { value: "Solo", label: "Built in the first two months" },
      { value: "Pass", label: "Senior code review + live demo gate" },
      { value: "2", label: "Roles", note: "admin / member" },
      { value: "15", label: "Commits over 11 days", note: "public history" },
    ],
    limitations: [
      "This is an assessment build, scoped to prove competence rather than carry real support volume. It has not been run at scale or hardened against hostile traffic.",
      "The AI classification is a solid application of an LLM to a structured labelling task, not novel modelling work.",
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
    index: "06",
    title: "StockPilot",
    kicker: "Multi-tenant AI inventory system",
    summary:
      "An AI-assisted inventory and procurement system — the second solo capstone from onboarding, with a four-role permission model and streamed procurement recommendations.",
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
      "The second of the two solo capstone applications from my onboarding, built and deployed alongside NexaDesk and defended in the same code-review and live-demo gate.",
    problem:
      "Inventory decisions need more than a stock count — they need a recommendation on what to reorder and why, delivered to the right role, without one organisation's stock levels ever leaking into another's view.",
    built: [
      "AI procurement recommendations and streamed procurement reports from a FastAPI + LangChain + Groq service.",
      "A four-role permission model — owner, admin, manager, member — each seeing a different slice of the same data.",
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
        body: "Owner, admin, manager and member all read the same inventory tables through different views rather than four separate schemas. Extending the permission tier without forking the data model kept the system small enough to actually finish in two months.",
      },
      {
        title: "Recommendations, not just numbers",
        body: "A raw reorder-point calculation is a spreadsheet. Wrapping it in an LLM-generated explanation — why this item, why now — was the difference between a report nobody reads and one a manager acts on.",
      },
    ],
    results: [
      { value: "Solo", label: "Built in the first two months" },
      { value: "Pass", label: "Senior code review + live demo gate" },
      { value: "4", label: "Roles", note: "owner → admin → manager → member" },
      {
        value: "26",
        label: "Evidence screenshots",
        note: "from the assessment gate",
      },
    ],
    limitations: [
      "Like NexaDesk, this is an assessment build — proof of competence, not a production inventory system carrying real stock data at scale.",
      "Procurement recommendations are LLM-generated explanations over a conventional reorder-point calculation, not a learned demand-forecasting model.",
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
    index: "07",
    title: "BuddyAI",
    kicker: "A conversational platform, built from a gateway up",
    summary:
      "A multi-tenant conversational AI platform built as independent microservices behind one gateway — agent orchestration, auth, billing and chat each their own service, each their own concern.",
    year: "2026",
    role: "Sole engineer",
    status: "Built, self-directed",
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
      "A personal project to build a conversational AI product the way a platform team would, rather than the way a weekend project usually is — services split by concern from day one, not refactored into that shape later.",
    problem:
      "A single monolithic chat backend tangles agent orchestration, authentication, billing and conversation history together until none of them can be changed independently. The goal was to keep those concerns separable from the first commit.",
    built: [
      "An API gateway routing to four independent services — agent, auth, billing, chat — each with its own Dockerfile, config and routes.",
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
        body: "It would have been faster to build one Express app with four route groups. Splitting into four services from the start forces each one to define its own contract early, which is the point — the cost is paid once, deliberately, instead of later, under pressure, during an incident.",
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
    limitations: [
      "Self-directed and not load-tested against real concurrent traffic — the architecture is built for independent scaling, but that has not been proven under load.",
      "No automated test suite yet; correctness has been verified by hand through the running services, not by a CI gate.",
    ],
  },

  {
    slug: "resume-evidence-reconciliation",
    index: "08",
    title: "Resume Evidence Reconciliation Agent",
    kicker: "Does the claim survive contact with evidence?",
    summary:
      "A deterministic evidence-reconciliation engine that checks a resume's claims against a candidate's actual GitHub activity — built in a one-hour timed assessment, offline-first, zero API keys required to run.",
    year: "2026",
    role: "Sole engineer",
    status: "Delivered, timed assessment",
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
      "An HR-agent assessment: given a candidate's resume and their GitHub activity, produce a credibility report a recruiter could actually use — in one hour, with no guarantee of a live API key at grading time.",
    problem:
      "A recruiter spends about six seconds on a resume. The only question that matters is whether the claims on it survive contact with verifiable evidence. On the supplied case, the resume claimed 'Python (Expert)' plus a stack of Python frameworks — and the candidate's GitHub showed zero Python repositories and three strong, unmentioned frontend projects. The system has to surface exactly that gap, deterministically, not as a vibe.",
    built: [
      "A typed domain model separating resume claims from GitHub evidence, with a pluggable GitHub provider — live REST API or a deterministic fixture — so the same code path runs online or fully offline.",
      "A deterministic Evidence Reconciliation Engine: every canonical skill gets a `SkillVerdict` (claim, evidence strength, verdict, and a citation back to its source) computed by explicit scoring, not by asking an LLM to judge.",
      "A framework-to-language inference step, so React appearing in three repositories counts as real React evidence even though the word 'React' never appears on the resume.",
      "Aggregate scoring: a recruiter-readiness score and a credibility-risk percentage — the share of headline claims a recruiter cannot verify.",
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
        title:
          "The reconciliation engine is deterministic code, not an LLM judgment call",
        body: "Letting a model decide whether Python is 'really' on a GitHub profile is unauditable and occasionally wrong with total confidence. Evidence strength is computed from repo count, language byte-share, commit-volume share, recency decay and star count — numbers you can recompute by hand. The LLM only writes the prose explanation afterward.",
      },
      {
        title: "Must run with zero API keys",
        body: "A grader has no guarantee of a key, and a `.env` file must never be part of a graded submission. A `NullLLM` provider means the system produces a complete, correct report with no network call at all — the LLM is a quality upgrade, never a dependency.",
      },
      {
        title: "Framework evidence closes a real gap in the spec",
        body: "The brief's rule set had an implicit gap: it could flag an overclaimed skill, but nothing detected a skill the candidate had but never wrote down. Inferring React from three repositories that use it, independent of what the resume says, is what actually caught the most resume-relevant finding in the sample case.",
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
    limitations: [
      "Evidence strength is a heuristic scoring function over public signals (recency, volume, stars) — it is a strong proxy for depth, not a certified measurement of skill.",
      "GitHub is the only evidence source. A candidate's real expertise in private repos or non-GitHub work is invisible to this version.",
    ],
  },

  {
    slug: "loopr-finance-dashboard",
    index: "09",
    title: "Loopr Finance",
    kicker: "A financial command centre, benchmark-built",
    summary:
      "A full-stack financial analytics dashboard matched to a Figma design — live balances, a filterable transaction table, a configurable CSV report builder, and a notification inbox derived from the data itself.",
    year: "2026",
    role: "Sole engineer",
    status: "Built, benchmark assignment",
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
      'A full-stack assignment built as a benchmark of a complete engineering process end to end: a Figma design ("Penta") to match pixel-for-pixel, 300 sample transactions to serve, and a working product at the end, not a prototype.',
    problem:
      "A finance dashboard is only as useful as its filtering and its exports. The brief asked for server-side pagination, sortable and searchable tables, shareable filtered views, and a report builder — the parts that are easy to fake with a static mock and hard to actually get right.",
    built: [
      "A layered Express API (`routes → controller → service → model`) with JWT access tokens plus a rotating httpOnly refresh cookie — reuse after rotation revokes the whole session family.",
      "A transactions table with server-side pagination, column sorting with `aria-sort` indicators, debounced real-time search, and a full filter set (date range, amount range, category, status, user) that lives in the URL so any view is shareable.",
      "A CSV export builder: drag-and-drop column selection, three presets, a live preview, and a stream from the API that honours the current filters and sort rather than exporting everything.",
      "A wallet view (cash position, receivable vs payable, projected balance) and an analytics view with period-over-period KPI deltas and per-person comparisons.",
      "A notification inbox derived from the data itself — large-transaction and monthly-summary alerts, not a separate notifications table someone has to remember to write to.",
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
      { value: "300", label: "Seeded sample transactions" },
      { value: "10", label: "Reports + analytics + wallet views" },
      {
        value: "E2E",
        label: "Playwright coverage",
        note: "login → export → mobile",
      },
      {
        value: "v1 + v2",
        label: "Documented API contract",
        note: "OpenAPI 3.1",
      },
    ],
    limitations: [
      "Built against a seeded sample dataset of 300 transactions — it has not been exercised against the data volumes or edge cases of a real multi-year transaction history.",
      "A benchmark assignment, not a commercial product: no billing, no multi-organisation tenancy, no production monitoring.",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "Dubai Operations Platform",
    blurb:
      "A multi-persona, order-to-billing operations platform delivered for an international client — team and role-based access across the full order lifecycle. Client and platform details stay confidential; the architecture pattern does not.",
    stack: "Enterprise workflow automation · RBAC",
  },
  {
    name: "Digivyapar",
    blurb:
      "An AI chat interface for Indian MSMEs to run invoicing, inventory, expenses and marketing from one conversation. Team project — my contribution was the AI automation layer.",
    stack: "AI automation · Docker",
    href: "https://digivyapar.in",
  },
  {
    name: "BookFlow",
    blurb:
      "A ticket-management system for a book-focused e-commerce flow — browsing, ordering, and order tracking.",
    stack: "TypeScript",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/BookFlow",
  },
  {
    name: "InGSkills",
    blurb:
      "A personal library of 77 reusable engineering-pattern skills, distilled from production platform work — agent orchestration, cost accounting, RAG indexing, API conventions and more — written for public reuse.",
    stack: "Skill authoring · knowledge distillation",
  },
  {
    name: "Pulse (Elite Infosoft)",
    blurb:
      "A website-availability-monitoring MVP in .NET, benchmarked against Paessler PRTG — duration-based uptime, multi-check coverage, confirmed-before-declared outages. Currently in production for an internship evaluation.",
    stack: ".NET 10 · ASP.NET Core MVC · EF Core · PostgreSQL",
  },
  {
    name: "ParkSecure",
    blurb:
      "An automatic-number-plate-recognition parking system — owner and vehicle registration, entry/exit logging from an uploaded plate image.",
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
