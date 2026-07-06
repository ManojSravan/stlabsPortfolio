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
    default: "Sravan Tech Labs | Product Engineering Studio",
    template: "%s | Sravan Tech Labs",
  },

  description:
    "Sravan Tech Labs partners with early-stage founders to design, build, and continuously improve SaaS products—from MVP to scale.",

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
    title: "Sravan Tech Labs | Product Engineering Studio",

    description:
      "Product engineering studio partnering with early-stage founders to design, build, and continuously improve SaaS products—from MVP to scale.",

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

    title: "Sravan Tech Labs | Product Engineering Studio",

    description:
      "Product engineering studio helping founders build and scale software products—from MVP to production.",

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
