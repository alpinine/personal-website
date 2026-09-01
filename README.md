# Jack Schroeder — Personal Website

Static personal website built with React and Vinext and deployed through GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:3000`.

## Deployment

Every push to `main` runs `.github/workflows/deploy-pages.yml`. The workflow builds a static export and publishes `dist/client` to GitHub Pages.

In the repository's **Settings → Pages**, set the deployment source to **GitHub Actions**.

## Routine updates

- Homepage content: `app/page.tsx`
- About page content: `app/about/page.tsx`
- Resume: replace `public/resume.pdf` without changing its filename
- Images and eye states: `public/`

After making a change:

```bash
git add .
git commit -m "Update website"
git push
```

If a deployment fails, GitHub Pages continues serving the previously published version.
