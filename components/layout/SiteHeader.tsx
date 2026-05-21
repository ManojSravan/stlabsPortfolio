"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import DesktopNav from "./DesktopNav";
import HeaderTopBar from "./HeaderTopBar";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setTopBarVisible(window.scrollY < 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <HeaderTopBar visible={topBarVisible} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-[4.25rem] items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3 group">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden ring-1 ring-border/60">
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

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
            >
              Start a Project <span aria-hidden>→</span>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
