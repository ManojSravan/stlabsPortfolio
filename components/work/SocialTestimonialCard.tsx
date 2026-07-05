import { PlatformLabel, StarRating } from "@/components/work/PlatformBadge";
import type { SocialTestimonial } from "@/lib/testimonials";

export default function SocialTestimonialCard({
  testimonial,
}: {
  testimonial: SocialTestimonial;
}) {
  return (
    <figure className="flex h-full flex-col border border-border/60 bg-background p-4 transition-colors hover:border-accent/35">
      <div className="flex items-center justify-between gap-3">
        <PlatformLabel platform={testimonial.platform} />
        <StarRating rating={testimonial.rating} />
      </div>

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85 line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-4 pt-3 border-t border-border/50">
        <p className="text-xs font-medium text-foreground">{testimonial.name}</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">
          {testimonial.role}
        </p>
      </figcaption>
    </figure>
  );
}
