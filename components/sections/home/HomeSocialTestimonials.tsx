import SectionShell from "@/components/layout/SectionShell";
import SocialTestimonialCard from "@/components/work/SocialTestimonialCard";
import { socialTestimonials } from "@/lib/testimonials";

export default function HomeSocialTestimonials() {
  return (
    <SectionShell id="testimonials" className="scroll-mt-28" variant="muted">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Testimonials
        </p>
        <h2 className="font-serif text-2xl md:text-3xl mt-3 text-balance">
          What clients say across platforms.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socialTestimonials.map((testimonial) => (
          <SocialTestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionShell>
  );
}
