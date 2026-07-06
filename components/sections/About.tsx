import PageHero from "@/components/layout/PageHero";
import Founder from "@/components/sections/Founder";
import {
  RevealAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export default function About() {
  return (
    <div>
      <PageHero
        label="About"
        title={
          <>
            Small team.<span className="text-accent">Clear Systems</span>.
          </>
        }
      />

      <RevealAnimation>
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-14 grid gap-8 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-12">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:pt-1">
              Who we are
            </p>
            <div className="space-y-6 text-base leading-relaxed max-w-2xl text-foreground/90">
              <p>
                Sravan Tech Labs is a product engineering studio. We&apos;re a
                tight-knit team of engineers, designers, and product thinkers
                who care more about shipping good software than chasing trends.
              </p>
              <p>
                Our clients lean on us for clarity. Whether it&apos;s a first
                prototype, a stuck rewrite, or a question of whether to build at
                all. We bring honest answers, a steady process, and a calm room
                to think.
              </p>
              <p>
                We&apos;ve helped startups find product-market fit, helped
                operators replace brittle systems with calm ones, and helped
                technical leaders make better bets. We&apos;re proud of every
                line of code, but prouder of the relationships that make it
                possible.
              </p>
            </div>
          </div>
        </section>
      </RevealAnimation>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14 grid gap-8 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:pt-1">
            What we value
          </p>
          <StaggerContainer
            staggerDelay={0.12}
            className="grid sm:grid-cols-2 gap-8 md:gap-10"
          >
            {[
              {
                t: "Thoughtful execution",
                d: "We move quickly while keeping the work maintainable, readable, and reliable over time.",
              },
              {
                t: "Clear communication",
                d: "Direct conversations, practical feedback, and decisions explained without unnecessary complexity.",
              },
              {
                t: "Hands-on delivery",
                d: "The people involved in planning and discussions are directly involved in building the product.",
              },
              {
                t: "Strong foundations",
                d: "Well-structured systems, practical architecture choices, and technology selected for long-term stability.",
              },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div>
                  <h3 className="font-serif text-2xl">{v.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <Founder />
      {/* <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-18">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">By the numbers</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-10 md:gap-12">
            {[
              { n: "10+", t: "Products shipped" },
              { n: "5+", t: "Long-term partners" },
              { n: "3 yrs", t: "Building together" },
            ].map((s) => (
              <div key={s.t} className="border-t border-border/80 pt-8 sm:border-t-0 sm:pt-0">
                <p className="font-serif text-5xl md:text-6xl text-accent">{s.n}</p>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  {s.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
          <RevealAnimation>
            <>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Find us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 max-w-2xl text-balance">
                Based in Bengaluru, working with teams worldwide.
              </h2>
            </>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <div className="mt-8 overflow-hidden border border-border ring-1 ring-border/60">
              <iframe
                title="Sravan Tech Labs location"
                src="https://www.google.com/maps?q=Bengaluru%2C+India&output=embed"
                className="w-full h-[380px] md:h-[420px] grayscale contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
