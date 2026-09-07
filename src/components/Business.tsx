import { businessBenefits } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

export function Business() {
  return (
    <section className="relative bg-ink-soft py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <Eyebrow>Business asset</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4">
            Your vehicle should work for you.
          </h2>
          <p className="text-paper/60 mt-6 max-w-md text-sm md:text-base leading-relaxed">
            For many owners, a Big Bull isn't just transport — it's an income-generating asset run
            every day on real routes. The vehicle, its parts and its service network are built with
            that in mind.
          </p>
        </Reveal>

        <div className="space-y-0 border-t border-white/10">
          {businessBenefits.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-white/10">
                <h3 className="font-display font-semibold text-lg text-paper w-full sm:w-56 flex-shrink-0">
                  {b.title}
                </h3>
                <p className="text-sm text-paper/60 leading-relaxed">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
