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
