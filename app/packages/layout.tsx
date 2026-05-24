import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
  
  
 
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

 
// app/page.tsx OR app/layout.tsx

 
export const metadata: Metadata = {
  title:
    "Packages | Ecommerce, Business & Startup Solutions | Sravan Tech Labs",

  description:
    "Explore flexible ecommerce, business website, and startup development packages by Sravan Tech Labs. From modern storefronts and landing pages to scalable MVPs and digital platforms, we help businesses launch and grow online with reliable technology and clean execution.",

  keywords: [
    // Main keywords
    "Website Development Packages",
    "Ecommerce Packages",
    "Shopify Development Packages",
    "Startup MVP Packages",
    "Business Website Packages",
    "Web Design Packages India",

    // Search intent
    "Best Ecommerce Agency Packages",
    "Affordable Ecommerce Development",
    "Startup Website Development",
    "Custom Website Solutions",
    "Modern Web Agency India",
    "Digital Growth Packages",
    "Website Development Company Bengaluru",

    // Service-focused
    "Shopify Store Setup",
    "Landing Page Development",
    "SEO Optimization Services",
    "Custom Ecommerce Storefronts",
    "Next.js Development Agency",
    "Scalable Web Platforms",
    "Business Growth Solutions",

    // Local SEO
    "Ecommerce Agency Bengaluru",
    "Website Development Bengaluru",
    "Shopify Experts Bengaluru",
    "Best Agency in Bengaluru",
    "Startup Development Agency India",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/packages",
  },

  openGraph: {
    title:
      "Packages — Ecommerce, Business & Startup Solutions | Sravan Tech Labs",

    description:
      "Flexible digital solutions for ecommerce brands, startups, and modern businesses — designed for growth, scalability, and performance.",

    url: "https://sravantechlabs.com/packages",

    siteName: "Sravan Tech Labs",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-packages.png",
        width: 1200,
        height: 630,
        alt: "Sravan Tech Labs Packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Packages — Ecommerce, Business & Startup Solutions | Sravan Tech Labs",

    description:
      "Explore scalable ecommerce, startup, and business website packages tailored for modern digital growth.",

    images: ["/og-packages.png"],
  },

  robots: {
    index: true,
    follow: true,
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
     
        <main className="flex-1">{children}</main>
         
     
      </body>
    </html>
  );
}
