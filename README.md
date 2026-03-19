# Sujitraj Portfolio

Personal portfolio built with React and Tailwind CSS.

## Local Development

Run locally:

```bash
npm install
npm start
```

Build production bundle:

```bash
npm run build
```

## Simplified Deployment

Deployment is automated with GitHub Actions.

How it works:
- Push code to `main`
- Workflow builds the app
- Build output is published to `gh-pages`
- Site is served from GitHub Pages

Workflow file:
- `.github/workflows/deploy.yml`

Live URL:
- `http://sujitrajt.github.io/Portfolio`

## Manual Fallback (Optional)

If needed, run manual deployment:

```bash
npm run deploy:manual
```

## Notes

- `build/` is ignored in source control.
- `.DS_Store` files are ignored.
