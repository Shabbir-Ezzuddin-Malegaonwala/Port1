# SEM Corp. — Shabbir Malegaonwala

Personal portfolio of **Shabbir Malegaonwala**, AI Engineer — AI products, automation platforms
and data intelligence.

Twelve case studies, each framed around the opportunity, the product and the outcome.

The CV is deliberately **not** committed — it carries personal details. The site invites
visitors to start a project by email instead.

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4, tokens in `src/app/globals.css` |
| Motion | CSS transitions + IntersectionObserver · Lenis for inertia scroll |
| Fonts | Newsreader · Manrope · Space Mono, self-hosted via `next/font` |
| Icons | lucide-react, plus inline brand SVGs |
| Hosting | Vercel |

No CMS, no database, no analytics SDK, no animation library. Every route is static.

The design system ("Cinematic Night") was generated in **Google Stitch** and transcribed into
`globals.css`. See `CLAUDE.md` for the rules that keep it intact, and `BUILD-PLAN.md` for how
the whole thing was specified.

---

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build — all routes prerender static
npm start       # serve the production build
npm run lint
```

---

## Deploying to Vercel

Zero configuration. No environment variables.

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import it.
3. Vercel detects Next.js and fills in everything. Press **Deploy**.

Every later `git push` redeploys automatically; pull requests get preview URLs.

After the first deploy, set the real domain in `src/content/profile.ts` → `siteUrl`, so the
sitemap, canonical URLs and social cards point at the right place.

---

## Where the content lives

All facts are typed TypeScript — no JSX, no CMS:

| File | Holds |
|---|---|
| `src/content/profile.ts` | name, bio, links, proof metrics, capability pillars |
| `src/content/work.ts` | the twelve case studies and the wider builds |
| `src/content/career.ts` | experience, education, stack, certifications, languages |

Adding a case study is one entry in `work.ts`. The route, the index page card, the sitemap and
the metadata all follow from it.

---

## Structure

```
src/
├─ app/                 routes, sitemap, robots, OG image
├─ components/
│  ├─ sections/         home page sections
│  ├─ work/             case-study pieces
│  ├─ layout/           navbar, footer, section header
│  └─ ui/               reusable primitives
├─ content/             all facts
└─ lib/                 types, utils
```

---

## Checks that must pass

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Verified at 390px, 768px and 1440px in both light and dark themes: no horizontal overflow,
one `h1` per route, alt text on every image, an accessible name on every link, visible focus
rings, and `prefers-reduced-motion` honoured throughout.

---

## Optional assets

`ASSETS-TO-GENERATE.md` lists the optional upgrades — a SEM Corp. monogram, a working
portrait, cinematic hero video — with the exact tools, prompts and target sizes. The site is
complete without any of them.
