import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/work/BlogArticle";
import {
  blogPosts,
  getAllBlogSlugs,
  getBlogBySlug,
} from "@/lib/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogArticle post={post} related={related} />;
}
