# antonmaario.com — static personal site

A zero-backend, zero-build-step personal site made for GitHub Pages.

## Files

- `index.html` — home
- `garage.html` — 2017 BRZ
- `training.html` — evidence-based lifting
- `terminal.html` — Fedora / tech / CTFs
- `games.html` — Counter-Strike / Steam
- `404.html` — custom GitHub Pages 404
- `assets/style.css` — all styling
- `assets/script.js` — mobile nav, footer year, rotating joke, tiny easter egg
- `CNAME` — custom domain

## Publish on GitHub Pages

1. Create a GitHub repository (for example `antonmaario-site`).
2. Upload the **contents** of this folder to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch (usually `main`) and `/ (root)`, then save.
6. If using `antonmaario.com`, configure the domain in Pages and point your DNS records to GitHub Pages as GitHub documents. The included `CNAME` already contains `antonmaario.com`.

## Editing

Everything is plain HTML/CSS/JS. No npm, dependencies, database, API keys, tracking, or backend.

The Counter-Strike hour count intentionally says `2600+` instead of fetching live Steam data, so the site stays "set and forget".

## Small easter egg

Type `brz` on any main page.
