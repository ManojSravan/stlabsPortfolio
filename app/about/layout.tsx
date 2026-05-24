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
    "About Sravan Tech Labs | Technology & Digital Growth Consultancy",

  description:
    "Sravan Tech Labs is a modern technology consultancy helping ecommerce brands, startups, and businesses launch scalable digital products and growth-focused web experiences.",

  keywords: [
    "About Sravan Tech Labs",
    "Technology Consultancy Bengaluru",
    "Digital Growth Agency",
    "Modern Web Agency India",
    "Startup Technology Partner",
    "Ecommerce Experts India",
    "Digital Consultancy",
    "Business Technology Solutions",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/company",
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
