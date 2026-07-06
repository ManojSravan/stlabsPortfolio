import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import { Quote } from "lucide-react";
import { clients } from "@/lib/site";
import { testimonials } from "@/lib/work";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-20 flex-1 min-w-[7rem] max-w-[11rem] items-center justify-center px-4 opacity-80 transition-opacity hover:opacity-100">
      <div className="relative h-12 w-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="176px"
        />
      </div>
    </div>
  );
}

export default function HomeSocialProof() {
  const featured = testimonials[0];

  return (
    <SectionShell id="trust" className="scroll-mt-28" variant="muted">
      <div className="mx-auto max-w-3xl text-center">
        <figure className="relative">
          <span
            className="mx-auto mb-6 flex h-10 w-10 items-center justify-center bg-foreground text-background"
            aria-hidden
          >
            <Quote className="h-4 w-4" />
          </span>
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-balance text-foreground/90">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{featured.name}</span>
            {" · "}
            {featured.role}, {featured.company}
          </figcaption>
        </figure>
      </div>

      <div className="mt-12 border-t border-border/60 pt-10">
        <p className="text-center text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Founders we&apos;ve shipped with
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {clients.map((client) => (
            <ClientLogo key={client.name} {...client} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
