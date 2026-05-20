import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Founder() {
  const { founder } = site;

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          From the founder
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 lg:items-start">
          <div className="relative aspect-[3/4] max-w-md overflow-hidden border border-border/80 bg-secondary/40 ring-1 ring-border/60">
            <Image
              src={founder.image}
              alt={founder.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 352px"
              priority={false}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance">
              {founder.headline}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
              {founder.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <p
              className="mt-6 font-serif text-2xl italic text-foreground/80"
              aria-label="Signature"
            >
              {founder.signature}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              <span className="text-foreground">{founder.name}</span>
              {" · "}
              {founder.role}
            </p>

            <Link
              href={founder.ctaHref}
              className="mt-4 inline-flex items-center gap-2 text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              <span aria-hidden className="text-accent">
                ↳
              </span>
              {founder.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
