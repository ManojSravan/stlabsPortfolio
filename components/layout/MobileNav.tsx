"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative md:hidden">
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
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-3rem,20rem)] max-h-[min(70vh,28rem)] overflow-y-auto border border-border/60 bg-background shadow-lg">
          <nav className="flex flex-col p-2" aria-label="Mobile">
            {mainNav.map((entry) =>
              entry.type === "link" ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm hover:bg-secondary/80 hover:text-accent transition-colors"
                >
                  {entry.label}
                </Link>
              ) : (
                <div key={entry.label} className="border-b border-border/40 last:border-0">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((v) => (v === entry.label ? null : entry.label))
                    }
                    className="flex w-full items-center justify-between px-3 py-3 text-sm hover:bg-secondary/80 hover:text-accent transition-colors"
                    aria-expanded={expanded === entry.label}
                  >
                    {entry.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expanded === entry.label ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {expanded === entry.label ? (
                    <ul className="pb-2 pl-2">
                      {entry.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mx-2 mt-2 inline-flex items-center justify-center gap-2 bg-foreground text-background px-4 py-3 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
            <p className="px-3 pt-4 pb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {site.tagline}
            </p>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
