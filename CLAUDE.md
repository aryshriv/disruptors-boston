# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page Next.js marketing site for "Disruptors" — a Boston student builder cohort. There is no backend, no database, no auth, and no test suite; the entire content of the site lives in [app/page.tsx](app/page.tsx).

## Commands

```
npm install   # install dependencies
npm run dev   # start dev server (localhost:3000)
npm run build # production build
npm run start # run the production build
npm run lint  # eslint .
```

There is no test suite and no CI configured — verify changes by running the dev server and checking the page visually.

Node.js is not preinstalled in all environments; if `npm`/`node` are missing, install Node LTS first (`winget install OpenJS.NodeJS.LTS` on Windows) and open a fresh shell before retrying.

## Architecture

- **Everything is one page.** [app/page.tsx](app/page.tsx) is the entire site — hero, "what is this", "who we want", team bios, FAQ, CTA, footer — all as sequential `<div>` sections in a single client component. There is no routing beyond this single route.
- **Team member data is hardcoded inline** as repeated JSX blocks in the "Team Section" (not a mapped array), each with a name, LinkedIn URL, role, and bio. Profile images are hotlinked from Firebase Storage / LinkedIn CDN URLs, not stored locally. When adding/editing team members, follow the existing per-person block pattern.
- **Visual theme**: retro-terminal/ASCII aesthetic, monospace fonts, primary blue (`rgb(14,27,245)`), dashed borders between sections. Two custom decorative components drive this:
  - [components/ascii-background.tsx](components/ascii-background.tsx) — canvas-based animated ASCII character grid behind the hero.
  - [components/ascii-border.tsx](components/ascii-border.tsx) — randomly-generated ASCII character borders around the viewport.
  - [components/ascii-art.ts](components/ascii-art.ts) — static ASCII wordmark used in the hero.
- **UI primitives**: [components/ui/](components/ui/) is a full shadcn/ui (`new-york` style) install — treat these as generated/vendored components. Prefer composing existing primitives from here over hand-rolling new ones; regenerate/add new ones via the shadcn CLI rather than hand-writing from scratch, consistent with [components.json](components.json) (aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`).
- **Path alias**: `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)).
- Next config ([next.config.mjs](next.config.mjs)) sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — type errors will not fail `next build`, and `next/image` optimization is disabled (consistent with hotlinked external images).
