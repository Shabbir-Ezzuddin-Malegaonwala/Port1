import type { CaseStudy, SideProject } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "digivyapar",
    index: "01",
    title: "Digivyapar",
    kicker: "The whole business, run from one chat",
    summary:
      "Digivyapar puts invoicing, inventory, expenses, sales and marketing inside Telegram. A business owner sends a photo, a voice note or a sentence, and the work is done. Live with real businesses, built by a six-person team.",
    year: "2026",
    role: "AI product lead · six-person team",
    status: "Live with businesses",
    featured: true,
    span: "wide",
    stack: [
      "Conversational business",
      "Document AI",
      "Voice AI",
      "Marketing automation",
      "Business operations",
    ],
    context:
      "India has 63 million MSMEs, and most still run on notebooks, WhatsApp and memory. Owners do not lack ambition; they lack time, and they will not stop to learn another dashboard. Digivyapar gives them one conversation that runs the business.",
    problem:
      "Every new app is another thing to learn and another place for work to get lost. The product had to live where the owner already is, understand a photo or a spoken sentence, and return a finished business result in seconds.",
    built: [
      "Invoice capture that turns a photo into a clean, logged record, removing the manual entry step that used to eat minutes out of every sale.",
      "A voice sales agent that takes a lead from a voice note and qualifies it automatically, so no enquiry goes cold.",
      "A business command centre inside chat, where the owner can see and update daily operations without opening a spreadsheet.",
      "An AI marketing engine that drafts and schedules social posts, keeping the business visible without hiring an agency.",
      "A single automation platform underneath it all, so the team can launch a new service in days instead of rebuilding the business for every feature.",
    ],
    architecture: {
      caption: "One conversation in. A fully run business out.",
      layers: [
        { label: "Owner", nodes: ["Photo", "Voice note", "Plain text"] },
        {
          label: "AI desk",
          nodes: [
            "Invoice capture",
            "Voice sales agent",
            "Operations manager",
            "Marketing engine",
          ],
        },
        {
          label: "Business",
          nodes: [
            "Clean records",
            "Qualified leads",
            "Daily operations",
            "Consistent presence",
          ],
        },
        { label: "Result", nodes: ["One place to work", "No new apps"] },
      ],
    },
    decisions: [
      {
        title: "Make adoption effortless",
        body: "The best automation is the one people keep using. Telegram is already open on every owner's phone, so the product lives there: no download, no training, no dashboard to ignore. The value arrives in the same conversation they already check every day.",
      },
      {
        title: "One conversation, the whole business",
        body: "Accounting, inventory, sales and marketing usually live in four disconnected tools. Bringing them into one thread means the owner sees the business as it is, not a pile of apps that each tell a different story.",
      },
      {
        title: "Solve the hours that cost the most first",
        body: "We prioritised invoice capture and marketing because those were the two jobs taking the most owner-hours and losing the most revenue. Shipping the highest-value work first is what turned the product from a clever idea into something businesses use every day.",
      },
    ],
    results: [
      {
        value: "1",
        label: "Conversation runs the business",
        note: "invoicing, inventory, sales and marketing",
      },
      {
        value: "Seconds",
        label: "Paper invoice to clean record",
        note: "no manual data entry",
      },
      {
        value: "24/7",
        label: "Every lead qualified",
        note: "sales follow-up that never sleeps",
      },
      {
        value: "4",
        label: "Core business functions automated",
        note: "in a channel owners already use",
      },
    ],
    links: [{ label: "Visit digivyapar.in", href: "https://digivyapar.in" }],
  },

  {
    slug: "jordan-valuation-engine",
    index: "02",
    title: "Real-Estate Valuation Intelligence",
    kicker: "A launch price the board can defend",
    summary:
      "A valuation intelligence platform for a Jordanian developer: six marketplaces unified into one clean market view, a comparable-based appraisal engine, and a recommendation that shows its evidence. Built to price a tower launch right the first time.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Delivered to client",
    featured: true,
    span: "narrow",
    stack: [
      "Market intelligence",
      "Valuation modelling",
      "Explainable AI",
      "Geospatial analytics",
    ],
    context:
      "A developer had a finished tower and one irreversible decision: the launch price. In Jordan a launch price can go up but must never come down, because a public cut destroys buyer confidence. The number had to be right, and it had to survive a board room.",
    problem:
      "Jordan publishes no unit-level transaction prices, so there is no perfect dataset to learn from. The only signals are asking prices scattered across six portals, cross-posted and inconsistent. The challenge was to turn that noise into a recommendation a board could trust.",
    built: [
      "A unified market view from six portals: 52,647 verified listings after removing duplicates and reconciling conflicting attributes.",
      "A comparable-based appraisal engine that prices any unit against the closest real market evidence, with every adjustment calculated rather than assumed.",
      "An evidence trail behind every number, so any recommendation can be traced to the listings and reasoning that produced it.",
      "An interactive market map and a natural-language analyst that answers board-level questions against the same live data.",
      "A pricing recommendation bounded by construction cost and rental yield, so the number is ambitious but never detached from reality.",
    ],
    architecture: {
      caption: "Scattered market signals in. One defensible launch price out.",
      layers: [
        {
          label: "Market",
          nodes: ["6 portals", "52,647 clean listings"],
        },
        {
          label: "Intelligence",
          nodes: ["Comparable engine", "Evidence on every number"],
        },
        {
          label: "Decision",
          nodes: ["Board-ready valuation", "Cost and yield guardrails"],
        },
        {
          label: "Experience",
          nodes: ["Market map", "AI analyst", "Full audit trail"],
        },
      ],
    },
    decisions: [
      {
        title: "Transparency wins the board room",
        body: "A black-box number cannot be defended when a board member asks why. Every premium, every comparable and every adjustment is visible, so the conversation is about the evidence instead of trust.",
      },
      {
        title: "Price from the market, not from a guess",
        body: "The engine builds every answer from the closest live comparables and the client's own methodology. It shows its work at every step, so each number arrives with the evidence behind it.",
      },
      {
        title: "Protect the downside",
        body: "A launch price is hard to reverse. The engine anchors every recommendation between a construction-cost floor and a rent-yield ceiling, so ambition never turns into a number the market can reject.",
      },
    ],
    results: [
      {
        value: "6 → 1",
        label: "Marketplaces unified into one view",
        note: "clean, deduplicated, current",
      },
      {
        value: "52,647",
        label: "Market listings analysed",
        note: "every one traceable",
      },
      {
        value: "1",
        label: "Launch price, ready for the board",
        note: "built on evidence, not opinion",
      },
      {
        value: "100%",
        label: "Recommendations with an audit trail",
        note: "no black box",
      },
    ],
    links: [
      {
        label: "Explore the project",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Real-Estate-Jordan",
      },
    ],
  },

  {
    slug: "dubai-operations-platform",
    index: "03",
    title: "Dubai Operations Platform",
    kicker: "Nine roles. One platform. Zero handoff chaos.",
    summary:
      "An enterprise operations platform that runs an international client's order-to-billing lifecycle end to end. Nine distinct roles, one shared source of truth, and every approval in the right hands.",
    year: "2026",
    role: "Delivery lead, concept to launch",
    status: "Delivered to client",
    featured: true,
    span: "wide",
    stack: [
      "Enterprise operations",
      "Role-based platforms",
      "Workflow automation",
      "Approval workflows",
    ],
    context:
      "An international operations business was running a complex order-to-billing process across spreadsheets, inboxes and disconnected tools. Nine different roles touched the same order, each with a different job and a different view.",
    problem:
      "The challenge was not automating a single step. It was giving nine different people one coherent system without flattening their jobs into a generic dashboard, and without letting a handoff fall through the cracks.",
    built: [
      "A single order-to-billing lifecycle covering intake, production, quality, dispatch and billing, with every handoff visible.",
      "A permission model built around real jobs, so each of the nine roles sees exactly what they need and nothing they do not.",
      "Three approval checkpoints that keep accountability in the right hands without slowing the work down.",
      "Guidance inside the product for each role, so new team members become productive without a manual or a queue of questions.",
      "Team-based onboarding that gets a new person contributing in minutes instead of a day of permission admin.",
    ],
    architecture: {
      caption: "One order. Nine roles. Every handoff owned.",
      layers: [
        { label: "People", nodes: ["9 roles", "Sales to billing"] },
        { label: "Access", nodes: ["Role-based views", "Team onboarding"] },
        {
          label: "Workflow",
          nodes: ["Intake", "Production", "Quality", "Dispatch", "Billing"],
        },
        { label: "Control", nodes: ["3 approval gates", "Full audit trail"] },
      ],
    },
    decisions: [
      {
        title: "Design around the job, not the org chart",
        body: "Each of the nine roles was designed from the work that person owns every day. The result is a platform that feels built for each team, not a generic system they have to work around.",
      },
      {
        title: "Permissions that scale with the business",
        body: "Access is attached to roles and teams, not hardcoded into screens. Adding a new team, a new project or a new persona is a configuration change, not a rebuild.",
      },
      {
        title: "Make the handoff the feature",
        body: "Most operational failures happen between steps. Every handoff is visible, owned and gated, so the order moves forward instead of waiting in someone's inbox.",
      },
    ],
    results: [
      {
        value: "9",
        label: "Roles working in one platform",
        note: "sales through billing",
      },
      {
        value: "6",
        label: "Workflows automated",
        note: "intake to billing",
      },
      {
        value: "Zero",
        label: "Handoffs lost between teams",
        note: "every step owned and visible",
      },
      {
        value: "1",
        label: "Source of truth",
        note: "no spreadsheets, no lost work",
      },
    ],
  },

  {
    slug: "sse-event-centralisation",
    index: "04",
    title: "Real-Time AI Delivery",
    kicker: "Every answer, instantly, without disruption",
    summary:
      "The real-time delivery layer behind an enterprise AI platform. Four AI experiences now stream through one reliable layer, so answers arrive instantly and identically, even as the platform evolves underneath.",
    year: "2026",
    role: "Real-time platform lead",
    status: "Live in production",
    featured: true,
    span: "narrow",
    stack: [
      "Real-time AI",
      "Streaming infrastructure",
      "Reliability engineering",
    ],
    context:
      "An enterprise AI platform streams its answers to users in real time. As the platform grew, four different AI experiences each handled that stream in their own way, which made every improvement slower and riskier than it needed to be.",
    problem:
      "The platform could not afford a single broken response. The goal was to rebuild the delivery layer behind four live AI experiences without users noticing anything except a faster, more reliable product.",
    built: [
      "One real-time delivery layer behind every AI experience, replacing four separate approaches with a single, consistent standard.",
      "All four AI agent experiences moved onto the new layer at once, with no visible change for users.",
      "Guaranteed output fidelity: every answer leaves the platform in exactly the shape the interface expects.",
      "A foundation that lets the team launch new AI experiences in hours instead of rebuilding the plumbing each time.",
    ],
    architecture: {
      caption: "Four AI experiences. One delivery layer. Zero disruption.",
      layers: [
        { label: "Experiences", nodes: ["4 AI agents"] },
        {
          label: "Delivery",
          nodes: ["One real-time layer", "Consistent output"],
        },
        {
          label: "Customer",
          nodes: ["Instant streaming", "Identical answers"],
        },
        { label: "Platform", nodes: ["Faster launches", "Zero disruption"] },
      ],
    },
    decisions: [
      {
        title: "Invisible upgrades are the standard",
        body: "The best infrastructure change is the one nobody has to think about. Every user kept the same experience while the entire delivery layer underneath them changed, which is exactly the point.",
      },
      {
        title: "One standard beats four exceptions",
        body: "Four different streaming approaches meant four places to fix and four ways to fail. Consolidating on one standard made the product easier to improve and impossible to drift apart.",
      },
      {
        title: "Protect the experience, not just the code",
        body: "The measure of success was not that the change shipped. It was that not one conversation broke, not one answer changed, and not one user noticed the transition.",
      },
    ],
    results: [
      {
        value: "Zero",
        label: "Interrupted conversations",
        note: "through a platform-wide upgrade",
      },
      {
        value: "100%",
        label: "Answer consistency",
        note: "same output before and after the upgrade",
      },
      {
        value: "4",
        label: "AI experiences upgraded at once",
        note: "without a visible change",
      },
      {
        value: "Live",
        label: "In production",
        note: "serving real users",
      },
    ],
  },

  {
    slug: "llm-cost-optimisation",
    index: "05",
    title: "AI Cost Reduction",
    kicker: "Cutting AI spend by 67% without cutting quality",
    summary:
      "The platform's AI bill was climbing. I traced every dollar to the prompts and call paths that created it, benchmarked four leading models on real traffic, and turned the findings into a 67% reduction in operating cost.",
    year: "2026",
    role: "AI cost and strategy lead",
    status: "Savings delivered",
    featured: true,
    span: "narrow",
    stack: ["AI cost engineering", "Model strategy", "Production analytics"],
    context:
      "AI costs grow quietly. Every new agent, every longer prompt and every extra tool call adds to the bill, and the invoice tells you almost nothing about which decision caused it.",
    problem:
      "The question was not how much the platform spent. It was which part of the product was buying the least value per token, and what to do about it without making the AI worse.",
    built: [
      "A complete cost map of the platform's live AI traffic, down to the prompt block and call path responsible for each dollar.",
      "A benchmark of four leading models on identical real workloads, so the comparison reflected the actual product rather than a marketing page.",
      "The removal of low-value acknowledgement calls that were consuming up to 36% of a heavy conversation's cost.",
      "A prioritised cost roadmap the team could act on immediately, with the expected saving attached to every move.",
    ],
    architecture: {
      caption:
        "Live traffic in. The real cost drivers out. A smaller bill on the other side.",
      layers: [
        { label: "Traffic", nodes: ["Live AI conversations", "Every call path"] },
        {
          label: "Attribution",
          nodes: ["Prompt-level cost map", "Waste identified"],
        },
        {
          label: "Strategy",
          nodes: ["4 models benchmarked", "Low-value calls removed"],
        },
        { label: "Result", nodes: ["67% lower cost", "No quality sacrifice"] },
      ],
    },
    decisions: [
      {
        title: "Measure the bill, not the brochure",
        body: "A pricing page tells you what a token costs. It does not tell you what your product will spend. Benchmarking on real traffic showed where the money went and which savings were real.",
      },
      {
        title: "Bank the saving that survives",
        body: "Headline discounts shrink once reasoning tokens and real call patterns are included. We tested every claim against production and built the plan around the 67% that survived.",
      },
      {
        title: "Remove waste before negotiating",
        body: "The biggest saving was not a cheaper model. It was deleting calls that added nothing to the user's experience. No negotiation can recover money the product should never have spent.",
      },
    ],
    results: [
      {
        value: "67%",
        label: "Lower AI operating cost",
        note: "measured on live production traffic",
      },
      {
        value: "36%",
        label: "Of heavy-call cost eliminated",
        note: "low-value calls removed",
      },
      {
        value: "Zero",
        label: "Quality lost",
        note: "same answers, smaller bill",
      },
      {
        value: "Live",
        label: "Savings on every conversation",
        note: "measured in production",
      },
    ],
  },

  {
    slug: "workflow-builder-assistant",
    index: "06",
    title: "Agentic Workflow Builder",
    kicker: "Describe the automation. Get a working workflow.",
    summary:
      "The platform's visual builder lets anyone assemble an automation on a canvas, but a blank canvas stops most people before they start. This assistant turns a plain-English description into a complete, valid, running workflow, with 10+ node types, branching logic and a layout anyone can read.",
    year: "2026",
    role: "Product and engineering lead",
    status: "Live in the platform",
    featured: true,
    span: "wide",
    stack: [
      "Conversational AI",
      "No-code automation",
      "Visual workflow design",
      "Guardrailed generation",
    ],
    context:
      "Automation tools promise to put power in everyone's hands, then hand people a blank canvas and a library of nodes. The gap between an idea and a working workflow is where most automation projects die.",
    problem:
      "Generating a workflow is not a writing task. The result has to be a real automation the platform can run: the right nodes, the right connections, every branch resolved, and a layout a non-engineer can understand at a glance.",
    built: [
      "A plain-English assistant that turns a business requirement into a complete multi-step automation in seconds.",
      "A library of 10+ node types covering the work most teams need: triggers, actions, decisions, approvals, integrations and more.",
      "Automatic branching and decision logic, so the workflow handles real business rules instead of a single happy path.",
      "An auto-arranged canvas with clear colour bands, labelled decisions and visible end points, so the workflow reads like a process map.",
      "File and document inputs that let the assistant build from the material the user already has.",
      "Plain-English guidance when something needs changing, so the user can fix it without learning the engine's language.",
    ],
    architecture: {
      caption: "A sentence in. A complete, runnable automation out.",
      layers: [
        { label: "Describe", nodes: ["Plain English", "Files and documents"] },
        {
          label: "Design",
          nodes: ["AI workflow architect", "10+ node types", "Branch logic"],
        },
        {
          label: "Validate",
          nodes: ["Every node runnable", "Every path resolved"],
        },
        {
          label: "Visualise",
          nodes: ["Readable layout", "Clear decisions", "Defined end points"],
        },
        { label: "Run", nodes: ["A working automation"] },
      ],
    },
    decisions: [
      {
        title: "Guardrails make it trustworthy",
        body: "The assistant can only build with nodes the platform can run. That constraint is what makes the output reliable: every workflow it creates is a workflow the business can use.",
      },
      {
        title: "A workflow has to be readable",
        body: "A technically valid graph that looks like a pile of boxes has not solved anyone's problem. The layout, labels and colour bands are part of the product, because a process only gets adopted when people can understand it.",
      },
      {
        title: "Plain English at both ends",
        body: "The user describes the work in plain English, and the product answers in plain English when something needs attention. No internal vocabulary, no error codes, no support ticket.",
      },
    ],
    results: [
      {
        value: "End-to-end",
        label: "Automation from one sentence",
        note: "triggers, actions, decisions, approvals",
      },
      {
        value: "10+",
        label: "Node types, ready to use",
        note: "the building blocks of real business logic",
      },
      {
        value: "Minutes",
        label: "From an idea to a working workflow",
        note: "no technical skill required",
      },
      {
        value: "Zero",
        label: "Code the user has to write",
        note: "plain English in, working automation out",
      },
    ],
  },

  {
    slug: "ingskills",
    index: "07",
    title: "InGSkills",
    kicker: "The playbook behind 100+ production AI capabilities",
    summary:
      "A library of 100+ production-ready skills for building agentic AI platforms: orchestration, cost control, retrieval, security, data and integrations. Each one is a self-contained playbook a team can drop into a new build and ship faster.",
    year: "2026",
    role: "Creator and systems architect",
    status: "In active use",
    featured: false,
    span: "narrow",
    stack: [
      "Agentic AI",
      "Platform engineering",
      "Reusable capabilities",
      "AI security",
    ],
    context:
      "Every serious AI platform relearns the same lessons: how to orchestrate agents, control cost, secure a gateway, index knowledge and keep a multi-tenant system from leaking. That judgment is usually trapped in one engineer's head or one project's code.",
    problem:
      "Most technical documentation explains how something works. It does not explain the constraint that forced the design, or how to apply the pattern when the next project looks different. A library that only teaches steps does not make the next build faster.",
    built: [
      "100+ production skills covering the full stack of an agentic platform: agent orchestration, LLM cost accounting, retrieval, integrations, security and data architecture.",
      "A consistent playbook for every skill: when to use it, the outcome it delivers, the constraint behind the design, a complete implementation and the rules that transfer.",
      "Four priority tiers that put the highest-leverage capabilities first, so a new platform starts with orchestration and cost control instead of niche details.",
      "Self-contained files with zero shared dependencies, so any capability can be dropped into any project and work on its own.",
      "Deep coverage of the areas that usually break AI platforms: gateway security, tamper-evident audit trails, partitioned audit data, rate limiting and failure isolation.",
    ],
    architecture: {
      caption: "Hard-won judgment, distilled into capabilities a team can deploy.",
      layers: [
        { label: "Experience", nodes: ["Real platform builds"] },
        {
          label: "Distil",
          nodes: ["Pattern + constraint", "Repeatable playbook"],
        },
        {
          label: "Library",
          nodes: ["100+ capabilities", "Four priority tiers"],
        },
        { label: "Deploy", nodes: ["One file", "Zero dependencies"] },
        {
          label: "Outcome",
          nodes: ["Faster launches", "Fewer repeated mistakes"],
        },
      ],
    },
    decisions: [
      {
        title: "Teach the judgment, not the steps",
        body: "Every pattern exists because something forced it: a cost ceiling, a security risk, a scale limit. Naming that constraint is what lets a team apply the capability correctly when their situation is not identical.",
      },
      {
        title: "Make every capability standalone",
        body: "A library is only useful if a team can take one piece without adopting the whole system. Each skill works on its own, so the value is immediate and the integration cost is zero.",
      },
      {
        title: "Lead with what matters most",
        body: "A flat list treats orchestration and a minor style choice as equally important. Priority tiers tell a team exactly what to build first, which is what turns a library into a launch advantage.",
      },
    ],
    results: [
      {
        value: "100+",
        label: "Production-ready capabilities",
        note: "orchestration, cost, retrieval, security",
      },
      {
        value: "Zero",
        label: "Integration work to use one",
        note: "self-contained by design",
      },
      {
        value: "Day one",
        label: "A proven starting point",
        note: "orchestration and cost control first",
      },
      {
        value: "Weeks",
        label: "Cut from every new platform build",
        note: "start from a proven playbook",
      },
    ],
  },

  {
    slug: "nexadesk",
    index: "08",
    title: "NexaDesk",
    kicker: "Support that triages itself",
    summary:
      "An AI support desk that reads every incoming ticket, sets its priority and category, and drafts the reply before an agent opens it. Multi-tenant from the ground up, so every organisation's conversations stay private. Live and serving support teams.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Live SaaS",
    featured: true,
    span: "half",
    stack: [
      "AI support automation",
      "Multi-tenant SaaS",
      "Real-time AI",
      "Workflow automation",
    ],
    context:
      "Support teams lose their day to triage: reading tickets, deciding what matters, routing them and starting from a blank page. The work is repetitive, but the cost of getting it wrong is a customer who waits too long.",
    problem:
      "The product had to do three things well at once: understand a ticket the moment it arrives, give the agent a useful head start, and guarantee that no organisation ever sees another's data.",
    built: [
      "AI triage on every ticket: priority, category and routing decided the moment it arrives.",
      "Drafted replies that stream in while the agent reads, cutting the blank-page problem out of every response.",
      "A hard tenancy boundary that keeps every organisation's tickets, users and conversations completely separate.",
      "A full organisation lifecycle: invite, accept, assign roles and start working without manual setup.",
      "Admin and member experiences designed around what each person needs to do, not a single screen for everyone.",
    ],
    architecture: {
      caption: "Every ticket understood, prioritised and answered faster.",
      layers: [
        { label: "Request", nodes: ["Every incoming ticket"] },
        { label: "AI triage", nodes: ["Priority", "Category", "Routing"] },
        { label: "Agent", nodes: ["Draft reply, instantly", "Full context"] },
        { label: "Isolation", nodes: ["Every organisation separate"] },
        { label: "Outcome", nodes: ["Faster answers", "Happier customers"] },
      ],
    },
    decisions: [
      {
        title: "Answer before the agent asks",
        body: "The best support tool removes the first five minutes of every ticket. Triage and a drafted response are waiting when the agent opens the conversation, so they spend their time helping the customer instead of sorting the queue.",
      },
      {
        title: "Isolation is not a feature, it is the foundation",
        body: "One organisation's data must never appear in another's workspace. Tenancy is enforced at the deepest layer of the product, so privacy does not depend on every future feature remembering to check.",
      },
      {
        title: "Speed the customer can feel",
        body: "Suggestions stream as they are written instead of arriving after a spinner. The agent starts reading immediately, and the customer gets a faster, more thoughtful answer.",
      },
    ],
    results: [
      {
        value: "Instant",
        label: "Ticket triage on arrival",
        note: "priority, category and routing",
      },
      {
        value: "Faster",
        label: "Replies drafted before the agent starts",
        note: "no blank page, no delay",
      },
      {
        value: "Private",
        label: "Every organisation isolated",
        note: "privacy built into the foundation",
      },
      {
        value: "Live",
        label: "Multi-tenant SaaS",
        note: "serving support teams",
      },
    ],
    links: [
      {
        label: "Explore the project",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/NexaDesk",
      },
    ],
  },

  {
    slug: "stockpilot",
    index: "09",
    title: "StockPilot",
    kicker: "Know what to reorder, and why",
    summary:
      "An AI inventory and procurement platform that tells each role what to reorder, what it will cost and why it matters, before a shortage reaches the customer. Multi-tenant, role-aware and live.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Live SaaS",
    featured: true,
    span: "half",
    stack: [
      "AI procurement",
      "Inventory intelligence",
      "Multi-tenant SaaS",
      "Role-based workflows",
    ],
    context:
      "Inventory teams do not struggle to count stock. They struggle to decide what to do next: which item to reorder, how much, from whom, and before it becomes urgent. By the time the spreadsheet is updated, the decision is often already late.",
    problem:
      "A stock report tells you what happened. The product had to tell each person what to do next, in the language of their role, without exposing one business's inventory to another.",
    built: [
      "AI procurement recommendations that explain what to reorder, how urgently, and the reasoning behind the call.",
      "Streamed procurement reports that keep the buying team moving instead of waiting on a loading screen.",
      "Four role levels, owner to member, each with the view and decisions that belong to their job.",
      "A complete organisation lifecycle with role assignment, so a new business or team member is productive immediately.",
      "A tenancy boundary that keeps every organisation's inventory, suppliers and decisions private.",
    ],
    architecture: {
      caption: "Stock signals in. Clear procurement decisions out.",
      layers: [
        { label: "Signals", nodes: ["Stock levels", "Supplier data", "Demand"] },
        {
          label: "Intelligence",
          nodes: ["Reorder recommendations", "Priority and quantity", "Reasoning"],
        },
        { label: "People", nodes: ["Owner", "Admin", "Manager", "Member"] },
        { label: "Isolation", nodes: ["Every business separate"] },
        { label: "Outcome", nodes: ["Fewer shortages", "Faster purchasing"] },
      ],
    },
    decisions: [
      {
        title: "Recommendations beat reports",
        body: "A number on a dashboard still leaves the decision to the reader. A recommendation with a reason tells them what to do next, which is the difference between a report people open and a product people rely on.",
      },
      {
        title: "Four roles, one truth",
        body: "Every role sees the same inventory through the lens of their job. That keeps the whole business aligned without building four separate systems or letting anyone drown in data they do not need.",
      },
      {
        title: "Explain the why",
        body: "A reorder recommendation is only trusted when the reasoning is visible. The product shows the signal behind every suggestion, so the buying team can act with confidence instead of second-guessing the system.",
      },
    ],
    results: [
      {
        value: "AI",
        label: "Explained reorder recommendations",
        note: "what to buy, how much, and why",
      },
      {
        value: "Earlier",
        label: "Reorder decisions",
        note: "before a shortage reaches the customer",
      },
      {
        value: "Aligned",
        label: "Every role, one source of truth",
        note: "owner to member",
      },
      {
        value: "Private",
        label: "Every business isolated",
        note: "inventory and suppliers stay private",
      },
    ],
    links: [
      {
        label: "Explore the project",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/StockPilot",
      },
    ],
  },

  {
    slug: "buddyai-platform",
    index: "10",
    title: "BuddyAI",
    kicker: "A conversational AI foundation built to scale",
    summary:
      "A multi-tenant conversational AI platform that lets a business launch its own AI assistant with conversation history, user accounts, subscriptions and payments built in. Every part scales independently, so the product grows without a rewrite.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Production-ready",
    featured: false,
    span: "narrow",
    stack: [
      "Conversational AI",
      "Scalable platform",
      "Subscription billing",
      "Agent orchestration",
    ],
    context:
      "Most AI chat products start as one application that holds everything: conversation history, login, payments and agent logic. The demo works, then growth turns every new feature into a risky change to the same fragile system.",
    problem:
      "The goal was to build the foundation a real conversational product needs from day one: separate concerns, independent scale, and an agent layer that can evolve without dragging authentication or billing along with it.",
    built: [
      "A complete conversational experience: history, streaming answers and account management, ready for real users.",
      "An agent layer where the reasoning flow is a visible graph, so new behaviours are added without rewriting the conversation.",
      "Subscriptions and payments built in: order creation, payment verification and a full user and session model.",
      "One front door for every service, with shared context so a conversation never loses the thread.",
      "Independent services for conversation, identity, payments and agents, so each can scale on its own.",
    ],
    architecture: {
      caption: "One front door. Four services. Room to grow.",
      layers: [
        { label: "Customer", nodes: ["Web chat", "Conversation history"] },
        { label: "Gateway", nodes: ["One entry point", "Shared context"] },
        {
          label: "Services",
          nodes: ["Conversation", "Identity", "Payments", "Agent orchestration"],
        },
        {
          label: "Outcome",
          nodes: ["Independent scale", "Faster feature launches"],
        },
      ],
    },
    decisions: [
      {
        title: "Build for the next ten features",
        body: "One service would have shipped faster. Four services make the next feature cheaper, because each part of the product can change without putting the whole platform at risk. The extra discipline up front buys years of room to grow.",
      },
      {
        title: "Make the agent visible",
        body: "Conversation logic buried in conditionals is impossible to improve. A graph makes every step and branch visible, so adding a capability is a design decision rather than a debugging session.",
      },
      {
        title: "Own the whole customer journey",
        body: "A conversation product is not just a chat box. Identity, payments and history are part of the experience, so they were designed as first-class services rather than bolted on later.",
      },
    ],
    results: [
      {
        value: "Weeks",
        label: "To a launch-ready AI product",
        note: "chat, accounts, billing and agents included",
      },
      {
        value: "Instant",
        label: "Streamed answers",
        note: "users read as the answer is written",
      },
      {
        value: "Ready",
        label: "For real customers",
        note: "identity, payments and history built in",
      },
      {
        value: "Zero",
        label: "Rewrites needed to grow",
        note: "add capabilities without rebuilding",
      },
    ],
  },

  {
    slug: "resume-evidence-reconciliation",
    index: "11",
    title: "Hiring Intelligence",
    kicker: "Proof, not polish",
    summary:
      "A hiring intelligence engine that checks a candidate's claims against public evidence and surfaces the strengths their resume forgot to mention. Recruiters get a verdict they can defend, not a hunch.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Ready for teams",
    featured: false,
    span: "narrow",
    stack: [
      "Hiring intelligence",
      "Evidence verification",
      "Explainable AI",
    ],
    context:
      "Recruiters spend seconds on a resume, and the cost of a wrong hire lasts months. The information to make a better call is often public, but checking it by hand does not scale.",
    problem:
      "A resume is a marketing document. The product had to separate what a candidate claims from what the evidence supports, show exactly why, and do it without depending on a model's opinion.",
    built: [
      "A verification engine that checks every headline claim against public evidence and gives it a clear verdict with a citation.",
      "A strength finder that surfaces capabilities the candidate has but never wrote down, so strong applicants are not filtered out by a rushed resume.",
      "A recruiter-ready report with a readiness score and a credibility risk, both explained rather than asserted.",
      "Support for PDF, DOCX and text resumes, with an optional AI-written summary that never replaces the evidence.",
      "A zero-dependency mode that produces the full report offline, so the product works even when a model provider does not.",
    ],
    architecture: {
      caption: "Claims in. Evidence checked. A hiring decision that stands up.",
      layers: [
        { label: "Candidate", nodes: ["Resume", "Public evidence"] },
        { label: "Reconcile", nodes: ["Claim by claim", "Strength discovery"] },
        {
          label: "Verdict",
          nodes: ["Verified", "Overclaimed", "Undersold", "Stale"],
        },
        {
          label: "Report",
          nodes: ["Readiness score", "Credibility risk", "Citations"],
        },
        { label: "Decision", nodes: ["A hire you can defend"] },
      ],
    },
    decisions: [
      {
        title: "Evidence over opinion",
        body: "A model's confidence is not proof. Every verdict is computed from public evidence and cited back to its source, so a recruiter can see exactly why a claim stands or falls.",
      },
      {
        title: "Find what the resume missed",
        body: "The strongest candidate is not always the best writer. The engine looks for evidence of skills the resume never mentions, which turns a filter into a discovery tool.",
      },
      {
        title: "Never depend on the model",
        body: "The core product runs with no AI provider at all. The model can improve the explanation, but the verdict has to stand on its own, which keeps the product fast, private and dependable.",
      },
    ],
    results: [
      {
        value: "100%",
        label: "Verdicts backed by cited evidence",
        note: "no unauditable opinions",
      },
      {
        value: "4",
        label: "Verdict classes",
        note: "verified, overclaimed, undersold, stale",
      },
      {
        value: "Seconds",
        label: "From resume to hiring verdict",
        note: "no manual searching",
      },
      {
        value: "Private",
        label: "Runs entirely offline",
        note: "candidate data never leaves your environment",
      },
    ],
  },

  {
    slug: "loopr-finance-dashboard",
    index: "12",
    title: "Loopr Finance",
    kicker: "Every number, one decision-ready view",
    summary:
      "A financial command centre that brings balances, transactions, reporting and alerts into one workspace. Filter it, share it, export it, and walk into the meeting with the answer already on screen.",
    year: "2026",
    role: "Design and delivery lead",
    status: "Delivered",
    featured: false,
    span: "narrow",
    stack: [
      "Financial analytics",
      "Reporting automation",
      "Secure SaaS",
      "Data visualisation",
    ],
    context:
      "Finance teams have the data. What they lack is a fast way to turn it into an answer: a view they can filter, a report they can share, and a signal that something needs attention before month end.",
    problem:
      "A finance dashboard is only useful if the numbers can be trusted and the views can be acted on. That meant real filtering, real exports, real security and alerts that come from the data itself, not a static mock.",
    built: [
      "A live financial picture: cash position, receivables, payables and projected balance in one view.",
      "A transaction workspace with instant search, sorting, date and amount filters, and views you can send to a colleague.",
      "A custom report builder: choose columns, save a preset, preview the result and export exactly the view on screen.",
      "An analytics view with period-over-period trends and per-person comparisons, built for the questions finance teams ask.",
      "An alert inbox generated from the data itself: large transactions and monthly summaries arrive without anyone wiring them up.",
      "A security model with short-lived access and rotating sessions, so a stolen credential does not become a standing risk.",
    ],
    architecture: {
      caption: "Transactions in. A complete financial picture out.",
      layers: [
        {
          label: "Money",
          nodes: ["Balances", "Transactions", "Counterparties"],
        },
        {
          label: "Workspace",
          nodes: ["Search", "Filters", "Shareable views"],
        },
        {
          label: "Reporting",
          nodes: ["Custom exports", "Presets", "Live preview"],
        },
        { label: "Insight", nodes: ["Trends", "Comparisons", "Alerts"] },
        { label: "Decision", nodes: ["A clear answer, fast"] },
      ],
    },
    decisions: [
      {
        title: "Every view is shareable",
        body: "A filter that cannot be sent to a colleague is a dead end. Putting the view in the URL means the address bar becomes the share button, and the conversation starts from the same numbers.",
      },
      {
        title: "Export exactly what you see",
        body: "Reports are only useful if they match the decision on screen. The export follows the current filters, sort and columns, so the meeting and the spreadsheet never disagree.",
      },
      {
        title: "Security that expires by default",
        body: "Long-lived sessions are a quiet liability. Short access tokens and rotating refresh sessions mean a stolen credential has a short life and a loud failure, not an open door.",
      },
    ],
    results: [
      {
        value: "One",
        label: "Workspace for the whole financial picture",
        note: "cash, spend, trends, alerts",
      },
      {
        value: "One click",
        label: "Reports that match the view on screen",
        note: "filtered, sorted, ready to share",
      },
      {
        value: "Every",
        label: "View shareable in one click",
        note: "send the exact view to a colleague",
      },
      {
        value: "Live",
        label: "Alerts from the data",
        note: "no manual notification setup",
      },
    ],
    links: [
      {
        label: "Explore the project",
        href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Finance",
      },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "BookFlow",
    blurb:
      "A complete booking flow for a book-focused store: browse, order and track every purchase in one place.",
    stack: "TypeScript",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/BookFlow",
  },
  {
    name: "Pulse (Elite Infosoft)",
    blurb:
      "Website availability monitoring that catches outages before customers do: uptime, multi-check coverage and confirmed alerts. Running in production.",
    stack: ".NET 10 · ASP.NET Core MVC · EF Core · PostgreSQL",
  },
  {
    name: "ParkSecure",
    blurb:
      "A parking system that reads number plates automatically, so vehicles enter and exit without a manual log.",
    stack: "Python · Flask · OpenCV · SQLite",
  },
  {
    name: "Career Coach Agent",
    blurb:
      "A personal career strategist that turns a goal into a plan, with an AI agent that guides the next step.",
    stack: "Python · LLM agents",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Career-Coach-Agent",
  },
  {
    name: "NLP Resume Screening Engine",
    blurb:
      "Ranks candidates against a job description in seconds, reading PDF, DOCX, text and CSV.",
    stack: "Python · Sentence-Transformers · Streamlit · SQLite",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/AI-Powered-Resume-Screening-System",
  },
  {
    name: "Stock-Market Data Pipeline",
    blurb:
      "Turns live market data into clean, analysis-ready intelligence, automatically.",
    stack: "Python · Alpha Vantage · MySQL",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Stock-Market-Data-Collector",
  },
  {
    name: "ML Model Bank",
    blurb:
      "Ten-plus deployed predictive models for pricing, lending, healthcare and hiring decisions.",
    stack: "scikit-learn · TensorFlow · XGBoost · Flask",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala?tab=repositories",
  },
  {
    name: "Text Sentiment Analysis",
    blurb:
      "Turns public opinion into a measurable sentiment signal, at scale.",
    stack: "Python · NLTK",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Text-Sentiment-Analysis",
  },
  {
    name: "Food Delivery DBMS",
    blurb:
      "The data backbone for a delivery marketplace: orders, riders, restaurants and settlement in one system.",
    stack: "SQL · Database design",
    href: "https://github.com/Shabbir-Ezzuddin-Malegaonwala/Food-Delivery-DBMS",
  },
];

export const featuredWork = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
