import Image from "next/image";
import Link from "next/link";
import ArticleBody from "@/components/work/ArticleBody";
import type { WorkProject } from "@/lib/work";

type ProjectArticleProps = {
  project: WorkProject;
  related: WorkProject[];
};

export default function ProjectArticle({ project, related }: ProjectArticleProps) {
  return (
    <article>
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-10 md:pt-16 md:pb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors"
          >
            <span aria-hidden>←</span> All work
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {project.subtitle} · {project.year}
          </p>
          <h1 className="font-serif mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.excerpt}
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-border/60 pt-8 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Client
              </dt>
              <dd className="mt-2 font-medium">{project.client}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Engagement
              </dt>
              <dd className="mt-2 font-medium">{project.engagement}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Outcome
              </dt>
              <dd className="mt-2 font-medium">{project.outcome}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Read time
              </dt>
              <dd className="mt-2 font-medium">{project.readTime}</dd>
            </div>
          </dl>
        </div>
      </header>

      <figure className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="overflow-hidden border border-border/60 bg-secondary/40">
          <Image
            src={project.heroImage}
            alt={project.title}
            width={1400}
            height={788}
            className="w-full h-auto"
            priority
          />
        </div>
      </figure>

      <div className="mx-auto max-w-2xl px-6 pb-20 md:pb-28">
        <ArticleBody blocks={project.body} />
      </div>

      {related.length > 0 ? (
        <aside className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              More from our studio
            </p>
            <h2 className="font-serif text-2xl md:text-3xl mt-4">Related work</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/work/${item.slug}`}
                    className="group block border border-border/60 bg-background p-6 md:p-8 hover:border-accent/35 transition-colors"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif mt-3 text-xl leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </article>
  );
}
