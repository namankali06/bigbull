import { manufacturingStages, company } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

export function Manufacturing() {
  return (
    <section id="manufacturing" className="relative bg-ink py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>From design to delivery</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4 max-w-2xl">
            Engineered for real-world India.
          </h2>
          <p className="text-paper/60 mt-5 max-w-lg text-sm md:text-base">
            Every Big Bull vehicle passes through five stages, built in-house at facilities in{" "}
            {company.manufacturing}.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {manufacturingStages.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="relative pl-6 md:pl-0">
                  <div className="hidden md:block w-3 h-3 rounded-full bg-ember mb-6 relative z-10" />
                  <span className="font-mono text-3xl text-steel-dim block md:mb-3">{s.n}</span>
                  <h3 className="font-display font-semibold text-lg text-paper">{s.title}</h3>
                  <p className="text-sm text-paper/55 mt-2 leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
