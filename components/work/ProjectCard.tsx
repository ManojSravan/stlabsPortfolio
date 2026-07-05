import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/lib/work";

type ProjectCardProps = {
  project: WorkProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/case-studies/${project.slug}`} className="block">
        <div className="overflow-hidden border border-border/60 bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
          <div className="relative w-full overflow-hidden bg-secondary/60">
            <Image
              src={project.heroImage}
              alt=""
              width={800}
              height={500}
              className="w-full h-auto max-h-[320px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-background/95 border border-border/60 px-2.5 py-1 text-accent backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>{project.client}</span>
              <span aria-hidden className="text-border">
                ·
              </span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-serif mt-3 text-xl md:text-2xl leading-snug text-balance group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <p className="mt-4 text-sm text-foreground/80 border-l-2 border-accent/30 pl-3">
              {project.outcome}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
              {project.featured ? "Read case study" : "View project"}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
