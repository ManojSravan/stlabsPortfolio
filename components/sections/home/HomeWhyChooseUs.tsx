import SectionShell from "@/components/layout/SectionShell";

const whyChooseUs = {
  title: "Why work with me?",
  points: [
    "Direct collaboration, no account managers or handoffs",
    "Hands-on building from scope through production",
    "Practical architecture chosen for long-term stability",
    "Clear communication and honest trade-offs",
    "Async-first, works with teams worldwide",
    "Focused on shipping outcomes, not process theatre",
  ],
} as const;

export default function HomeWhyChooseUs() {
  return (
    <SectionShell id="why-choose-us" className="scroll-mt-28">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Why us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            {whyChooseUs.title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border ring-1 ring-border/60">
          {whyChooseUs.points.map((point, index) => (
            <div
              key={point}
              className="bg-background p-6 md:p-7 transition-colors hover:bg-secondary/30"
            >
              <p className="font-serif text-2xl text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
