import { StaggerContainer, StaggerItem } from "@/components/animations";

const stats = [
  { value: "10+ Products", label: "Digital experiences delivered." },
  { value: "6+ Partnerships", label: "Built for growing brands." },
  { value: "14-day delivery", label: "Fast and reliable execution." },
  { value: "Remote-First", label: "Async-first execution" },
] as const;

export default function HomeStats() {
  return (
    <section className="border-b border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-11">
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="relative md:pl-6 md:first:pl-0 md:border-l md:first:border-l-0 border-background/15">
                <p className="font-serif text-3xl md:text-2xl lg:text-3xl tracking-tight text-[var(--accent-light)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-background/65">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
