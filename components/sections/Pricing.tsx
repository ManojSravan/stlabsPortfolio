import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import {
  RevealAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { headerCta } from "@/lib/site";

const TIERS = [
  {
    title: "Discovery",
    description:
      "A focused intro call and product scoping session — free, no commitment.",
    price: "Free",
    features: [
      "30-minute intro call",
      "Scope and timeline estimate",
      "Honest fit assessment",
      "No sales pressure",
    ],
    cta: "Book a call",
    href: headerCta.href,
    popular: false,
    primary: false,
  },
  {
    title: "MVP Build",
    description:
      "Turn your idea into a market-ready product with design and engineering.",
    price: "From $2,500",
    features: [
      "Product discovery workshop",
      "UI/UX design",
      "Full-stack development",
      "Deployment & infrastructure",
      "Weekly progress updates",
      "Founder-friendly guidance",
    ],
    cta: "Build your MVP",
    href: headerCta.href,
    popular: true,
    primary: true,
  },
  {
    title: "Retainer",
    description:
      "Dedicated development support on a flexible monthly basis.",
    price: "From $499/mo",
    features: [
      "Dedicated work hours",
      "Weekly progress calls",
      "Feature development",
      "DevOps support",
      "Cancel anytime",
      "Priority response",
    ],
    cta: "Start retainer",
    href: headerCta.href,
    popular: false,
    primary: false,
  },
] as const;

export default function Pricing() {
  return (
    <SectionShell id="pricing" className="scroll-mt-28" variant="subtle">
      <RevealAnimation className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          Transparent pricing, no surprises.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Fixed scopes with clear deliverables. Every tier includes direct
          collaboration — no account managers.
        </p>
      </RevealAnimation>

      <StaggerContainer
        staggerDelay={0.12}
        className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6"
      >
        {TIERS.map((tier) => (
          <StaggerItem key={tier.title}>
            <article
              className={`relative flex flex-col border bg-background p-7 transition-colors ${
                tier.popular
                  ? "border-accent ring-1 ring-accent/30 shadow-sm"
                  : "border-border/80 hover:border-border"
              }`}
            >
              {tier.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent-foreground">
                  Popular
                </span>
              ) : null}

              <h3 className="font-serif text-xl leading-tight">{tier.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
              <p className="mt-6 font-serif text-3xl">{tier.price}</p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Includes
              </p>
              <ul className="mt-3 flex-1 space-y-2.5 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-relaxed">
                    <span
                      className="text-accent shrink-0 mt-1.5 size-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center px-6 py-3 text-sm transition-colors ${
                  tier.primary
                    ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
                    : "border border-border hover:border-accent hover:text-accent"
                }`}
              >
                {tier.cta}
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
