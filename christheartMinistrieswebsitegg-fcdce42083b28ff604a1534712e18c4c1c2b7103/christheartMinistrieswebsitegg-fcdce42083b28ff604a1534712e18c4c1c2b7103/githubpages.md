# GitHub Pages Deployment Guide

## Repository
- **URL**: https://github.com/Ptr234/christheartMinistrieswebsitegg
- **Live Site**: https://ptr234.github.io/christheartMinistrieswebsitegg/

## Deployment Method
We use **branch-based deployment** (GitHub Pages "legacy" mode) — no GitHub Actions required, so there is **zero billing**.

- **Main branch**: `main` — contains source code
- **Deploy branch**: `gh-pages` — contains the built static files served by GitHub Pages
- **Build type**: `legacy` (free, no Actions minutes consumed)

## How to Deploy

### 1. Build the frontend
```bash
cd frontend
npm install
npm run build
```
This outputs the production build to `frontend/dist/`.

### 2. Switch to the gh-pages branch
```bash
git checkout gh-pages
```

### 3. Copy built files to repo root
GitHub Pages serves from the root of the `gh-pages` branch. Copy all contents of `frontend/dist/` to the repo root:
```bash
# Remove old files (except .git)
git rm -rf . 2>/dev/null || true

# Copy new build
cp -r frontend/dist/* .
cp -r frontend/dist/.* . 2>/dev/null || true
```

### 4. Commit and push
```bash
git add -A
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### 5. Switch back to main
```bash
git checkout main
```

### Quick Deploy Script (All-in-One)
```bash
# From the repo root on the main branch:
cd frontend && npm run build && cd ..

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Switch to gh-pages, clean, copy dist, commit, push
git checkout gh-pages
git rm -rf . 2>/dev/null || true
cp -r frontend/dist/* .
git add -f .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages

# Return to working branch
git checkout $CURRENT_BRANCH
```

## Vite Configuration
The Vite config at `frontend/vite.config.ts` has `base: '/christheartMinistrieswebsitegg/'` to ensure all asset paths are correct when served from the GitHub Pages subdirectory.

## GitHub Pages Settings
- **Source**: Deploy from branch `gh-pages`, root `/`
- **Build type**: Legacy (no Actions)
- Configured via GitHub repository Settings > Pages

## Authentication for Push
If pushing fails with 403/408, use a GitHub Personal Access Token (PAT):
```bash
git remote set-url origin https://TOKEN@github.com/Ptr234/christheartMinistrieswebsitegg.git
git push origin gh-pages
# Remove token from URL after push:
git remote set-url origin https://github.com/Ptr234/christheartMinistrieswebsitegg.git
```

## Verification
After pushing, verify the deployment:
```bash
gh api repos/Ptr234/christheartMinistrieswebsitegg/pages
```
Look for `"status": "built"` and `"html_url": "https://ptr234.github.io/christheartMinistrieswebsitegg/"`.
