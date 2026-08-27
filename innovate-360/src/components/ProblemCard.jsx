import { ArrowRight } from "lucide-react";

const DIFFICULTY_STYLES = {
  Moderate: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  Hard: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  Advanced: "bg-rose-400/10 text-rose-300 border-rose-400/30",
};

export default function ProblemCard({ problem, onViewDetails }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center justify-between mb-4">
        <span className="font-display text-sm font-semibold text-cyan/80 tracking-wide">
          {problem.id}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${DIFFICULTY_STYLES[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>
      </div>

      <span className="inline-block mb-3 w-fit rounded-md bg-electric-blue/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-electric-blue border border-electric-blue/20">
        {problem.domain}
      </span>

      <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
        {problem.title}
      </h3>

      <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
        {problem.shortDescription}
      </p>

      <button
        onClick={() => onViewDetails(problem)}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan group-hover:gap-2.5 transition-all"
      >
        View Details
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
