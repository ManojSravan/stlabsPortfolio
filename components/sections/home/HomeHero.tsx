import Link from "next/link";
import { RevealAnimation } from "@/components/animations";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,var(--accent-muted),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:pt-14 md:pb-14">
        <RevealAnimation delay={0}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent/60" />
            <span>Product Engineering Studio · Est. 2023 · India</span>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.1}>
          <h1 className="font-serif mt-8 text-balance text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.25rem] max-w-5xl">
            Your Product deserves {" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">
               Better Engineering
              </span>
              <span
                aria-hidden
                className="absolute -inset-x-1 bottom-1 z-0 h-[0.45em] bg-accent/15"
              />
            </span>{" "}
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
       From idea to launch, we help non-technical founders and small startups build production-ready products with scalable engineering, modern technology, and a focus on growth.   </p>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="https://cal.com/manoj-sravan-annivg/starterlaunch"
              target="_blank"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
            >
              Get a Free Discovery Call<span aria-hidden></span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-6 py-3.5 hover:border-accent hover:text-accent transition-colors"
            >
See How We Work 
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
