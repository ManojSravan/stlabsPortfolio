import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Not found</p>
      <h1 className="font-serif text-3xl mt-4">This article is not available.</h1>
      <Link
        href="/blogs"
        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent hover:underline"
      >
        Back to blogs <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
