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
    "Contact Sravan Tech Labs | Start Your Ecommerce or Digital Project",

  description:
    "Contact Sravan Tech Labs to discuss ecommerce development, startup MVPs, scalable web platforms, business websites, and digital growth solutions.",

  keywords: [
    "Hire Ecommerce Developers",
    "Contact Web Development Agency",
    "Shopify Experts India",
    "Start a Digital Project",
    "Startup MVP Development Agency",
    "Business Website Experts",
    "Technology Consultancy Contact",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/contact",
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
