import Link from "next/link";
import Image from "next/image";
import type { Package } from "@/lib/packages";

type PackageCardProps = {
  pkg: Package;
  compact?: boolean;
};

export default function PackageCard({
  pkg,
  compact = false,
}: PackageCardProps) {
  return (
    <article
      className={`flex flex-col border border-border/80 bg-background transition-colors hover:border-accent/40 overflow-hidden`}
    >
      {/* Package Illustration */}
      <div className="relative h-48 w-full bg-muted/20">
        <Image
          src={pkg.illustration}
          alt={pkg.title}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* Content Section */}
      <div className={compact ? "p-6" : "p-7 md:p-8"}>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {pkg.timeline} · {pkg.price}
        </p>
        <h3 className="font-serif text-xl md:text-2xl mt-3 leading-tight">
          {pkg.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {pkg.tagline}
        </p>
        {!compact ? (
          <p className="mt-4 text-sm leading-relaxed text-foreground/85 line-clamp-2">
            {pkg.summary}
          </p>
        ) : null}
        <Link
          href={`/packages/${pkg.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent hover:text-foreground transition-colors w-fit"
        >
          View package details <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
