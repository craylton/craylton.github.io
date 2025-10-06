# Simon Palmer’s Website (a.k.a. the digital workbench)

Welcome! This repository powers my personal website — a cozy corner of the internet where code experiments stretch their legs, blog posts ponder life (and the economy), and a contact form faithfully delivers messages to my inbox like a well‑trained carrier pigeon.

Live site: https://simon-palmer.uk/

## What this website is for

- Showcasing projects I’m tinkering with (some sensible, some delightfully unhinged)
- Hosting occasional blog posts on tech, finance, philosophy, and other shower thoughts
- Giving folks a friendly way to say hello or conspire about cool ideas

In short: it’s my living resume, lab notebook, and playground rolled into one.


## What you’ll find inside

- Home page (`index.md`): A quick intro and a tour of highlights.
- Blog (`blog.md` + `blog/`): A handful of posts, including:
	- “What if advertising was illegal?”
	- “The economy today is weird”
- Projects (`projects.md` + `projects/`):
	- RGB Game of Life (`projects/gol/`): A colorful extension of Conway’s Life where cells brandish RGB channels like tiny rave lights.
	- Memory Game (`projects/MemoryGame/`): A simple Concentration game, pair‑programmed with an AI, because why not.
- Contact (`contact.md`): A tidy Formspree‑powered form for messages, compliments, and sensible feature requests.
- Theme and styles:
	- Jekyll + the Leap Day theme (`_layouts/`, `_sass/`, `assets/css/style.scss`)
	- A pinch of JS (`assets/js/main.js`)
	- Fonts and images under `assets/`


## Tech stack (brief and honest)

- Jekyll (static site generator)
- GitHub Pages‑friendly theme: Leap Day (bundled here)
- SCSS compiled by Jekyll
- Zero frameworks on the front end; just HTML/CSS/JS with impeccable vibes


## Run it locally (dev mode)

You’ll need:

- Ruby (3.x recommended). On Windows, install “Ruby with DevKit”.
- Bundler (`gem install bundler`) — we’ll use it to install and run Jekyll.

Then, from the repo root in PowerShell:

```powershell
# Install dependencies
bundle install

# Serve locally with live reload (http://127.0.0.1:4000)
bundle exec jekyll serve --livereload

# Optional: include drafts while writing
# bundle exec jekyll serve --livereload --drafts
```

If you hit native‑build snags on Windows, make sure you installed the Ruby DevKit and ran the post‑install step. You can also try:

```powershell
# Keep gems local to the project (optional but tidy)
bundle config set path vendor/bundle
bundle install
```


## Deployment

This site is designed to be GitHub Pages‑friendly. Push to `main` and Pages does the rest. If a custom domain is configured, GitHub Pages serves that too. No capes required.


## Contributing, issues, and requests

- Spot a typo, broken link, or small fix? PRs are welcome.
- Bigger ideas or features? Please open an issue so we can chat before you invest time.
- Be kind, be clear, and include screenshots where helpful. Bonus points for reproducible steps.

This is a personal site, so I reserve the right to steer the vibe. That said, I love good ideas and tidy code.


## Licenses and credits

- Code and content: CC0‑1.0 (Public Domain). See `LICENSE`.
- Third‑party assets (e.g., fonts) remain under their respective licenses.
- Theme: Based on GitHub’s Leap Day theme.
- Thanks to Formspree for the contact form, and to AI copilots for occasionally holding the wrench while I bolt things together.


## Maintainer

Simon Palmer — Senior Full‑Stack Developer, rubber‑duck whisperer, and creator of RGB grid chaos.

Say hi via the contact form on the site, or open an issue here if it’s repo‑related.


## FAQ (mini and mildly useful)

- Why is there an upside‑down photo? Because debugging turns my world around.
- Is RGB Life scientifically accurate? As accurate as tiny colored squares need to be.
- Can I borrow parts of this site? Yes — CC0 means you can copy, remix, and reuse. Please keep third‑party licenses intact.


---

If you read all the way down here, you’ve unlocked +1 curiosity. Use it wisely.