import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatBlogDate, type BlogPost } from "@/lib/blogs";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link
        href={`/blogs/${post.slug}`}
        className="flex gap-5 sm:gap-8 border border-border/60 bg-background p-5 sm:p-6 md:p-7 transition-colors hover:border-accent/50"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-accent">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-serif mt-2.5 text-lg md:text-2xl leading-snug text-balance group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 max-w-4xl">
            {post.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-accent">
            Read article
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>

        <div className="relative hidden sm:block h-24 w-32 md:h-28 md:w-40 shrink-0 overflow-hidden border border-border/60 bg-secondary/40">
          <Image
            src={post.heroImage}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 160px, 200px"
          />
        </div>
      </Link>
    </article>
  );
}
