"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { headerCta, mainNav, site } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center border border-border/80 text-foreground hover:border-accent hover:text-accent transition-colors"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-[4.25rem] z-50 border-b border-border/60 bg-background shadow-xl">
            <nav className="mx-auto max-w-7xl px-6 py-6" aria-label="Mobile">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {site.tagline}
              </p>
              <ul className="mt-5 divide-y divide-border/60">
                {mainNav.map((entry) => (
                  <li key={entry.href}>
                    <NavLink
                      href={entry.href}
                      label={entry.label}
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-between py-4 text-base"
                      activeClassName="text-foreground"
                      inactiveClassName="text-foreground/80 hover:text-accent"
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={headerCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-4 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
                >
                  {headerCta.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-xs uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
