import Link from "next/link";

export default function PackageNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 text-center">
      <h1 className="font-serif text-3xl">Package not found</h1>
      <p className="mt-4 text-muted-foreground">
        That package doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/packages"
        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors"
      >
        View all packages <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
