# iGAP Technologies — Website

Static website for iGAP Technologies Pvt. Ltd. — AI, Data Science & Software Development company based in Kolhapur.

---

## File Structure

```
iGAP
│
├── index.html              ← All page content (sections, text, links)
│
├── css/
│   ├── variables.css       ← Brand colors, fonts, spacing — START HERE
│   ├── base.css            ← Resets, body, shared utilities, animations
│   ├── components.css      ← Buttons, navbar, cursor, back-to-top
│   ├── sections.css        ← Hero, marquee, services, projects, academy, industry, footer
│   └── responsive.css      ← All mobile/tablet breakpoints
│
├── js/
│   └── main.js             ← Cursor, menu, scroll, stat counters, typing effect, industry toggle
│
└── assets/
    └── img/
        └── logo.png        ← Company logo
```

---

## Page Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Typing animation heading, stats (10 yrs, 4201 users, 50 projects, 100% satisfaction) |
| Marquee | — | Scrolling client name strip |
| Services | `#services` | 6 services in 2-column layout |
| Projects | `#projects` | Horizontal scrollable project cards |
| Academy | `#academy` | Course list, internship program, enrollment CTA |
| Industry Solutions | `#Industry Solutions` | 6 industry verticals with toggle |
| Contact / CTA | `#contact` | Email input + WhatsApp CTA |
| Footer | — | Links, socials, contact info |

---

## Where to Make Changes

| What you want to change | Go to this file |
|---|---|
| Brand color | `css/variables.css` → `--red` |
| Fonts | `css/variables.css` → `--font-heading`, `--font-body` |
| Company name / nav links | `index.html` → `<nav>` |
| Hero badge text | `index.html` → `.hero-badge` |
| Typing animation words | `js/main.js` → typing words array |
| Hero stats numbers | `index.html` → `data-target="..."` on `.stat-number` |
| Services (01–06) | `index.html` → `<!-- Service 1 -->` … `<!-- Service 6 -->` |
| Project cards | `index.html` → `<!-- Project Card 1 -->` … |
| Academy courses & fees | `index.html` → `#academy` section |
| Industry solutions | `index.html` → `#Industry Solutions` section |
| Client marquee names | `index.html` → `.marquee-logo` divs (duplicate both sets) |
| WhatsApp number | `index.html` → search `wa.me/919561320192` |
| Phone / email | `index.html` → Ctrl+F → replace |
| Button styles | `css/components.css` → `.btn-red`, `.btn-outline` |
| Card hover effects | `css/sections.css` |
| Mobile layout | `css/responsive.css` |
| Menu / cursor / scroll JS | `js/main.js` |

---

## Current Clients (Marquee)

Parshwanath Group · Gadre Tea Company · Lifeline Hospital · Vipras Technomart · Narayani Hospital · GEC Kolhapur · ISTE

---

## Current Services

1. AI & Machine Learning
2. Data Science & Analytics
3. Custom ERP Solutions
4. Mobile App Development
5. Web Development
6. E-commerce Solutions

---

## Current Projects

| Project | Client | Industry |
|---|---|---|
| Hospital Management System | Lifeline Hospital | Healthcare |
| Custom ERP Solution | Parshwanath Group | Steel & Trading |
| Supply Chain Platform | Gadre Tea Company | FMCG |
| Learning Management System | GEC Kolhapur | Education |

---

## Academy Courses

- Java Full Stack (React)
- Data Science & AI
- .NET Full Stack (Angular)
- Python Full Stack (Django)
- MERN Stack Development
- Mobile App Development

Duration: 3–6 months · Fee: ₹45,000 per course · Internship included

---

## Replacing Images

| Image | Where in HTML | File path |
|---|---|---|
| Logo | `<img src="assets/img/logo.png">` | `assets/img/logo.png` |
| Project screenshots | `.img-placeholder` divs in `#projects` | Replace div with `<img>` tag |

---

## Quick Start

```bash
# No build tools needed
open index.html

# Or use VS Code Live Server
# Right-click index.html → Open with Live Server
```

---

## Key Things to Find & Replace (Ctrl+Shift+F)

| Find | Replace with |
|---|---|
| `+91 9561320192` | Your primary phone |
| `+91 9552610806` | Your secondary phone |
| `info@igaptechnologies.com` | Your email |
| `Rajarampuri 4th Lane, Kolhapur` | Your address |
| `wa.me/919561320192` | Your WhatsApp number |
| `iGAP Technologies Pvt. Ltd.` | Your company name |
| `© 2026` | Current year |
