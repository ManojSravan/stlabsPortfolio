import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import { site } from "@/lib/site";

export default function Founder() {
  const { founder } = site;

  return (
    <SectionShell id="about" className="scroll-mt-28" border={false}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Founder&apos;s note
        </p>

        <div className="relative mt-8">
          <span
            aria-hidden
            className="font-serif text-7xl md:text-8xl leading-none text-accent/15 select-none"
          >
            &ldquo;
          </span>
          <h2 className="font-serif -mt-10 md:-mt-12 text-2xl md:text-[1.75rem] leading-snug text-balance text-foreground">
            {founder.headline}
          </h2>
        </div>

        <p className="mt-8 mx-auto max-w-prose text-base md:text-[1.0625rem] leading-relaxed text-muted-foreground">
          {founder.note}
        </p>

        <div className="mt-10 pt-8 border-t border-border/60">
          <p
            className="font-serif text-xl md:text-2xl italic text-foreground/85"
            aria-label="Signature"
          >
            — {founder.signature}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{founder.name}</span>
            <span className="mx-2 text-border" aria-hidden>
              |
            </span>
            {founder.role}
          </p>

          <Link
            href={founder.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent hover:underline underline-offset-4"
          >
            {founder.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
