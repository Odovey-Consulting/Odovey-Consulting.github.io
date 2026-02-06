# Odovey Consulting Website

Corporate website for [Odovey Consulting](https://odovey.com) — a consultancy specializing in cloud and AI professional services.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Runtime:** Node.js 22 LTS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static site to `out/` |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Project Structure

```
app/
  layout.tsx          Root layout
  page.tsx            Home
  about/page.tsx      About Us
  services/page.tsx   Services
  contact/page.tsx    Contact
  not-found.tsx       404
  globals.css         Global styles and Tailwind theme
components/
  Header.tsx          Navigation header
  Footer.tsx          Site footer
public/
  images/             Static assets
```

## Deployment

The site is statically exported and deployed to GitHub Pages via the workflow in `.github/workflows/deploy-to-github-pages.yml`. Pushes to `main` trigger a build that runs type-check, lint, and build before deploying.

## License

Proprietary — Odovey Consulting.
