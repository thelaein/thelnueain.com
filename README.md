# thelnueain.com — Thel Nu Portfolio

Aurora-themed portfolio for **Thel Nu, UI/UX Designer** — ported from [thelnu.framer.website](https://thelnu.framer.website) to Next.js App Router with real Framer screenshots and production SEO.

Live: **https://thelnueain.com** · Stack: **Next.js 16.3 (Turbopack) / React 19 / Tailwind CSS 4 / TypeScript 5**

## Features

- **Aurora design system** — dark canvas `#11121A`, accents `#7657FF → #5BE7FF`, `Fraunces` (head) + `Inter` (body) via `next/font`, blurred radial fields + grain, `CustomCursor`/`Decor`
- **Home sections** — Hero (word-swap + parallax canvas), Marquee, SelectedWork (3 cases), Numbers, Expertise, Journey, Before/After, Tools (magnetic repel), Experience Timeline, Personal, FinalCTA
- **Case studies** — `SSG` per `lib/data.ts:PROJECTS` (`hr` / `readfam` / `posco`) with persona, task flows, user stories, hypothesis, style-guide artifact, `next/image` heroes (`public/cases/{hr,readfam,posco}/hero.png`) and wireframe flow
- **About** — real portrait `public/cases/about-portrait.jpg` (3423×3024 → 1500w), experience + principles + skills
- **SEO** — `metadataBase`, `title.template`, `openGraph`/`twitter`, per-case `opengraph-image`, `icon` (512) / `apple-icon` (180) via `next/og`, `twitter-image`, `manifest.webmanifest`, `sitemap.xml`, `robots.txt`, `Person`+`WebSite` JSON-LD, canonicals
- **Production routes** — `not-found`, `error`, `global-error`, `loading`, `proxy.ts` (ex-`middleware.ts` for Next 16.3), security headers + CSP in `next.config.ts`, `images: {avif,webp}`, `api/contact` (validation + 5/min rate-limit, ready for Resend)
- **Contact** — controlled form (`ContactClient`) with `POST /api/contact`, consistent 52px fields + custom chevron

## Architecture

```
app/
  layout.tsx          // next/font, metadata, viewport, JsonLd, Decor/Cursor/Navbar/Footer
  page.tsx            // Home (11 sections)
  (work|about|process|playground|contact)/page.tsx  // server wrappers + metadata
  case/[id]/page.tsx           // SSG + async generateMetadata
  case/[id]/opengraph-image.tsx // per-case OG (1200×630)
  icon.tsx / apple-icon.tsx / opengraph-image.tsx / twitter-image.tsx
  sitemap.ts / robots.ts / manifest.ts
  not-found.tsx / error.tsx / global-error.tsx / loading.tsx
  api/contact/route.ts
components/
  layout/ (Navbar, Footer, Decor, CustomCursor)
  sections/ (Hero, Marquee, SelectedWork, Numbers, Expertise, Journey, BeforeAfter, Tools, ExperienceTimeline, Personal, FinalCTA, CaseSections)
  ui/ (MockVisual — Image fallback, Reveal)
  work/WorkClient, process/ProcessClient, playground/PlaygroundClient, contact/ContactClient
lib/
  data.ts  // PROJECTS, EXPERIENCE, TOOLS, etc. (enriched from Framer)
  seo.ts   // siteConfig
proxy.ts
public/cases/  // real screenshots (hero, phone, wireframe) + about-portrait.jpg
```

Original HTML template kept at `docs/thel-nu-portfolio.html` for reference.

## Getting Started

Requires `bun` 1.3+ (or npm/yarn/pnpm).

```bash
bun install
bun dev      # http://localhost:3000
bun run build # → 22 static routes
bun start
bun run lint
```

No env required for dev. For contact email, wire `lib/seo.ts:email` to Resend in `app/api/contact/route.ts:40`.

## Scripts

| Command | Description |
|---|---|
| `bun dev` | Turbopack dev |
| `bun run build` | Production build (Turbopack) |
| `bun start` | Serve build |
| `bun run lint` | ESLint (next) |

## Images

Real exports from Framer (`framerusercontent.com`) → `public/cases/`:

- `hr/hero.png` (composite 7 phones + desktop), `c1...`, `phone-checkin.png`, `xJsf` wireframe (now clean mock)
- `readfam/hero.png`, `bq7...`, `Ea2...`
- `posco/hero.png`, `NS3Xn...`, `zhbhte...`
- `about-portrait.jpg` (Thel Nu reading, 1500w)

Add new case: extend `PROJECTS` in `lib/data.ts`, drop `hero.png` in `public/cases/<id>/`, `generateStaticParams` picks it up.

## Deployment

Vercel (recommended) — zero config; `next.config.ts` headers handle CSP. Set `NEXT_PUBLIC_GA_ID` for `components/analytics/Analytics.tsx` if needed.

## License

Portfolio content © Thel Nu. Code MIT.
