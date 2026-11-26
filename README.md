# Anton Maario — personal website

A content-first static site with five pages, a custom 404, and one shared stylesheet. No build tools, packages, tracking, or JavaScript on the main pages. The 404 contains a small optional script to select the correct homepage on the existing GitHub Pages project address.

## Preview locally

From the folder containing `index.html`:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ (or open `index.html` directly). Stop the server with Ctrl+C.

## Update the existing repository

Clone https://github.com/antonmaario/mywebsite, then copy all files from this folder into the repository root, overwriting the old versions. Include `.nojekyll` and `CNAME`. Delete the obsolete `assets/script.js`; the main pages no longer need it. Existing images can remain in `assets/images/`, but are not referenced by this version. Review changes before committing:

```sh
git add -A
git diff --cached --stat
git commit -m "Simplify personal website"
git push origin main
```

Do not copy the enclosing folder into the repository. The root must contain `index.html`.

## Publish

In the repository, open Settings → Pages. Choose Deploy from a branch, `main`, `/ (root)`, and Save. If already configured this way, pushing to `main` should trigger the next deployment. Check the Actions tab for the deployment result.

The included `CNAME` preserves the original custom domain `antonmaario.com`. If keeping it, check that the Pages custom-domain setting matches, that DNS points to GitHub Pages, and enable Enforce HTTPS when available. See https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site for official DNS instructions. No DNS changes are needed if it is already configured correctly.

If you prefer the default project URL, remove the custom domain in Pages and delete `CNAME` before committing. The default project URL is https://antonmaario.github.io/mywebsite/. A configured custom domain may redirect this address.

## Edit

- `index.html`: introduction and directory.
- `garage.html`: car details and plans.
- `training.html`: training notes and resources.
- `terminal.html`: tech notes and resources (original URL retained).
- `games.html`: gaming and Steam.
- `assets/style.css`: shared layout, typography, colours and system dark mode.
- `404.html`: missing-page help, with inline styles for arbitrary URL depth.

The header and footer are deliberately repeated in the five main HTML files so there is no template engine or client-side dependency. Update each if changing navigation or social links. The Counter-Strike playtime is manually set to 2,700+ hours; update it and the homepage summary if outdated. Stock car details were carried over from the original site. The car image was not included in this text-first standalone package. The old hidden keyboard trigger, overlay, and random status have been removed.
