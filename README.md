# Anton Maario Portfolio Website

Static portfolio website for GitHub Pages.

## Files

- `index.html` — main website
- `styles.css` — responsive styling and light/dark theme
- `script.js` — mobile menu, theme toggle, current year
- `assets/anton-maario-cv.pdf` — downloadable CV
- `CNAME` — custom domain for antonmaario.com
- `404.html` — fallback page
- `robots.txt` and `sitemap.xml` — basic SEO files

## Deploy to GitHub Pages

1. Unzip this folder.
2. Replace your current repository files with these files.
3. Commit and push to GitHub.
4. In GitHub, go to Settings → Pages.
5. Set the source to your main branch and root folder.
6. Confirm your custom domain is `antonmaario.com`.

## Important edits before publishing

In `index.html`, update the LinkedIn and GitHub buttons near the contact section with your real profile URLs:

```html
<a class="button ghost" href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
<a class="button ghost" href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
```
