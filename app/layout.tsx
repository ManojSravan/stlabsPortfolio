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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Premium E-commerce Storefronts & High-Converting Landing Pages | Sravan Tech Labs",
    template: `%s · ${site.name}`,
  },
  description:
    "Expert e-commerce storefronts, landing pages, and technical consultancy. We build high-performing digital experiences for ambitious brands with reliable infrastructure.",
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "e-commerce storefront development",
    "high-converting landing pages",
    "Next.js development",
    "Shopify development",
    "MVP development",
    "technical consultancy",
    "SaaS development",
    "product engineering",
    "web development agency",
    "ecommerce platform",
    "landing page builder",
    "hire developers",
    "Sravan Tech Labs",
    "Bengaluru tech studio",
    "product development consulting",
  ],
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "Premium E-commerce Storefronts & Landing Pages for Modern Brands",
    description:
      "Build high-performing digital experiences. Custom e-commerce storefronts, fast landing pages, and technical consultancy for ambitious teams worldwide.",
    images: [
      {
        url: `${siteUrl}/logostlabs.png`,
        width: 1200,
        height: 630,
        alt: "Sravan Tech Labs - Premium E-commerce & Product Development",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium E-commerce Storefronts & Landing Pages | Sravan Tech Labs",
    description:
      "High-performing digital storefronts and landing pages built for modern brands. Expert technical consultancy for SaaS, learning platforms, and commerce.",
    images: [`${siteUrl}/logostlabs.png`],
    creator: "@sravantechlabs",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "", // Add your Google Search Console verification code
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
