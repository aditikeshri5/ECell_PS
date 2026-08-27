import { Search } from "lucide-react";
import { domains, difficulties } from "../data/problemStatements.js";

export default function Filters({
  query,
  onQueryChange,
  activeDomain,
  onDomainChange,
  activeDifficulty,
  onDifficultyChange,
}) {
  return (
    <div className="mb-10 space-y-5">
      <div className="relative max-w-xl mx-auto">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by title, PS ID, domain or keyword..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition-all"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          {["All", ...domains].map((domain) => (
            <button
              key={domain}
              onClick={() => onDomainChange(domain)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all border ${
                activeDomain === domain
                  ? "bg-primary-blue border-primary-blue text-ink"
                  : "border-white/10 text-muted hover:text-ink hover:border-cyan/30"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {["All", ...difficulties].map((level) => (
          <button
            key={level}
            onClick={() => onDifficultyChange(level)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all border ${
              activeDifficulty === level
                ? "bg-cyan/20 border-cyan/50 text-cyan"
                : "border-white/10 text-muted hover:text-ink hover:border-cyan/30"
            }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}
