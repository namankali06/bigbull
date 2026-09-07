import { Reveal, Eyebrow } from "./Reveal";

const items = [
  { title: "Quality inspection", copy: "Every vehicle passes through an in-house inspection team before it reaches a buyer." },
  { title: "Genuine spare parts", copy: "Babagold supplies genuine, quality spare parts for every e-rickshaw model in the range." },
  { title: "Troubleshooting", copy: "Customer feedback is routed to a dedicated support process the brand aims to resolve within 24 hours." },
  { title: "R&D-backed upgrades", copy: "A dedicated R&D wing works on continuous upgrades to the vehicles already on the road." },
];

export function Service() {
  return (
    <section id="service" className="relative bg-ink py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <Reveal>
          <Eyebrow>After the sale</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4">
            We're with you after the sale.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.06 * i}>
              <div className="border border-white/10 rounded-xl p-6 h-full">
                <h3 className="font-display font-semibold text-lg text-paper">{it.title}</h3>
                <p className="text-sm text-paper/60 mt-2 leading-relaxed">{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
