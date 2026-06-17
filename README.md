# Smile Studio — Premium Dental Care Website

A modern, responsive dental clinic website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for Smile Studio, a premium private dental practice in Koramangala, Bangalore, led by Dr. Aanya Sharma.

**Live URL:** [https://smile-care-studio.vercel.app/](https://smile-care-studio.vercel.app/)

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, stats bar, services preview, why-us, meet-the-doctor, testimonials, CTA |
| `/services` | Full list of 10+ dental treatments with duration and pricing |
| `/about` | Clinic story, values, and certifications |
| `/team` | Doctor and staff profiles |
| `/testimonials` | Patient reviews |
| `/book` | Appointment booking form with date picker |
| `/contact` | Contact form, address, and clinic hours |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Button, Badge, Card, Input, Select, Calendar, Sonner)
- **Icons:** Lucide React
- **Theming:** `next-themes` — light/dark/system with no flash on load
- **Fonts:** Geist (via `next/font`)
- **Deployment:** Vercel

---

## Features

- Scroll-triggered reveal animations via `IntersectionObserver`
- Animated counters on stat cards (1500+ patients, 14 years, etc.)
- Dark mode support with system preference detection
- Responsive layout across mobile, tablet, and desktop
- Toast notifications via Sonner
- Appointment booking with calendar date picker
- SEO-ready metadata with per-page `<title>` via layout templates

---

## Project Structure

```
app/
├── layout.tsx          # Root layout — Navbar, Footer, ThemeProvider, Toaster
├── globals.css         # Global styles and CSS custom properties
├── page.tsx            # Home page
├── services/           # Services listing
├── about/              # About the clinic
├── team/               # Team page
├── testimonials/       # Patient reviews
├── book/               # Booking form
└── contact/            # Contact page

components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── providers/
│   └── ThemeProvider.tsx
└── ui/                 # shadcn/ui components
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
npm run build   # Production build
npm run lint    # ESLint
```
