# Natnicha Charoenpattaraparyoon — Portfolio

A single-page personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data.ts                 # All editable copy: profile, about, skills, projects, goals
  components/
    Hero.tsx               # Landing section
    About.tsx               # Story + career-pivot timeline
    Skills.tsx               # Skill cards + roadmap
    Projects.tsx              # Project cards
    CareerGoals.tsx            # Forward-looking timeline
    Contact.tsx                 # Email / LinkedIn / GitHub
    Navbar.tsx                   # Glass nav, scroll progress, dark mode
    LoadingScreen.tsx             # Terminal-style boot sequence
    ParticleField.tsx              # Canvas node/particle background
    Reveal.tsx                      # Shared scroll-reveal wrapper
    Footer.tsx
  hooks/
    useDarkMode.ts
    useScrollProgress.ts
    useActiveSection.ts
```

## Customizing content

Almost everything text-based lives in **`src/data.ts`** — update your bio, skills,
projects, links, and career timeline there without touching component code.

To replace the avatar placeholder with a real photo:
1. Drop your image into `public/` (e.g. `public/portrait.jpg`)
2. In `src/components/Hero.tsx`, swap the initials block for an `<img src="/portrait.jpg" />`
   inside the circular frame.

## Notes

- Dark mode preference is saved to `localStorage` and respects the system preference on first visit.
- Animations respect `prefers-reduced-motion`.
- Update `profile.email`, `profile.linkedin`, and `profile.github` in `data.ts` with your real links before deploying.
