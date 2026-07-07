const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "916300018219";

export const site = {
  name: "Sravan Tech Labs",
  studioLabel: "On-Demand Product Studio",
  tagline: "Subscribe · Discuss · Ship",
  description:
    "An on-demand product studio for founders who want to build without the agency runaround. Subscribe, tell us what to ship, and we build it.",
  email: "hello@sravantechlabs.com",
  phone: "+91 63000 18219",
  phoneHref: "tel:+916300018219",
  location: "Bengaluru, India",
  established: "2020",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to discuss a project.",
  )}`,
  social: {
    linkedin: "https://linkedin.com/in/manojsravan/",
    twitter: "https://twitter.com/sravantechlabs",
    github: "https://github.com/sravantechlabs",
    instagram: "https://instagram.com/sravantechlabs",
  },
  founder: {
    name: "Manoj Sravan",
    role: "Founder",
    signature: "Manoj Sravan",
    image: "/founderimage.jpeg",
    imageAlt: "Manoj Sravan, founder of Sravan Tech Labs",
    headline: "A product studio that works like a subscription.",
    note: "I'm Manoj. I built Sravan Tech Labs for founders who are tired of proposals, scope creep, and handoffs. Subscribe once, tell me what to build, and I'll design, engineer, and ship it to production directly with you, with no layers in between.",
    ctaLabel: "Connect on LinkedIn",
    ctaHref: "https://www.linkedin.com/in/manojsravan/",
  },
} as const;

export type NavEntry = { type: "link"; href: string; label: string };

export const mainNav: readonly NavEntry[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "link", label: "How it works", href: "/#services" },
  { type: "link", label: "Pricing", href: "/#pricing" },
  { type: "link", label: "Case Studies", href: "/case-studies" },
  { type: "link", label: "Blogs", href: "/blogs" },
  { type: "link", label: "Contact", href: "mailto:hello@sravantechlabs.com" },
] as const;

export const faqs = [
  {
    q: "How does the subscription work?",
    a: "Pick a monthly plan, add product requests to your queue, and we work through them one at a time. Each request goes from discussion to deployed code, with no separate scoping fees or change orders. Move up a tier as your product needs grow.",
  },
  {
    q: "What can I request?",
    a: "MVPs, new features, bug fixes, integrations, landing pages, dashboards, ecommerce builds. Anything that needs to ship to production. If it's software, it's on the table.",
  },
  {
    q: "How fast do requests ship?",
    a: "Depends on scope. Small features often ship within days. Larger builds like MVPs typically take a few weeks. We align on timeline upfront for each request before work begins.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes. Pause when you don't need active development, or cancel before the next billing cycle. No long-term contracts.",
  },
] as const;

export const headerCta = {
  label: "Subscribe",
  href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
} as const;

export const heroStats = [
  { value: "20+", label: "Startups partnered" },
  { value: "10+", label: "Products built" },
  { value: "6+", label: "Years in product engineering" },
] as const;

/** Flat links for footer and simple menus */
export const navLinks = [
  { href: "/#services", label: "How it works" },
  { href: "/#about", label: "About" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Blogs" },
] as const;

export const clients = [
  {
    name: "Communn.io",
    logo: "/clients/onecommunn_logo.jpeg",
  },
  {
    name: "Illumora",
    logo: "/clients/illumora_logo.jpeg",
  },
  {
    name: "BoomBooth Studios",
    logo: "/clients/boombooth.png",
  },
  { name: "ChordAI", logo: "/clients/chordai.jpeg" },
  {
    name: "Ojas3D Creatives",
    logo: "/clients/ojaslogo.png",
  },
] as const;
