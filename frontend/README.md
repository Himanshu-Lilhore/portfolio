# Himanshu Lilhore — Portfolio (frontend)

A single-page portfolio built with **React 18 + Vite + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # local dev server (usually http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

Optional analytics: set `VITE_BACKEND_URL` in a `.env` file to enable the
view-count ping. If it's unset, the app skips it silently.

## Design

Dark "ocean" theme — deep navy base with an aqua (`brand`) primary and a warm
coral accent, a nod to the original cyan/orange palette. The animated layered
waves in the hero are the signature element, now built as pure CSS/SVG so they
run smoothly on every screen size and respect `prefers-reduced-motion`.

Fonts: **Space Grotesk** (display) + **Inter** (body).

## Structure

```
src/
├── main.jsx            # entry (StrictMode)
├── App.jsx             # page composition
├── index.css           # Tailwind layers, theme utilities, reduced-motion
├── data/               # ← edit these to update content, no JSX needed
│   ├── profile.js      # name, roles, bio lines, stats, résumé
│   ├── skills.js       # grouped skill lists
│   ├── projects.js     # project cards
│   └── socials.js      # social links + email
├── hooks/
│   ├── useReveal.js        # reveal-on-scroll
│   └── useActiveSection.js # nav active-link highlighting
├── lib/
│   └── analytics.js    # optional, guarded view ping
└── components/
    ├── Navbar.jsx      # responsive, glass, mobile menu
    ├── Hero.jsx        # rotating role, CTAs
    ├── Waves.jsx       # animated SVG waves
    ├── Section.jsx     # shared section shell + reveal
    ├── About.jsx  Highlighter.jsx
    ├── Skills.jsx
    ├── Projects.jsx  ProjectCard.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Updating content

Everything you'd normally want to change lives in `src/data/`. Add a project by
appending an object to `projects.js`; the grid, images and links update
automatically. Same for skills, socials and the about narrative.
