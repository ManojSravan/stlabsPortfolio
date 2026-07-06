import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import TestimonialCard from "@/components/work/TestimonialCard";
import { testimonials } from "@/lib/work";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function Testimonials() {
  const featured = testimonials.slice(0, 4);

  return (
    <SectionShell id="testimonials" className="scroll-mt-28" variant="subtle">
      <SectionHeader
        label="Testimonials"
        title="Words from collaborators."
        description="Direct feedback from founders and teams we&apos;ve worked with."
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
  );
}
