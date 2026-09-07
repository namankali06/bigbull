import { company, vehicles } from "../data/content";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const bg = vehicles.find((v) => v.id === "b6")?.image ?? vehicles[0].image;
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img src={bg} alt="Big Bull electric rickshaw" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20">
        <Reveal>
          <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight text-paper">
            Ready to
            <br />
            move electric?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={company.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-ember hover:bg-ember-dim text-ink font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Book a test ride
            </a>
            <a
              href={company.dealershipUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-paper/30 text-paper text-sm px-7 py-3.5 rounded-full hover:border-paper/70 transition-colors"
            >
              Become a dealer
            </a>
            <a
              href="#contact"
              className="border border-paper/30 text-paper text-sm px-7 py-3.5 rounded-full hover:border-paper/70 transition-colors"
            >
              Contact Big Bull
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
