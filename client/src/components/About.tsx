/* ============================================================
   About — Graphite Blueprint
   Two-column: narrative left, key facts right
   Blueprint structure: left rail, coordinate labels, asymmetric
   Cyan disciplined to key highlights only
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Eye, Database, Code2, Zap } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Eye size={16} />,
    label: "Computer Vision",
    desc: "OCR, image processing, grid detection",
    code: "01",
  },
  {
    icon: <Database size={16} />,
    label: "Data & APIs",
    desc: "REST APIs, MySQL, structured data",
    code: "02",
  },
  {
    icon: <Code2 size={16} />,
    label: "Algorithms",
    desc: "Backtracking, search, problem solving",
    code: "03",
  },
  {
    icon: <Zap size={16} />,
    label: "Fast Learner",
    desc: "Picks up what the job demands",
    code: "04",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: "oklch(0.175 0.01 255)" }}
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, oklch(0.78 0.18 200 / 40%), transparent 60%)" }}
      />

      <div className="container">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left: narrative — 3 cols */}
          <div
            className={`md:col-span-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.45 0.01 255)",
              }}
            >
              // about.me
            </p>
            <h2 className="section-heading text-3xl md:text-4xl mb-8">
              Who I Am
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "oklch(0.65 0.01 255)", fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                I'm Shaundre — an aspiring software developer based in Singapore who
                believes every problem has a solution. I don't specialise in one lane;
                I specialise in{" "}
                <strong style={{ color: "oklch(0.87 0.005 255)", fontWeight: 600 }}>
                  figuring it out
                </strong>
                . Whether that means learning a new framework overnight or reverse-engineering
                an API with no documentation.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="tech-tag">data</span>{" "}and{" "}
                <span className="tech-tag">technology</span>. I'm drawn to projects
                that require both analytical thinking and engineering execution — from
                training a computer vision model to building a searchable database
                that serves real users.
              </p>
              <p>
                I'm still exploring where I want to go deep, but I've learned that
                breadth is a superpower early in a career. I bring curiosity, adaptability,
                and a bias toward shipping.
              </p>
            </div>

            {/* GitHub bio quote */}
            <blockquote
              className="mt-8 pl-4 italic text-sm"
              style={{
                color: "oklch(0.52 0.01 255)",
                fontFamily: "'Inter', sans-serif",
                borderLeft: "2px solid oklch(0.35 0.01 255)",
              }}
            >
              "HR told me that a portfolio of my projects and whatever else looked
              interesting that I built at 2AM on a whim would help my hiring prospects."
              <br />
              <span
                className="not-italic mt-1 block text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.78 0.18 200)" }}
              >
                — @tofu-cmd
              </span>
            </blockquote>
          </div>

          {/* Right: highlights + facts — 2 cols */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Highlight cards */}
            <div className="space-y-3 mb-6">
              {HIGHLIGHTS.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded transition-all duration-200"
                  style={{
                    background: "oklch(0.205 0.01 255)",
                    border: "1px solid oklch(0.27 0.01 255)",
                    transitionDelay: `${i * 50}ms`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.35 0.01 255)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.27 0.01 255)";
                  }}
                >
                  <div
                    className="shrink-0 w-7 h-7 rounded flex items-center justify-center"
                    style={{
                      background: "oklch(0.235 0.01 255)",
                      color: "oklch(0.72 0.01 255)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3
                        className="font-semibold text-sm"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "oklch(0.87 0.005 255)",
                        }}
                      >
                        {item.label}
                      </h3>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "oklch(0.35 0.01 255)",
                        }}
                      >
                        {item.code}
                      </span>
                    </div>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div
              className="p-5 rounded"
              style={{
                background: "oklch(0.205 0.01 255)",
                border: "1px solid oklch(0.27 0.01 255)",
                borderTop: "2px solid oklch(0.78 0.18 200)",
              }}
            >
              <p
                className="text-xs font-medium mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.45 0.01 255)",
                }}
              >
                quick_facts.json
              </p>
              {[
                { key: "location", value: "Singapore (UTC+8)" },
                { key: "status", value: "Open to work" },
                { key: "focus", value: "Data & Tech" },
                { key: "approach", value: "Learn what's needed" },
              ].map(({ key, value }) => (
                <div
                  key={key}
                  className="flex items-center gap-3 py-2 border-b last:border-b-0 text-sm"
                  style={{ borderColor: "oklch(0.235 0.01 255)" }}
                >
                  <span
                    className="w-24 shrink-0 text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.52 0.01 255)",
                    }}
                  >
                    "{key}"
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.82 0.005 255)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
