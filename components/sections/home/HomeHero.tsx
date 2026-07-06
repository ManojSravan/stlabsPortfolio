import Image from "next/image";
import Link from "next/link";
import { RevealAnimation } from "@/components/animations";
import { headerCta, heroStats } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_-10%,var(--accent-muted),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <RevealAnimation delay={0}>
              <h1 className="font-serif text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]">
                Your Product Deserves Better Engineering.
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={0.1}>
              <p className="mt-4 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
                Launch your MVP in weeks, then keep shipping features through a
                dedicated product engineering partnership.
              </p>
            </RevealAnimation>
           
           
            <RevealAnimation delay={0.25}>
              <div className="mt-10">
                <Link
                  href={headerCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
                >
                  {headerCta.label}
                </Link>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.15} className="relative">
            <div className="relative overflow-hidden border border-border/60 bg-secondary/30 ring-1 ring-border/40 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.15)]">
              <Image
                src="/illustrations/heroillustration.png"
                alt="Product dashboard mockup showing analytics and project overview"
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
