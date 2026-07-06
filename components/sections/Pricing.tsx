import Link from "next/link";
import { Check } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import { RevealAnimation } from "@/components/animations";
import { headerCta } from "@/lib/site";

const FEATURES = [
  "One active request at a time — unlimited backlog",
  "Full-stack application, frontend, and API engineering",
  "Next.js, React, headless commerce & UI/UX execution",
  "Average 48–72 hour turnaround per request",
  "Feature development, bug fixes, and production maintenance",
  "Deployments, CI/CD, and infrastructure support",
  "Database design, migrations, and third-party integrations",
  "Stripe, auth, CMS, analytics, and webhook integrations",
  "Direct Slack communication — no managers, no meetings",
  "Pause or cancel anytime — no long-term contract",
  "Code in your repos — you own everything we ship",
  "Async progress updates with clear handoff documentation",
] as const;

const currentMonth = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
}).format(new Date());

export default function Pricing() {
  return (
    <SectionShell id="pricing" className="scroll-mt-28" variant="subtle">
      <RevealAnimation className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
          One tier. Built for founders who ship.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          A single product engineering retainer — clear scope, async-friendly
          delivery, and direct collaboration every step of the way.
        </p>
      </RevealAnimation>

      <RevealAnimation delay={0.1} className="mt-10 max-w-5xl mx-auto">
        <article className="grid overflow-hidden border border-border/80 bg-foreground text-background lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col justify-between border-b border-background/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-background/55">
                The Product Engineering Tier
              </p>
              <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-sm">
                One request at a time. Paused or cancelled anytime.
              </p>
              <p className="mt-10 font-serif text-5xl md:text-6xl tracking-tight">
                $1,999
                <span className="ml-2 font-sans text-lg md:text-xl text-background/60">
                  / mo
                </span>
              </p>
            </div>

            <div className="mt-10 lg:mt-16">
              <Link
                href={headerCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center border border-background/20 bg-background/10 px-6 py-3.5 text-sm text-background transition-colors hover:bg-background hover:text-foreground sm:w-auto"
              >
                Secure a Slot
              </Link>
              <p className="mt-3 text-xs text-background/40">
                Only 1 slot left for {currentMonth}
              </p>
              <p className="mt-6 text-xs leading-relaxed text-background/50">
                Includes: engineering, design execution, deployment support,
                integrations, and direct founder collaboration.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-background/45">
              What&apos;s included
            </p>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[var(--accent-light)]"
                    aria-hidden
                  />
                  <span className="text-background/90">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-background/60 border-t border-background/10 pt-6">
              Works for solo founders and lean product teams looking for
              agency-grade execution without the agency overhead. Submit
              requests as your roadmap evolves — pause when you need to, resume
              when you&apos;re ready.
            </p>
          </div>
        </article>
      </RevealAnimation>
    </SectionShell>
  );
}
