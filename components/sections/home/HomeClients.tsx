import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import { clients } from "@/lib/site";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function HomeClients() {
  return (
    <SectionShell id="clients" className="scroll-mt-28" variant="muted">
      <SectionHeader
        label="Partners"
        title="Companies we've built with."
        description=""
      />
      <StaggerContainer
        staggerDelay={0.08}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6"
      >
        {clients.map((client) => (
          <StaggerItem key={client.name}>
            <div className="flex min-h-[10rem] items-center justify-center border border-border/60 bg-secondary/30 p-4 transition-colors hover:border-accent/30 hover:bg-background">
              <div className="relative h-32 w-full">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  priority
                />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
