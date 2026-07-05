import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import { clients } from "@/lib/site";
import Image from "next/image";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center px-6 opacity-70 transition-opacity hover:opacity-100">
      <div className="relative h-14 w-full">
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

export default function HomeClients() {
  const marqueeClients = [...clients, ...clients];

  return (
    <SectionShell id="clients" className="scroll-mt-28" variant="muted">
      <SectionHeader
        label="Clients"
        title="Teams I've shipped with."
        description="Founders and product teams across ecommerce, SaaS, media, and creator platforms."
      />
      <div className="mt-10 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent"
        />
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} {...client} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
