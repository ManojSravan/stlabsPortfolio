import { MessageSquare, Rocket, CreditCard, type LucideIcon } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";

const steps: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: CreditCard,
    title: "Subscribe",
    description:
      "One monthly plan that fits where you are today. Onboard quickly, add requests to your queue, and get building without proposals or procurement cycles.",
  },
  {
    icon: MessageSquare,
    title: "Discuss",
    description:
      "Tell us what you need on a kickoff call. We align on scope, priorities, and technical direction, then get to work.",
  },
  {
    icon: Rocket,
    title: "Ship",
    description:
      "We design, build, and deploy to production. When one request ships, we pick up the next. Repeat as often as you need.",
  },
];

export default function HomeWhatWeDo() {
  return (
    <SectionShell id="services" className="scroll-mt-28" variant="muted">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          How it works
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          Subscribe. Discuss. Ship.
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          An on-demand product studio with no agency overhead. No bloated
          process. Just a direct line to the engineer building your product.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {steps.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group border border-border/60 bg-background p-6 md:p-7 transition-colors hover:border-accent/40"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-base font-medium">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
