const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "15", label: "Long-term partners" },
  { value: "2020", label: "Trusted since" },
  { value: "Global", label: "Remote-first studio" },
] as const;

export default function HomeStats() {
  return (
    <section className="border-b border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="relative md:pl-6 md:first:pl-0 md:border-l md:first:border-l-0 border-background/15"
            >
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[var(--accent-light)]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-background/65">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
