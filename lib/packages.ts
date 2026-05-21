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
    tagline: "Go live with a store that is ready to sell.",
    price: "From ₹20k",
    timeline: "2–3 weeks",
    summary:
      "Launch your online store in weeks, not months. Get a professional storefront that accepts payments, handles orders, and gives you confidence to start selling—without the overwhelm of endless setup.",
    illustration: "/illustrations/ecommercelaunchpagackage.png",
    idealFor: [
      "New D2C brands launching their first online store",
      "Local businesses ready to move beyond Instagram and WhatsApp",
      "Founders who need to start selling before investing in ads",
    ],
    includes: [
      "Complete storefront on Shopify or similar platform",
      "Product catalog organized for easy browsing and discovery",
      "Payment processing, shipping rules, and tax setup",
      "Mobile-optimized design that looks great on every device",
      "WhatsApp integration for customer support",
      "Training session so you can manage your store confidently",
    ],
    outcomes: [
      "Start accepting real orders within 2-3 weeks",
      "Simple admin system your team can use from day one",
      "Scalable foundation that grows with your business",
    ],
    cta: {
      label: "Book launch package call",
      href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
    },
  },
  {
    slug: "ecommerce-growth-package",
    title: "Ecommerce Growth Package",
    tagline: "Sell more with ops, automation, and room to scale.",
    price: "From ₹45k",
    timeline: "4–6 weeks",
    summary:
      "Scale beyond the basics with automation that saves you hours every day. Get the complete launch package plus advanced dashboards, automated customer updates, and ad tracking—so you can focus on growth, not manual tasks.",
    illustration: "/illustrations/ecommercegrowthpackage.png",
    idealFor: [
      "Stores already making sales and ready to scale efficiently",
      "Teams launching paid ads who need accurate tracking and insights",
      "Brands spending too much time on manual order management",
    ],
    includes: [
      "Everything in the Ecommerce Launch Package",
      "Custom admin dashboard to manage orders and inventory faster",
      "Automated WhatsApp notifications for order confirmations and shipping",
      "Facebook and Instagram ad tracking with proper conversion setup",
      "Scalable backend architecture ready for high traffic",
      "Two weeks of post-launch optimization and support",
    ],
    outcomes: [
      "Save 10+ hours per week on manual order processing",
      "Know exactly which ads are driving sales and ROI",
      "Handle 10x more orders without hiring more people",
    ],
    cta: {
      label: "Discuss growth setup",
      href: "https://cal.com/manoj-sravan-annivg/free-discovery-call",
    },
  },
  {
    slug: "landing-page-and-brand-package",
    title: "Landing Page & Brand Package",
    tagline: "One sharp page that explains what you do and drives action.",
    price: "From ₹15k",
    timeline: "1–2 weeks",
    summary:
      "Turn visitors into customers with a landing page that clearly explains your value and guides them to take action. Built in 1-2 weeks with sharp messaging, professional design, and one focused goal—get people to sign up, book, or buy.",
    illustration: "/illustrations/landingpageandbrandpackage.png",
    idealFor: [
      "Product launches and waitlist campaigns that need sign-ups fast",
      "Service businesses who need to look credible and convert visitors",
      "Marketing campaigns that need a dedicated, high-converting page",
    ],
    includes: [
      "Clear messaging that explains your value in seconds",
      "Professional, mobile-friendly design that builds trust",
      "Lead capture forms or booking system integration",
      "Fast loading speeds and search engine optimization",
      "Visitor tracking to see what's working",
      "Simple handoff so you can make updates yourself",
    ],
    outcomes: [
      "Get your page live and driving results in 1-2 weeks",
      "Turn more visitors into leads, bookings, or customers",
      "Professional presence that makes you look established",
    ],
    cta: {
      label: "Start your landing page",
      href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
    },
  },
  {
    slug: "seo-package",
    title: "SEO Package",
    tagline:
      "Technical health and content structure that search engines reward.",
    price: "From ₹25k",
    timeline: "3–4 weeks",
    summary:
      "Show up on Google when people search for what you offer. Get a solid SEO foundation that fixes technical issues, optimizes your pages, and sets you up to track real improvements in search rankings and organic traffic.",
    illustration: "/illustrations/seopackage.png",
    idealFor: [
      "Sites getting traffic but not showing up in search results",
      "New websites that want to rank well from day one",
      "Businesses ready to invest in content and need an SEO foundation",
    ],
    includes: [
      "Complete site audit to find and fix what's holding you back",
      "Optimized page titles, descriptions, and content structure",
      "Faster page speeds to improve rankings and user experience",
      "Google Search Console setup to monitor your search performance",
      "Keyword strategy for pages that will actually rank",
      "Simple monthly reporting to track your progress",
    ],
    outcomes: [
      "Show up on Google for searches your customers are making",
      "Clear plan for creating content that ranks",
      "See month-over-month improvements in traffic and rankings",
    ],
    cta: {
      label: "Request SEO review",
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
