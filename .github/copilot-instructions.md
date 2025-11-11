# Copilot Instructions for viniciuscosta89.github.io

## Project Overview
- Personal portfolio site built with Astro, React, and TailwindCSS.
- Internationalization (i18n) for `en-US` and `pt-BR` via astro-i18next.
- Component-driven architecture: Astro for layouts/pages, React for interactive UI.

## Key Directories & Files
- `src/components/`: UI components by feature (Contact, Experience, Project, etc.)
- `src/pages/index.astro`: Main landing page, composes all sections.
- `src/data/`: Static data for experience, jobs, projects.
- `public/locales/`: i18n translation files per language/namespace.
- `astro.config.mjs`, `astro-i18next.config.mts`: Framework/i18n config.
- `src/layouts/Layout.astro`: Global layout, meta tags, fonts, analytics.

## Developer Workflows
- **Start Dev Server:** `pnpm dev` or `pnpm start`
- **Build:** `pnpm build` (type checks + build)
- **Preview:** `pnpm preview`
- **Lint:** `pnpm lint` (Biome)
- **Format:** `pnpm format` (Biome)
- **Format, lint and organize imports:** `pnpm check` (Biome)
- **Cypress:** `pnpm cypress:open` (E2E/component tests)

## Patterns & Conventions
- **Composition:** Prefer `.Root`/`.Item` pattern (see VerticalNav, Hero, Project).
- **Styling:** TailwindCSS utilities, global styles in `src/styles/global.css`.
- **Forms:** Use `react-hook-form` + `zod` for validation (`ContactForm.tsx`, `schema.ts`). reCAPTCHA integrated.
- **Animations:** Use `framer-motion` for transitions.
- **Icons:** Centralized in `src/components/Icons/`.
- **i18n:** Text from translation JSONs in `public/locales/`, managed by astro-i18next.
- **Data Flow:** Static data from `src/data/` mapped into UI.

## Integration Points
- **EmailJS:** Contact form submissions (`ContactForm.tsx`).
- **Vercel Analytics:** Via `@vercel/speed-insights/astro` in layout.
- **Astro-i18next:** Locale detection/translation loading.

## Project-Specific Notes
- **Trusted Dependencies:** Only `sharp` in `package.json`.
- **Testing:** Cypress set up, but no test files present.
- **Linting:** Biome, ESLint, Prettier; Biome relaxed for `.astro` files.
- **TypeScript:** Types in `src/types/`.
- **Mobile-First:** Responsive layouts/components.

## Example: Add a New Project
1. Add to `src/data/projects.ts`.
2. Add images to `src/assets/projects/`.
3. Update translations in `public/locales/{lang}/projects.json`.
4. UI auto-renders via `Project.Grid`.

## Example: Add a New Locale
1. Add folder in `public/locales/` (e.g., `es-ES`).
2. Copy/translate all namespace JSONs.
3. Update `astro-i18next.config.mts`.

---
For unclear conventions, review `README.md` or ask for clarification. Suggest improvements if instructions are missing or outdated.
