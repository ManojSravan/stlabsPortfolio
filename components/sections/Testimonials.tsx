import SectionHeader from "@/components/work/SectionHeader";
import TestimonialCard from "@/components/work/TestimonialCard";
import { testimonials } from "@/lib/work";

export default function Testimonials() {
  const featured = testimonials.slice(0, 2);

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader
          label="Client partners"
          title="What teams say after we ship."
          description=  "We measure success through long-term trust, operational clarity, and systems teams can confidently build on over time."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
