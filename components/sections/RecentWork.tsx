import Link from "next/link";
import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import { recentWork } from "@/lib/work";

export default function RecentWork() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader
          label="Recent work"
          title="Selected engagements across our practices."
          description="Recent client work spanning commerce, SaaS, learning, and advisory, scoped to business outcomes, not toolchains."
          action={{ href: "/work", label: "View all work" }}
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {recentWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            View all work <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
