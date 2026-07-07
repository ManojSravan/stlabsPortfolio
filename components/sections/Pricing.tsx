import Link from "next/link";
import { Check } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import { RevealAnimation } from "@/components/animations";
import { headerCta, site } from "@/lib/site";

type PricingTier = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: readonly string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const tiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$999",
    period: "/ month",
    description:
      "For founders shipping their first version or keeping a lean product moving without hiring in-house.",
    features: [
      "Dedicated engineering capacity",
    "Continuous product development",
    "Weekly planning & progress updates",
    "Production deployment & maintenance",
    "Pause or cancel anytime",
    ],
    cta: "Get started",
    href: headerCta.href,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,999",
    period: "/ month",
    description:
      "For teams with steady product momentum who need faster turnaround and closer collaboration.",
    features: [
      "Expanded engineering capacity",
    "Priority feature delivery",
    "Weekly product strategy calls",
    "Production support & infrastructure",
    "Priority response",
    ],
    cta: "Subscribe",
    href: headerCta.href,
    featured: true,
  },
  {
    id: "dedicated-team",
    name: "Dedicated Team",
    price: "Custom",
    description:
      "For companies that need more capacity, parallel workstreams, or a deeper embedded partnership.",
    features: [
      "Dedicated engineering pod",
  "Multiple parallel workstreams",
  "Technical lead & delivery ownership",
  "Architecture and scaling support",
  "Custom SLAs and engagement model",
    ],
    cta: "Talk to us",
    href: `mailto:${site.email}?subject=${encodeURIComponent("Dedicated Team pricing")}`,
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  const isFeatured = tier.featured === true;
  const isExternal = tier.href.startsWith("http");

  return (
    <article
      className={
        isFeatured
          ? "flex h-full flex-col border border-foreground/15 bg-foreground text-background"
          : "flex h-full flex-col border border-border/80 bg-background text-foreground"
      }
    >
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div>
          {isFeatured ? (
            <p className="text-[10px] uppercase tracking-[0.28em] text-background/55">
              Most popular
            </p>
          ) : null}
          <h3 className="mt-2 font-serif text-2xl tracking-tight">{tier.name}</h3>
          <p
            className={
              isFeatured
                ? "mt-3 text-sm leading-relaxed text-background/70"
                : "mt-3 text-sm leading-relaxed text-muted-foreground"
            }
          >
            {tier.description}
          </p>

          <div className="mt-6">
            <p className="font-serif text-3xl md:text-4xl tracking-tight">
              {tier.price}
              {tier.period ? (
                <span
                  className={
                    isFeatured
                      ? "ml-2 font-sans text-base text-background/60"
                      : "ml-2 font-sans text-base text-muted-foreground"
                  }
                >
                  {tier.period}
                </span>
              ) : null}
            </p>
          </div>
        </div>

        <ul className="mt-8 flex-1 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-relaxed">
              <Check
                className={
                  isFeatured
                    ? "mt-0.5 size-4 shrink-0 text-[var(--accent-light)]"
                    : "mt-0.5 size-4 shrink-0 text-accent"
                }
                aria-hidden
              />
              <span className={isFeatured ? "text-background/90" : "text-foreground/90"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={
            isFeatured
              ? "mt-8 border-t border-background/10 pt-6"
              : "mt-8 border-t border-border/60 pt-6"
          }
        >
          <Link
            href={tier.href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={
              isFeatured
                ? "inline-flex w-full items-center justify-center border border-background/20 bg-background/10 px-6 py-3.5 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
                : "inline-flex w-full items-center justify-center bg-foreground px-6 py-3.5 text-sm text-background transition-colors hover:bg-accent"
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
          Start lean. Scale when you&apos;re ready.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          A flat monthly subscription for product development. Subscribe, discuss
          what to build, and we ship it to production. No proposals, no agency
          overhead.
        </p>
      </RevealAnimation>

      <RevealAnimation delay={0.1} className="mt-10">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          All plans pause or cancel anytime. No long-term lock-in.
        </p>
      </RevealAnimation>
    </SectionShell>
  );
}
