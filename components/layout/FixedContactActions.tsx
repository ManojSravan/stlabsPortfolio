"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site } from "@/lib/site";

export default function FixedContactActions() {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      role="group"
      aria-label="Quick actions"
    >
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="size-4" />
        <span className="hidden sm:inline">Chat</span>
      </a>

      {scrollVisible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex size-11 items-center justify-center border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
