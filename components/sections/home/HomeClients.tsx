import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import { clients } from "@/lib/site";
import Image from "next/image";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-28 w-56 shrink-0 items-center justify-center px-6">
      <div className="relative h-20 w-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="224px"
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
        title="Teams we&apos;ve shipped with."
        description="Founders and product teams across ecommerce, SaaS, media, and creator platforms."
      />
      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} {...client} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
