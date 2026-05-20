export const site = {
  name: "Sravan Tech Labs",
  tagline: "Product · Engineering · Consulting",
  description:
    "Product development and consulting studio building thoughtful software for ambitious teams worldwide.",
  email: "hello@sravantechlabs.com",
  location: "Bengaluru, India",
  established: "2020",
  social: {
    linkedin: "https://linkedin.com/company/sravantechlabs",
    twitter: "https://twitter.com/sravantechlabs",
    github: "https://github.com/sravantechlabs",
    instagram: "https://instagram.com/sravantechlabs",
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
