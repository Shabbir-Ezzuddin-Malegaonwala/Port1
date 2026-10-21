# MASTER BUILD PLAN — `mwshabbirport1`

**SEM Corp. · Shabbir Malegaonwala · AI Engineer**
Version 2.0 · 2026-10-20 · Built from the 12-question interview
Supersedes v1.0, which was written from the CV instead of from answers.

---

## 1. Website overview

A professional portfolio for **Shabbir Malegaonwala**, an AI Engineer operating under the
personal brand **SEM Corp.**

It exists to convert a stranger into a conversation. A recruiter should understand the level
he works at inside sixty seconds. An engineer who clicks deeper should find real architecture
and real numbers. A business owner should see someone who can automate their operation.

**Primary CTA:** email, with a contact page as the secondary path. Every section eventually
points there.

---

## 2. Core positioning

**One sentence:** *I automate your systems, workflows and business — and build the agents
that run them.*

**The mission, in his words:** to make people's lives futuristic, easier, simpler —
one touch or one voice, and the result appears.

**The wedge.** Most AI portfolios show notebooks and demos. His differentiator is products
that run real businesses: live automation, measurable cost savings, and platforms people use
every day. That leads. The technical depth underneath earns trust on the second click.

**Three pillars** — these structure the whole site:

| Pillar | What it means |
|---|---|
| **AI Agents & Multi-Agent Bots** | Autonomous agents, orchestration, tool use, RAG, evaluation |
| **Workflow Automation** | Natural language to running multi-step automation; business process automation |
| **Full-Stack AI Applications** | Multi-tenant products with AI inside — API, data layer, interface, deploy |

---

## 3. Brand personality

Curious, creative, precise. Builds products that work, then makes the value impossible to miss.

**Voice:** direct and confident without jargon-stacking. First person. Short declarative
sentences. Outcomes instead of adjectives. Write like a founder selling a product, not an
engineer explaining a diff: what it does, who it serves, and the difference it made.

---

## 4. Visual direction

**The feeling, stated by the client:** futuristic, premium, cinematic — advanced AI
technology.

**The hard negative, stated by the client:** it must NOT look like an immature, beginner, or
"kid" website. **No neon.** No glowing purple-to-cyan gradients, no Tron grid, no synthwave.
That palette is the single most over-used signal in AI portfolios and it reads as amateur.

**Resolution:** sophistication comes from restraint, typographic hierarchy, precise spacing
and material quality — not from glow. The reference register is a Dubai financial or
architectural brand: aged upward, not downward.

**Colour:** gold and navy, or a professional Gulf-luxury palette. Gold is used as a *precious
metal* — thin rules, numerals, keylines — never as a highlighter.

**Three directions were generated in Stitch** and the client picks one before any UI is coded:

- **A — Desert Modernism.** Light. Sand, bone and limestone ground, navy ink, gold keylines.
  High-contrast serif display. Architectural grid, wide margins, hairline rules. The
  unexpected choice: a light AI portfolio, which separates it from the entire category.
- **B — Obsidian & Gold.** Dark. Warm obsidian black, bone text, brushed-gold accents.
  Tight grotesque headlines, monospace labels and numerals. Precision panels with hairline
  gold borders and corner ticks. Reads as premium hardware, not gaming hardware.
- **C — Cinematic Night.** Dark. Deep midnight navy with real tonal depth, cream text, warm
  amber-gold behaving like practical light in a film frame. Enormous display type as the
  main visual element. Full-bleed, letterboxed, sections arranged like shots.

The chosen direction's design system — colour tokens, type scale, spacing, radii, component
shapes — is extracted from Stitch and becomes the authority for the build.

---

## 5. Website structure

```
/                     cinematic scroll home
/work                 index of all case studies
/work/[slug]          deep case study ×12
/about                story, photographs, beyond the code
/contact              email-first, availability
                      (reserved, not built: /resume, /blog)
```

### Home — section order

| # | Section | Job |
|---|---|---|
| 01 | **Hero** | Name, positioning line, portrait, status pill, two CTAs |
| 02 | **Proof strip** | Five hard numbers, monospace, no commentary |
| 03 | **Three pillars** | Agents · Automation · Full-stack AI |
| 04 | **Selected work** | Six case-study cards, asymmetric grid |
| 05 | **Experience** | Rubikon Labs timeline, numbered achievements |
| 06 | **Stack** | Grouped technologies — only ones with evidence |
| 07 | **Recognition** | Certifications, hackathon, stage hosting |
| 08 | **Contact** | Email CTA, socials, availability |
| — | **Footer** | Nav, socials, copyright |

### Case study template

`The opportunity → The challenge → The product → How it works → What sets it apart →
The impact → Links`

