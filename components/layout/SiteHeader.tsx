"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import MobileNav from "./MobileNav";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative text-sm transition-colors ${
        active
          ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-accent"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-[4.25rem] items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3 group">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden   ring-1 ring-border/60">
              <Image
                src="/logostlabs.png"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
                priority
              />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-serif text-lg tracking-tight truncate sm:text-xl">
                {site.name}
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1 sm:block">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
