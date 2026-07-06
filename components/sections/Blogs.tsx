import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import BlogCard from "@/components/work/BlogCard";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blogs";

export default function Blogs() {
  return (
    <div>
      <PageHero
        label="Blogs"
        title={
          <>
            Notes from the <span className="text-accent">build.</span>
          </>
        }
        description="Thoughts on product, engineering, and building independently."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
            All articles
          </p>
          <div className="grid gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-5xl max-w-xl leading-tight text-balance">
            Have something to build?
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm hover:bg-accent transition-colors w-fit shrink-0"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
