# ASSETS TO GENERATE — manual steps for Shabbir

Everything here is optional. The site is being built so it works **without any of it** —
these are upgrades, ordered by how much each one actually improves the result.

Your identity reference photo for any AI image or video tool:
`C:\Personal\MyPhotos\Official_Photo\PassCrop.jpg`
(studio shot, navy suit, gold topi, clear glasses — upload this as the character reference
so every generated image looks like you.)

Save finished files into `C:\Personal\New Projects\mwshabbirport1\public\`.

---

## Priority 1 — SEM Corp. monogram (15 minutes, highest value)

You named your brand **SEM Corp.** but there is no mark for it. Right now the navbar shows a
text wordmark. A real monogram makes the brand feel established, and it becomes your favicon,
your social avatar, and the watermark on your case studies.

**Tool:** <https://www.recraft.ai> (best for vector logos, free tier) or
<https://logo.com> · Alternative: <https://www.figma.com> if you want to draw it yourself.

**Prompt:**
```
A minimal luxury monogram logo combining the letters S, E and M.
Geometric, architectural, built on a strict grid — like the identity of a Dubai
financial or architectural firm.
Thin precise linework, generous negative space, perfectly balanced.
Single colour: metallic gold on a transparent background.
No gradients, no glow, no 3D bevel, no neon, no circuit-board or AI cliche motifs.
Timeless and understated, not trendy. Vector, flat, sharp.
```

**Deliver:**
| File | Size | Notes |
|---|---|---|
| `public/sem-mark.svg` | vector | the monogram alone, transparent |
| `public/icon.png` | 512×512 | monogram centred, navy background — becomes the favicon |
| `public/apple-icon.png` | 180×180 | same artwork |

Pick the version that still reads clearly at 32×32. If it turns to mush when small, it is too
detailed — go simpler.

---

## Priority 2 — A working portrait (30 minutes, no AI needed)

The three photos we have are a studio headshot, an outdoor candid, and a podium shot. What is
missing is **you actually working** — the shot that makes the About page feel real.

**No AI tool needed. Take this yourself:**
- You at your desk, screens visible but out of focus behind you, looking at the screen rather
  than the camera.
- Shoot in the evening with one warm light source to your side. Avoid overhead white light.
- Landscape orientation, shot on your phone's main camera (not ultrawide), portrait mode off.
- Leave empty space on one side — text sits there.

**Deliver:** `public/portrait-working.jpg`, at least 2000px on the long edge.

If you would rather generate it, use <https://higgsfield.ai> or
<https://gemini.google.com> (Nano Banana) with `PassCrop.jpg` as the character reference:
```
The same man, seated at a dark desk at night, working. Two monitors glow softly in front
of him showing code and a workflow diagram, slightly out of focus. One warm practical
light from the left rims his face and shoulder. Deep navy and warm amber tones.
Cinematic, shallow depth of field, shot on a 35mm lens.
Calm and focused — not a stock-photo smile, not a motivational-speaker pose.
Photorealistic. No text, no logos, no holograms, no floating UI, no neon.
```

---

## Priority 3 — Cinematic hero video (1 hour, only if you want the premium scroll effect)

This is the Higgsfield part of your original plan. **Skip it unless you want it** — the site
is designed to look complete with the portrait alone, and video costs performance.

**Tool:** <https://higgsfield.ai> → Seedance 2.0 · Alternatives:
<https://runwayml.com> · <https://lumalabs.ai/dream-machine>

Settings for all three: **1080p, 8–12 seconds, 16:9, no audio, no text overlays.**
Upload `PassCrop.jpg` as the identity reference on every generation so your face stays
consistent.

### Scene 1 — THE ARRIVAL (hero background)
```
A bearded man in a navy suit stands still in a dark architectural space — polished stone
floor, a tall window to one side letting in warm low light. The camera pushes in slowly
and steadily toward him. Dust moves gently in the light beam. Deep navy shadows, warm
gold highlights. Calm confidence, completely still, no gesturing.
Cinematic, anamorphic, shallow depth of field, fine film grain.
No text, no graphics, no neon, no holograms.
```

### Scene 2 — THE SYSTEM (work section background)
```
Close on a dark desk at night. Reflections of moving data and a branching workflow
diagram play across a glass surface and the edge of a metal pen. The man's hands rest
near a keyboard, barely moving. The camera drifts slowly left to right.
Warm amber practical light against deep navy darkness. Extremely shallow focus.
Cinematic, quiet, precise. No readable text on screen, no neon, no sci-fi hologram UI.
```

### Scene 3 — THE INVITATION (contact section background)
```
The same man turns slowly toward the camera in a dark room and settles into a relaxed,
open stance. Warm key light from one side, deep shadow on the other. He is calm and
approachable — a small genuine expression, not a broad smile.
The camera is locked off and still. Cinematic portrait lighting, navy and gold,
fine grain, shallow depth of field. No text, no graphics, no neon.
```

**Deliver:** `public/video/scene-1.mp4`, `scene-2.mp4`, `scene-3.mp4`

**Then compress before adding them** — raw exports are far too heavy:
```bash
ffmpeg -i scene-1.mp4 -vcodec libx264 -crf 30 -preset slow -an -vf scale=1600:-2 scene-1-web.mp4
```
Target under **2 MB per clip**. If a clip is over 3 MB, raise `-crf` to 32 and re-run.
Tell me when they are in and I will wire them in with a static-image fallback for mobile and
for anyone on reduced-motion.

---

## Priority 4 — Case-study cover images (optional, 20 minutes)

Each case study currently opens with typography only, which looks clean and deliberate. Add
covers only if you want the work index to feel more visual.

**Tool:** <https://gemini.google.com> (Nano Banana Pro) or <https://www.recraft.ai>

Generate six, all in the **same** style so the grid stays coherent. Base prompt — swap the
subject line each time:

```
An abstract technical illustration, 16:9, on a deep navy background.
SUBJECT: <subject>
Rendered as thin precise gold linework on navy — like an architectural blueprint or a
printed scientific diagram. Flat, two colours only, generous negative space.
No text, no labels, no logos, no glow, no neon, no 3D, no photorealism.
Elegant and restrained.
```

| Case study | SUBJECT line |
|---|---|
| Valuation engine | `a city grid of apartment towers overlaid with a statistical distribution curve` |
| Streaming events | `many scattered arrows converging into one single clean channel` |
| LLM cost | `a large block breaking into five labelled proportional segments` |
| Workflow builder | `a flowing network of connected nodes branching and rejoining` |
| NexaDesk / StockPilot | `two separate building structures sharing one foundation layer` |
| Lead enrichment | `a dense column of records narrowing through a filter into a thin clean stream` |

**Deliver:** `public/work/<slug>.webp`, 1600×900.

---

## Quick reference — all tools

| Tool | Link | Use |
|---|---|---|
| Stitch | <https://stitch.withgoogle.com> | design direction (already connected) |
| Recraft | <https://www.recraft.ai> | vector logo, flat illustration |
| Gemini / Nano Banana Pro | <https://gemini.google.com> | images with your face as reference |
| Higgsfield Seedance | <https://higgsfield.ai> | cinematic video |
| Runway | <https://runwayml.com> | video alternative |
| Squoosh | <https://squoosh.app> | compress images to WebP/AVIF |
| FFmpeg | already installed on your machine | compress video |

---

## What I do NOT need from you

Generated by code at build time — do not make these by hand:
- The social share / Open Graph card
- The architecture diagrams inside each case study
- Background textures, grain and gradients
- Any icon that is not the SEM Corp. mark
