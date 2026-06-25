import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import {
  RevealAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
const TIERS = [
  {
    title: "App Launch",
    description: "Launch a polished mobile app — plus a promotional landing page to drive downloads and signups.",
    price: "$799",
    features: [
      "Custom mobile app design (iOS & Android)",
      "React Native / Expo development",
      "1 promotional landing page included",
      "App store-ready build",
      "Deployment & launch support",
      "1 week delivery",
    ],
    cta: "Get your app",
    href: "/contact",
    popular: false,
    primary: false,
  },
  {
    title: "Startup Launch",
    description: "Turn your idea into a market-ready app with strategy, design, and engineering.",
    price: "$1299+",
    features: [
      "Product discovery workshop",
      "Market & competitor research",
      "UI/UX design",
      "Mobile app development (web companion available)",
      "Deployment & infrastructure setup",
      "Weekly progress updates",
      "Founder-friendly technical guidance",
    ],
    cta: "Build your startup",
    href: "/contact",
    popular: false,
    primary: false,
  },
  {
    title: "Monthly Engineering Retainer",
    description:
      "Dedicated development support for startups on a flexible monthly basis.",
    price: "From $499/mo",
    features: [
      "Dedicated work hours",
      "Weekly progress calls",
      "Sprint tracking",
      "Product development",
      "Feature requests",
      "DevOps support",
      "Cancel anytime",
    ],
    cta: "Start Retainer",
    href: "/contact",
    popular: true,
    primary: true,
  },
] as const;

export default function Pricing() {
  return (
    <SectionShell id="pricing" variant="subtle">
      <RevealAnimation className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          Packages that scale with you
        </h2>
        {/*<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Fixed scopes with clear deliverables. Open a package page for full
          details.
        </p>*/}
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
