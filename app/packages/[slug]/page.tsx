import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PackageDetail from "@/components/packages/PackageDetail";
import { getAllPackageSlugs, getPackageBySlug } from "@/lib/packages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return { title: "Package not found" };
  }

  return {
    title: pkg.title,
    description: pkg.summary,
  };
}

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetail pkg={pkg} />;
}
