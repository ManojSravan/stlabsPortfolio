import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import { recentWork } from "@/lib/work";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function RecentWork() {
  return (
    <SectionShell>
      <SectionHeader
        label="Recent work"
        title="Products we've shipped."
        description=""
        action={{ href: "/work", label: "View all work" }}
      />
      <StaggerContainer
        staggerDelay={0.1}
        className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10"
      >
        {recentWork.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors"
        >
          View all work <span aria-hidden>→</span>
        </Link>
      </div>
    </SectionShell>
  );
}
