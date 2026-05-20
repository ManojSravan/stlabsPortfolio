import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2 className="font-serif text-4xl md:text-5xl max-w-xl leading-tight text-balance">
          Have something you&apos;d like to build?
        </h2>
        <Link
          href="https://cal.com/manoj-sravan-annivg/free-discovery-call" target="_blank"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors w-fit shrink-0"
        >
          Get in touch <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
