import Link from "next/link";

const TIERS = [
  {
    title: "Starter Launch",
    description: "Get online fast with a solid, professional setup.",
    price: "From ₹20k",
    features: [
      "Landing or business site",
      "Ecommerce storefront setup",
      "Payments + mobile layout",
      "WhatsApp hookup",
      "Deploy & handoff",
    ],
    cta: "Start your project",
    href: "https://cal.com/manoj-sravan-annivg/starterlaunch",
    popular: false,
    primary: false,
  },
  {
    title: "Growth Commerce",
    description: "Sell more with dashboards, automation, and room to grow.",
    price: "From ₹45k",
    features: [
      "Everything in Starter",
      "Admin + orders/products",
      "WhatsApp automation",
      "Meta ads + analytics",
      "Backend you can scale",
    ],
    cta: "Discuss growth setup",
    href: "https://cal.com/manoj-sravan-annivg/free-discovery-call",
    popular: true,
    primary: true,
  },
  {
    title: "Custom Product Development",
    description: "Bespoke builds when off-the-shelf is not enough.",
    price: "Custom quote",
    features: [
      "Dashboards & internal tools",
      "MVPs & integrations",
      "Automation & performance",
      "Ongoing support option",
    ],
    cta: "Outline your requirements",
    href: "/contact",
    popular: false,
    primary: false,
  },
] as const;

export default function Pricing() {
  return (
    <section className="border-t border-border/60 bg-secondary/30" id="pricing">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 text-balance">
            Pricing that scales with you
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Simple tiers. Tell us what you need and we will match the right one.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {TIERS.map((tier) => (
            <article
              key={tier.title}
              className={`relative flex flex-col border bg-background p-8 md:p-9 transition-colors ${
                tier.popular
                  ? "border-accent ring-1 ring-accent/30 shadow-sm lg:-mt-2 lg:mb-2"
                  : "border-border/80 hover:border-border"
              }`}
            >
              {tier.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent-foreground">
                  Popular
                </span>
              ) : null}

              <h3 className="font-serif text-2xl leading-tight">{tier.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
              <p className="mt-8 font-serif text-3xl md:text-4xl">{tier.price}</p>

              <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Includes
              </p>
              <ul className="mt-4 flex-1 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-relaxed">
                    <span className="text-accent shrink-0 mt-1.5 size-1.5 rounded-full bg-accent" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                target={tier.href.startsWith("http") ? "_blank" : undefined}
                rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 text-sm transition-colors ${
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
      </div>
    </section>
  );
}
