import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ProjectCard from "@/components/work/ProjectCard";
import { workProjects } from "@/lib/work";

export default function Work() {
  return (
    <div>
      <PageHero
        label="Work"
        title={
          <>
            Software we&apos;ve shipped with the teams we&apos;ve{" "}
            <span className="text-accent">partnered with</span>.
          </>
        }
        description="From first prototype to production scale. Each engagement is scoped to outcomes, here is a selection of recent product work across our practices."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
            All projects
          </p>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
            {workProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-5xl max-w-xl leading-tight text-balance">
            Have a project that belongs on this wall?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors w-fit shrink-0"
          >
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
