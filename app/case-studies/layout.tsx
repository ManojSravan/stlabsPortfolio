import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",

  description:
    "Selected products and platforms built and shipped — ecommerce, SaaS, creator tools, and learning systems.",

  keywords: [
    "Product Case Studies",
    "Startup MVP Portfolio",
    "SaaS Development Portfolio",
    "Ecommerce Case Studies",
    "Product Engineering Studio",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
