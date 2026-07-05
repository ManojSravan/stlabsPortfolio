import Link from "next/link";
import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import { caseStudies } from "@/lib/work";

export default function CaseStudies() {
  return (
    <section className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <SectionHeader
          label="Case studies"
          title="From discovery to shipped."
          description="In-depth stories of problems we solved, processes we followed, and products that are running in production."
          action={{ href: "/case-studies", label: "View all" }}
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
          >
            Explore all projects <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
