# lakebbs.ca

Public overview repository for **lakebbs** — a Chinese-language local community platform for Thunder Bay, Sudbury, and Ontario's smaller northern cities.

The private implementation lives in a separate source repository. This repository exists to explain what the product is, what problems it is solving, and how the project is evolving — without exposing the live application source.

## Positioning

lakebbs is not positioned as a generic forum clone. The product direction is stronger than that:

- a city-aware Chinese local information platform
- a community layer for smaller Canadian cities with weak information infrastructure
- a hybrid between forum, local marketplace, housing board, and settlement guide
- a structured local product rather than a single undifferentiated feed

## Stack Signal

lakebbs was recently rewritten from a Vue 2 / Express stack onto a modern TypeScript stack:

- **Frontend** — Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Base UI, shadcn
- **Backend** — Next.js Server Components + Server Actions, Drizzle ORM, MySQL 5.7, NextAuth v5
- **Product shape** — city-aware routing, local content categories, SEO landing pages, messaging, search, notifications, admin GEO (generative engine optimization), dynamic sitemap and robots

This public repo includes a small TypeScript code surface so visitors can see the kind of stack and patterns the project is built with.

## Snapshot

| Item | Value |
| --- | --- |
| Product | lakebbs |
| Public surface | `lakebbs-ca` |
| Private source | private repository |
| Core regions | Thunder Bay, Sudbury, Northern Ontario |
| Core categories | rentals, second-hand, jobs, immigration, local guides, community posts |
| Product model | city-aware community platform with structured local information flows |
| Primary stack | TypeScript, Next.js 16, React 19, Drizzle ORM, MySQL 5.7, NextAuth v5, Tailwind CSS 4 |

## What lakebbs Is

lakebbs is being shaped as a Chinese local information and community platform for smaller Canadian cities that are usually underserved by mainstream product ecosystems.

The current product surface combines:

- community posting and discussion
- city-based navigation and content isolation
- rentals, second-hand, jobs, and local life categories
- immigration and settlement-oriented landing pages
- search, private messaging, notifications, follow / block, and local trust-building flows

## Product Story

For many Chinese students, newcomers, and local residents in places like Thunder Bay and Sudbury, useful information is fragmented. Housing details are scattered across chats, second-hand listings are inconsistent, job signals are noisy, and migration or settlement advice is hard to track in one place.

lakebbs is aimed at that gap. The product direction is not "another forum." It is a structured local platform that brings housing, community discussion, local services, student life, and migration-related information into one city-aware system.

## Why It Matters

- smaller cities still need high-quality local information products
- local Chinese communities often rely on fragmented channels with low structure
- city-specific pages create better relevance than one undifferentiated feed
- guides and landing pages can turn scattered local knowledge into reusable information assets
- a forum becomes far more useful when paired with categories, routing, search, and operational content structure
- city-scoped surfaces and structured categories make the product friendly to both human readers and AI search engines

## Current Scope

- Thunder Bay and Sudbury city surfaces, with room for additional northern Ontario cities
- local forum-style posting flows, with image gallery support
- housing, second-hand, automotive, job, and community sections
- SEO landing pages for rentals, immigration, and university-related queries
- private messaging, in-app notifications, and full-text search
- follow / block / profile editing / password change
- mobile-first responsive layout with dedicated top and bottom navigation bars
- admin surface: audience distribution, AI bot activity, GEO readiness checklist, content citation tracking
- dynamic `sitemap.xml` (root + city pages + sections + landing pages + newest posts, hourly revalidation)
- dynamic `robots.txt` with an AI crawler allowlist and Bytespider crawl-delay

## Why It Is Stronger Than A Plain Forum

- city-specific routing gives each location its own information surface
- category structure makes housing, jobs, second-hand, and community flows more usable
- SEO and GEO landing pages turn local knowledge into long-lived discovery assets
- the product can serve newcomers, students, renters, buyers, and local residents in one system
- the architecture is closer to a local information platform than a simple discussion board
- a typed, server-component-first stack keeps the product fast and shippable as it grows

## Public Code Surface

Representative TypeScript examples in this repo:

- [examples/frontend-city-routing.ts](./examples/frontend-city-routing.ts)
- [examples/backend-city-feed.ts](./examples/backend-city-feed.ts)

Example excerpt:

```ts
export function buildCityPath(
  citySlug: string = 'thunderbay',
  section: string = 'freshNews',
): string {
  const city = normalizeCitySlug(citySlug);
  const sectionKey = section.trim() || 'freshNews';
  return city === 'all' ? `/${sectionKey}` : `/${city}/${sectionKey}`;
}
```

## Repository Model

| Repository | Visibility | Purpose |
| --- | --- | --- |
| private source | Private | Source code, Next.js application, database schema, admin tools, deployment configuration |
| `lakebbs-ca` | Public | Product overview, public notes, roadmap, and project-facing documentation |

## Current Position

lakebbs has just completed a full rewrite from the original Vue 2 + Express stack to Next.js 16 + React 19 + TypeScript + Drizzle, while preserving the existing MySQL database. The implementation remains private; this public repository tracks the product narrative and surfaces representative code patterns.

## Roadmap

- expand city coverage beyond Thunder Bay and Sudbury into more northern Ontario cities
- deepen GEO (generative engine optimization) coverage so AI search engines cite local content correctly
- continue building out the local marketplace flows (housing, second-hand, jobs)
- grow the landing page library for high-intent local queries (rentals, immigration, schools)
- add screenshots and architecture notes to the public surface
- expand the public code surface with more representative TypeScript snippets
