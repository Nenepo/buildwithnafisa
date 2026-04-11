# buildwithnafisa — Portfolio

Bold editorial portfolio built with Next.js 14 App Router + CSS Modules. No UI library dependencies, no Tailwind required — just clean, scoped CSS and fast renders.

---

## Quick Start

```bash
# 1. Copy these files into your existing Next.js project root
#    (or use as a standalone project)

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
buildwithnafisa/
├── app/
│   ├── globals.css          # Design tokens (CSS variables) + base styles
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Composes all sections
├── components/
│   ├── Nav.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   └── sections/
│       ├── Hero.tsx / .module.css
│       ├── Marquee.tsx / .module.css
│       ├── Services.tsx / .module.css
│       ├── Projects.tsx / .module.css
│       ├── Process.tsx / .module.css
│       ├── Testimonials.tsx / .module.css
│       └── CTA.tsx / .module.css
└── lib/
    └── data.ts              # ← ALL content lives here. Edit this file.
```

---

## Customising Content

**Everything you need to change is in `lib/data.ts`.**

| Export | What it controls |
|---|---|
| `SITE` | Site name, email, URL |
| `HERO` | Headline, description, grid cells, stats |
| `STACK_MARQUEE` | Scrolling tech ticker |
| `SERVICES` | 3 service cards + skill bars |
| `PROJECTS` | Project cards (name, summary, tags, URL) |
| `PROCESS_STEPS` | 4-step process section |
| `TESTIMONIALS` | Client quote cards |

### Adding a real project screenshot

In `Projects.tsx`, each card has a `visual` field (`'code'` | `'tags'` | `'steps'`). To use a real image instead:

1. Add your image to `/public/projects/`
2. Import `Image` from `next/image`
3. Replace the visual component with:
   ```tsx
   <Image src="/projects/your-image.png" alt="Project name" fill style={{ objectFit: 'cover' }} />
   ```

---

## Design Tokens

All colours and fonts are CSS variables in `app/globals.css`:

```css
--ink: #0e0e0e;          /* main text */
--cream: #f5f2eb;        /* section backgrounds */
--warm-white: #faf9f6;   /* page background */
--accent: #c8410c;       /* orange-red accent */
--muted: #6b6560;        /* secondary text */
```

To change the accent colour (e.g. to a deep teal), just update `--accent`.

---

## Deployment

```bash
# Vercel (recommended — zero config)
npx vercel

# Or push to GitHub and import at vercel.com
```

---

## Performance Notes

- No external JS libraries — pure CSS animations
- Google Fonts loaded via CSS `@import` in `globals.css` (swap to `next/font` for better perf)
- All sections are server components except `Nav` (marked `'use client'` for future mobile menu)
