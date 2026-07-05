import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/work";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group flex flex-col border border-border/60 bg-background p-8 md:p-10 h-full transition-all duration-300 hover:border-accent/35 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
          {testimonial.company}
        </p>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-foreground text-background transition-colors group-hover:bg-accent"
          aria-hidden
        >
          <Quote className="h-4 w-4" />
        </span>
      </div>
      <blockquote className="mt-6 text-base md:text-[1.05rem] leading-relaxed text-foreground/90 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 pt-6 border-t border-border/60">
        <p className="font-medium text-sm">{testimonial.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.role} · {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
