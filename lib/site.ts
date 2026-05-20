const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "916300018219";

export const site = {
  name: "Sravan Tech Labs",
  tagline: "Product · Engineering · Consulting",
  description:
    "Product development and consulting studio building thoughtful software for ambitious teams worldwide.",
  email: "hello@sravantechlabs.com",
  location: "Bengaluru, India",
  established: "2020",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Sravan Tech Labs — I'd like to discuss a project."
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
    headline:
      "turning ideas into products teams can rely on.",
      bio: [
        "I started Sravan Tech Labs to build products with more clarity, faster execution, and direct collaboration with the people actually doing the work.",
        
        "Since then, I’ve worked with startups and founder-led teams across ecommerce, SaaS, media, and digital platforms helping ship products, improve systems, and turn ideas into production-ready experiences.",
        
        "The focus has always stayed simple: practical engineering, clear communication, and building software that remains reliable as the business grows.",
      ],
    ctaLabel: "Start a conversation",
    ctaHref: "https://www.linkedin.com/in/manojsravan/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/services", label: "Ecommerce & Web" },
  { href: "/services", label: "SaaS Development" },
  { href: "/services", label: "Learning Platforms" },
  { href: "/services", label: "Tech Consultancy" },
  { href: "/services", label: "Landing Pages" },
] as const;
