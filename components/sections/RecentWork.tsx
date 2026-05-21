import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import { recentWork } from "@/lib/work";

export default function RecentWork() {
  return (
    <SectionShell>
      <SectionHeader
        label="Recent work"
        title="Selected engagements across our practices."
        description="Recent client work spanning commerce, SaaS, learning, and advisory, scoped to business outcomes, not toolchains."
        action={{ href: "/work", label: "View all work" }}
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {recentWork.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
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
