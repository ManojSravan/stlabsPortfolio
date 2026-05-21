# Animation Components Guide

This guide explains how to use the animation components created for the Sravan Tech Labs portfolio.

## Available Components

### 1. `RevealAnimation`

A simple wrapper component that reveals content with a subtle fade-in and slide animation as it comes into view.

**Usage:**
```tsx
import { RevealAnimation } from "@/components/animations";

export default function MyComponent() {
  return (
    <RevealAnimation delay={0.1} direction="up">
      <div>Content that will animate in</div>
    </RevealAnimation>
  );
}
```

**Props:**
- `children` (ReactNode) - Content to animate
- `delay` (number, default: 0) - Delay before animation starts (in seconds)
- `duration` (number, default: 0.5) - Duration of animation (in seconds)
- `direction` (string, default: "up") - Animation direction: "up", "down", "left", "right"
- `className` (string, default: "") - CSS classes to apply to the wrapper

**When to use:**
- Section headings and descriptions
- Content that should reveal as the user scrolls
- Individual elements that need staggered entry

---

### 2. `StaggerContainer` + `StaggerItem`

A pair of components for animating multiple items in sequence with automatic staggering.

**Usage:**
```tsx
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function MyList() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <StaggerItem key={item}>
          <div>{item}</div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

**StaggerContainer Props:**
- `children` (ReactNode) - Child elements to animate
- `staggerDelay` (number, default: 0.1) - Delay between each item's animation (in seconds)
- `className` (string, default: "") - CSS classes to apply to the container

**StaggerItem Props:**
- `children` (ReactNode) - Content to animate
- `className` (string, default: "") - CSS classes to apply to the item

**When to use:**
- Lists of cards or grid items
- Multiple elements that should animate one after another
- Testimonial cards, pricing tiers, project cards, client logos, etc.

---

## Implementation Examples

### Example 1: Hero Section with Sequential Reveals
```tsx
<RevealAnimation delay={0}>
  <p className="subtitle">Product Studio</p>
</RevealAnimation>

<RevealAnimation delay={0.1}>
  <h1>We build modern digital products</h1>
</RevealAnimation>

<RevealAnimation delay={0.2}>
  <p className="description">Full description text...</p>
</RevealAnimation>

<RevealAnimation delay={0.3}>
  <div className="buttons">
    <button>Call to action</button>
  </div>
</RevealAnimation>
```

### Example 2: Grid of Cards
```tsx
<StaggerContainer staggerDelay={0.12} className="grid grid-cols-3 gap-6">
  {projects.map((project) => (
    <StaggerItem key={project.id}>
      <ProjectCard project={project} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Example 3: Section with Features
```tsx
<RevealAnimation className="text-center">
  <h2>Our Features</h2>
  <p>Description of features below</p>
</RevealAnimation>

<StaggerContainer staggerDelay={0.15} className="mt-10 grid grid-cols-2 gap-8">
  {features.map((feature) => (
    <StaggerItem key={feature.title}>
      <FeatureCard feature={feature} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

## Animation Behavior

All animations are configured with the following defaults:

- **Trigger:** Elements animate when they come into view (scroll-based)
- **Viewport Margin:** Animations trigger 50px before the element is fully visible
- **Repeat:** Animations only play once (`once: true`)
- **Easing:** smooth `easeOut` for natural motion

---

## Performance Notes

- Animations use `motion` (which wraps framer-motion) for optimal performance
- All components are `'use client'` (client-side rendered)
- Animations use `whileInView` which is performant for scroll-based animations
- No heavy render-based animations - just simple opacity and position changes

---

## Customization

To customize animations globally, edit the animation component files:
- `components/animations/RevealAnimation.tsx`
- `components/animations/StaggerContainer.tsx`

To modify timing, easing, or initial positions, adjust the values in these files.

---

## Currently Animated Sections

The following sections have been updated with animations:

- ✅ Home page hero section
- ✅ Home stats grid
- ✅ Recent work projects
- ✅ Client logos grid
- ✅ How we work cards
- ✅ Testimonials
- ✅ Pricing tiers
- ✅ FAQs section
- ✅ CTA section
- ✅ About page content
- ✅ Values grid

Feel free to add animations to other components using these same patterns!
