import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/work/SectionHeader";
import BlogCard from "@/components/work/BlogCard";
import { recentBlogs } from "@/lib/blogs";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function RecentBlogs() {
  return (
    <SectionShell id="blogs" className="scroll-mt-28" variant="muted">
      <SectionHeader
        label="Blogs"
        title="Notes from the build."
        description="Thoughts on product, engineering, and what it means to ship independently."
        action={{ href: "/blogs", label: "View all" }}
      />
      <StaggerContainer
        staggerDelay={0.1}
        className="mt-10 grid gap-6 md:gap-8 max-w-3xl mx-auto"
      >
        {recentBlogs.map((post) => (
          <StaggerItem key={post.slug}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors"
        >
          View all blogs <span aria-hidden>→</span>
        </Link>
      </div>
    </SectionShell>
  );
}
