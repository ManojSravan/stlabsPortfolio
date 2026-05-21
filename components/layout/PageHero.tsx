type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
};

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--accent-muted),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-14 md:pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <h1 className="font-serif mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
