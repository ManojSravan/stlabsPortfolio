"use client";

import SectionShell from "@/components/layout/SectionShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealAnimation } from "@/components/animations";

const pricingFaqs = [
  {
    q: "Can I cancel the retainer anytime?",
    a: "Yes. Monthly retainers have no long-term lock-in. Give notice before the next billing cycle and we&apos;ll wrap up cleanly with documentation handoff.",
  },
  {
    q: "Is my data and code secure?",
    a: "Your code lives in your repositories, deployed on your infrastructure. We follow standard security practices: encrypted connections, no third-party data sharing, and NDA on request.",
  },
  {
    q: "What if the scope changes mid-project?",
    a: "Scope changes happen. We discuss the impact on timeline and cost upfront before any extra work begins, with no surprise invoices.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Most clients are domain experts, not engineers. We translate business goals into clear product requirements and keep you informed without jargon.",
  },
  {
    q: "How do payments work?",
    a: "MVP builds are milestone-based: you pay as each phase ships. Retainers are billed monthly. International payments accepted via bank transfer or Stripe.",
  },
] as const;

export default function HomeFAQs() {
  return (
    <SectionShell id="faqs" className="scroll-mt-28" border={false}>
      <div className="mx-auto max-w-3xl">
        <RevealAnimation className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            FAQs
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            Common questions
          </h2>
        </RevealAnimation>
        <Accordion className="mt-8 gap-2" defaultValue={[pricingFaqs[0].q]}>
          {pricingFaqs.map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-0 not-last:border-0"
            >
              <AccordionTrigger className="rounded-none border border-border/60 bg-background px-4 py-3.5 text-left text-sm font-normal hover:no-underline hover:border-accent/40 hover:bg-muted/30 focus-visible:ring-accent/40 data-[state=open]:border-accent/40 data-[state=open]:bg-muted/20">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="border border-t-0 border-border/60 bg-background px-4 py-3.5 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
