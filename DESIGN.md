# Pager Studio — Design Language

This document defines the design system, tokens, patterns, and conventions used across pagerstudio.vercel.app. All contributors must follow this guide to maintain consistency.

---

## Design Principles

1. **Minimal** — Black and white only. No accent colors, no gradients, no decorative elements.
2. **Apple HIG-inspired** — Typography scale, spacing grid, and border radius follow Apple's Human Interface Guidelines.
3. **Content-first** — The interface disappears. Content is the product.
4. **Accessible** — WCAG AA compliant. Keyboard navigable. Reduced motion respected.
5. **AEO-aware** — Every design decision considers how AI models parse and understand the page.
6. **Light-first** — No dark mode. The site is light-themed by design. Dark backgrounds are used sparingly for emphasis (blog cards, footer, menu, guide hero) — not as a full theme. Favicon adapts to system theme via `prefers-color-scheme` media queries.

---

## Color Palette

Monochrome only. No exceptions.

| Token | Value | Contrast (on white) | Usage |
|-------|-------|---------------------|-------|
| `--color-black` | `#000000` | 21:1 | Primary text, buttons, dark backgrounds |
| `--color-white` | `#FFFFFF` | — | Page background, inverse text |
| `--color-text-primary` | `rgba(0,0,0,1)` | 21:1 | Headings, body text |
| `--color-text-secondary` | `rgba(0,0,0,0.65)` | 5.9:1 | Descriptions, supporting text |
| `--color-text-tertiary` | `rgba(0,0,0,0.4)` | 3.1:1 | Timestamps, metadata, decorative `+` markers (large text only) |
| `--color-text-inverse` | `rgba(255,255,255,1)` | — | Text on dark backgrounds |
| `--color-text-inverse-secondary` | `rgba(255,255,255,0.75)` | — | Supporting text on dark backgrounds |
| `--color-border-subtle` | `rgba(0,0,0,0.08)` | — | Card borders, dividers |
| `--color-border-default` | `rgba(0,0,0,0.15)` | — | Button borders, input borders |
| `--color-border-strong` | `rgba(0,0,0,0.25)` | — | Active borders, emphasis |
| `--color-fill-primary` | `rgba(0,0,0,0.03)` | — | Subtle background fills |
| `--color-fill-secondary` | `rgba(0,0,0,0.12)` | — | Active fills, emphasis |
| `--color-fill-hover` | `rgba(0,0,0,0.08)` | — | Hover background, skeleton placeholders |
| `--color-fill-active` | `rgba(0,0,0,0.9)` | — | Primary button hover |

### Contrast Notes
- `text-secondary` (5.9:1) passes WCAG AA for all text sizes
- `text-tertiary` (3.1:1) passes WCAG AA for large text only (18px+ or 14px bold+). Used exclusively for decorative markers, timestamps, and metadata — never for body text
- Fill tokens are background-only and don't need contrast compliance

### Selection Colors
- Default: Black background, white text
- Inside `.bg-black` or `article`: White background, black text

---

## Typography

