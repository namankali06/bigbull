import { blogPosts } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

export function Blog() {
  return (
    <section className="relative bg-ink-soft py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>From the journal</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4 max-w-2xl">
            Notes on electric mobility.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <a href={p.url} target="_blank" rel="noreferrer" className="group block">
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mt-4 font-mono text-xs text-steel tracking-wide">
                  <span>{p.date}</span>
                  <span className="w-1 h-1 rounded-full bg-steel" />
                  <span>{p.category}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-paper mt-2 group-hover:text-ember transition-colors leading-snug">
                  {p.title}
                </h3>
                <span className="inline-block mt-2 text-sm text-paper/50 group-hover:text-paper transition-colors">
                  Read more →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
