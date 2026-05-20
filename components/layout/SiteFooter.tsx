import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceLinks, site } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-background/10 ring-1 ring-background/20">
              <Image
                src="/logostlabs-transparent.png"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 object-contain brightness-0 invert"
              />
            </span>
            <span className="font-serif text-xl tracking-tight">{site.name}</span>
          </div>
          <p className="mt-5 text-sm text-background/70 max-w-sm leading-relaxed">
            {site.description}
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-background/50">
            Established {site.established} · {site.location}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-background/80 hover:text-[var(--accent-light)] transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-background" aria-hidden>
                    →
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-background/80 hover:text-[var(--accent-light)] transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-background" aria-hidden>
                    →
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[var(--accent-light)] transition-colors font-serif text-lg break-all"
              >
                {site.email}
              </a>
            </li>
            <li className="leading-relaxed text-background/65">
              {site.location}
              <br />
              Working with teams worldwide
            </li>
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-background/50">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="uppercase tracking-[0.2em]">{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
