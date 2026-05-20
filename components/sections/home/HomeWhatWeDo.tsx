const practices = [
  {
    n: "01",
    t: "Ecommerce & Web",
    d: "Storefronts and marketing sites built to convert and last.",
  },
  {
    n: "02",
    t: "SaaS Development",
    d: "From first prototype to scale, with full-stack product engineering.",
  },
  {
    n: "03",
    t: "Learning Platforms",
    d: "LMS products that respect both learners and instructors.",
  },
  {
    n: "04",
    t: "Tech Consultancy",
    d: "Architecture, hiring, and product strategy when stakes are high.",
  },
] as const;

export default function HomeWhatWeDo() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 grid gap-12 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What we do</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            Four practices, one team.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border ring-1 ring-border/60">
          {practices.map((c) => (
            <div
              key={c.n}
              className="group bg-background p-8 transition-colors hover:bg-secondary/30"
            >
              <p className="font-serif text-2xl text-accent">{c.n}</p>
              <h3 className="mt-6 text-base font-medium">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
