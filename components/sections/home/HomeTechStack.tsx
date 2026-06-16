"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import Image from "next/image";
import { useEffect, useRef } from "react";

const technologies = [
  // Frameworks
  { name: "Next.js", logo: "/tech-stack/nextjs.svg" },
  { name: "React", logo: "/tech-stack/react.svg" },
  // Commerce
  { name: "Shopify", logo: "/tech-stack/shopify.svg" },
  { name: "WooCommerce", logo: "/tech-stack/woocommerce.svg" },
  // Payments
  { name: "Stripe", logo: "/tech-stack/stripe.svg" },
   // CMS
  { name: "Sanity", logo: "/tech-stack/sanity.svg" },
   // Infra & Hosting
  { name: "Vercel", logo: "/tech-stack/vercel.svg" },
   // Styling
  { name: "Tailwind CSS", logo: "/tech-stack/tailwind.svg" },
  // Analytics & Marketing
  { name: "Google Analytics", logo: "/tech-stack/google-analytics.svg" },
];

const Separator = () => (
  <span className="mx-8 h-px w-8 bg-border/60 self-center shrink-0 inline-block" />
);

const TechItem = ({ name, logo }: { name: string; logo: string }) => (
  <span className="inline-flex flex-col items-center justify-center gap-4 shrink-0 w-40">
    <span className="relative h-16 w-full">
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        className="object-contain"
        sizes="160px"
      />
    </span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
      {name}
    </span>
  </span>
);

export default function HomeTechStack() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame: number;
    let position = 0;
    const speed = 2;

    const tick = () => {
      const halfWidth = track.scrollWidth / 2;
      position -= speed;
      if (Math.abs(position) >= halfWidth) position = 0;
      track.style.transform = `translateX(${position}px)`;
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const items = [...technologies, ...technologies];

  return (
    <SectionShell id="technologies" className="scroll-mt-28">
      <SectionHeader
  label="Technology Stack"
  title="Built with modern technologies that scale."
  description="We use proven tools and frameworks to build reliable, secure, and maintainable products that grow with your business."
/>
      <div className="mt-10 overflow-hidden relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex items-center will-change-transform py-4"
          style={{ width: "max-content" }}
        >
          {items.map((tech, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <TechItem name={tech.name} logo={tech.logo} />
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}