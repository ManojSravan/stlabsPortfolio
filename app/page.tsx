import type { Metadata } from "next";
 import RecentWork from "@/components/sections/RecentWork";
 import Founder from "@/components/sections/Founder";
import HomeFAQs from "@/components/sections/home/HomeFAQs";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeProductCarousel from "@/components/sections/home/HomeProductCarousel";
import HomeSocialProof from "@/components/sections/home/HomeSocialProof";
import HomeSocialTestimonials from "@/components/sections/home/HomeSocialTestimonials";
import HomeWhatWeDo from "@/components/sections/home/HomeWhatWeDo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sravantechlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://sravantechlabs.com"),

  title: {
    default: "Sravan Tech Labs | On-Demand Product Studio",
    template: "%s | Sravan Tech Labs",
  },

  description:
    "An on-demand product studio for founders. Subscribe, discuss what to build, and we ship it to production without agency overhead.",

  keywords: [
    "Sravan Tech Labs",
    "Manoj Sravan",
    "On-Demand Product Studio",
    "Product Development Subscription",
    "Product Engineer",
    "MVP Development",
    "SaaS Development",
    "Startup Product Development",
    "Next.js Developer",
    "Bengaluru Product Engineer",
  ],

  authors: [
    {
      name: "Manoj Sravan",
      url: "https://sravantechlabs.com",
    },
  ],

  creator: "Manoj Sravan",
  publisher: "Sravan Tech Labs",

  applicationName: "Sravan Tech Labs",

  category: "Technology",

  alternates: {
    canonical: "https://sravantechlabs.com",
  },

  openGraph: {
    title: "Sravan Tech Labs | On-Demand Product Studio",

    description:
      "Subscribe to an on-demand product studio. Tell us what to build, we design, engineer, and ship it to production.",

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

    title: "Sravan Tech Labs | On-Demand Product Studio",

    description:
      "An on-demand product studio. Subscribe, discuss, and ship. Software development without the agency runaround.",

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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manoj Sravan",
    url: siteUrl,
    image: `${siteUrl}/founderimage.jpeg`,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Sravan Tech Labs",
      description: "On-Demand Product Studio",
      url: siteUrl,
    },
    email: "hello@sravantechlabs.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Product Development",
      "SaaS",
      "Ecommerce",
      "MVP Development",
    ],
    sameAs: [
      "https://linkedin.com/in/manojsravan/",
      "https://twitter.com/sravantechlabs",
      "https://github.com/sravantechlabs",
    ],
    description:
      "Founder of Sravan Tech Labs, an on-demand product studio helping founders build software through a simple monthly subscription.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sravan Tech Labs",
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
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
      <HomeProductCarousel />
      <HomeSocialProof />
      <HomeWhatWeDo />
      
      <RecentWork />
      <Founder />
      <HomeSocialTestimonials />
      <HomeFAQs />
      <HomeFinalCTA />
    </>
  );
}
