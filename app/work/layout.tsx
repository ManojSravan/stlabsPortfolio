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
    "Our Work | Ecommerce Storefronts, MVPs & Digital Products",

  description:
    "Browse digital products, ecommerce storefronts, startup MVPs, and scalable web platforms designed and developed by Sravan Tech Labs.",

  keywords: [
    "Agency Portfolio",
    "Ecommerce Projects",
    "Shopify Portfolio",
    "Startup MVP Portfolio",
    "Digital Product Case Studies",
    "Web Development Projects",
    "Modern Storefront Design",
    "UI UX Development",
    "Business Website Portfolio",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/work",
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
