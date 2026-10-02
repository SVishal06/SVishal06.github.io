# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server
- `npm run build` — static export to `out/` (this is what gets deployed)
- `npm run lint` / `npm run typecheck` — no test suite exists
- Node 22 and `npm ci` are used in CI.

## Architecture

Personal portfolio: Next.js App Router, TypeScript, Framer Motion. It is a **fully static site** — `next.config.mjs` sets `output: "export"`, `trailingSlash: true`, `typedRoutes: true`, and `images.unoptimized`. So there are no API routes, server actions, or runtime server features; anything dynamic must run client-side.

- `app/<route>/page.tsx` — one page each for home, experience, projects, achievements, writing, contact. Shared shell and nav are in `app/layout.tsx` with `components/site-header.tsx` and `site-footer.tsx`.
- `lib/site-data.ts` — the single source of truth for content (nav links, skills, projects, etc.). Edit copy and projects here rather than in the page components. `navLinks` is typed `as const`, and with `typedRoutes` enabled, new pages need a nav entry and a matching route to typecheck.
- `components/` — presentational and animation helpers (`reveal`, `parallax-panel`, `intro-hero`, `project-card`, …).
- Client-side integrations:
  - `components/contact-form.tsx` posts JSON to Formspree via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. If the variable is unset, the form goes straight to its error state. Copy `.env.example` for local use.
  - `components/hashnode-post-previews.tsx` fetches posts from the Hashnode publication `vishalbuild.hashnode.dev` in the browser. The Writing page links out to the blog rather than duplicating its content.
- Images and the resume live in `public/` (`placeholders/`, `resume-placeholder.pdf`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `out/` to GitHub Pages. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` comes from the repo Actions *variable* of the same name, since it is inlined at build time.

## Content and design constraints

`portfolio-brief.md` and `codex-base-prompt.md` hold the original brief:
- Design should be clean, minimal, and not template-like, with tasteful scroll animations that respect `prefers-reduced-motion`.
- The FMCG Distribution system is the primary/hero project.
- The Infivion internship (Sentira AI) is a company project: describe the role and contribution only, and do not link code or claim ownership.
