import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",

  description:
    "Notes on product, engineering, and building independently — from MVP scoping to shipping production software.",

  keywords: [
    "Product Engineering Blog",
    "Product Engineering Studio",
    "MVP Development",
    "Startup Product",
    "Software Engineering",
  ],

  alternates: {
    canonical: "https://sravantechlabs.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
