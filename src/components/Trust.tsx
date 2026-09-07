import { trustPoints } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

export function Trust() {
  return (
    <section className="relative bg-ink py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>Why Big Bull</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4 max-w-2xl">
            Trust, verified the hard way.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 border-t border-white/10">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={0.04 * i}>
              <div className="border-b border-white/10 md:odd:border-r py-8 md:pr-10">
                <span className="font-mono text-xs text-ember tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-semibold text-xl text-paper mt-3">{t.title}</h3>
                <p className="text-sm text-paper/60 mt-2 leading-relaxed max-w-md">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
