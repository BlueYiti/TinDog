# TinDog Landing Page

A production-ready marketing landing page for **TinDog**, a dog matchmaking and adoption platform. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Design** — Mobile-first layout with desktop, tablet, and mobile breakpoints
- **Accessible** — WCAG best practices with semantic HTML, keyboard navigation, skip-to-content link, and ARIA attributes
- **SEO Optimized** — Meta tags, semantic heading hierarchy, and descriptive alt text
- **Performant** — Lazy-loaded images, optimized assets, minimal JavaScript
- **Animations** — Subtle scroll-triggered reveals, hover effects, and carousel transitions (respects `prefers-reduced-motion`)
- **Carousel** — Touch-swipeable testimonial carousel with keyboard support and pagination indicators
- **Mobile Navigation** — Slide-in drawer with focus trapping and Escape key support

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| react-helmet-async | SEO head management |
| clsx + tailwind-merge | Conditional class utilities |

## Project Structure

```
src/
├── assets/
│   ├── logos/          # Brand and partner logos
│   ├── images/         # Hero, CTA, and testimonial images
│   └── stores/         # Google Play and App Store badges
├── components/
│   ├── common/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Carousel.tsx
│   │   ├── Container.tsx
│   │   ├── DownloadBadge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── SEO.tsx
│   │   ├── SkipToContent.tsx
│   │   ├── StarRating.tsx
│   │   └── VisuallyHidden.tsx
│   ├── layout/         # Layout components
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   └── sections/       # Page sections
│       ├── CTASection.tsx
│       ├── HeroSection.tsx
│       ├── PartnersSection.tsx
│       └── TestimonialsSection.tsx
├── data/               # Content separated from UI
│   ├── footer.ts
│   ├── navigation.ts
│   ├── partners.ts
│   ├── site-content.ts
│   └── testimonials.ts
├── hooks/              # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   └── useScrollPosition.ts
├── types/              # TypeScript interfaces
│   └── index.ts
├── utils/              # Utility functions
│   └── cn.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Typography

| Font | Usage |
|------|-------|
| **Poppins** | Headlines, body text, navigation, buttons |
| **Nanum Pen Script** | Decorative marketing accents (eyebrow, taglines) |

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-orange` | `#FF6B35` | Primary gradient start |
| `brand-coral` | `#FF4F6A` | Primary gradient end |
| `brand-purple` | `#7C3AED` | Decorative accents |
| `brand-gold` | `#FBBF24` | Star ratings |
| `neutral-50` | `#FAFAFA` | Light section backgrounds |
| `neutral-900` | `#171717` | Primary text |

## Browser Support

- Chrome (latest 2 versions)
- Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Performance

Targets Lighthouse score of 90+ with:
- Optimized and lazy-loaded images
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Fast initial load time