# INNOVATE 360&deg; — Problem Statement Challenge Website

*From Problems to Possibilities*

A premium, institutional-grade landing page for a technical innovation
challenge. Presents 20 real-world problem statements across 7 domains with
search, filtering, and a detailed view for each challenge.

## Tech stack

- **React 18** + **Vite** — fast dev server, minimal config
- **Tailwind CSS** — utility-first styling, custom blue/navy theme
- **lucide-react** — icon set

No backend, no database, no auth — problem statements live in a local data
file (`src/data/problemStatements.js`), which keeps the project simple to
run, host as a static site, and extend.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview   # preview the production build locally
```

## Project structure

```text
innovate-360/
│
├── public/
│   └── logos/                  # the three provided logos (EIS, IIC, E-Cell)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # sticky nav, logo cluster, mobile menu
│   │   ├── Hero.jsx            # headline, tagline, CTAs, ambient background
│   │   ├── Stats.jsx           # animated stat strip (challenges/domains/etc.)
│   │   ├── Filters.jsx         # search bar + domain & difficulty filter pills
│   │   ├── ProblemCard.jsx     # single challenge card in the grid
│   │   ├── ProblemGrid.jsx     # responsive grid + empty state
│   │   ├── ProblemDetails.jsx  # full-detail modal for a selected challenge
│   │   └── Footer.jsx          # links, domains list, logo credits
│   │
│   ├── data/
│   │   └── problemStatements.js  # all 20 problem statements as structured data
│   │
│   ├── pages/
│   │   └── Home.jsx            # composes sections + owns search/filter state
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind layers, theme background, keyframes
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Why this structure

- **`data/` is separate from `components/`** — every problem statement is a
  plain object. Adding, editing, or retiring a challenge means editing one
  array, never touching JSX.
- **`components/` are single-purpose and composable** — `Home.jsx` owns the
  search/filter state and passes it down; every visual piece (`Navbar`,
  `Hero`, `ProblemCard`, etc.) is presentational and reusable on its own.
- **Details use a modal, not a route** — with all content sourced from a
  local data file and no need for shareable per-problem URLs in this
  version, a modal (`ProblemDetails.jsx`) gives the same "detailed view"
  UX as a dedicated page without adding a router dependency. If deep-linkable
  problem pages are needed later, `ProblemDetails` can be lifted into a
  routed page with minimal changes since it already takes a single `problem`
  object as its prop.
- **Filtering is client-side and instant** — `Home.jsx` derives the filtered
  list with `useMemo`, so search and filter pills update the grid without a
  page reload or network round-trip.

## Customizing

- **Add a problem statement**: append an object to the array in
  `src/data/problemStatements.js` following the existing shape (`id`,
  `title`, `domain`, `difficulty`, etc.).
- **Add/rename a domain**: update the `domains` array in the same file and
  make sure each problem's `domain` field matches exactly.
- **Theme colors**: all custom colors (`navy`, `dark-blue`, `primary-blue`,
  `electric-blue`, `cyan`, `ink`, `muted`) are defined once in
  `tailwind.config.js`.
- **Logos**: replace the files in `public/logos/` (keep the same filenames,
  or update the paths in `Navbar.jsx` and `Footer.jsx`).
