"use client";

import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import SocialLinks from "./SocialLinks";

type HeaderTopBarProps = {
  visible: boolean;
};

export default function HeaderTopBar({ visible }: HeaderTopBarProps) {
  return (
    <div
      className={`overflow-hidden border-b border-border/40 bg-secondary/60 transition-[max-height,opacity] duration-300 ease-out ${
        visible ? "max-h-12 opacity-100" : "max-h-0 opacity-0 border-transparent"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs text-muted-foreground">
        <ul className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <li>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-3 w-3 shrink-0" aria-hidden />
              <span>{site.phone}</span>
            </a>
          </li>
          <li className="hidden h-3 w-px bg-border sm:block" aria-hidden />
          <li className="min-w-0">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-w-0 items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-3 w-3 shrink-0" aria-hidden />
              <span className="truncate">{site.email}</span>
            </a>
          </li>
        </ul>
        <SocialLinks variant="light" className="shrink-0" />
      </div>
    </div>
  );
}
