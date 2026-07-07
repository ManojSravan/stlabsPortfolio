import Link from "next/link";
import { headerCta } from "@/lib/site";

export default function HomeFinalCTA() {
  return (
    <section className="border-t border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance max-w-2xl mx-auto">
          Ready to build on subscription?
        </h2>
        <p className="mt-4 text-sm md:text-base text-background/70 max-w-lg mx-auto leading-relaxed">
          Subscribe, tell us what to ship, and we&apos;ll get to work. No
          proposals, no pressure. Just a direct path from idea to production.
        </p>
        <Link
          href={headerCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.18em] hover:bg-[var(--accent-light)] transition-colors"
        >
          {headerCta.label}
        </Link>
      </div>
    </section>
  );
}
