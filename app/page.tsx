import type { Metadata } from "next";
import RecentBlogs from "@/components/sections/RecentBlogs";
import RecentWork from "@/components/sections/RecentWork";
import Pricing from "@/components/sections/Pricing";
import Founder from "@/components/sections/Founder";
import HomeFAQs from "@/components/sections/home/HomeFAQs";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeSocialProof from "@/components/sections/home/HomeSocialProof";
import HomeSocialTestimonials from "@/components/sections/home/HomeSocialTestimonials";
import HomeWhatWeDo from "@/components/sections/home/HomeWhatWeDo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sravantechlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://sravantechlabs.com"),

  title: {
    default: "Sravan Tech Labs | Product Engineering Studio",
    template: "%s | Sravan Tech Labs",
  },

  description:
    "Manoj Sravan builds and ships products for founders — MVPs, SaaS platforms, ecommerce, and production-ready web applications.",

  keywords: [
    "Sravan Tech Labs",
    "Manoj Sravan",
    "Product Engineering Studio",
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
    title: "Sravan Tech Labs — Product Engineering Studio",

    description:
      "A product engineering studio that designs, builds, and ships software for founders — from MVP to production.",

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

    title: "Sravan Tech Labs — Product Engineering Studio",

    description:
      "Product engineering studio shipping MVPs, SaaS platforms, and web products for founders.",

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
      description: "Product Engineering Studio",
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
      "Founder of Sravan Tech Labs, a product engineering studio helping founders design, build, and ship software.",
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
      <HomeSocialProof />
      <HomeWhatWeDo />
      <Founder />
      <RecentWork />
      <RecentBlogs />
      <Pricing />
      <HomeFAQs />
      <HomeSocialTestimonials />
      <HomeFinalCTA />
    </>
  );
}
