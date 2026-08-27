import ProblemCard from "./ProblemCard.jsx";
import { SearchX } from "lucide-react";

export default function ProblemGrid({ problems, onViewDetails }) {
  if (problems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <SearchX size={40} className="text-muted mb-4" />
        <p className="text-lg font-medium text-ink mb-1">
          No matching problem statements
        </p>
        <p className="text-sm text-muted">
          Try a different keyword or clear a filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
