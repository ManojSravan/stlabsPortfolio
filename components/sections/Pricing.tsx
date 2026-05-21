import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";

const TIERS = [
  {
    title: "Ecommerce Launch",
    description: "Get online fast with a solid, professional setup.",
    price: "From ₹20k",
    features: [
      "Landing or business site",
      "Ecommerce storefront setup",
      "Payments + mobile layout",
      "WhatsApp hookup",
      "Deploy & handoff",
    ],
    cta: "View package",
    href: "/packages/ecommerce-launch-package",
    popular: false,
    primary: false,
  },
  {
    title: "Ecommerce Growth",
    description: "Sell more with dashboards, automation, and room to grow.",
    price: "From ₹45k",
    features: [
      "Everything in Launch",
      "Admin + orders/products",
      "WhatsApp automation",
      "Meta ads + analytics",
      "Backend you can scale",
    ],
    cta: "View package",
    href: "/packages/ecommerce-growth-package",
    popular: true,
    primary: true,
  },
  {
    title: "Landing, SEO & Custom",
    description: "Brand pages, search visibility, or bespoke product builds.",
    price: "From ₹15k",
    features: [
      "Landing page & brand package",
      "SEO foundation package",
      "Custom product development",
      "Scoped to your timeline",
    ],
    cta: "See all packages",
    href: "/packages",
    popular: false,
    primary: false,
  },
] as const;

export default function Pricing() {
  return (
    <SectionShell id="pricing" variant="subtle">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Pricing</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          Packages that scale with you
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Fixed scopes with clear deliverables. Open a package page for full details.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
        {TIERS.map((tier) => (
          <article
            key={tier.title}
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
        ))}
      </div>
    </SectionShell>
  );
}
