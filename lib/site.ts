const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "916300018219";

export const site = {
  name: "Sravan Tech Labs",
  studioLabel: "Product Engineering Studio",
  tagline: "Build · Ship · Iterate",
  description:
    "Product engineering studio helping founders design, build, and ship software that holds up in production.",
  email: "hello@sravantechlabs.com",
  phone: "+91 63000 18219",
  phoneHref: "tel:+916300018219",
  location: "Bengaluru, India",
  established: "2020",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi — I'd like to discuss a project.",
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
    headline: "A small studio for founders who need to ship.",
    note: "I'm Manoj. I started Sravan Tech Labs after seeing too many projects stall between design and production. We work directly with founders — clear scope, careful builds, and software that holds up when real users arrive.",
    ctaLabel: "Connect on LinkedIn",
    ctaHref: "https://www.linkedin.com/in/manojsravan/",
  },
} as const;

export type NavEntry = { type: "link"; href: string; label: string };

export const mainNav: readonly NavEntry[] = [
  { type: "link", label: "Services", href: "/#services" },
  { type: "link", label: "About", href: "/#about" },
  { type: "link", label: "Pricing", href: "/#pricing" },
  { type: "link", label: "Case Studies", href: "/case-studies" },
  { type: "link", label: "Blogs", href: "/blogs" },
] as const;

export const faqs = [
  {
    q: "How do we work together?",
    a: "Direct collaboration — no account managers or handoffs. We start with a call to understand your product, scope the work, and move into design and build with regular check-ins.",
  },
  {
    q: "What types of projects do you take on?",
    a: "MVPs, SaaS platforms, ecommerce builds, and product rebuilds. If it needs to ship to production and hold up under real users, it's a good fit.",
  },
  {
    q: "What's your typical timeline?",
    a: "MVPs often ship in 4–8 weeks depending on scope. Larger products are phased — we define milestones upfront so you know what ships when.",
  },
  {
    q: "Do you work with teams outside India?",
    a: "Yes. I collaborate with founders worldwide — async-friendly, clear communication, and overlap for calls when time zones allow.",
  },
] as const;

export const headerCta = {
  label: "Start for free",
  href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
} as const;

/** Flat links for footer and simple menus */
export const navLinks = [
  { href: "/#services", label: "Services" },
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
] as const;
