# craylton.github.io 🪄

Personal website of Simon Palmer. Now with 100% more opinions, RGB cellular automata, and a contact page that politely declines your advances (for now).

Live site: https://craylton.github.io

## What’s in the box

This repo is a simple Jekyll site with a heavily massaged version of GitHub’s Leap Day theme:

- Jekyll + `jekyll-seo-tag`
- Theme: Leap Day (locally vendored here via `jekyll-theme-leap-day.gemspec`)
- Pages: `index.md`, `projects.md`, `blog.md`, `contact.md`
- Writing lives in `blog/` as plain Markdown pages (no `_posts` collection) — intentionally minimal
- Projects:
	- RGB Game of Life — colorful, surprisingly alive: `projects/gol/`
	- Memory Game — pair-programmed with AI: `projects/MemoryGame/`
- Assets go under `assets/` (SCSS, images, JS); built output lands in `_site/`

Pro tip: don’t edit `_site/` — it’s generated. It’s here for convenience, but the source of truth is everything outside `_site/`.

## Quick start (local dev)

Prereqs:
- Ruby (anything modern is fine; gemspec requires Ruby ≥ 2.4)
- Bundler (`gem install bundler` if needed)

From the repo root, on Windows PowerShell:

```powershell
bundle install
bundle exec jekyll serve
```

Then visit http://127.0.0.1:4000

If you get a gem conflict, try deleting `Gemfile.lock` and running `bundle install` again.

## How to add things

### A new blog post
Posts are simple pages under `blog/` (not the usual Jekyll `_posts`). Create a new file, e.g. `blog/my-thoughts.md`:

```markdown
---
layout: default
title: My Thoughts On Pigeons
date: 2025-10-03
description: A brief meditation on sky rats.
tags: [pigeons, urban, nature]
---

## My Thoughts On Pigeons
3rd October 2025

They walk like tiny executives late for a meeting.
```

Then manually add an entry to `blog.md` (it’s a hand-curated list):

```markdown
## My Thoughts On Pigeons
3rd October 2025

[Read more →](blog/my-thoughts.html)
```

### A new page
Drop a Markdown file at the repo root with front matter, e.g. `about.md`:

```markdown
---
layout: default
title: About Me
---

# About
Hello, it’s me.
```

Want it in the top navigation? Edit `_layouts/default.html` and add a link in the nav bar.

### A new project
Put static assets under `projects/YourProject/` and link it from `projects.md`. Keep it simple and self-contained.

## Styling and scripts

- SCSS entrypoint: `assets/css/style.scss` → compiled by Jekyll to `_site/assets/css/style.css`
- JavaScript: `assets/js/main.js` resizes the main content area to look nice on tall/short viewports
- Images & fonts live under `assets/images/` and `assets/fonts/`

If you’re feeling brave, you can also tweak theme styles under `_sass/`.

## Deployment

This is a user site (`craylton.github.io`), so GitHub Pages serves from the default branch of this repo. Push changes and the site updates. For local previews, use `bundle exec jekyll serve` as above.

## License

CC0 1.0 Universal (public domain). See `LICENSE`.

## FAQ

- Why “Leap Day” theme? Because time is a flat circle and sometimes it has bonus squares.
- Can I contact you? See `contact.md` … which currently says no. Respectfully mysterious.
- Is the economy weird? Yes. Evidence: `blog/economy-is-weird.md`.
- Are ads illegal here? Not yet, but please enjoy the blissful absence of them anyway.

## Contributing

It’s a personal site, but PRs for typos, broken links, and small fixes are welcome. If you add features, keep them lightweight and dependency-free where possible.

---

May your builds be green, your CSS selectors specific-but-not-too-specific, and your ideas spicier than the SCSS.