import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../data/content";

const links = [
  { label: "Vehicles", href: "#vehicles" },
  { label: "Engineering", href: "#engineering" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Dealership", href: "#dealership" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-gradient-to-b from-ink/60 to-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="font-display font-700 tracking-tight text-paper flex items-baseline gap-2">
          <span className="text-xl md:text-2xl font-bold">BIG BULL</span>
          <span className="hidden sm:inline text-[10px] font-mono tracking-[0.3em] text-steel uppercase">
            Electric
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper/70 hover:text-paper transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-ember hover:bg-ember-dim text-ink font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Book a test ride
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-white/20 text-paper"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative w-4 h-3">
              <span
                className={`absolute left-0 top-0 w-4 h-px bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 w-4 h-px bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-paper/80 border-b border-white/5 text-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={company.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 bg-ember text-ink font-semibold text-center text-sm px-5 py-3 rounded-full"
              >
                Book a test ride
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
