"use client";

import NavLink from "./NavLink";
import { mainNav } from "@/lib/site";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
      {mainNav.map((entry) => (
        <NavLink
          key={entry.href}
          href={entry.href}
          label={entry.label}
          className="relative px-3 py-2 text-[13px] tracking-wide transition-colors"
          activeClassName="text-foreground after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-accent"
          inactiveClassName="text-muted-foreground hover:text-foreground"
        />
      ))}
    </nav>
  );
}
