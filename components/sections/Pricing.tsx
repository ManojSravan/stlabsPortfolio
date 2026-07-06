import Link from "next/link";
import { Check } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import { RevealAnimation } from "@/components/animations";
import { headerCta } from "@/lib/site";

const tiers = [
  {
    id: "build",
    label: "Tier 1",
    name: "Build",
    subtitle: "Product Development",
    price: "$2,500–3,500",
    priceNote: "Starting at",
    period: null,
    description:
      "For founders validating a new product or rebuilding an existing one.",
    features: [
      "Product strategy session",
      "UI/UX implementation",
      "Full-stack development",
      "Authentication & payments",
      "CMS & third-party integrations",
      "Deployment",
      "4–8 week engagement",
    ],
    cta: "Build my product",
    variant: "light" as const,
  },
  {
    id: "grow",
    label: "Tier 2",
    name: "Grow",
    subtitle: "Product Engineering Partner",
    price: "$1,999",
    priceNote: null,
    period: "/ month",
    description:
      "For teams that already have a product and need continuous execution.",
    features: [
      "Unlimited engineering requests",
      "One active request at a time",
      "Feature development",
      "Bug fixes",
      "Infrastructure & deployments",
      "Technical advisory",
      "Direct founder collaboration",
      "Pause anytime",
    ],
    cta: "Become a partner",
    variant: "dark" as const,
  },
] as const;

function PricingCard({
  tier,
}: {
  tier: (typeof tiers)[number];
}) {
  const isLight = tier.variant === "light";

  return (
    <article
      className={
        isLight
          ? "flex h-full flex-col border border-border/80 bg-background text-foreground"
          : "flex h-full flex-col border border-foreground/15 bg-foreground text-background"
      }
    >
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div>
          <p
            className={
              isLight
                ? "text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
                : "text-[10px] uppercase tracking-[0.28em] text-background/55"
            }
          >
            {tier.label} · {tier.name}
          </p>
          <h3 className="mt-3 font-serif text-2xl md:text-3xl tracking-tight">
            {tier.subtitle}
          </h3>
          <p
            className={
              isLight
                ? "mt-4 text-sm leading-relaxed text-muted-foreground"
                : "mt-4 text-sm leading-relaxed text-background/70"
            }
          >
            {tier.description}
          </p>

          <div className="mt-8">
            {tier.priceNote ? (
              <p
                className={
                  isLight
                    ? "text-xs uppercase tracking-[0.2em] text-muted-foreground"
                    : "text-xs uppercase tracking-[0.2em] text-background/50"
                }
              >
                {tier.priceNote}
              </p>
            ) : null}
            <p className="mt-1 font-serif text-4xl md:text-5xl tracking-tight">
              {tier.price}
              {tier.period ? (
                <span
                  className={
                    isLight
                      ? "ml-2 font-sans text-lg text-muted-foreground"
                      : "ml-2 font-sans text-lg text-background/60"
                  }
                >
                  {tier.period}
                </span>
              ) : null}
            </p>
          </div>
        </div>

        <div className="mt-10 flex-1">
          <p
            className={
              isLight
                ? "text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                : "text-[10px] uppercase tracking-[0.25em] text-background/45"
            }
          >
            Includes
          </p>
          <ul className="mt-5 grid gap-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                <Check
                  className={
                    isLight
                      ? "mt-0.5 size-4 shrink-0 text-accent"
                      : "mt-0.5 size-4 shrink-0 text-[var(--accent-light)]"
                  }
                  aria-hidden
                />
                <span className={isLight ? "text-foreground/90" : "text-background/90"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={
            isLight
              ? "mt-10 border-t border-border/60 pt-8"
              : "mt-10 border-t border-background/10 pt-8"
          }
        >
          <Link
            href={headerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isLight
                ? "inline-flex w-full items-center justify-center bg-foreground px-6 py-3.5 text-sm text-background transition-colors hover:bg-accent sm:w-auto"
                : "inline-flex w-full items-center justify-center border border-background/20 bg-background/10 px-6 py-3.5 text-sm text-background transition-colors hover:bg-background hover:text-foreground sm:w-auto"
            }
          >
            {tier.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <SectionShell id="pricing" className="scroll-mt-28" variant="subtle">
      <RevealAnimation className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          Two ways to work with us.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          A two-tier model that matches how founders buy: ship a product first,
          then keep momentum with ongoing engineering.
        </p>
      </RevealAnimation>

      <RevealAnimation delay={0.1} className="mt-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </RevealAnimation>
    </SectionShell>
  );
}