**Font:** Manrope (Google Fonts) — weights 400, 500, 600
**Antialiasing:** `-webkit-font-smoothing: antialiased`

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-display-xl` | 2.125rem (34px) | 2.5625rem | Hero headlines |
| `text-display` | 1.75rem (28px) | 2.125rem | Page titles |
| `text-title-1` | 1.375rem (22px) | 1.75rem | Section headings, card titles |
| `text-title-2` | 1.25rem (20px) | 1.5625rem | Subsection headings |
| `text-headline` | 1.0625rem (17px) | 1.375rem | Emphasized body text |
| `text-body` | 1.0625rem (17px) | 1.375rem | Default body text |
| `text-callout` | 1rem (16px) | 1.3125rem | Callout text |
| `text-subhead` | 0.9375rem (15px) | 1.25rem | Descriptions, secondary text |
| `text-footnote` | 0.8125rem (13px) | 1.125rem | Small labels, navigation |
| `text-caption` | 0.75rem (12px) | 1rem | Captions, timestamps |
| `text-micro` | 0.6875rem (11px) | 0.8125rem | Copyright, badges |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `font-weight-regular` | 400 | Body text |
| `font-weight-medium` | 500 | Labels, navigation |
| `font-weight-semibold` | 600 | Headings, buttons, emphasis |

### Semantic Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `leading-tight` | 1.15 | Display headlines |
| `leading-snug` | 1.12 | Title headings |
| `leading-normal` | 1.5 | Body text |
| `leading-relaxed-body` | 1.6 | Long-form reading |
| `leading-prose` | 1.7 | Blog content, descriptions |

---

## Spacing

Based on a **4px grid**. All spacing should be multiples of 4px.

| Token | Value |
|-------|-------|
| `spacing-1` | 0.25rem (4px) |
| `spacing-2` | 0.5rem (8px) |
| `spacing-3` | 0.75rem (12px) |
| `spacing-4` | 1rem (16px) |
| `spacing-5` | 1.25rem (20px) |
| `spacing-6` | 1.5rem (24px) |
| `spacing-8` | 2rem (32px) |
| `spacing-10` | 2.5rem (40px) |
| `spacing-12` | 3rem (48px) |
| `spacing-16` | 4rem (64px) |
| `spacing-20` | 5rem (80px) |
| `spacing-24` | 6rem (96px) |

### Page-Level Spacing
- **Horizontal padding:** `px-[20px] md:px-[30px]`
- **Section top padding:** `pt-[20px] md:pt-[30px]` (inner pages), `pt-[60px] md:pt-0` (homepage hero)
- **Section bottom padding:** `pb-[60px] md:pb-24` (inner pages), `pb-[90px] md:pb-[180px]` (about, pricing)

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 0.5rem (8px) | Code blocks, small elements |
| `radius-md` | 0.75rem (12px) | Inputs, dropdowns |
| `radius-lg` | 1rem (16px) | Cards, containers |
| `radius-xl` | 1.25rem (20px) | Large cards |
| `radius-2xl` | 1.5rem (24px) | Hero cards, blog cards |
| `radius-full` | 9999px | Buttons, badges, avatars |

**Rule:** All buttons and interactive elements use `rounded-full`.

---

## Layout

### Content Width
- **Standard content:** `max-w-[720px]` (homepage, pricing, about, back button)
- **Blog content:** `max-w-2xl` (768px) or `max-w-3xl` (768px)
- **Full-width sections:** No max-width constraint

### Grid Background
The page background uses a cross/plus grid pattern:
- SVG pattern with `+` marks at 60px intervals
- Subtle linear gradients for additional grid lines
- Color: `rgba(0,0,0,0.03)` and `rgba(0,0,0,0.1)`
- Grid size: 60px × 60px

### Responsive Breakpoints
- **Mobile:** Default (< 768px)
- **Desktop:** `md:` prefix (≥ 768px)
- **Small desktop:** `sm:` prefix (≥ 640px) — used for inline CTAs

---

## Components

### BackButton
- Positioned at top of inner pages
- Constrained to `max-w-[720px]` with `mx-auto`
- White background, border, `rounded-full`
- Left arrow icon with hover translate animation
- Falls back to `/` if no browser history

### Button (Primary)
```html
<a class="px-7 py-3.5 rounded-full bg-black text-white text-subhead font-semibold
   hover:bg-fill-active transition-colors">
  Button Text
</a>
```

### Button (Secondary)
```html
<a class="px-7 py-3.5 rounded-full border border-border-default text-black
   text-subhead font-semibold hover:bg-fill-hover transition-colors">
  Button Text
