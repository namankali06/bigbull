import { useState } from "react";
import { motion } from "framer-motion";
import { company, dealerStates } from "../data/content";
import { Reveal, Eyebrow } from "./Reveal";

export function Dealership() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="dealership" className="relative bg-ink-soft py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <Eyebrow>Become a partner</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight text-paper mt-4">
              Build your business with Big Bull.
            </h2>
            <p className="text-paper/60 mt-6 max-w-md text-sm md:text-base leading-relaxed">
              Join the electric mobility ecosystem with Big Bull. Dealers and distributors already
              operate across {dealerStates.length} states.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-2">
              {dealerStates.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/15 text-paper/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href={company.dealershipUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-ember hover:bg-ember-dim text-ink font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Official dealership enquiry ↗
              </a>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-sm text-paper/60 hover:text-paper">
                or call {company.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="bg-ink rounded-2xl border border-white/10 p-7 md:p-9">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full min-h-[380px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-volt/15 text-volt grid place-items-center text-2xl mb-4">
                  ✓
                </div>
                <h3 className="font-display font-semibold text-xl text-paper">Enquiry received</h3>
                <p className="text-sm text-paper/60 mt-2 max-w-xs">
                  Thanks for reaching out. The Big Bull team typically responds within a couple of
                  business days.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="font-display font-semibold text-lg text-paper mb-2">Dealership enquiry</h3>
                <Field label="Full name" placeholder="Your name" required />
                <Field label="Phone" placeholder="+91" type="tel" required />
                <Field label="City" placeholder="Your city" required />
                <div>
                  <label className="text-xs font-mono tracking-wide text-paper/50 uppercase">
                    Business type
                  </label>
                  <select
                    required
                    className="mt-2 w-full bg-ink-soft border border-white/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-ember"
                  >
                    <option value="">Select an option</option>
                    <option>New dealership</option>
                    <option>Distributor</option>
                    <option>Service centre</option>
                    <option>Fleet operator</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wide text-paper/50 uppercase">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business"
                    className="mt-2 w-full bg-ink-soft border border-white/15 rounded-lg px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-ember resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-paper hover:bg-ember text-ink font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
                >
                  Submit enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-mono tracking-wide text-paper/50 uppercase">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-ink-soft border border-white/15 rounded-lg px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-ember"
      />
    </div>
  );
}
