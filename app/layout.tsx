import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FixedContactActions from "@/components/layout/FixedContactActions";
import { site } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sravantechlabs.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// app/page.tsx OR app/layout.tsx

 
export const metadata: Metadata = {
  metadataBase: new URL("https://sravantechlabs.com"),

  title: {
    default:
      "Sravan Tech Labs | Ecommerce Development & Digital Growth Consultancy",
    template: "%s | Sravan Tech Labs",
  },

  description:
    "Sravan Tech Labs is a modern ecommerce development and technology consultancy helping startups, ecommerce brands, and businesses build scalable digital products, high-performing storefronts, business websites, and growth-focused web platforms.",

  keywords: [
    // Brand
    "Sravan Tech Labs",
    "Sravan Tech Labs India",
    "Sravan Tech Labs Bengaluru",

    // Core Services
    "Ecommerce Development",
    "Ecommerce Website Development",
    "Shopify Development",
    "Shopify Experts India",
    "Custom Ecommerce Development",
    "Next.js Development Agency",
    "Web Development Agency",
    "Website Development Company",
    "Startup MVP Development",
    "SaaS Development",
    "Business Website Development",
    "Landing Page Development",
    "SEO Optimization Services",
    "Brand Systems",

    // Intent-based keywords
    "Best Ecommerce Agency",
    "Best Web Development Agency",
    "Best Shopify Agency",
    "Best Ecommerce Developers India",
    "Best Digital Agency Bengaluru",
    "Top Ecommerce Consultants",
    "Modern Web Development Agency",
    "Digital Growth Consultancy",
    "Technology Consultancy India",

    // Local SEO
    "Ecommerce Development Bengaluru",
    "Web Development Company Bengaluru",
    "Shopify Developers Bengaluru",
    "Website Designers Bengaluru",
    "Startup Tech Agency India",
    "Best Agency in Bengaluru",

    // Tech keywords
    "Next.js Agency",
    "React Development",
    "Vercel Experts",
    "Stripe Integration",
    "Headless Ecommerce",
    "Modern Storefront Development",
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
      "Sravan Tech Labs — Ecommerce Development & Digital Growth Consultancy",

    description:
      "Helping ecommerce brands and startups build scalable storefronts, digital products, and modern business experiences.",

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
      "Sravan Tech Labs — Ecommerce Development & Digital Growth Consultancy",

    description:
      "Modern storefronts, startup MVPs, scalable digital platforms, and business-focused web experiences.",

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FixedContactActions />
      </body>
    </html>
  );
}