</a>
```

### GlassCard
- `bg-white/50 backdrop-blur-md`
- `border border-border-default`
- `rounded-2xl`
- Decorative `+` SVG corners at all four corners

### Section
- Combines `Separator` (diagonal stripe) + `GlassCard`
- Optional `noSeparator` prop
- Used on about and blog post pages

### Separator
- 20px tall, 720px max-width
- Repeating-linear-gradient at -45deg
- Diagonal stripe pattern

### Header
- Top: Logo + "Pager Studio" text
- Bottom-right: Floating "// Menu //" button
- Opens black dropdown with page links, social links, contact
- Full keyboard navigation (arrows, tab trapping, Escape)
- Staggered in/out animations

### Footer
- Black background, `rounded-2xl`
- Logo + social links + page links + legal links
- Responsive: stacked on mobile, row on desktop
- Legal links wrap on mobile

### CookieConsent
- Fixed bottom-left, `z-[200]`
- GDPR-compliant with GPC signal support
- Three buttons: Accept All, Reject All, Save Preferences

### SwipeableCards
- Touch-swipeable blog post card carousel
- Black background, `rounded-2xl`
- Prev/next buttons with counter
- Supports arrow key navigation

---

## Animations

### Hero Animation (fadeSlideUp)
```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-animate {
  opacity: 0;
  animation: fadeSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```
- Used for staggered entrance on hero elements
- Delay pattern: `0ms → 150ms → 300ms`

### Menu Stagger Animation
```css
@keyframes menu-item-in {
  from { opacity: 0; transform: translateY(8px); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
```
- Delay: 80ms per item (in), 40ms per item (out)

### Reduced Motion
All animations disabled when `prefers-reduced-motion: reduce` is active.

---

## Interactive Patterns

### Focus Visible
All interactive elements use:
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
```

### Hover States
- **Links:** `hover:text-text-secondary` (fade to secondary)
- **Buttons:** `hover:bg-fill-active` (primary) or `hover:bg-fill-hover` (secondary)
- **Cards:** Subtle shadow or border change
- **Icons:** `group-hover:opacity-100` (reveal arrow on hover)

### Minimum Touch Target
All interactive elements: `min-h-[44px] min-w-[44px]` (WCAG requirement)

---

## Content Patterns

### Section Title Format
```html
<p class="text-subhead font-medium text-text-secondary">// Section Name //</p>
```

### Blog Post Structure
1. Frontmatter: title, description, date, readTime, category, author, keywords, image
2. Content split by `##` headings into sections
3. Each section wrapped in `Section` component with `Separator`
4. FAQ section extracted into `FAQPage` JSON-LD
5. CTA section with inline link buttons

### JSON-LD Pattern
Every page includes structured data in a `<script type="application/ld+json">` block. Use `dangerouslySetInnerHTML` with `JSON.stringify`.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens, animations, prose
│   ├── not-found.tsx       # 404 page
│   ├── error.tsx           # Error boundary
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug]
│   ├── book/               # Book a Call
│   ├── pricing/            # Pricing & Process
│   ├── feed.xml/           # RSS feed
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── [legal-pages]/      # cookies, privacy, terms, disclaimer, ai-policy
├── components/
│   ├── BackButton.tsx
│   ├── Breadcrumbs.tsx
│   ├── Button.tsx
│   ├── CalEmbed.tsx
│   ├── CookieConsent.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   ├── GridTrail.tsx
│   ├── GridTrailWrapper.tsx
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── Section.tsx
│   ├── Separator.tsx
│   └── SwipeableCards.tsx
├── content/
│   └── blog/               # MDX blog posts
└── lib/
    └── blog.ts             # Blog utilities
```

---

## Do's and Don'ts

### Do
- Use monochrome colors only
- Follow the 4px spacing grid
- Use `rounded-full` for all buttons
- Include `focus-visible` styles on interactive elements
- Add `aria-label` on icon-only buttons
- Use `min-h-[44px]` on all touch targets
- Include JSON-LD structured data on every page
- Respect `prefers-reduced-motion`

### Don't
- Add accent colors or gradients
- Use `rounded-lg` or `rounded-md` on buttons
- Skip focus-visible styles
- Use placeholder text (lorem ipsum)
- Hardcode pixel values outside the 4px grid
- Add animations without reduced-motion fallback
- Use `<a>` for internal navigation (use `<Link>`)
- Expose secrets or API keys in client-side code

---

## Deployment

- **Platform:** Vercel
- **Branch:** `main` → auto-deploys to production
- **Build:** `npm run build` (Next.js 16 + Turbopack)
- **Lint:** `npm run lint` (ESLint — must pass with 0 errors)
- **Domain:** `pagerstudio.vercel.app` (pending custom domain resolution)

---

*Last updated: August 2026*
