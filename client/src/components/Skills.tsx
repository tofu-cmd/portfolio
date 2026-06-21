/* ============================================================
   Skills — Graphite Blueprint
   Tag-cloud with size variation — tools acquired as needed
   Blueprint structure: left rail, coordinate labels, asymmetric
   ============================================================ */
import { useEffect, useRef, useState } from "react";

// Size reflects how much I've used/practiced the skill
const SKILLS = [
  { name: "Python", size: "xl", category: "lang" },
  { name: "REST API", size: "xl", category: "web" },
  { name: "JavaScript", size: "lg", category: "lang" },
  { name: "MySQL", size: "lg", category: "data" },
  { name: "OpenCV", size: "lg", category: "vision" },
  { name: "Git", size: "lg", category: "tools" },
  { name: "Algorithms", size: "lg", category: "cs" },
  { name: "Java", size: "md", category: "lang" },
  { name: "OCR", size: "md", category: "vision" },
  { name: "Data Structures", size: "md", category: "cs" },
  { name: "HTML/CSS", size: "md", category: "web" },
  { name: "JSON", size: "sm", category: "web" },
  { name: "NumPy", size: "sm", category: "data" },
  { name: "Backtracking", size: "sm", category: "cs" },
  { name: "Web Scraping", size: "sm", category: "web" },
  { name: "Linux", size: "sm", category: "tools" },
  { name: "GitHub", size: "sm", category: "tools" },
  { name: "HTTP", size: "sm", category: "web" },
];

const CATEGORY_COLORS: Record<string, string> = {
  lang: "oklch(0.78 0.18 200)",      // cyan — languages
  web: "oklch(0.72 0.14 220)",       // teal — web/api
  data: "oklch(0.75 0.12 260)",      // blue — data
  vision: "oklch(0.78 0.18 200)",    // cyan — vision
  cs: "oklch(0.72 0.14 220)",        // teal — CS
  tools: "oklch(0.65 0.08 255)",     // muted blue — tools
};

const SIZE_STYLES: Record<string, { fontSize: string; padding: string; fontWeight: string }> = {
  xl: { fontSize: "1rem",    padding: "0.45rem 1rem",    fontWeight: "700" },
  lg: { fontSize: "0.875rem", padding: "0.4rem 0.85rem", fontWeight: "600" },
  md: { fontSize: "0.8rem",  padding: "0.35rem 0.7rem",  fontWeight: "500" },
  sm: { fontSize: "0.72rem", padding: "0.3rem 0.6rem",   fontWeight: "400" },
};

const CATEGORY_LABELS: Record<string, string> = {
  lang: "Languages",
  web: "Web & APIs",
  data: "Data",
  vision: "Computer Vision",
  cs: "CS Fundamentals",
  tools: "Tooling",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: "oklch(0.175 0.01 255)" }}
    >
      {/* Left rail — blueprint motif */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.78 0.18 200 / 30%) 30%, oklch(0.78 0.18 200 / 30%) 70%, transparent)" }}
      />

      <div className="container">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.55 0.01 255)",
            }}
          >
            // skills.stack
          </p>
          <h2 className="section-heading text-3xl md:text-4xl mb-6">
            Tools of the Trade
          </h2>
          <p
            className="text-base max-w-lg"
            style={{ color: "oklch(0.62 0.01 255)", fontFamily: "'Inter', sans-serif" }}
          >
            I pick up what the job demands. Size reflects depth of practice —
            the list grows with every project.
          </p>
        </div>

        {/* Category filter */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className="px-3 py-1 rounded text-xs font-medium transition-all duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: activeCategory === null ? "oklch(0.78 0.18 200 / 15%)" : "oklch(0.205 0.01 255)",
              color: activeCategory === null ? "oklch(0.78 0.18 200)" : "oklch(0.55 0.01 255)",
              border: `1px solid ${activeCategory === null ? "oklch(0.78 0.18 200 / 40%)" : "oklch(0.27 0.01 255)"}`,
            }}
          >
            all
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className="px-3 py-1 rounded text-xs font-medium transition-all duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: activeCategory === cat ? "oklch(0.78 0.18 200 / 15%)" : "oklch(0.205 0.01 255)",
                color: activeCategory === cat ? "oklch(0.78 0.18 200)" : "oklch(0.55 0.01 255)",
                border: `1px solid ${activeCategory === cat ? "oklch(0.78 0.18 200 / 40%)" : "oklch(0.27 0.01 255)"}`,
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Tag cloud */}
        <div
          className={`flex flex-wrap gap-3 items-end transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ minHeight: "160px" }}
        >
          {SKILLS.map((skill, i) => {
            const isActive = !activeCategory || activeCategory === skill.category;
            const color = CATEGORY_COLORS[skill.category];
            const sizeStyle = SIZE_STYLES[skill.size];
            return (
              <span
                key={skill.name}
                className="rounded transition-all duration-300"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  ...sizeStyle,
                  background: isActive ? `${color}12` : "oklch(0.205 0.01 255 / 40%)",
                  color: isActive ? color : "oklch(0.4 0.01 255)",
                  border: `1px solid ${isActive ? `${color}35` : "oklch(0.27 0.01 255 / 40%)"}`,
                  opacity: isActive ? 1 : 0.35,
                  transitionDelay: `${i * 20}ms`,
                  cursor: "default",
                  transform: isActive ? "scale(1)" : "scale(0.97)",
                }}
                onMouseEnter={(e) => {
                  if (isActive) {
                    (e.currentTarget as HTMLElement).style.background = `${color}22`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (isActive) {
                    (e.currentTarget as HTMLElement).style.background = `${color}12`;
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>

        {/* Legend */}
        <div
          className={`mt-10 flex flex-wrap gap-x-6 gap-y-2 transition-all duration-700 delay-400 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {(["xl", "lg", "md", "sm"] as const).map((size, i) => (
            <div key={size} className="flex items-center gap-2">
              <span
                className="rounded"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  ...SIZE_STYLES[size],
                  background: "oklch(0.78 0.18 200 / 8%)",
                  color: "oklch(0.78 0.18 200 / 60%)",
                  border: "1px solid oklch(0.78 0.18 200 / 15%)",
                }}
              >
                {["core", "solid", "working", "learning"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Learning note */}
        <div
          className={`mt-10 flex items-start gap-3 p-5 rounded transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "oklch(0.205 0.01 255)",
            borderLeft: "2px solid oklch(0.78 0.18 200 / 40%)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "oklch(0.65 0.01 255)", fontFamily: "'Inter', sans-serif" }}
          >
            <span
              style={{ color: "oklch(0.87 0.005 255)", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Still exploring.{" "}
            </span>
            I don't claim expert status in any single domain yet — what I bring is the ability
            to learn fast and deliver. Give me a problem and I'll find the tools to solve it.
          </p>
        </div>
      </div>
    </section>
  );
}
