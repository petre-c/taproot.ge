# taproot.ge — Website Design

**Date:** 2026-06-04
**Status:** Approved (pending spec review)

## Overview

A single-page, fully static informational website for **taproot.ge**, the Bitcoin
community in Tbilisi. The site's purpose is to invite people to **come talk about
Bitcoin** at in-person meetups. Coffee and cookies are framed as hospitality — what's
waiting for you when you show up — not a product line. There is **no commerce**: no
cart, no checkout, no order forms, no payment integration.

The site is Bitcoin-only ("pure Bitcoin, no other coins"): ₿, sats, and Lightning are
first-class concepts; altcoins and the generic term "crypto" are never mentioned.

## Goals

- Communicate what the community is and invite people to the next meetup.
- Present upcoming and past meetups from an easily-editable static data file.
- Convey warmth (coffee/community) fused with Bitcoin identity (orange, ₿).
- Be trivially cheap to host: static files on GitHub Pages.

## Non-Goals (v1)

- Online checkout / payment / cart.
- Order or pre-order forms.
- Georgian translation / i18n (English only).
- CMS, user accounts, or any backend.

## Tech Stack

- **Vite + React + TypeScript** — static SPA.
- **Tailwind CSS** + **shadcn/ui** components (Button, Card, Badge, Separator, and a
  lightweight anchored nav). shadcn components are copied into the repo (not a runtime dep).
- **Content as typed data files** (`src/data/events.ts`, `src/data/menu.ts`) so content
  edits don't require touching component code.
- No backend, no payment SDK, no i18n framework.

## Visual Identity — Dark but Warm

A warm espresso palette rather than cold pure-black, with Bitcoin orange as the accent.

| Token            | Value      | Use                                  |
|------------------|------------|--------------------------------------|
| Background       | `#17120e`  | Page background (deep espresso)      |
| Surface          | `#1f1812`  | Cards, raised surfaces               |
| Border           | `#3a2f26`  | Subtle warm borders                  |
| Primary accent   | `#F7931A`  | Bitcoin orange — CTAs, ₿, highlights |
| Secondary        | `#d99a5b`  | Caramel/amber — secondary accents    |
| Text             | `#f5ece0`  | Warm cream body text                 |
| Muted text       | `#b8a894`  | Secondary/meta text                  |

- Characterful display font for headings, clean sans for body, monospace for any ₿/sats
  figures.
- Soft warm shadows, rounded cards, subtle warm glow/grain — never cold/flat black.
- These map to shadcn/Tailwind CSS variables (`--background`, `--foreground`, `--primary`,
  etc.) in a single dark theme; there is no light mode in v1.

## Page Structure (single page, anchored nav)

A sticky top nav with anchor links scrolls to each section.

1. **Hero**
   - Wordmark "taproot.ge" with a ₿ motif.
   - Primary message / CTA: **"Come talk about Bitcoin."**
   - Next-meetup summary (date + venue, pulled from events data) and a "Join on Telegram"
     button.

2. **About**
   - What the community is: a Bitcoin-only meetup in Tbilisi for learning, building, and
     stacking sats. Warm, welcoming, no altcoins.
   - One line woven in about free coffee & cookies setting the tone.

3. **Meetups**
   - Rendered from `src/data/events.ts`.
   - Each event: date, venue, topic/title, short description, optional RSVP/Telegram link.
   - Logic splits **upcoming** (date >= today) from **past** (date < today), sorts
     upcoming soonest-first and past most-recent-first.
   - If there are no upcoming events, show a friendly "next one is being planned — join
     Telegram" state.

4. **Coffee & cookies (hospitality)**
   - A warm "what's waiting for you" section: short welcoming copy plus a few cards
     (e.g. espresso, filter coffee, cookies) sourced from `src/data/menu.ts`.
   - **No prices, no sats figures, no buy buttons.** Purely inviting.

5. **Join / Contact (+ footer)**
   - Links: Telegram, Nostr, location/map link.
   - Footer with ₿ flourish and a short Bitcoin-only tagline.

## Component Architecture

```
src/
  data/
    events.ts        # typed Event[] — the meetup list
    menu.ts          # typed hospitality items (name, blurb, image)
  components/
    ui/              # shadcn components (button, card, badge, separator, ...)
    sections/
      Hero.tsx
      About.tsx
      Meetups.tsx
      Coffee.tsx
      Join.tsx
    Nav.tsx          # sticky anchored nav
    Footer.tsx
  lib/
    events.ts        # helpers: split upcoming/past, sort, format dates
  App.tsx            # composes nav + sections + footer
  main.tsx
  index.css          # tailwind + theme CSS variables
```

Each section component is small, focused, and reads from its data file. `lib/events.ts`
holds the only non-trivial logic (date partitioning/sorting) so it can be unit-tested
independently of rendering.

## Data Models

```ts
// src/data/events.ts
type Event = {
  id: string;
  title: string;          // topic of the meetup
  date: string;           // ISO date, e.g. "2026-06-20"
  venue: string;
  description: string;
  link?: string;          // RSVP / Telegram thread
};

// src/data/menu.ts
type Treat = {
  id: string;
  name: string;           // e.g. "Espresso", "Oat cookies"
  blurb: string;          // short warm description
  image?: string;         // optional asset path
};
```

## Deployment

- Hosted on **GitHub Pages** from the **`gh-pages`** branch, under the **petre-c**
  GitHub account.
- GitHub Actions workflow on push to `main`: install → `vite build` → deploy `dist/` to
  `gh-pages` (via `actions/deploy-pages` or `peaceiris/actions-gh-pages`).
- Vite `base` configured for the GitHub Pages path (e.g. `/taproot.ge/` for a project
  page, or `/` if a custom domain / user-page is used). A `CNAME` file is added if the
  `taproot.ge` custom domain is pointed at Pages.
- The workflow file is heavily commented to make intent clear (per project conventions).

## Testing

- **Unit tests** (Vitest) for `lib/events.ts`: upcoming/past partitioning, sort order,
  empty-upcoming case, date formatting.
- **Build verification:** `vite build` must succeed and produce `dist/`.
- Manual visual check of the dark-warm theme and responsive layout (mobile + desktop).

## Open Questions / Assumptions

- Exact Telegram / Nostr handles and venue details are placeholders until provided; they
  live in data/config and are trivial to fill in.
- Custom domain `taproot.ge`: assumed to eventually point at GitHub Pages; until then the
  site works at the project-pages URL. `base` is set accordingly.

---
*Collaboration by Claude*
