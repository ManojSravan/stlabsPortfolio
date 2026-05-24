import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
  
  
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
  title:
    "Services | Ecommerce Development, Startup MVPs & Web Platforms",

  description:
    "Explore ecommerce development, Shopify storefronts, startup MVP development, scalable web platforms, SEO optimization, and digital growth services offered by Sravan Tech Labs.",

  keywords: [
    "Ecommerce Development Services",
    "Shopify Store Development",
    "Custom Web Development",
    "Startup MVP Development",
    "Next.js Development Services",
    "SEO Services India",
    "Business Website Development",
    "Digital Product Development",
    "Modern Ecommerce Agency",
    "Technology Consultancy Services",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/services",
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
