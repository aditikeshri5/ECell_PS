import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary-blue/20 blur-[120px]" />
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-cyan/10 blur-[100px] animate-float-slow" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan uppercase">
            20 Problem Statements &middot; 7 Domains &middot; 1 Challenge
          </span>
        </div>

        <h1
          className="mt-8 font-display font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
        >
          INNOVATE 360<span className="text-cyan">&deg;</span>
        </h1>

        <p
          className="mt-4 text-xl md:text-2xl font-display font-medium text-electric-blue animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
        >
          From Problems to Possibilities
        </p>

        <p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
        >
          Explore real-world challenges across AI, healthcare, agriculture,
          environment, smart cities, education and cybersecurity &mdash; and
          transform them into meaningful technological solutions.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
        >
          <a
            href="#challenges"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary-blue hover:bg-electric-blue transition-all px-7 py-3.5 text-sm font-semibold tracking-wide uppercase shadow-glow"
          >
            Explore Problem Statements
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-cyan/40 hover:bg-white/5 transition-all px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-ink"
          >
            <PlayCircle size={18} />
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
