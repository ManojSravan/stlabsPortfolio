"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { site } from "@/lib/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero
        label="Contact"
        title={
          <>
            Tell us what you&apos;re <span className="text-accent">trying to build</span>.
          </>
        }
        description="Share a few details about your project. We reply within one business day, always from someone on the team."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-8 max-w-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Your name" name="name" required />
              <Field label="Company" name="company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Email" name="email" type="email" required />
              <Field label="Budget (optional)" name="budget" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                About your project
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-3 w-full bg-secondary/30 border border-border px-4 py-3 text-base resize-none focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors"
            >
              Send message <span aria-hidden>→</span>
            </button>
            {sent ? (
              <p className="font-serif text-xl text-accent">
                Thank you, we&apos;ll be in touch within a business day.
              </p>
            ) : null}
          </form>

          <aside className="space-y-10 text-sm lg:border-l lg:border-border/60 lg:pl-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-serif text-2xl hover:text-accent transition-colors break-all"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
              <p className="mt-2 leading-relaxed text-foreground/85">
                {site.location}
                <br />
                Working with teams worldwide
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Response time
              </p>
              <p className="mt-2 leading-relaxed text-foreground/85">
                Within one business day, always from a real person on the team.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-secondary/30 border border-border px-4 py-2.5 text-base focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-colors"
      />
    </div>
  );
}
