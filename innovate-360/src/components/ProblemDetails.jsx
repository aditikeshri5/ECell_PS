import { useEffect } from "react";
import { X, Lightbulb, Target, Cpu, TrendingUp, ShieldAlert } from "lucide-react";

export default function ProblemDetails({ problem, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!problem) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-dark-blue shadow-card animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-dark-blue/95 backdrop-blur-md px-6 py-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-sm font-semibold text-cyan/80">
                {problem.id}
              </span>
              <span className="rounded-full bg-electric-blue/10 border border-electric-blue/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-electric-blue">
                {problem.domain}
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                {problem.difficulty}
              </span>
            </div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-ink leading-snug">
              {problem.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-muted hover:text-ink hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <Section icon={Target} title="Problem Statement">
            {problem.problemStatement}
          </Section>

          <Section icon={Lightbulb} title="Why It Matters">
            {problem.whyItMatters}
          </Section>

          <Section icon={Cpu} title="Expected Solution">
            {problem.expectedSolution}
          </Section>

          <div>
            <SectionHeading icon={Cpu} title="Suggested Technology Areas" />
            <div className="flex flex-wrap gap-2 mt-3">
              {problem.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cyan/20 bg-cyan/5 px-3 py-1.5 text-xs font-medium text-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Section icon={TrendingUp} title="Expected Impact">
            {problem.expectedImpact}
          </Section>

          <Section icon={ShieldAlert} title="Constraints & Considerations">
            {problem.constraints}
          </Section>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={16} className="text-cyan" />
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </h3>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div>
      <SectionHeading icon={icon} title={title} />
      <p className="mt-2 text-sm leading-relaxed text-ink/90">{children}</p>
    </div>
  );
}
