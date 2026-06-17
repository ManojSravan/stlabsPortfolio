import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import TestimonialCard from "@/components/work/TestimonialCard";
import { testimonials } from "@/lib/work";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function Testimonials() {
  const featured = testimonials.slice(0, 4);

  return (
    <>
    <div className="testimonials-wrapper" id="testimonials">
      <SectionShell>
      <SectionHeader
        label="Client partners"
        title="Why teams come back."
        description=""
      />
      <StaggerContainer
        staggerDelay={0.15}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        {featured.map((t) => (
          <StaggerItem key={t.id}>
            <TestimonialCard testimonial={t} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
    </div>
    
    </>
  );
}
