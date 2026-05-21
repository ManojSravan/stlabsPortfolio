"use client";

import SectionShell from "@/components/layout/SectionShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export default function HomeFAQs() {
  return (
    <SectionShell id="faqs" className="scroll-mt-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQs</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Straight answers about how we work, what we build, and how to start.
          </p>
        </div>
        <Accordion className="mt-8 gap-2" defaultValue={[faqs[0].q]}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-0 not-last:border-0"
            >
              <AccordionTrigger className="rounded-none border-0 bg-accent px-4 py-3.5 text-left text-sm font-normal text-accent-foreground hover:no-underline hover:bg-accent/90 focus-visible:ring-accent/40 [&>svg]:text-accent-foreground">
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
