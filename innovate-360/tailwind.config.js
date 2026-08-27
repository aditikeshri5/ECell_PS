/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061A40",
        "dark-blue": "#0B2348",
        "primary-blue": "#0B5CFF",
        "electric-blue": "#2563EB",
        cyan: "#38BDF8",
        ink: "#F8FAFC",
        muted: "#A8B8D8",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.25)",
        card: "0 10px 30px rgba(2, 8, 23, 0.45)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
