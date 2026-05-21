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
        title="Fixed scopes, clear pricing."
        description="Choose a package and see exactly what you get. No surprises, no custom pricing conversations needed."
      />
      <SectionShell border={false} className="border-t border-border/60">
        <div className="grid gap-4 sm:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
