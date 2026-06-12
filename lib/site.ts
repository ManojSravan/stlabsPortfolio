import { packageNavItems } from "@/lib/packages";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "916300018219";

export const site = {
  name: "Sravan Tech Labs",
  tagline: "Storefronts · Brand Systems · SEO",
  description:
    "Product development and consulting studio building thoughtful software for ambitious teams worldwide.",
  email: "hello@sravantechlabs.com",
  phone: "+91 63000 18219",
  phoneHref: "tel:+916300018219",
  location: "Bengaluru, India",
  established: "2020",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Sravan Tech Labs — I'd like to discuss a project.",
  )}`,
  social: {
    linkedin: "https://linkedin.com/company/sravantechlabs",
    twitter: "https://twitter.com/sravantechlabs",
    github: "https://github.com/sravantechlabs",
    instagram: "https://instagram.com/sravantechlabs",
  },
  founder: {
    name: "Manoj Sravan",
    role: "Founder & Product Engineer, Sravan Tech Labs",
    signature: "Manoj Sravan",
    image: "/founderimage.jpeg",
    imageAlt: "Manoj Sravan, founder of Sravan Tech Labs",
    headline: "turning ideas into products teams can rely on.",
    bio: [
      "I started Sravan Tech Labs to build products with more clarity, faster execution, and direct collaboration with the people actually doing the work.",

      "Since then, I’ve worked with startups and founder-led teams across ecommerce, SaaS, media, and digital platforms helping ship products, improve systems, and turn ideas into production-ready experiences.",

      "The focus has always stayed simple: practical engineering, clear communication, and building software that remains reliable as the business grows.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "https://www.linkedin.com/in/manojsravan/",
  },
} as const;

export type NavDropdownItem = {
  href: string;
  label: string;
  description?: string;
};

export type NavEntry =
  | { type: "link"; href: string; label: string }
  | {
      type: "dropdown";
      label: string;
      items: readonly NavDropdownItem[];
      wide?: boolean;
    };

export const serviceLinks = [
  {
    href: "/services",
    label: "Ecommerce & Web",
    description: "Storefronts and marketing sites built to convert.",
  },
  {
    href: "/services",
    label: "SaaS Development",
    description: "From prototype to production-ready product.",
  },
  {
    href: "/services",
    label: "Learning Platforms",
    description: "LMS products for learners and instructors.",
  },
  {
    href: "/services",
    label: "Tech Consultancy",
    description: "Architecture, hiring, and product strategy.",
  },
  {
    href: "/services",
    label: "Landing Pages",
    description: "Fast, focused pages for launches and campaigns.",
  },
] as const;

export const mainNav: readonly NavEntry[] = [
  {
    type: "dropdown",
    label: "Services",
    items: serviceLinks,
  },
  {
    type: "dropdown",
    label: "Packages",
    items: packageNavItems,
    wide: true,
  },
  {
    type: "dropdown",
    label: "Work",
    items: [
      {
        href: "/work",
        label: "All projects",
        description: "Case studies and shipped products.",
      },
      {
        href: "/work/communn-creator-commerce-platform",
        label: "Creator commerce platform",
        description: "Campaigns, affiliates, and payouts.",
      },
      {
        href: "/work/illumora-boombooth-studios",
        label: "Illumora & BoomBooth",
        description: "Wellness and creator brand platforms.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    items: [
      {
        href: "/about",
        label: "About us",
        description: "Who we are and what we value.",
      },
      {
        href: "/#why-choose-us",
        label: "Why choose us",
        description: "How we work with partners.",
      },
      {
        href: "/#clients",
        label: "Our clients",
        description: "Teams we have partnered with.",
      },
      {
        href: "/contact",
        label: "Contact",
        description: "Start a conversation with us.",
      },
    ],
  },
  {
    type: "link",
    href: "/#faqs",
    label: "FAQs",
  },
] as const;

/** Flat links for footer and simple menus */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
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

export const whyChooseUs = {
  title: "Why choose us?",
  subtitle: "Cohesive, collaborative, result-driven product work.",
  intro: [
    "Sravan Tech Labs is a small senior team that ships software with clarity. You work directly with the people planning and building your product—no layers, no handoffs mid-stream.",
    "We partner with founders and engineering leaders on ecommerce, SaaS, learning platforms, and high-stakes technical decisions—from first prototype through calm production handoff.",
  ],
  points: [
    "Senior engineers and designers on every engagement",
    "Custom scope—no one-size-fits-all playbook",
    "Weekly delivery rhythm with visible milestones",
    "Practical architecture chosen for long-term stability",
    "Clear documentation and handoff your team can own",
    "Async-first collaboration with teams worldwide",
    "Honest communication when trade-offs matter",
    "Focused on outcomes, not toolchain theatre",
  ],
} as const;

export const faqs = [
  {
    q: "What services does Sravan Tech Labs offer?",
    a: "We build ecommerce and marketing sites, SaaS products, learning platforms, and landing pages. We also advise on architecture, hiring, and product strategy when the stakes are high.",
  },
  {
    q: "How long does a typical project take?",
    a: "MVPs and focused launches often land in two to six weeks. Larger platform work runs in phased milestones so you see progress weekly and can adjust before costs compound.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We regularly partner with founder-led teams that need a senior squad without hiring a full in-house product org first.",
  },
  {
    q: "What does an engagement look like?",
    a: "We start with a short discovery call, align on goals and constraints, then run in focused increments with demos, written updates, and direct access to the builders.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We embed alongside your engineers and designers, fill gaps where needed, and leave systems your team can maintain after we step back.",
  },
  {
    q: "How do we get started?",
    a: "Book a discovery call or email us at hello@sravantechlabs.com. We will respond within one business day with next steps.",
  },
] as const;
