# Nikunj Singh — portfolio

A dark, responsive developer portfolio built with React, TypeScript, Vite and Tailwind CSS. All project case studies are readable by scrolling. The decorative Three.js accent is optional and disabled for small screens and reduced motion.

## Development

Use Node 24 (minimum 22.12).

```sh
npm ci
npm run dev
npm test
npm run build
npm run test:e2e
npm run format:check
```

Local browser tests use installed Microsoft Edge; CI installs Chromium. Tests cover desktop, mobile, reduced motion, real images, navigation, keyboard entry and automated WCAG A/AA checks.

## Architecture

- `src/App.tsx`: page composition and semantic landmarks.
- `src/sections/`: Hero, Credentials, Work, Experience, About and Contact.
- `src/components/`: Header, Footer, ProjectCard and decorative rendering boundary.
- `src/content.ts`: project content and professional links.
- `src/utils/assets.ts`: repository-subpath-aware asset URLs.
- `src/styles.css`: shared dark theme, component rules and consolidated responsive breakpoints.
- `src/Accent.tsx`: lazy-loaded Three.js scene with lifecycle cleanup.
- `tests/`: Playwright browser and accessibility checks.

The page needs no backend, credentials, runtime API calls or analytics. DM Sans is locally bundled for contact links; developer typography uses system monospace fonts.

## Deployment

Repository: https://github.com/nikunjsingh93/my-portfolio

GitHub Pages is configured to deploy through `.github/workflows/pages.yml`. Pushes to `main` run verification before deployment; pull requests run checks without publishing. The workflow builds a root-path copy for browser checks and a repository-path copy for deployment. Assets use Vite's base path, and navigation uses hash anchors without routing redirects.

For a custom domain, follow [DOMAIN.md](DOMAIN.md). Do not enable an unapproved custom domain before its DNS is active.

## Content and provenance

The candidate provided professional details and the email `nikunj.singh@live.com`. No employer screenshots, internal data, unsupported employment dates or testimonials are included. The 30% load improvement and 20% engagement improvement are clearly marked as candidate-reported resume figures.

Official project imagery is locally compressed; sources and notices are in [ASSETS.md](ASSETS.md) and `public/assets/licenses/`.

No original resume PDF was available. Add the actual PDF to `public/` and set `links.resume` in `src/content.ts` to display a valid download.

## Accessibility and performance

Semantic landmarks, keyboard skip link, visible focus, Escape-aware mobile navigation, reduced-motion support and a print layout. Main content never waits for the decorative 3D scene. Below-fold images load lazily; WebGL resources are disposed on unmount and rendering pauses while offscreen or hidden. Automated accessibility checks supplement manual review; they do not constitute a full assistive-technology audit.
