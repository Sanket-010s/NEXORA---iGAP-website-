# iGAP Technologies — Website

Cloned template split into clean, separate files for easy editing.

---

## File Structure

```
igap-site/
│
├── index.html              ← All page content (sections, text, links)
│
├── css/
│   ├── variables.css       ← Brand colors, fonts, spacing — START HERE
│   ├── base.css            ← Resets, body, shared utilities, animations
│   ├── components.css      ← Buttons, navbar, cart, cursor, back-to-top
│   ├── sections.css        ← Hero, services, pricing, blog, footer styles
│   └── responsive.css      ← All mobile/tablet breakpoints
│
├── js/
│   └── main.js             ← All interactions (cursor, menu, scroll, etc.)
│
└── assets/
    └── img/
        ├── logo.png         ← Your logo (replace this)
        └── ...              ← Project screenshots, blog images, etc.
```

---

## Where to Make Changes

| What you want to change | Go to this file |
|---|---|
| Brand color (red → your color) | `css/variables.css` → `--red` |
| Company name / nav links | `index.html` → `<nav>` section |
| Hero heading & subtitle | `index.html` → `<!-- SECTION 1 — HERO -->` |
| Services cards | `index.html` → `<!-- SECTION 2 — SERVICES -->` |
| Case studies / projects | `index.html` → `<!-- SECTION 3 — PROJECTS -->` |
| Course / pricing plans | `index.html` → `<!-- SECTION 4 — ACADEMY -->` |
| Blog post titles & links | `index.html` → `<!-- SECTION 5 — BLOG -->` |
| Contact / CTA section | `index.html` → `<!-- SECTION 6 — CTA BANNER -->` |
| Footer links & copyright | `index.html` → `<!-- FOOTER -->` |
| WhatsApp number | `index.html` → search `wa.me/91...` |
| Phone / email everywhere | `index.html` → Ctrl+F → replace |
| Button styles | `css/components.css` → `.btn-red`, `.btn-outline` |
| Card hover effects | `css/sections.css` → `.feature-card:hover` |
| Mobile layout | `css/responsive.css` |
| Menu / cursor / scroll JS | `js/main.js` |

---

## Replacing Images

| Image | Location in HTML | File to put in |
|---|---|---|
| Logo | `<img src="assets/img/logo.png" ...>` | `assets/img/logo.png` |
| Hero screenshot | Comment in `index.html` shows OPTION A | `assets/img/hero-dashboard.png` |
| Project screenshots | `.img-placeholder` → replace with `<img>` | `assets/img/project-*.jpg` |
| Blog images | `.blog-img` inner div → replace with `<img>` | `assets/img/blog-*.jpg` |
| Client logos (marquee) | `.marquee-logo` divs | Add `<img>` tags inside |

---

## Quick Start

```bash
# No build tools needed — just open in browser
open index.html

# Or use VS Code Live Server
# Right-click index.html → Open with Live Server
```

---

## Key Things to Find & Replace (Ctrl+Shift+F in VS Code)

| Find | Replace with |
|---|---|
| `+91 9561320192` | Your phone number |
| `info@igaptechnologies.com` | Your email |
| `Rajarampuri 4th Lane, Kolhapur` | Your address |
| `wa.me/919561320192` | Your WhatsApp number |
| `iGAP Technologies Pvt. Ltd.` | Your company name |
| `© 2026` | Current year |
