import { domains } from "../data/problemStatements.js";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-dark-blue/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logos/iic-logo.jpeg"
              alt="Institution's Innovation Council"
              className="h-9 w-auto"
            />
            <span className="font-display text-lg font-semibold text-ink">
              INNOVATE 360<span className="text-cyan">&deg;</span>
            </span>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            A technical innovation challenge connecting real-world problems
            with the next generation of technologists. From problems to
            possibilities.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              src="/logos/eis-logo.jpeg"
              alt="Entrepreneur & Innovation Society"
              className="h-8 w-auto rounded-sm bg-ink/90 px-1 py-0.5"
            />
            <img
              src="/logos/ecell-logo.png"
              alt="E-Cell"
              className="h-8 w-auto rounded-sm bg-ink/90 px-1 py-0.5"
            />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-ink/80">
            <li><a href="#home" className="hover:text-cyan transition-colors">Home</a></li>
            <li><a href="#challenges" className="hover:text-cyan transition-colors">Challenges</a></li>
            <li><a href="#domains" className="hover:text-cyan transition-colors">Domains</a></li>
            <li><a href="#about" className="hover:text-cyan transition-colors">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-4">
            Domains
          </h4>
          <ul className="space-y-2.5 text-sm text-ink/80">
            {domains.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} INNOVATE 360&deg;. Organized in
          collaboration with the Institution&apos;s Innovation Council, the
          Entrepreneur &amp; Innovation Society, and E-Cell.
        </p>
      </div>
    </footer>
  );
}
