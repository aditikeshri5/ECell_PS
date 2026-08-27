import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 20, suffix: "+", label: "Challenges" },
  { value: 7, suffix: "", label: "Domains" },
  { value: 100, suffix: "%", label: "Real-World Focus" },
  { value: null, suffix: "", label: "Possibilities", display: "\u221E" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1000;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-dark-blue/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-3xl md:text-4xl font-bold text-cyan">
              {stat.display ? stat.display : <Counter target={stat.value} suffix={stat.suffix} />}
            </div>
            <div className="mt-1.5 text-xs md:text-sm tracking-wide uppercase text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
