import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,var(--accent-muted),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-accent/60" />
          <span>Product Studio · Est. 2023 · Bengaluru</span>
        </div>
        <h1 className="font-serif mt-8 text-balance text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.25rem] max-w-5xl">
          We build{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">quietly excellent</span>
            <span
              aria-hidden
              className="absolute -inset-x-1 bottom-1 z-0 h-[0.45em] bg-accent/15"
            />
          </span>{" "}
          software for teams who care about the details.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Sravan Tech Labs is a product development and consulting studio. We partner
          with founders and engineering leaders to design, build, and scale digital
          products, from first prototype to production at scale.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
          >
           Book a discovery call <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-6 py-3.5 hover:border-accent hover:text-accent transition-colors"
          >
            View our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
