# Architecture — Smile Studio

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Component Library | shadcn/ui |
| Theme | next-themes (light/dark) |
| Icons | lucide-react (UI), inline SVG (dental) |
| Fonts | Playfair Display (headings), DM Sans (body) via Google Fonts |

## Folder Structure
```
smile-studio/
├── app/
│   ├── layout.tsx          # Root layout — ThemeProvider, Navbar, Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # CSS variables, fonts, animations
│   ├── services/page.tsx   # Services listing
│   ├── about/page.tsx      # Clinic story, values, timeline
│   ├── team/page.tsx       # Doctor + staff cards
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx    # Contact form + map
│   └── book/page.tsx       # 5-step booking wizard
├── components/
│   ├── ui/                 # shadcn auto-generated components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/               # Home page section components
│   ├── shared/             # Reusable across pages (SectionHeader, AnimatedCounter, etc.)
│   └── providers/
│       └── ThemeProvider.tsx
├── lib/
│   └── utils.ts            # shadcn cn() utility
├── public/
└── docs/
```

## Routing
All routes use the Next.js App Router file-system convention. Each page is a `page.tsx` inside the corresponding folder. No dynamic routes are used (static site).

## Component Architecture
- **Navbar** — client component (needs useState for mobile menu, useEffect for scroll)
- **Footer** — server component
- **Page sections** — mix; sections with scroll animations are client components
- **BookingWizard** — fully client component (5-step state machine with useState)
- **ThemeProvider** — wraps entire app in root layout

## Color System
CSS variables defined in `globals.css` under `:root` and `.dark`. Tailwind `@theme` block extends the palette. All colors reference variables so theme switching is instant.

## Animation Strategy
- Scroll-triggered fade/slide: Intersection Observer via custom hook `useInView`
- Stat counters: requestAnimationFrame counter on InView trigger
- Hover states: Tailwind `hover:` utilities + CSS transitions
- Page-level: CSS `animation` with `animation-delay` staggering
