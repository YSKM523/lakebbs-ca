# lakebbs.ca

Public overview repository for lakebbs, a Chinese local community platform focused on Thunder Bay, Sudbury, and Ontario's smaller northern cities.

The private implementation lives in `lakebbs-source`. This repository exists to explain what the product is, what problems it is solving, and how the project is evolving without exposing the live application source.

## Snapshot

| Item | Value |
| --- | --- |
| Product | lakebbs |
| Public surface | `lakebbs-ca` |
| Private source | `lakebbs-source` |
| Core regions | Thunder Bay, Sudbury, Northern Ontario |
| Core categories | rentals, second-hand, jobs, immigration, local guides, community posts |
| Product model | city-aware community platform with structured local information flows |

## What lakebbs Is

lakebbs is being shaped as a Chinese local information and community platform for smaller Canadian cities that are usually underserved by mainstream product ecosystems.

The current product surface combines:

- community posting and discussion
- city-based navigation and content isolation
- rentals, second-hand, jobs, and local life categories
- immigration and settlement-oriented landing pages
- search, messaging, and local trust-building flows

## Product Story

For many Chinese students, newcomers, and local residents in places like Thunder Bay and Sudbury, useful information is fragmented. Housing details are scattered across chats, second-hand listings are inconsistent, job signals are noisy, and migration or settlement advice is hard to track in one place.

lakebbs is aimed at that gap. The product direction is not just "another forum." It is a structured local platform that brings housing, community discussion, local services, student life, and migration-related information into one city-aware system.

## Why It Matters

- smaller cities still need high-quality local information products
- local Chinese communities often rely on fragmented channels with low structure
- city-specific pages create better relevance than one undifferentiated feed
- guides and landing pages can turn scattered local knowledge into reusable information assets
- a forum model becomes more useful when paired with categories, routing, search, and operational content structure

## Current Scope

- Thunder Bay and Sudbury city surfaces
- local forum-style posting flows
- housing, second-hand, automotive, job, and community sections
- SEO landing pages for rentals, immigration, and university-related queries
- private messaging and internal search

## Repository Model

| Repository | Visibility | Purpose |
| --- | --- | --- |
| `lakebbs-source` | Private | Source code, backend, frontend, scripts, and operational files |
| `lakebbs-ca` | Public | Product overview, public notes, roadmap, and project-facing documentation |

## Current Position

lakebbs is currently being reorganized from a live VPS deployment into a cleaner source structure. The implementation remains private while the project surface is being clarified for public presentation.

## Roadmap

- clean and standardize the private source tree
- consolidate historical patches into the main codebase
- improve the public-facing product narrative
- add screenshots and architecture notes
- decide how the product should be positioned long term: community forum, local information hub, or hybrid local platform
