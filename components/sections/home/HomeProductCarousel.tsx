import Image from "next/image";
import { productScreenshots } from "@/lib/product-screenshots";

function ScreenshotCard({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <div className="w-[min(78vw,22rem)] shrink-0 sm:w-[26rem] md:w-[28rem]">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] ring-1 ring-border/40">
        <div className="relative aspect-[16/10]">
          <Image
            src={src}
            alt={`${name} product screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 78vw, 448px"
          />
        </div>
      </div>
    </div>
  );
}

export default function HomeProductCarousel() {
  const marqueeItems = [...productScreenshots, ...productScreenshots];

  return (
    <section
      aria-label="Product screenshots"
      className="relative overflow-hidden border-b border-border/60 bg-background py-10 md:py-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24"
      />

      <div className="flex w-max animate-marquee-products gap-5 md:gap-7 hover:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => (
          <ScreenshotCard
            key={`${item.src}-${index}`}
            name={item.name}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
}
