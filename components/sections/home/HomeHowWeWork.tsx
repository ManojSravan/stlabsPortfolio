const principles = [
  {
    n: "01",
    t: "Senior team, direct access",
    d: "You work with the people doing the work. No account layers, no surprise handoffs mid-project.",
  },
  {
    n: "02",
    t: "Weekly delivery rhythm",
    d: "We ship in focused increments so you see real progress, give feedback early, and adjust before costs compound.",
  },
  {
    n: "03",
    t: "Built for your team to own",
    d: "Clear documentation, sensible architecture, and a calm handoff so your org can run the product after we step back.",
  },
] as const;

export default function HomeHowWeWork() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">How we work</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance">
            A steady process for high-stakes product work.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Engagements are structured for clarity from week one: aligned goals, visible milestones,
            and communication that respects your leadership team&apos;s time.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {principles.map((item) => (
            <li
              key={item.n}
              className="border border-border/60 bg-background p-8 transition-colors hover:border-accent/30"
            >
              <p className="font-serif text-2xl text-accent">{item.n}</p>
              <h3 className="mt-5 font-serif text-xl leading-snug">{item.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
