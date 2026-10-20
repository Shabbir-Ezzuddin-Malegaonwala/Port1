# CLAUDE.md — standing rules for this repository

You are a senior UI designer and front-end developer working on **SEM Corp.**, the personal
portfolio of Shabbir Malegaonwala, AI Engineer.

**Preserve the imported design language.** The visual system came from Google Stitch
("Cinematic Night") and is transcribed in `src/app/globals.css`. That file is the authority.
Do not introduce colours, fonts, radii or shadows that are not already tokens there.

---

## The design system in one screen

| | |
|---|---|
| Canvas | `--canvas #060913` · elevated `--elevated #0b1120` · overlay `--overlay #11192c` |
| Hairlines | `--hairline #1a2338` — 1px, the only separator used |
| Text | `--ink #f3efe6` (warm parchment) · `--muted` for secondary |
| Accent | `--gold #d4af37`, bright `#e5c365`. Gold is a **precious metal**, not a highlighter |
| Display | **Newsreader** serif, weight 300, via `.display` |
| Accent phrase | **Newsreader italic gold**, via `.accent` — one phrase per headline |
| Body | **Manrope** 300 |
| Labels | **Space Mono**, uppercase, `0.24em` tracking, via `.hud` |
| Numerals | always `.tabular` (Space Mono, tabular figures) |

### Non-negotiables

1. **Zero border-radius.** Everything is square. There is no `rounded-*` anywhere; keep it that way.
2. **No neon.** No glowing purple/cyan gradients, no Tron grids, no synthwave. This was an
   explicit client constraint. Depth comes from layered blacks, hairlines and one warm light.
3. **One italic gold phrase per headline**, never two. It is the signature move and it stops
   working if it is everywhere.
4. **Two accents maximum.** Gold is primary. `--live` green is functional only (the status dot).
5. **Hairlines, not fills.** Separate things with a 1px `--hairline`, not a block of colour.
6. **Motion is subtle.** Hover lifts, section reveals, buttons that respond. Nothing else.
   Every animation must honour `prefers-reduced-motion`.

### Reusable primitives (use these, do not reinvent)

`.display` `.accent` `.hud` `.tabular` · `.panel` `.lit` `.brackets` `.radial-lift` ·
`.rule` `.rule-fade` · `.btn-primary` `.btn-ghost` `.chip` `.link-rule` `.ledger-row` ·
`.reveal` (+ `.reveal-in`)

---

## Architecture

```
src/content/    all facts — profile, work, career. Typed, no JSX.
src/components/sections/   home page composition
src/components/work/       case-study pieces
src/components/layout/     navbar, footer, section header
src/components/ui/         reusable primitives
src/lib/                   types, cn()
```

Layers do not reach past each other. Adding a seventh case study is a `src/content/work.ts`
edit and nothing else.

**Server components by default.** `"use client"` only on genuinely interactive leaves
(ThemeToggle, StatusChip, CopyEmail, Navbar, Preloader, Reveal, SmoothScroll).

---

## Content rules — these are compliance, not style

Everything on this site must be defensible in an interview. Sourced from
`C:\Rubicon\RESUME-EVIDENCE-INVENTORY.md`.

**Never add to this site:**
- CGPA, street address, phone number, certificate drive links, client internals.
- The `$57k/year` saving — a projection, never realised.
- The `49% → 92%` parity score — self-assessed, not benchmarked.
- Power BI or Tableau as skills — no evidence exists.
- Any feature-branch work described as "in production".

**Keep:** the "Honest limitations" block on every case study. Volunteering what a system
cannot do is the strongest credibility signal on the site.

---

## Known traps

- **Tailwind v4 token tree-shaking.** `html` background/colour in `globals.css` must stay
  **literal hex**. Using `var(--canvas)` there can resolve empty and the page goes transparent.
- **New Tailwind classes need a dev-server restart.** Turbopack's dev cache does not always
  regenerate CSS on hot reload — a novel class can silently not apply.
- **`lucide-react` has no brand glyphs.** GitHub and LinkedIn are inline SVG in
  `components/ui/BrandIcons.tsx`.
- **Changed an image but the browser shows the old one?** Next's optimizer and the browser
  both cache aggressively. Rename the file; it is faster than fighting the cache.
- **`.reveal` must never be the only thing making content visible.** The `<noscript>` block in
  `layout.tsx` forces it visible without JS. Keep it.

---

## Before you call anything done

```bash
npx tsc --noEmit        # types
npm run lint            # eslint
npm run build           # must produce all routes static
npx prettier --write "src/**/*.{ts,tsx,css}"
```

Then verify in a browser at **390px, 768px and 1440px, in both themes**: no horizontal
overflow, visible focus rings on every interactive element, and the full keyboard path through
the mobile drawer (open, tab, Escape).
