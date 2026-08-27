import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LOGOS = [
  { src: "/logos/eis-logo.jpeg", alt: "Entrepreneur & Innovation Society" },
  { src: "/logos/iic-logo.jpeg", alt: "Institution's Innovation Council" },
  { src: "/logos/ecell-logo.png", alt: "E-Cell" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Challenges", href: "#challenges" },
  { label: "Domains", href: "#domains" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/85 backdrop-blur-md border-b border-white/10 shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 shrink-0">
            <img
              src={LOGOS[1].src}
              alt={LOGOS[1].alt}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-lg font-display font-semibold tracking-tight text-ink">
              INNOVATE 360<span className="text-cyan">&deg;</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <img
              src={LOGOS[0].src}
              alt={LOGOS[0].alt}
              className="h-7 md:h-9 w-auto object-contain rounded-sm bg-ink/90 px-1.5 py-1"
            />
            <img
              src={LOGOS[2].src}
              alt={LOGOS[2].alt}
              className="h-7 md:h-9 w-auto object-contain rounded-sm bg-ink/90 px-1.5 py-1"
            />
            <a
              href="#challenges"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-primary-blue hover:bg-electric-blue transition-colors px-4 py-2 text-sm font-semibold text-ink"
            >
              Explore Challenges
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-dark-blue/95 backdrop-blur-md border-t border-white/10 px-5 py-6">
          <div className="flex items-center gap-4 mb-6">
            <img src={LOGOS[0].src} alt={LOGOS[0].alt} className="h-8 w-auto rounded-sm bg-ink/90 px-1 py-0.5" />
            <img src={LOGOS[1].src} alt={LOGOS[1].alt} className="h-8 w-auto" />
            <img src={LOGOS[2].src} alt={LOGOS[2].alt} className="h-8 w-auto rounded-sm bg-ink/90 px-1 py-0.5" />
          </div>
          <nav className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#challenges"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-blue px-4 py-2.5 text-sm font-semibold text-ink"
          >
            Explore Challenges
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
