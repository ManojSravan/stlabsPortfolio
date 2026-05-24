import type { Metadata } from "next";
import RecentWork from "@/components/sections/RecentWork";
import Testimonials from "@/components/sections/Testimonials";
import HomeClients from "@/components/sections/home/HomeClients";
import HomeCTA from "@/components/sections/home/HomeCTA";
import HomeFAQs from "@/components/sections/home/HomeFAQs";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeTechStack from "@/components/sections/home/HomeTechStack";
import HomeStats from "@/components/sections/home/HomeStats";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sravantechlabs.com";

export const metadata: Metadata = {
  title:
    "Premium E-commerce Storefronts & High-Converting Landing Pages | Sravan Tech Labs",
  description:
    "Expert e-commerce storefronts, landing pages, and technical consultancy. We build high-performing digital experiences for ambitious brands with reliable infrastructure.",
  openGraph: {
    title: "Premium E-commerce Storefronts & Landing Pages for Modern Brands",
    description:
      "Build high-performing digital experiences. Custom e-commerce storefronts, fast landing pages, and technical consultancy for ambitious teams worldwide.",
    url: siteUrl,
  },
};

export default function Index() {
  // JSON-LD Schema for Professional Services
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sravan Tech Labs",
    image: `${siteUrl}/logostlabs.png`,
    url: siteUrl,
    telephone: "+91-6300018219",
    email: "hello@sravantechlabs.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: [
      "E-commerce Storefront Development",
      "Landing Page Design & Development",
      "MVP Development",
      "SaaS Development",
      "Learning Platform Development",
      "Technical Consultancy",
      "Product Architecture",
      "SEO Optimization",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Shopify",
      "TypeScript",
      "Tailwind CSS",
      "Product Development",
      "Web Performance",
      "SEO",
    ],
    founder: {
      "@type": "Person",
      name: "Manoj Sravan",
      url: "https://linkedin.com/in/manojsravan/",
    },
    sameAs: [
      "https://linkedin.com/company/sravantechlabs",
      "https://twitter.com/sravantechlabs",
      "https://github.com/sravantechlabs",
      "https://instagram.com/sravantechlabs",
    ],
    description:
      "Product development and consulting studio building thoughtful software for ambitious teams worldwide. Specializing in e-commerce storefronts, landing pages, MVPs, and technical consultancy.",
    startDate: "2020",
  };

  // JSON-LD Schema for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sravan Tech Labs",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        suppressHydrationWarning
      />
      <HomeHero />
      <HomeStats />

      <RecentWork />

      <HomeClients />

      {/* <HomeHowWeWork /> */}

      <HomeTechStack />

      <Testimonials />
 

      <HomeFAQs />

      <HomeCTA />
    </>
  );
}
