export type Package = {
  slug: string;
  title: string;
  tagline: string;
  price: string;
  timeline: string;
  summary: string;
  illustration: string;
  idealFor: readonly string[];
  includes: readonly string[];
  outcomes: readonly string[];
  cta: { label: string; href: string };
};

export const packages: readonly Package[] = [
  {
    slug: "ecommerce-launch-package",
    title: "Ecommerce Launch Package",
    tagline: "A production-ready store, live in two weeks.",
    price: "From ₹50k",
    timeline: "2 to 3 weeks",
    summary:
      "Your agency client needs a storefront that works from day one. We handle the full build: platform setup, payments, mobile design, and handoff so you can deliver on time without touching a line of code.",
    illustration: "/illustrations/ecommercelaunchpagackage.png",
    idealFor: [
      "Agencies onboarding D2C clients who need a fast, clean launch",
      "Creative studios that need a reliable engineering partner to execute",
      "Brand consultancies delivering end-to-end client projects",
    ],
    includes: [
      "Complete storefront on Shopify or Next.js Commerce",
      "Product catalog with collections, filters, and search",
      "Payment processing, shipping rules, and tax configuration",
      "Mobile-first design built to your brand guidelines or ours",
      "WhatsApp integration for post-purchase support",
      "Handoff documentation and a walkthrough session",
    ],
    outcomes: [
      "Store live and accepting orders within 2 to 3 weeks",
      "Your client can manage inventory from day one with no dependency on you",
      "Scalable codebase your team can build on later",
    ],
    cta: {
      label: "Discuss this project",
      href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
    },
  },
  {
    slug: "ecommerce-growth-package",
    title: "Ecommerce Growth Package",
    tagline: "Automation, tracking, and architecture built to scale.",
    price: "From ₹75k",
    timeline: "4 to 6 weeks",
    summary:
      "For clients who are already selling and need the infrastructure to scale. We go beyond the storefront: custom dashboards, automated order flows, and ad attribution so your client has full visibility into what is working.",
    illustration: "/illustrations/ecommercegrowthpackage.png",
    idealFor: [
      "Agencies running performance marketing who need reliable conversion tracking",
      "Clients scaling past manual operations and needing automation",
      "Studios delivering full-stack growth projects, not just design",
    ],
    includes: [
      "Everything in the Ecommerce Launch Package",
      "Custom admin dashboard for orders, inventory, and fulfilment",
      "Automated WhatsApp flows for order confirmation and shipping updates",
      "Meta and Google ad tracking with proper conversion event setup",
      "Scalable backend architecture ready for high-traffic campaigns",
      "Two weeks post-launch support and performance tuning",
    ],
    outcomes: [
      "Your client saves 10+ hours a week on manual order handling",
      "Ad spend tracked to actual revenue with no guesswork",
      "Infrastructure that handles campaign traffic without breaking",
    ],
    cta: {
      label: "Discuss this project",
      href: "https://cal.com/manoj-sravan-annivg/free-discovery-call",
    },
  },
  {
    slug: "landing-page-and-brand-package",
    title: "Landing Page & Brand Package",
    tagline: "One sharp page. Built to convert.",
    price: "From ₹30k",
    timeline: "1 to 2 weeks",
    summary:
      "A high-converting landing page your agency can deliver to clients in under two weeks. Sharp copy structure, professional design, and a single focused goal: sign up, book, or buy.",
    illustration: "/illustrations/landingpageandbrandpackage.png",
    idealFor: [
      "Agencies running campaign launches that need a dedicated page fast",
      "Brand studios who design but need someone to build and ship",
      "Marketing teams delivering lead gen assets for clients",
    ],
    includes: [
      "Conversion-focused page structure with clear hierarchy",
      "Professional, mobile-first design built to your brand guidelines or ours",
      "Lead capture, booking system, or CTA integration",
      "Core SEO setup and fast load times out of the box",
      "Analytics and visitor tracking configured",
      "Clean code handoff with documentation",
    ],
    outcomes: [
      "Page live and converting within 1 to 2 weeks",
      "A deliverable your agency can be proud to put your name on",
      "Client has full ownership and can make updates independently",
    ],
    cta: {
      label: "Discuss this project",
      href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
    },
  },
  {
    slug: "seo-package",
    title: "SEO Package",
    tagline: "Technical foundation that search engines reward long-term.",
    price: "From ₹30k",
    timeline: "3 to 4 weeks",
    summary:
      "A thorough SEO engagement your agency can offer clients who want organic growth. We fix what is holding the site back technically, restructure for search, and hand off a clear roadmap so your client sees real movement in rankings.",
    illustration: "/illustrations/seopackage.png",
    idealFor: [
      "Agencies adding SEO to their service offering without hiring in-house",
      "Clients with traffic but poor search visibility",
      "New site launches that need a strong technical foundation from day one",
    ],
    includes: [
      "Full technical audit covering crawl issues, speed, Core Web Vitals, and indexing",
      "On-page optimisation across titles, meta, headings, and content structure",
      "Page speed improvements and image optimisation",
      "Google Search Console and Analytics setup with goal tracking",
      "Keyword strategy mapped to pages with real ranking potential",
      "Deliverable report with findings, fixes, and a content roadmap",
    ],
    outcomes: [
      "Site ranking for searches your client's customers are actually making",
      "A clear content plan your agency can execute or hand off",
      "Month on month visibility into traffic and ranking movement",
    ],
    cta: {
      label: "Discuss this project",
      href: "https://cal.com/manoj-sravan-annivg/free-discovery-call",
    },
  },
] as const;

export const packageNavItems = packages.map((pkg) => ({
  href: `/packages/${pkg.slug}`,
  label: pkg.title,
  description: pkg.tagline,
})) as readonly { href: string; label: string; description: string }[];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getAllPackageSlugs(): string[] {
  return packages.map((p) => p.slug);
}