There is no limitations block. A case study ends on the outcome. The product story leads;
implementation detail stays out of the page entirely.

---

## 6. Content

### The case studies

`src/content/work.ts` is the source of truth. Every case study is written as a product story:
the opportunity, the challenge, the product, how it works, what sets it apart, and the impact.

Product scope includes a valuation intelligence platform, real-time AI delivery, AI cost
reduction, an agentic workflow builder, a 100+ capability AI playbook, two multi-tenant SaaS
products, a conversational AI platform, an AI hiring intelligence engine, a financial command
centre, and a live SME automation product.

Plus a compact grid of smaller products and experiments: NLP resume screening, Career Coach
Agent, Pulse, ParkSecure, Digivyapar, stock-market pipeline, the ML model bank, sentiment
analysis and food-delivery DBMS.

### Hard content rules

Never on this site: CGPA, street address, phone number, certificate drive links, client
internals, private-platform screenshots. Never claimed: the $57k/year figure (a projection,
never realised), the 49→92% parity score (self-assessed, not benchmarked), Power BI or
Tableau as skills (no evidence), or any feature-branch work described as "in production".

---

## 7. Photography

| Asset | Source | Use |
|---|---|---|
| **Hero portrait** | `MyPhotos\Official_Photo\PassCrop.jpg` | Studio-grade, 2639×1760, clear glasses so eye contact lands, navy suit. Backdrop already knocked out to transparency; crop 4:5 head-and-shoulders. |
| **About portrait** | `MyPhotos\SEMHeroCrop.jpeg` | Warm, candid, outdoors. Personality, not authority. |
| **Speaking photo** | `MyPhotos\Cropped Img.jpeg` | At a podium — evidences the stage-hosting line. Low-res, capped at 160px. |

Anything further the chosen direction needs is specified in **`ASSETS-TO-GENERATE.md`**, with
links, exact prompts and target dimensions, for the client to run manually.

---

## 8. Technical implementation

| Choice | Reason |
|---|---|
| **Next.js 16 App Router + TypeScript** | Vercel's native target: import the repo, zero config, `git push` deploys. Per-case-study routes give real SEO. |
| **Tailwind CSS v4** | Token-first via `@theme`; the Stitch design system maps directly onto CSS variables. |
| **CSS + IntersectionObserver motion** | No animation library. Reveals degrade to visible content if JS fails. |
| **Lenis** | Inertia scroll, ~3KB — the one thing that makes a site *feel* expensive. |
| **next/font** | Self-hosted, no CDN request, no layout shift. |
| **Typed content in `src/content/`** | Facts version-controlled and type-checked; zero runtime cost. |

Deliberately absent: CMS, database, auth, analytics SDK, animation libraries.

**Motion brief** (client's words, from the reference prompts): *not crazy animation
everywhere — just subtle. Hover effects, smooth section reveals, cards lifting slightly,
buttons feeling responsive.*

**Budgets:** LCP < 1.5s on 4G · CLS < 0.02 · first-load JS < 110KB gzipped · Lighthouse ≥95
on all four · WCAG 2.2 AA with visible focus rings, full keyboard operation, and
`prefers-reduced-motion` honoured everywhere.

**Deployment:** Vercel, zero config, no environment variables. Repo:
`github.com/Shabbir-Ezzuddin-Malegaonwala/Port1`.

---

## 9. Build sequence

| Phase | Deliverable | Status |
|---|---|---|
| P0 | Interview → this plan | ✅ done |
| P1 | Three Stitch design directions | ✅ generating |
| **P2** | **Client picks a direction, or remixes across them** | **← blocking** |
| P3 | Extract the design system; rewrite tokens, type, components | pending |
| P4 | Home rebuilt on the chosen language | pending |
| P5 | Case studies, about, contact, 404 | pending |
| P6 | Motion, accessibility, responsive, Lighthouse | pending |
| P7 | Quality review: lint, types, build, manual review pass | pending |
| P8 | Push to `Port1`, deploy to Vercel | pending |

The content layer and the Next.js scaffold already exist and carry forward. Everything visual
is rebuilt from the chosen direction.

---

## 10. Decisions made, and flagged

1. **Next.js, not static HTML/CSS/JS.** The reference document specified vanilla static for a
   Hostinger deploy. The target is Vercel with per-case-study pages, so Next.js is correct
   here. Flagged because it is a deliberate deviation from that document.
2. **No Higgsfield video.** Skipped at the client's instruction; Stitch is the design tool for
   this build. Any manual asset generation is specified separately in `ASSETS-TO-GENERATE.md`.
3. **Achievements sourced from the CV, GitHub and local project folders** at the client's
   instruction, filtered through the hard content rules in §6.
4. **The name is rendered "Shabbir Malegaonwala"** per the interview answer, not the longer
   form used on the CV.
