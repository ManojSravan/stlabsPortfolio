import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Legal
      </p>
      <h1 className="font-serif text-3xl md:text-4xl mt-4">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: July 2026
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/90">
        <p>
          By using the {site.name} website or engaging our services, you agree
          to these terms.
        </p>

        <section>
          <h2 className="font-medium text-base mb-2">Services</h2>
          <p>
            We provide product design and development services.
            Specific deliverables, timelines, and pricing are defined in a
            separate project agreement or statement of work.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Intellectual property</h2>
          <p>
            Upon full payment, you own the deliverables created for your project
            unless otherwise stated in your agreement. We retain the right to
            showcase completed work in our portfolio unless a confidentiality
            agreement specifies otherwise.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Payment & cancellation</h2>
          <p>
            Payment terms are outlined per project. Monthly retainers may be
            cancelled with notice before the next billing cycle. Refunds for
            completed milestones are not provided.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Limitation of liability</h2>
          <p>
            Our liability is limited to the fees paid for the specific service in
            question. We are not liable for indirect or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
      >
        <span aria-hidden>←</span> Back to home
      </Link>
    </div>
  );
}
