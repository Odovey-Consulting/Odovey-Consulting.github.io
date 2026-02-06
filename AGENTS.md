# AGENTS.md

This file provides guidance to AI coding agents when working with this repository.

## Repository Overview

The Odovey Consulting website is a statically generated marketing site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4. It deploys to GitHub Pages via GitHub Actions. Blog content lives in a separate repository and is fetched at build time.

## Tech Stack

- **Framework:** Next.js 16 with App Router (`output: 'export'` — fully static)
- **Language:** TypeScript 5.9 (strict mode)
- **Runtime:** Node.js 22 LTS
- **Styling:** Tailwind CSS 4 with PostCSS
- **Icons:** Lucide React
- **Markdown:** unified + remark + rehype pipeline with GFM and Mermaid support
- **Package Manager:** npm
- **Deployment:** GitHub Pages (static export to `out/`)

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (auto-fetches blog content first) |
| `npm run build` | Build static site to `out/` |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler (no emit) |
| `npm run fetch-content` | Clone/pull blog content from odovey-blog repo |

Always run `npm run type-check` and `npm run lint` before considering work complete.

## Project Structure

```
app/                    Next.js App Router pages
├── layout.tsx          Root layout (Header + Footer)
├── page.tsx            Home page
├── about/              About Us
├── services/           Services
├── contact/            Contact (Typeform embed)
├── blog/               Blog listing + [slug] dynamic routes
├── not-found.tsx       404 page
└── globals.css         Global styles + Tailwind theme
components/             Reusable React components
├── Header.tsx          Sticky nav with mobile menu
├── Footer.tsx          Site footer
└── BlogPostGrid.tsx    Blog listing with client-side tag filtering
lib/
└── blog.ts             Blog post fetching and Markdown processing
content/blog/           Blog content (fetched at build, gitignored)
scripts/
└── fetch-content.sh    Clones odovey-blog repo into content/blog
public/images/          Static assets
```

## Architecture Decisions

**Static Export:** The entire site is pre-rendered at build time. There are no API routes or server-side rendering. Do not introduce server-only features.

**Blog Content:** Blog posts live in the `odovey-blog` repository and are cloned into `content/blog/` at build time. Posts use `YYYY-MM-DD-slug.md` filenames with YAML frontmatter (title, date, excerpt, author, tags, draft). Do not commit blog content to this repo.

**Markdown Pipeline:** Posts are processed through unified → remark-parse → remark-gfm → remark-rehype → rehype-raw → rehype-mermaid → rehype-stringify. Mermaid diagrams require Playwright (Chromium) at build time for SVG rendering.

**Static Params:** Dynamic blog routes use `generateStaticParams()` to pre-render all post pages. Any new dynamic routes must also use this pattern.

## Conventions

### Components

- **Server components** by default. Only add `'use client'` when the component needs browser APIs, hooks, or event handlers.
- Component files use **PascalCase** (`Header.tsx`, `BlogPostGrid.tsx`).
- Utility files use **camelCase** (`blog.ts`).
- Types and interfaces use **PascalCase** (`BlogPostMeta`, `BlogPost`).

### Styling

- Use **Tailwind utility classes** directly. Avoid custom CSS unless defining reusable component-layer classes.
- Custom component classes (`btn-primary`, `btn-secondary`, `section-padding`, `container-max`, `prose-blog`) are defined in `globals.css` using Tailwind's `@layer components`.
- Two custom color palettes: `primary` (blue) and `secondary` (cyan), each with shades 50–900.
- Mobile-first responsive design using `md:` and `lg:` breakpoints.

### Pages

- Export a `metadata` object (or `generateMetadata` function for dynamic pages) for SEO.
- Use semantic HTML5 elements (`<section>`, `<main>`, `<article>`).
- Use Next.js `Link` component for all internal navigation.

### Path Alias

`@/*` maps to the project root. Use `@/components/Header` instead of relative paths.

## CI/CD Pipeline

GitHub Actions (`.github/workflows/deploy-to-github-pages.yml`) runs on push to `main` and on `repository_dispatch` (blog content updates):

1. Checkout code
2. Clone blog content from odovey-blog
3. Setup Node.js 22
4. `npm ci`
5. Install Playwright Chromium (for Mermaid)
6. `npm run type-check`
7. `npm run lint`
8. `npm run build`
9. Deploy `out/` to GitHub Pages

## External Integrations

- **Typeform** — Contact form loaded dynamically on the contact page.
- **odovey-blog repo** — Blog content source, fetched via script.
- **GitHub Pages** — Hosting target.

## Things to Avoid

- Do not add API routes or server-side rendering — the site is statically exported.
- Do not commit anything in `content/blog/` — it is gitignored and fetched at build time.
- Do not reference specific vendor products in marketing copy (keep messaging vendor-agnostic).
- Do not disable strict TypeScript mode.
