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
**Start Dev Server:** `pnpm dev` or `pnpm start`
**Build:** `pnpm build` (type checks + build)
**Preview:** `pnpm preview`
**Lint:** `pnpm lint` (Biome, writes fixes to files in `src/**/*.{js,ts,jsx,tsx,astro}`)
**Format:** `pnpm format` (Biome, writes formatting to files in `src/**/*.{js,ts,jsx,tsx,astro}`)
**Check:** `pnpm check` (Biome, runs all checks and organizes imports for files in `src/**/*.{js,ts,jsx,tsx,astro}`)
**Cypress:** `pnpm cypress:open` (E2E/component tests)

## Patterns & Conventions
- **Composition:** Prefer `.Root`/`.Item` pattern (see VerticalNav, Hero, Project).
- **Styling:** TailwindCSS utilities, global styles in `src/styles/global.css`.
- **Forms:** Use `react-hook-form` + `zod` for validation (`ContactForm.tsx`, `schema.ts`). reCAPTCHA integrated.
- **Animations:** Use `framer-motion` for transitions.
- **Icons:** Centralized in `src/components/Icons/`.
- **i18n:** Text from translation JSONs in `public/locales/`, managed by astro-i18next.
- **Data Flow:** Static data from `src/data/` mapped into UI.

## Git Conventions
Follow [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages, branch names, and PR titles.

**Commit message format:** `<type>(<scope>): <description>`
- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`
- **Scope:** optional, refers to the affected area (e.g., `contact`, `hero`, `i18n`, `deps`)
- **Body:** always include a descriptive body explaining *what* changed and *why*. Separate from the subject with a blank line.
- **Examples:**
  ```
  feat(contact): add recaptcha validation

  Integrate Google reCAPTCHA v3 to prevent spam submissions on the
  contact form. Token is verified server-side before sending via EmailJS.
  ```
  ```
  fix(hero): correct animation timing

  Framer Motion entrance animation was completing too quickly on mobile.
  Increased duration and adjusted easing for a smoother experience.
  ```
  ```
  chore(deps): bump astro to v5

  Update Astro and related integrations to v5. Resolves deprecation
  warnings introduced in v4.x and improves build performance.
  ```

**Branch names:** `<type>/<short-description>` (e.g., `feat/add-dark-mode`, `fix/contact-form-error`)

**PR titles:** same format as commit messages.

## Integration Points
- **EmailJS:** Contact form submissions (`ContactForm.tsx`).
- **Vercel Analytics:** Via `@vercel/speed-insights/astro` in layout.
- **Astro-i18next:** Locale detection/translation loading.

## Project-Specific Notes
**Trusted Dependencies:** Only `sharp` in `package.json`.
**Testing:** Cypress set up, but no test files present.
**Linting & Formatting:** Biome is the primary tool, configured via `biome.json` to include files in `src/**/*.{js,ts,jsx,tsx,astro,css}`.
**TypeScript:** Types in `src/types/`.
**Mobile-First:** Responsive layouts/components.

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
