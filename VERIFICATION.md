# Verification — October 23, 2026

- Production TypeScript check and Vite build: passed.
- Vitest: 3 tests passed (reading path and visible case studies, navigation behavior, valid contact/section links and honest résumé behavior).
- Playwright on Microsoft Edge: 6 browser tests passed across desktop, mobile and reduced motion.
- Repeated the 6 browser tests against the production `/portfolio/` subpath: all passed, including real image loading and correct section URLs.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA scans: no violations in the tested views. Automated checks do not replace a full manual assistive-technology audit.
- Visually inspected desktop, 390px mobile and 320px mobile. No horizontal document overflow at 320px.
- Project screenshots compressed to approximately 399 KB total, served locally. Main application JavaScript is approximately 75 KB gzip; optional Three.js detail is a separate approximately 119 KB gzip chunk and is not requested on mobile or with reduced motion.
- Checked and retained screenshot provenance and source license notices.

Not deployed: the workspace started without a Git repository or remote, and the configured GitHub CLI login was invalid. The Pages workflow is prepared but has not been executed on GitHub. Authentication and an intended target repository are required to publish. No résumé PDF was available, so no placeholder download is shown.

The root-path production build is available in `dist/`. Source ZIP excludes dependencies, build output and temporary test artifacts; run `npm ci` and `npm run build` to recreate them.
