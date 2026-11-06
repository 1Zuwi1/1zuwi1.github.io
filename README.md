# 1zuwi1.github.io

Personal portfolio of **Łukasz Żyszkiewicz**, full-stack developer. Live at **https://1zuwi1.github.io**.

Built with React 19, TanStack Router, Tailwind CSS v4 and shadcn/ui, bundled with Vite and deployed to GitHub Pages.

## Editing content

All content (bio, skills, education, projects, achievements) lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Pages under `src/routes/` render it, so most updates only touch that file.

Page metadata (description, Open Graph tags, structured data) is in [`index.html`](index.html). The social preview image is `public/og-image.png` (1200×630). If you add a route, also add it to `public/sitemap.xml` and give it a `staticData: { title }` for the browser tab.

## Development

Requires [Bun](https://bun.sh).

```bash
bun install
bun run dev       # dev server
bun run build     # production build into dist/
bun run preview   # serve the production build
bun run check     # Biome lint + format check
```

## Deployment

Every push to `main` builds and deploys through [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml).

GitHub Pages has no SPA rewrites, so the build also writes `dist/404.html` (a copy of `index.html`). That lets deep links like `/projects` load the app. Old hash URLs (`/#/projects`) are redirected to their clean equivalents on load.
