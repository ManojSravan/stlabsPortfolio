import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-serif text-lg">{site.name}</p>
          <p className="mt-1 text-sm text-background/60">{site.tagline}</p>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-background/70"
          aria-label="Legal"
        >
          <Link
            href="/privacy"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-background/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
