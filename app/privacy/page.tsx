import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Legal
      </p>
      <h1 className="font-serif text-3xl md:text-4xl mt-4">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: July 2026
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/90">
        <p>
          {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
          This policy explains what information we collect and how we use it when
          you visit our website or engage our services.
        </p>

        <section>
          <h2 className="font-medium text-base mb-2">Information we collect</h2>
          <p>
            We may collect your name, email address, and any information you
            voluntarily provide when contacting us or booking a call. We also
            collect standard analytics data (pages visited, browser type) to
            improve the site.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">How we use it</h2>
          <p>
            We use your information to respond to inquiries, deliver services,
            and communicate about projects. We do not sell your personal data
            to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Data security</h2>
          <p>
            We take reasonable measures to protect your information. Project code
            and assets are stored in your repositories and infrastructure
            unless otherwise agreed.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-base mb-2">Contact</h2>
          <p>
            Questions about this policy? Email{" "}
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
