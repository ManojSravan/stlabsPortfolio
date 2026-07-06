import {
  Code2,
  Layers,
  Rocket,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Layers,
    title: "Product design",
    description:
      "User flows and interfaces shaped before code, so you launch with clarity, not guesswork.",
  },
  {
    icon: Code2,
    title: "Full-stack engineering",
    description:
      "Next.js, React, and modern backends built with architecture that scales as you grow.",
  },
  {
    icon: Rocket,
    title: "Ship to production",
    description:
      "MVPs and full products deployed, tested, and ready for real users from day one.",
  },
  {
    icon: RefreshCw,
    title: "Iterate & advise",
    description:
      "Stack decisions, rebuilds, and technical direction when the stakes are high.",
  },
];

export default function HomeWhatWeDo() {
  return (
    <SectionShell id="services" className="scroll-mt-28" variant="muted">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          What you get
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          One team across the full stack.
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          Design, engineering, and delivery in one place. No handoffs, no
          account managers. Just direct collaboration on your product.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
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
