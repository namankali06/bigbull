import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { explodedComponents } from "../data/content";
import { Eyebrow } from "./Reveal";

const N = explodedComponents.length; // 7

export function ExplodedView() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 0 -> assembled, 1 -> fully exploded + labels done
  const [activeIndex, setActiveIndex] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // reserve first 10% for the assembled hold, last 8% for outro headline
    const t = (p - 0.1) / 0.82;
    const idx = Math.floor(t * N);
    setActiveIndex(Math.min(Math.max(idx, -1), N - 1));
  });

  const roofY = useTransform(scrollYProgress, [0.12, 0.4], [0, -130]);
  const roofOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 1]);
  const bodyY = useTransform(scrollYProgress, [0.12, 0.4], [0, -50]);
  const chassisY = useTransform(scrollYProgress, [0.12, 0.4], [0, 4]);
  const batteryY = useTransform(scrollYProgress, [0.28, 0.55], [0, 90]);
  const controllerXY = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const motorX = useTransform(scrollYProgress, [0.5, 0.7], [0, 90]);
  const suspensionY = useTransform(scrollYProgress, [0.58, 0.78], [0, 40]);
  const wheelsY = useTransform(scrollYProgress, [0.66, 0.88], [0, 170]);
  const wheelsX = useTransform(scrollYProgress, [0.66, 0.88], [0, 40]);

  const outroOpacity = useTransform(scrollYProgress, [0.9, 0.97], [0, 1]);
  const diagramOpacity = useTransform(scrollYProgress, [0.9, 0.98], [1, 0]);

  const controllerY = useTransform(controllerXY, [0, 1], [0, 55]);
  const controllerX = useTransform(controllerXY, [0, 1], [0, 60]);

  return (
    <section ref={sectionRef} id="engineering" className="relative bg-ink-soft" style={{ height: "420vh" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-10 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8">
          {/* SVG schematic */}
          <motion.div style={{ opacity: diagramOpacity }} className="relative h-[52vh] lg:h-[70vh] order-2 lg:order-1">
            <svg viewBox="0 0 800 520" className="w-full h-full" fill="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" stroke="rgba(244,241,233,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="800" height="520" fill="url(#grid)" />

              {/* chassis (spine) */}
              <motion.g style={{ y: chassisY }}>
                <rect x="130" y="345" width="540" height="26" rx="4" stroke="#8b8a80" strokeWidth="2" />
                <line x1="150" y1="371" x2="150" y2="400" stroke="#8b8a80" strokeWidth="2" />
                <line x1="640" y1="371" x2="640" y2="400" stroke="#8b8a80" strokeWidth="2" />
              </motion.g>

              {/* suspension */}
              <motion.g style={{ y: suspensionY }}>
                <path d="M170 400 L170 420 M180 405 L180 425" stroke="#d9732e" strokeWidth="3" strokeLinecap="round" />
                <path d="M600 400 L600 420 M610 405 L610 425" stroke="#d9732e" strokeWidth="3" strokeLinecap="round" />
              </motion.g>

              {/* wheels */}
              <motion.g style={{ y: wheelsY, x: useTransform(wheelsX, (v) => -v) }}>
                <circle cx="180" cy="452" r="52" stroke="#f4f1e9" strokeWidth="3" />
                <circle cx="180" cy="452" r="14" stroke="#f4f1e9" strokeWidth="2" />
              </motion.g>
              <motion.g style={{ y: wheelsY, x: wheelsX }}>
                <circle cx="610" cy="452" r="52" stroke="#f4f1e9" strokeWidth="3" />
                <circle cx="610" cy="452" r="14" stroke="#f4f1e9" strokeWidth="2" />
              </motion.g>

              {/* motor (hub area) */}
              <motion.g style={{ x: motorX }}>
                <circle cx="610" cy="452" r="26" fill="#8ee3a5" fillOpacity="0.15" stroke="#8ee3a5" strokeWidth="2" />
              </motion.g>

              {/* battery */}
              <motion.g style={{ y: batteryY }}>
                <rect x="330" y="300" width="140" height="40" rx="4" stroke="#8ee3a5" strokeWidth="2" />
                <line x1="350" y1="300" x2="350" y2="340" stroke="#8ee3a5" strokeWidth="1.5" opacity="0.6" />
                <line x1="400" y1="300" x2="400" y2="340" stroke="#8ee3a5" strokeWidth="1.5" opacity="0.6" />
                <line x1="450" y1="300" x2="450" y2="340" stroke="#8ee3a5" strokeWidth="1.5" opacity="0.6" />
              </motion.g>

              {/* controller */}
              <motion.g style={{ y: controllerY, x: controllerX }}>
                <rect x="490" y="308" width="55" height="30" rx="3" stroke="#d9732e" strokeWidth="2" />
              </motion.g>

              {/* body shell */}
              <motion.g style={{ y: bodyY }}>
                <path
                  d="M150 345 L150 220 Q150 190 190 190 L560 190 Q610 190 610 240 L610 345"
                  stroke="#f4f1e9"
                  strokeWidth="2.5"
                />
                <line x1="150" y1="280" x2="230" y2="280" stroke="#f4f1e9" strokeWidth="1.5" opacity="0.5" />
                <line x1="230" y1="190" x2="230" y2="345" stroke="#f4f1e9" strokeWidth="1.5" opacity="0.35" />
              </motion.g>

              {/* roof / canopy */}
              <motion.g style={{ y: roofY, opacity: roofOpacity }}>
                <path
                  d="M170 190 Q170 130 260 122 L520 122 Q600 130 600 190"
                  stroke="#f4f1e9"
                  strokeWidth="2.5"
                />
              </motion.g>
            </svg>
          </motion.div>

          {/* label / copy stepper */}
          <div className="order-1 lg:order-2">
            <Eyebrow>Signature interaction — scroll to explode</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight text-paper mt-4">
              Every part has a purpose.
            </h2>
            <p className="text-paper/60 mt-4 max-w-md text-sm md:text-base">
              An original engineering schematic — not a photograph — walking through the parts that
              carry passengers and cargo every day. Keep scrolling to separate the vehicle; scroll back
              to reassemble it.
            </p>

            <div className="mt-10 space-y-1 border-t border-white/10">
              {explodedComponents.map((c, i) => {
                const active = i === activeIndex;
                const done = i < activeIndex;
                return (
                  <motion.div
                    key={c.id}
                    animate={{ opacity: active ? 1 : done ? 0.35 : 0.25 }}
                    className="border-b border-white/10 py-4 flex gap-4 items-start"
                  >
                    <span
                      className={`font-mono text-xs mt-0.5 ${active ? "text-ember" : "text-steel"}`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-display font-semibold text-base md:text-lg ${
                          active ? "text-paper" : "text-paper/70"
                        }`}
                      >
                        {c.label}
                      </h3>
                      {active && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm text-paper/60 mt-1.5 leading-relaxed"
                        >
                          {c.copy}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          style={{ opacity: outroOpacity }}
          className="pointer-events-none absolute inset-0 grid place-items-center bg-ink-soft"
        >
          <h2 className="font-display font-bold text-4xl md:text-7xl text-paper text-center px-6">
            Every part has a purpose.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
