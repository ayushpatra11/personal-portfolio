# Personal Portfolio — ayushpatra11.uk

Personal site for Ayush Patra, software engineer based in Manchester, UK.
Built with Next.js 14 and deployed on Cloudflare Workers.

**Live:** [ayushpatra11.uk](https://ayushpatra11.uk)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion 11 |
| Fonts | Playfair Display, Inter, JetBrains Mono |

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build and export to `out/` |
| `npm run type-check` | Run TypeScript compiler |
| `npm run lint` | Run ESLint |

---

## Project structure

```
src/
  app/           Next.js App Router (layout, page, global styles)
  components/    Page sections and UI (Hero, Navbar, Projects ...)
  lib/           Content data, TypeScript types, GitHub API helper
public/
  images/        Static assets
```

---

## Sections

- **Hero** — intro, photo, links
- **About** — background and areas of focus
- **Projects** — selected work with GitHub links
- **Career** — professional experience
- **Education** — degrees and academic background
- **Skills** — languages, tools, and practices
- **Stats** — live GitHub activity and LeetCode solve count

---

## Author

Ayush Patra — [ayushpatra11.uk](https://ayushpatra11.uk)
