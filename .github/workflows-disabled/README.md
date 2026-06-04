# Disabled workflows

`deploy.yml` here is a ready-to-use GitHub Pages deploy workflow. It lives in
`workflows-disabled/` (not `workflows/`) because pushing files under
`.github/workflows/` requires a token with the `workflow` OAuth scope, which the
initial publish did not have.

## How to enable Actions-based deploys

1. Grant the scope locally:
   ```
   gh auth refresh -h github.com -s workflow
   ```
2. Move the file into the active path and push:
   ```
   git mv .github/workflows-disabled/deploy.yml .github/workflows/deploy.yml
   git commit -m "Enable GitHub Pages deploy workflow"
   git push
   ```
3. In repo Settings → Pages, set the source to **GitHub Actions**.

Until then, the site is published from the **`gh-pages`** branch (built locally
and pushed there), with Pages serving that branch.
