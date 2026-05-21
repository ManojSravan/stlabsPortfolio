import SectionShell from "@/components/layout/SectionShell";
import Image from "next/image";
import {
  RevealAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const principles = [
  {
    n: "01",
    t: "Discovery & alignment",
    d: "We define goals, scope, technical direction, and priorities upfront so the project moves with clarity from day one.",
    i: "/illustrations/illustration-step1.png",
  },
  {
    n: "02",
    t: "Visible execution",
    d: "Work ships in focused iterations with regular reviews, giving you visibility into progress and room to refine early.",
    i: "/illustrations/illustration-step2.png",
  },
  {
    n: "03",
    t: "Confident handoff",
    d: "From documentation to deployment, everything is structured so your team can confidently maintain and extend the product.",
    i: "/illustrations/illustration-step3.png",
  },
] as const;

export default function HomeHowWeWork() {
  return (
    <SectionShell variant="muted">
      <RevealAnimation>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            How we work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            Focused iterations. Weekly demos.
          </h2>
        </div>
      </RevealAnimation>
      <StaggerContainer
        staggerDelay={0.15}
        className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5"
      >
        {principles.map((item) => (
          <StaggerItem key={item.n}>
            <div className="border border-border/60 bg-background p-6 transition-colors hover:border-accent/30">
              <div className="relative h-40 w-full mb-6">
                <Image
                  src={item.i}
                  alt={item.t}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-serif text-2xl text-accent">{item.n}</p>
              <h3 className="mt-4 font-serif text-lg leading-snug">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.d}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
