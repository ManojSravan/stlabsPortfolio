import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import PackageCard from "@/components/packages/PackageCard";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description: `Fixed-scope packages from ${site.name} for ecommerce, SEO, landing pages, and growth.`,
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        label="Packages"
        title={
          <>
            Clear scopes. <span className="text-accent">Predictable delivery.</span>
          </>
        }
        description="Pick a package that matches where you are—launch, grow, brand, or search. Each page spells out what's included, timeline, and price so you can decide without a long sales cycle."
      />
      <SectionShell border={false}>
        <div className="grid gap-4 sm:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Need something outside these scopes?{" "}
          <a href="/contact" className="text-accent hover:underline">
            Tell us what you&apos;re building
          </a>{" "}
          and we&apos;ll recommend the right fit or a custom engagement.
        </p>
      </SectionShell>
    </>
  );
}
