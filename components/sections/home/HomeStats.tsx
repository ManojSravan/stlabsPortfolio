"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "10+ Products Built", label: "From idea validation to launch." },
  { value: "Early-Stage Focus", label: "Built for founders and startups." },
  { value: "Scalable Foundations", label: "Architecture designed for growth." },
  { value: "End-to-End Delivery", label: "Design, development, and deployment." },
] as const;
const Separator = () => (
  <span className="mx-10 h-px w-12 bg-background/20 self-center shrink-0 inline-block" />
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <span className="inline-flex items-center gap-4 shrink-0">
    <span className="font-serif text-2xl lg:text-3xl tracking-tight text-[var(--accent-light)]">
      {value}
    </span>
    <span className="text-[11px] uppercase tracking-[0.22em] text-background/55">
      {label}
    </span>
  </span>
);

export default function HomeStats() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame: number;
    let position = 0;
    const speed = 1;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      position -= speed;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const items = [...stats, ...stats];

  return (
    <section className="border-b border-border/60 bg-foreground text-background overflow-hidden py-10 md:py-11">
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{ width: "max-content" }}
      >
        {items.map((stat, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <StatItem value={stat.value} label={stat.label} />
            <Separator />
          </span>
        ))}
      </div>
    </section>
  );
}