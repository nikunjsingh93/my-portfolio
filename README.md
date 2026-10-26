# Nikunj Singh — portfolio

A recruiter-friendly editorial portfolio in React, Vite, TypeScript and Tailwind CSS. Dark charcoal, upright developer-style monospace typography, sage and muted rose, actual project imagery, and a small decorative Three.js sculpture. All case studies and experience are visible by scrolling.

## Run

Requires Node 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
npm run test:e2e
```

Browser tests use installed Microsoft Edge locally; CI installs Chromium. They check desktop, mobile and reduced-motion layouts, image loading, navigation, keyboard entry, page errors and WCAG A/AA with axe. Unit tests cover the reading path, source/contact links, disclosure of claimed metrics, and mobile menu behavior.

## GitHub Pages

The project folder is the repository root. Commit its contents (including package-lock.json and .github/) to your intended repository on `main`. In Settings → Pages, choose **GitHub Actions** as the build source. The included workflow tests and builds before deployment, supports manual runs, and does not deploy pull requests.

The workflow automatically selects `/` for `<owner>.github.io` repositories and `/<repository>/` for project repositories. For a custom domain, set `VITE_BASE_PATH=/` in the workflow and add your own `public/CNAME`. For a local subpath build:

```sh
VITE_BASE_PATH=/portfolio/ npm run build
```

PowerShell: `$env:VITE_BASE_PATH='/portfolio/'; npm run build`.

The site uses ordinary hash anchors, so section links work without a single-page-app redirect or 404 workaround. Assets and any future résumé use Vite's base path.

Source repository: https://github.com/nikunjsingh93/my-portfolio. GitHub Pages deployment is handled by the included workflow; check the Actions tab for its latest state.

## Edit content

- `src/content.ts`: projects, public URLs, résumé setting.
- `src/App.tsx`: hero, experience, about, contact.
- `src/styles.css`: visual system and responsive/print rules.
- `public/assets/`: locally served, compressed project imagery.

No real résumé file was available in the workspace or referenced conversation. There is no placeholder or broken résumé link. Add the candidate's real PDF to `public/`, set `links.resume` to its filename, and the download link appears in the contact section.

Contact uses the candidate-provided email address, LinkedIn profile and GitHub account. No availability claim, unsupported employment dates, testimonials, or proprietary enterprise screenshots have been invented. The 30% page-load improvement and 20% engagement improvement are candidate-reported résumé claims, labeled as such; no internal measurements are asserted as independently verified.

## Assets and claim provenance

See [ASSETS.md](ASSETS.md). Screenshots were retrieved from the candidate's public repositories and official app listing for the requested portfolio. They represent the products; framed compositions are presentation only. Keep original ownership and license notices when reusing them elsewhere.

## Performance and accessibility

Self-hosted fonts, local WebP images, lazy loading below the fold and a separately loaded Three.js chunk. The 3D detail is decorative, disabled on small screens and with reduced motion, pauses rendering offscreen/when the document is hidden, and has a static fallback for WebGL or chunk failures. Content never depends on it. No scroll-jacking, splash, mandatory animation, trackers or external font requests.

Semantic landmarks, a keyboard skip link, visible focus states, mobile menu Escape behavior, real anchor navigation, image alternatives, print styling, and reduced-motion CSS are included. Font licenses are supplied by the Fontsource packages; build output is static.


