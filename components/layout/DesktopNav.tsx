"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mainNav, type NavEntry } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavDropdown({ entry }: { entry: Extract<NavEntry, { type: "dropdown" }> }) {
  const pathname = usePathname();
  const groupActive = entry.items.some((item) => isActive(pathname, item.href));

  return (
    <div className="group relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-sm transition-colors ${
          groupActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-haspopup="true"
      >
        {entry.label}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
          aria-hidden
        />
      </button>
      <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div
          className={`border border-border/80 bg-background p-2 shadow-lg ring-1 ring-border/40 ${
            entry.wide ? "min-w-[26rem]" : "min-w-[15rem]"
          }`}
        >
          <ul className={entry.wide ? "grid grid-cols-2 gap-0.5" : "flex flex-col"}>
            {entry.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 transition-colors hover:bg-secondary/80 ${
                    isActive(pathname, item.href) ? "text-accent" : "text-foreground"
                  }`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.description ? (
                    <span className="mt-0.5 block text-xs text-muted-foreground leading-snug">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main">
      {mainNav.map((entry) =>
        entry.type === "link" ? (
          <Link
            key={entry.href}
            href={entry.href}
            className={`relative text-sm transition-colors ${
              isActive(pathname, entry.href)
                ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {entry.label}
          </Link>
        ) : (
          <NavDropdown key={entry.label} entry={entry} />
        )
      )}
    </nav>
  );
}
