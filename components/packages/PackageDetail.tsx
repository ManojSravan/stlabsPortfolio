import Link from "next/link";
import Image from "next/image";
import type { Package } from "@/lib/packages";
import { packages } from "@/lib/packages";
import SectionShell from "@/components/layout/SectionShell";
import Testimonials from "@/components/sections/Testimonials";

type PackageDetailProps = {
  pkg: Package;
};

export default function PackageDetail({ pkg }: PackageDetailProps) {
  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-14 md:pb-12">
          <Link
            href="/packages"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors"
          >
            ← All packages
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Package
              </p>
              <h1 className="font-serif mt-4 text-3xl md:text-5xl text-balance leading-tight">
                {pkg.title}
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {pkg.summary}
              </p>
              <dl className="mt-8 flex flex-wrap gap-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Investment
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-accent">
                    {pkg.price}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Timeline
                  </dt>
                  <dd className="mt-1 font-medium">{pkg.timeline}</dd>
                </div>
              </dl>
            </div>

            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-accent/5 rounded-sm" />
              <div className="relative h-full flex items-center justify-center p-8">
                <Image
                  src={pkg.illustration}
                  alt={`${pkg.title} illustration`}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-serif text-2xl">What&apos;s included</h2>
            <ul className="mt-6 space-y-3">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl">Best for</h2>
            <ul className="mt-6 space-y-3">
              {pkg.idealFor.map((item) => (
                <li
                  key={item}
                  className="border border-border/60 bg-secondary/30 px-4 py-3 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="muted" border>
        <h2 className="font-serif text-2xl">What you get</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {pkg.outcomes.map((outcome, i) => (
            <li
              key={outcome}
              className="border border-border/60 bg-background p-6"
            >
              <p className="font-serif text-xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{outcome}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={pkg.cta.href}
            target={pkg.cta.href.startsWith("http") ? "_blank" : undefined}
            rel={
              pkg.cta.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
          >
            {pkg.cta.label} <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-6 py-3.5 hover:border-accent hover:text-accent transition-colors"
          >
            Ask a question
          </Link>
        </div>
      </SectionShell>

      <Testimonials />

      <SectionShell border>
        <h2 className="font-serif text-2xl">Other packages</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((relatedPkg) => (
            <Link
              key={relatedPkg.slug}
              href={`/packages/${relatedPkg.slug}`}
              className="block border border-border/80 p-5 transition-colors hover:border-accent/40 hover:bg-secondary/20"
            >
              <p className="font-serif text-lg leading-snug">
                {relatedPkg.title}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {relatedPkg.price}
              </p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
