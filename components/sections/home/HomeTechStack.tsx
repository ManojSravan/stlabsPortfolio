import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/animations";

const technologies = [
  { name: "Next.js", logo: "/tech-stack/nextjs.svg" },
  { name: "Shopify", logo: "/tech-stack/shopify.svg" },
  { name: "WooCommerce", logo: "/tech-stack/woocommerce.svg" },
  { name: "Stripe", logo: "/tech-stack/stripe.svg" },
  { name: "Vercel", logo: "/tech-stack/vercel.svg" },
];

export default function HomeTechStack() {
  return (
    <SectionShell id="technologies" className="scroll-mt-28">
      <SectionHeader
        label="Tech Stack"
        title="Technologies we use."
        description=""
      />
      <StaggerContainer
        staggerDelay={0.08}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6"
      >
        {technologies.map((tech) => (
          <StaggerItem key={tech.name}>
            <div className="flex min-h-[10rem] items-center justify-center border border-border/60 bg-secondary/30 p-4 transition-colors hover:border-accent/30 hover:bg-background">
              <div className="relative h-20 w-full">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  priority
                />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
