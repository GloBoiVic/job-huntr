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

## Components

### Layout

| Component | Path | Classes |
| --- | --- | --- |
| `Navbar` | `components/layout/Navbar.tsx` | `header`: `flex items-center justify-between w-full h-16 px-6 bg-white border-b border-border`. Logo: `w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-[#4A2EC5]`. Logo text: `text-[19px] font-bold text-text-darkest`. Nav links: `text-sm font-medium text-text-dark hover:text-accent transition-colors`. CTA button: `px-4 py-2 text-sm font-medium text-white rounded-md bg-accent hover:bg-accent-dark transition-colors`. |
| `Footer` | `components/layout/Footer.tsx` | `footer`: `w-full border-t border-border bg-white`. Inner: `max-w-[1440px] mx-auto px-8 py-12`. Section heading: `text-sm font-semibold text-text-primary`. Links: `text-sm text-text-secondary hover:text-accent transition-colors`. Bottom bar: `mt-10 pt-6 border-t border-border`. Copyright: `text-xs text-text-muted`. |

### Homepage

| Component | Path | Classes |
| --- | --- | --- |
| `Hero` | `components/homepage/Hero.tsx` | Section: `flex flex-col items-center justify-center px-8 pt-24 pb-16 text-center`. Tag: `inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent-light text-accent`. Heading: `max-w-3xl text-5xl font-bold leading-tight tracking-tight text-text-darkest`. Accent text: `text-accent`. Subheading: `max-w-xl mt-6 text-lg text-text-secondary`. Primary CTA: `px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent-dark transition-colors`. Secondary CTA: `px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-primary hover:bg-surface-secondary transition-colors`. |
| `DashboardPreview` | `components/homepage/DashboardPreview.tsx` | Section: `px-8 pb-20`. Container: `max-w-5xl mx-auto`. Frame: `relative rounded-2xl border border-border overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. |
| `Features` | `components/homepage/Features.tsx` | Section: `px-8 py-20 bg-white`. Inner: `max-w-[1440px] mx-auto`. Heading: `text-3xl font-bold text-text-darkest`. Subheading: `mt-4 text-lg text-text-secondary max-w-2xl mx-auto`. Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`. Card: `flex flex-col gap-4 p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. Icon container: `flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent`. Card title: `text-base font-semibold text-text-primary`. Card desc: `text-sm text-text-secondary leading-relaxed`. |
| `HowItWorks` | `components/homepage/HowItWorks.tsx` | Section: `px-8 py-20 bg-background`. Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`. Step circle: `flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-lg font-semibold`. Step title: `text-base font-semibold text-text-primary`. Step desc: `text-sm text-text-secondary max-w-xs leading-relaxed`. |
| `Testimonials` | `components/homepage/Testimonials.tsx` | Section: `px-8 py-20 bg-white`. Card: `flex flex-col gap-4 p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`. Quote: `text-sm text-text-primary leading-relaxed`. Avatar: `w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-xs font-semibold`. Name: `text-sm font-medium text-text-primary`. Role: `text-xs text-text-muted`. |
| `CTA` | `components/homepage/CTA.tsx` | Section: `px-8 py-20 bg-background`. Card: `flex flex-col items-center text-center p-12 rounded-2xl bg-gradient-to-br from-accent to-[#4A2EC5]`. Heading: `text-3xl font-bold text-white`. Subtext: `mt-4 text-base text-white/80 max-w-lg`. Button: `mt-8 px-6 py-3 text-sm font-medium rounded-lg bg-white text-accent hover:bg-white/90 transition-colors`. |

### Pages

| Page | Path | Pattern |
| --- | --- | --- |
| `Homepage` | `app/page.tsx` | Composes: `Navbar` → `Hero` → `DashboardPreview` → `Features` → `HowItWorks` → `Testimonials` → `CTA` → `Footer`. `main`: `flex-1`. |
