import type { Metadata } from "next";
import RecentWork from "@/components/sections/RecentWork";
import Testimonials from "@/components/sections/Testimonials";
import HomeClients from "@/components/sections/home/HomeClients";
import HomeCTA from "@/components/sections/home/HomeCTA";
import HomeFAQs from "@/components/sections/home/HomeFAQs";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeTechStack from "@/components/sections/home/HomeTechStack";
import HomeStats from "@/components/sections/home/HomeStats";
import Pricing from "@/components/sections/Pricing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sravantechlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://sravantechlabs.com"),

  title: {
    default:
      "Sravan Tech Labs | Application Development for High-Growth Startups",
    template: "%s | Sravan Tech Labs",
  },

  description:
    "Sravan Tech Labs is a product engineering and application development partner for high-energy startups — building fast, scalable web apps, SaaS platforms, MVPs, and ecommerce experiences that move at startup speed.",

  keywords: [
    // Brand
    "Sravan Tech Labs",
    "Sravan Tech Labs India",
    "Sravan Tech Labs Bengaluru",

    // Core Positioning
    "Application Development for Startups",
    "Startup Application Development",
    "Product Engineering Agency",
    "Software Development Partner for Startups",
    "Web Application Development",
    "Custom Application Development",
    "MVP Development Agency",
    "Startup MVP Development",
    "Rapid Application Development",
    "SaaS Application Development",
    "SaaS Development Company",
    "Full Stack Development Agency",
    "Next.js Application Development",
    "React Application Development",
    "Scalable Web Applications",
    "Product Development Studio",
    "Startup Tech Partner",
    "Startup Engineering Team",
    "Outsourced Product Development",
    "Fractional CTO Services",

    // Supporting Services
    "Ecommerce Application Development",
    "Headless Ecommerce Development",
    "Business Website Development",
    "Landing Page Development",
    "Brand Systems",
    "SEO Optimization Services",

    // Intent-based keywords
    "Best Application Development Agency",
    "Best Startup Development Company",
    "Best Product Engineering Agency India",
    "Top Software Development Agency for Startups",
    "Best SaaS Development Company India",
    "Best Web App Development Agency Bengaluru",
    "Fast Moving Startup Tech Partner",
    "High Growth Startup Developers",

    // Local SEO
    "Application Development Bengaluru",
    "Startup Software Development Bengaluru",
    "SaaS Developers Bengaluru",
    "Web App Development Company Bengaluru",
    "Startup Tech Agency India",
    "Best Agency in Bengaluru",

    // Tech keywords
    "Next.js Agency",
    "React Development",
    "Node.js Development",
    "Vercel Experts",
    "Stripe Integration",
    "Cloud Native Application Development",
    "API Development",
    "Modern Web Architecture",
  ],

  authors: [
    {
      name: "Sravan Tech Labs",
      url: "https://sravantechlabs.com",
    },
  ],

  creator: "Sravan Tech Labs",
  publisher: "Sravan Tech Labs",

  applicationName: "Sravan Tech Labs",

  category: "Technology Consultancy",

  alternates: {
    canonical: "https://sravantechlabs.com",
  },

  openGraph: {
    title:
      "Sravan Tech Labs — Application Development for High-Growth Startups",

    description:
      "We build fast, scalable applications, SaaS platforms, and digital products for startups that move at high energy — from MVP to scale.",

    url: "https://sravantechlabs.com",

    siteName: "Sravan Tech Labs",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sravan Tech Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sravan Tech Labs — Application Development for High-Growth Startups",

    description:
      "Product engineering for fast-moving startups — apps, SaaS platforms, MVPs, and digital products built to scale.",

    images: ["/og-image.png"],

    creator: "@sravantechlabs",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function Index() {
  // JSON-LD Schema for Professional Services
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sravan Tech Labs",
    image: `${siteUrl}/logostlabs.png`,
    url: siteUrl,
    telephone: "+91-6300018219",
    email: "hello@sravantechlabs.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: [
      "E-commerce Storefront Development",
      "Landing Page Design & Development",
      "MVP Development",
      "SaaS Development",
      "Learning Platform Development",
      "Technical Consultancy",
      "Product Architecture",
      "SEO Optimization",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Shopify",
      "TypeScript",
      "Tailwind CSS",
      "Product Development",
      "Web Performance",
      "SEO",
    ],
    founder: {
      "@type": "Person",
      name: "Manoj Sravan",
      url: "https://linkedin.com/in/manojsravan/",
    },
    sameAs: [
      "https://linkedin.com/company/sravantechlabs",
      "https://twitter.com/sravantechlabs",
      "https://github.com/sravantechlabs",
      "https://instagram.com/sravantechlabs",
    ],
    description:
      "Product development and consulting studio building thoughtful software for ambitious teams worldwide. Specializing in e-commerce storefronts, landing pages, MVPs, and technical consultancy.",
    startDate: "2020",
  };

  // JSON-LD Schema for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sravan Tech Labs",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        suppressHydrationWarning
      />
      <HomeHero />
      <HomeStats />

      <RecentWork />

      <HomeClients />

      <Pricing/>

      <HomeTechStack />

      <Testimonials />
 

      <HomeFAQs />

      <HomeCTA />
    </>
  );
}
