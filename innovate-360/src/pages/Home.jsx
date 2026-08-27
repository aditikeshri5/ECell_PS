import { useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Filters from "../components/Filters.jsx";
import ProblemGrid from "../components/ProblemGrid.jsx";
import ProblemDetails from "../components/ProblemDetails.jsx";
import Footer from "../components/Footer.jsx";
import problemStatements from "../data/problemStatements.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [selectedProblem, setSelectedProblem] = useState(null);

  const filteredProblems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return problemStatements.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      const matchesDomain = activeDomain === "All" || p.domain === activeDomain;
      const matchesDifficulty =
        activeDifficulty === "All" || p.difficulty === activeDifficulty;
      return matchesQuery && matchesDomain && matchesDifficulty;
    });
  }, [query, activeDomain, activeDifficulty]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />

        <section id="challenges" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                Problem Statement Hub
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">
                The Challenge Arena
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-muted">
                Twenty real-world problem statements, hand-picked for
                technical depth and practical feasibility. Search, filter,
                and dive into the ones that match your team&apos;s strengths.
              </p>
            </div>

            <Filters
              query={query}
              onQueryChange={setQuery}
              activeDomain={activeDomain}
              onDomainChange={setActiveDomain}
              activeDifficulty={activeDifficulty}
              onDifficultyChange={setActiveDifficulty}
            />

            <div id="domains">
              <ProblemGrid
                problems={filteredProblems}
                onViewDetails={setSelectedProblem}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProblem && (
        <ProblemDetails
          problem={selectedProblem}
          onClose={() => setSelectedProblem(null)}
        />
      )}
    </div>
  );
}
