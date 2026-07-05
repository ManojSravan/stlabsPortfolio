import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import { Quote } from "lucide-react";
import { clients } from "@/lib/site";
import { testimonials } from "@/lib/work";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-24 w-52 shrink-0 items-center justify-center px-5 opacity-90 transition-opacity hover:opacity-100">
      <div className="relative h-16 w-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="208px"
        />
      </div>
    </div>
  );
}

export default function HomeSocialProof() {
  const featured = testimonials[0];
  const marqueeClients = [...clients, ...clients];

  return (
    <SectionShell id="trust" className="scroll-mt-28" border={false}>
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

      <div className="mt-12 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background/80 to-transparent"
        />
        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} {...client} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
