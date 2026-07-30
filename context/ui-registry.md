# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Responsive Pattern

All components use mobile-first responsive design with these breakpoints:

- **Mobile (default):** < 640px — `px-4`, smaller text, stacked layouts
- **sm (640px):** `sm:px-6`, `sm:text-lg`, `sm:flex-row`
- **md (768px):** `md:px-8`, `md:text-xl`, `md:grid-cols-3`, `md:hidden`/`hidden md:flex`
- **lg (1024px):** Desktop defaults

---

## Components

### Layout

| Component | Path | Classes |
| --- | --- | --- |
| `Navbar` | `components/layout/Navbar.tsx` | `"use client"`. Outer: `w-full bg-white border-b border-border`. Inner: `flex items-center justify-between h-16 px-4 sm:px-6`. Logo: `w-9 h-9 rounded-[10px]`. Logo text: `text-[19px] font-bold text-text-darkest`. Desktop nav: `hidden md:flex items-center gap-6`. Nav links: `text-sm font-medium text-text-dark hover:text-accent transition-colors`. CTA button: `px-4 py-2 text-sm font-medium text-white rounded-md bg-accent hover:bg-accent-dark transition-colors`. Hamburger: `md:hidden flex items-center justify-center w-10 h-10 rounded-md text-text-dark hover:text-accent hover:bg-surface-secondary transition-colors`. Mobile menu: `md:hidden border-t border-border`. Mobile links: `px-4 py-3 text-sm font-medium text-text-dark hover:text-accent hover:bg-surface-secondary rounded-md transition-colors`. |
| `Footer` | `components/layout/Footer.tsx` | `footer`: `w-full border-t border-border bg-white`. Inner: `max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12`. Content: `flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12`. Section heading: `text-sm font-semibold text-text-primary`. Links: `text-sm text-text-secondary hover:text-accent transition-colors`. Bottom bar: `mt-8 sm:mt-10 pt-6 border-t border-border`. Copyright: `text-xs text-text-muted`. |

### Homepage

| Component | Path | Classes |
| --- | --- | --- |
| `Hero` | `components/homepage/Hero.tsx` | Section: `flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 text-center`. Tag: `inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent-light text-accent`. Heading: `max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-darkest`. Accent text: `text-accent`. Subheading: `max-w-xl mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary`. CTA container: `flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto`. Primary CTA: `w-full sm:w-auto px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent-dark transition-colors text-center`. Secondary CTA: `w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-primary hover:bg-surface-secondary transition-colors text-center`. |
| `DashboardPreview` | `components/homepage/DashboardPreview.tsx` | Section: `px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20`. Container: `max-w-5xl mx-auto`. Frame: `relative rounded-2xl border border-border overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. |
| `Features` | `components/homepage/Features.tsx` | Section: `px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-white`. Inner: `max-w-[1440px] mx-auto`. Heading wrapper: `text-center mb-10 sm:mb-14`. Heading: `text-2xl sm:text-3xl font-bold text-text-darkest`. Subheading: `mt-3 sm:mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto`. Grid: `grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6`. Card: `flex flex-col gap-4 p-5 sm:p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. Icon container: `flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent`. Card title: `text-base font-semibold text-text-primary`. Card desc: `text-sm text-text-secondary leading-relaxed`. |
| `HowItWorks` | `components/homepage/HowItWorks.tsx` | Section: `px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-background`. Heading wrapper: `text-center mb-10 sm:mb-14`. Heading: `text-2xl sm:text-3xl font-bold text-text-darkest`. Subheading: `mt-3 sm:mt-4 text-base sm:text-lg text-text-secondary`. Grid: `grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8`. Step circle: `flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-lg font-semibold`. Step title: `text-base font-semibold text-text-primary`. Step desc: `text-sm text-text-secondary max-w-xs leading-relaxed`. |
| `Testimonials` | `components/homepage/Testimonials.tsx` | Section: `px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-white`. Heading wrapper: `text-center mb-10 sm:mb-14`. Heading: `text-2xl sm:text-3xl font-bold text-text-darkest`. Subheading: `mt-3 sm:mt-4 text-base sm:text-lg text-text-secondary`. Grid: `grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6`. Card: `flex flex-col gap-4 p-5 sm:p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. Quote: `text-sm text-text-primary leading-relaxed`. Avatar: `w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-xs font-semibold`. Name: `text-sm font-medium text-text-primary`. Role: `text-xs text-text-muted`. |
| `CTA` | `components/homepage/CTA.tsx` | Section: `px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-background`. Card: `flex flex-col items-center text-center p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent to-[#4A2EC5]`. Heading: `text-2xl sm:text-3xl font-bold text-white`. Subtext: `mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-lg`. Button: `mt-6 sm:mt-8 px-6 py-3 text-sm font-medium rounded-lg bg-white text-accent hover:bg-white/90 transition-colors`. |

### Pages

| Page | Path | Pattern |
| --- | --- | --- |
| `Homepage` | `app/page.tsx` | Composes: `Navbar` → `Hero` → `DashboardPreview` → `Features` → `HowItWorks` → `Testimonials` → `CTA` → `Footer`. `main`: `flex-1`. |
