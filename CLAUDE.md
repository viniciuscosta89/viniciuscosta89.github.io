# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project Overview
Personal portfolio site for Vinicius Costa. Astro ^7 (static output) with React 18 islands for interactive UI, TailwindCSS ^4, TypeScript ^5. Internationalization for `en-US`/`pt-BR` is present via astro-i18next, but see the caveat below — it isn't fully wired up.

## Tooling
- **Package manager:** pnpm 11 (pinned via `packageManager` in `package.json`). `engines.node` requires `>=22.12.0`, matching what Astro ^7 itself needs to run `dev`/`build` — use the version in `.nvmrc` (24).
- **`pnpm-workspace.yaml`:** holds the `allowBuilds` allowlist (cypress, esbuild, react-vertical-timeline-component, sharp) — this is where pnpm now reads that setting; it's no longer read from a `"pnpm"` key in `package.json`.
- **Scripts:** `pnpm dev`/`start` (dev server), `pnpm build` (`astro check && astro build`), `pnpm preview`, `pnpm lint`/`format`/`check` (Biome 2, writes fixes in place), `pnpm cypress:open`.
- **Linting/formatting:** Biome is the only tool (`biome.json`, scoped to `src/**/*.{js,ts,jsx,tsx,astro,css}`). No ESLint.
- **Testing:** Cypress ^13 is a dependency with a script, but there is no `cypress.config` and no spec files anywhere in the repo — it is effectively unused, not an active suite.

## Directory Map
- `src/components/` — feature-based UI components (Contact, Experience, Project, VerticalNav, etc.), generally using a `.Root`/`.Item` compound-component pattern.
- `src/pages/index.astro` — the single landing page; composes every section.
- `src/data/` + `src/types/` — paired static data and its TypeScript interface, one file per domain (`experience`, `jobs`, `projects`, `social-networks`).
- `src/utils/` — small standalone helpers (e.g. `date.ts`), imported via the `@utils/*` alias.
- `src/layouts/Layout.astro` — global layout, meta tags, fonts, analytics.
- `public/locales/{en-US,pt-BR}/` — astro-i18next translation namespaces.

## Path Aliases (`tsconfig.json`)
`@components/*`, `@layouts/*`, `@assets/*`, `@data/*`, `@type/*`, `@utils/*` map to their matching `src/*` subfolder. `@/*` maps to the **repo root**, not `src/*` — don't reuse it for something under `src`.

## Known Caveats
- **Cypress** is installed and scripted but has zero config/spec files — don't assume tests exist or run in CI.
- **i18n is partial:** `public/locales/*/experience.json` defines pluralization keys that nothing in `src` actually calls (`useTranslation`/`i18next`); the Experience section's singular/plural text is hard-coded inline in `ExperienceText.astro` instead. Check before assuming a section is translated just because a locale file exists for it.
- Prefer deriving displayed values at build time over hard-coding them, following the pattern in `src/data/experience.ts`: each skill stores a `startDate`/`endDate` and `@utils/date`'s `getYearsOfExperience` computes the year count, so it never needs a manual bump.

## Git Conventions
See the "Git Conventions" section in [.github/copilot-instructions.md](.github/copilot-instructions.md) — Conventional Commits for commits, branch names, and PR titles, with a required body explaining *why*.
