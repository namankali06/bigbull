import { company, dealerStates } from "../data/content";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-ink border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-display font-bold text-2xl text-paper">BIG BULL</span>
            <p className="text-sm text-paper/50 mt-4 max-w-xs leading-relaxed">
              ICAT-approved manufacturer of electric rickshaws, loaders and — under the Prakriti
              brand — electric scooters. Manufactured in {company.manufacturing}.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(company.social).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-paper/60 hover:text-paper hover:border-white/40 transition-colors text-xs font-mono uppercase"
                >
                  {k[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-steel mb-4">Contact</h4>
            <p className="text-sm text-paper/70 leading-relaxed">{company.office}</p>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block text-sm text-paper/70 mt-3 hover:text-ember">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block text-sm text-paper/70 mt-1 hover:text-ember">
              {company.email}
            </a>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-steel mb-4">Elsewhere</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={company.scooterSite} target="_blank" rel="noreferrer" className="text-paper/70 hover:text-ember">Prakriti E-Scooter</a></li>
              <li><a href={company.sparePartsSite} target="_blank" rel="noreferrer" className="text-paper/70 hover:text-ember">Spare parts (Babagold)</a></li>
              <li><a href={company.dealershipUrl} target="_blank" rel="noreferrer" className="text-paper/70 hover:text-ember">Dealership enquiry</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-paper/40 font-mono">
            © {new Date().getFullYear()} Big Bull Traders Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-paper/40 font-mono">
            {dealerStates.length} states covered — {dealerStates.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
