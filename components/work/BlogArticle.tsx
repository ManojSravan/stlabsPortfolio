import Image from "next/image";
import Link from "next/link";
import ArticleBody from "@/components/work/ArticleBody";
import BlogCard from "@/components/work/BlogCard";
import { formatBlogDate, type BlogPost } from "@/lib/blogs";

type BlogArticleProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogArticle({ post, related }: BlogArticleProps) {
  return (
    <article>
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-10 md:pt-16 md:pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors"
          >
            <span aria-hidden>←</span> All blogs
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {post.category} · {formatBlogDate(post.publishedAt)}
          </p>
          <h1 className="font-serif mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-border/60 pt-8 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Author
              </dt>
              <dd className="mt-2 font-medium">{post.author}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Published
              </dt>
              <dd className="mt-2 font-medium">{formatBlogDate(post.publishedAt)}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Category
              </dt>
              <dd className="mt-2 font-medium">{post.category}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Read time
              </dt>
              <dd className="mt-2 font-medium">{post.readTime}</dd>
            </div>
          </dl>
        </div>
      </header>

      <figure className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="overflow-hidden border border-border/60 bg-secondary/40">
          <Image
            src={post.heroImage}
            alt={post.title}
            width={1400}
            height={788}
            className="w-full h-auto"
            priority
          />
        </div>
      </figure>

      <div className="mx-auto max-w-2xl px-6 pb-20 md:pb-28">
        <ArticleBody blocks={post.body} />
      </div>

      {related.length > 0 ? (
        <aside className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              More to read
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </aside>
      ) : null}
    </article>
  );
}
