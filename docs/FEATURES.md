# Features — Smile Studio

## Theme & Visual
- **Dark / Light Mode** — next-themes with system preference detection; no flash on load (suppressHydrationWarning)
- **Custom Color Palette** — Deep teal primary, warm gold accent; CSS variables for instant theme switching
- **Premium Typography** — Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Textured Backgrounds** — No plain white/gray; layered CSS gradients + subtle SVG patterns on every section
- **Section Rhythm** — Alternating visual weight between sections for scanability

## Navigation
- **Sticky Navbar** — Frosted glass blur effect on scroll
- **Mobile Hamburger Menu** — Animated drawer with smooth open/close
- **Theme Toggle Button** — Sun/moon icon switch in navbar
- **"Book Appointment" CTA** — Styled as a filled button in the nav to stand out

## Animations
- **Scroll-Triggered Fade + Slide** — Sections animate in using Intersection Observer
- **Animated Stat Counters** — Numbers count up when the stats section enters the viewport
- **Card Hover Effects** — Lift/shadow/color transitions on all cards
- **Smooth Scroll** — CSS `scroll-behavior: smooth` globally

## Pages
- **Home** — Full hero, stats, services preview, why-choose-us grid, doctor teaser, testimonials preview, CTA banner
- **Services** — 10 services with unique SVG icons, descriptions, durations, Unsplash images for featured items
- **About** — Clinic story, two-column layout, core values, certifications, milestone timeline
- **Team** — Lead doctor card + 3 staff cards; hover reveals extra info
- **Testimonials** — 6 full review cards, CSS rating bar chart, Google Reviews badge placeholder
- **Contact** — shadcn form with success toast, clinic sidebar, fake SVG map placeholder, social links
- **Book Appointment** — 5-step wizard (Service → Date → Time → Details → Confirmation) with fake booking ref

## Technical
- **Next.js App Router** — File-system routing, server components where possible
- **TypeScript** — Full type safety throughout
- **shadcn/ui** — Button, Card, Badge, Input, Textarea, Select, Calendar, Separator, Sonner
- **Next.js Image component** — All images with width/height/alt for performance
- **Per-page Metadata** — Title + description via Next.js metadata export
- **Mobile Responsive** — Tested at 375px, 768px, 1280px breakpoints
- **Inline SVG Icons** — All dental/service icons inline for crisp rendering at any size
- **Lucide React** — Used for UI icons (menu, close, star, arrow, etc.)
