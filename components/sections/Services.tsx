import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

const SERVICES = [
  {
    n: "01",
    title: "Ecommerce & Web Development",
    summary:
      "Storefronts, marketing sites, and bespoke commerce experiences engineered to convert and scale.",
    points: [
      "Shopify, Medusa, and custom stacks",
      "Headless commerce architectures",
      "Performance-first build pipelines",
    ],
  },
  {
    n: "02",
    title: "SaaS Development",
    summary:
      "End-to-end product engineering, from first prototype to billing, auth, and the unglamorous middle.",
    points: [
      "Multi-tenant architecture",
      "Stripe, auth, and admin tooling",
      "Realtime + AI features",
    ],
  },
  {
    n: "03",
    title: "Learning Management Systems",
    summary:
      "Calm, focused LMS products built for both learners and the people who teach them.",
    points: [
      "Cohorts, courses, and live sessions",
      "Assessments and certification",
      "Creator and admin dashboards",
    ],
  },
  {
    n: "04",
    title: "Tech Consultancy",
    summary:
      "Senior advice for technical leaders, architecture reviews, hiring, and product strategy.",
    points: [
      "Architecture & code audits",
      "Team & hiring guidance",
      "Build-vs-buy decisions",
    ],
  },
  {
    n: "05",
    title: "Landing Pages",
    summary:
      "Sharp, fast, single-purpose pages that earn the click, designed and shipped in days, not months.",
    points: ["Copy + design + build", "A/B-ready instrumentation", "CMS or fully static"],
  },
];

export default function Services() {
  return (
    <div>
      <PageHero
        label="Services"
        title={
          <>
            Five practices, shaped around{" "}
            <span className="text-accent">what you actually need</span>.
          </>
        }
        description="Engagements are scoped to outcomes, not seats. Most projects start with a short discovery week, we'll tell you honestly whether we're the right team for the work."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="grid gap-8 py-14 md:py-16 border-b border-border/60 last:border-b-0 md:grid-cols-[5rem_1fr_1fr] md:gap-12 group"
            >
              <p className="font-serif text-4xl md:text-5xl text-accent leading-none">{s.n}</p>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                  {s.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
                  {s.summary}
                </p>
              </div>
              <ul className="space-y-3 text-sm md:pt-1">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-accent shrink-0" aria-hidden>
                      ·
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-5xl max-w-xl leading-tight text-balance">
            Not sure which fits? Let&apos;s talk it through.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors w-fit shrink-0"
          >
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
