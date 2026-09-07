import { useState } from "react";
import { motion } from "framer-motion";
import { vehicles } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

const tabs = [
  { id: "all", label: "All vehicles" },
  { id: "rickshaw", label: "E-Rickshaw" },
  { id: "loader", label: "E-Loader" },
  { id: "scooter", label: "Prakriti E-Scooter" },
] as const;

export function ProductShowcase() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const list = tab === "all" ? vehicles : vehicles.filter((v) => v.category === tab);

  return (
    <section id="vehicles" className="relative bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>Product range</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4 max-w-3xl">
            The right vehicle for the right journey.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mt-10 mb-12">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-full text-sm font-mono tracking-wide transition-colors border ${
                  tab === t.id
                    ? "bg-paper text-ink border-paper"
                    : "border-white/15 text-paper/60 hover:text-paper hover:border-white/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((v, i) => (
            <Reveal key={v.id} delay={0.05 * (i % 3)}>
              <motion.a
                href={v.ctaUrl}
                target="_blank"
                rel="noreferrer"
                whileHover="hover"
                className="group relative block h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-ink-soft"
              >
                <motion.img
                  src={v.image}
                  alt={v.name}
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-volt bg-ink/60 backdrop-blur px-2.5 py-1 rounded-full">
                      {v.line}
                    </span>
                    <motion.span
                      variants={{ hover: { x: 4, rotate: 45 } }}
                      className="w-8 h-8 rounded-full border border-white/30 grid place-items-center text-paper flex-shrink-0"
                    >
                      →
                    </motion.span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-paper">{v.name}</h3>
                    <p className="font-mono text-xs text-ember mt-1 tracking-wide">{v.tagline}</p>
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      variants={{ hover: { height: "auto", opacity: 1 } }}
                      transition={{ duration: 0.4 }}
                      className="text-sm text-paper/70 mt-3 overflow-hidden leading-relaxed"
                    >
                      {v.description}
                    </motion.p>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
