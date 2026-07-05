import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectArticle from "@/components/work/ProjectArticle";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  workProjects,
} from "@/lib/work";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = workProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return <ProjectArticle project={project} related={related} />;
}
