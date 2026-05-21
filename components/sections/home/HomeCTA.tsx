import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";

export default function HomeCTA() {
  return (
    <SectionShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="font-serif text-3xl md:text-4xl max-w-xl leading-tight text-balance">
          Have something you&apos;d like to build?
        </h2>
        <Link
          href="https://cal.com/manoj-sravan-annivg/free-discovery-call"
          target="_blank"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors w-fit shrink-0"
        >
          Get in touch <span aria-hidden>→</span>
        </Link>
      </div>
    </SectionShell>
  );
}
