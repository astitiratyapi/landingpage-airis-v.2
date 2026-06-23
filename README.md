# AIRIS PACS — Landing Site

Production implementation of the AIRIS PACS marketing site, built from the
`Airis PACS Landing.html` design handoff. Stack: **Vite + React 18 + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
npm run typecheck # type-check only
```

## Project structure

```
public/assets/        Images, logos, screenshots (served from site root)
src/
  main.tsx            App entry
  App.tsx             Hash-based router (home / products / events / contact) with fade transition
  index.css           Tailwind layers + custom gradients, grid, and marquee animations
  data.ts             All page content, typed
  types.ts            Shared navigation prop types
  lib/asset.ts        Resolves asset paths to absolute URLs
  components/
    Icon.tsx          Inline lucide-style icon set (typed names)
    ui.tsx            Primitives: Logo, Button, SectionTag, Container, Reveal, Field, ImagePlaceholder
  sections/           Home-page sections + shared Navbar/Footer
  pages/              HomePage, ProductsPage, EventsPage, ContactPage
```

## Routing

Pages are switched via the URL hash (`#products`, `#events`, `#contact`; empty = home),
mirroring the original prototype. No external router dependency.

## Notes

- Theme tokens (brand/navy/accent/ink/line colors, fonts, shadows) live in `tailwind.config.js`.
- Fonts (Plus Jakarta Sans, JetBrains Mono) are loaded from Google Fonts in `index.html`.
- Forms (Contact, CTA) validate and show a success state client-side; wire them to a
  backend/email service before going live.
