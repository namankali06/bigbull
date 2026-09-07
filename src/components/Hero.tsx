import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { company, heroImage } from "../data/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Big Bull B5 electric rickshaw"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-volt mb-6"
        >
          ICAT-approved · Made in India
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[13vw] sm:text-[9vw] md:text-[6.2vw] leading-[0.92] tracking-tight text-paper"
          >
            Built for the road.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.52, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[13vw] sm:text-[9vw] md:text-[6.2vw] leading-[0.92] tracking-tight text-ember"
          >
            Engineered for business.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-7 max-w-md text-paper/70 text-base md:text-lg"
        >
          {company.tagline} Electric mobility designed for Indian roads, everyday journeys and
          real-world business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#vehicles"
            className="bg-paper text-ink font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-ember hover:text-ink transition-colors"
          >
            Explore vehicles
          </a>
          <a
            href={company.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-paper/30 text-paper text-sm px-7 py-3.5 rounded-full hover:border-paper/70 transition-colors"
          >
            Book a test ride
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex flex-col items-center gap-2 text-paper/50"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-paper/40"
        />
      </motion.div>
    </section>
  );
}
