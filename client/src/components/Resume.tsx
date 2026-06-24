/* ============================================================
   Resume — Graphite Blueprint
   Clean resume view: education, experience, skills summary
   No placeholder-looking copy. Blueprint structure.
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "Information Technology",
    institution: "Available on request",
    period: "In progress",
    note: null,
  },
];

const EXPERIENCE = [
  {
    role: "Independent Developer",
    company: "Self-directed Projects",
    period: "2024 – Present",
    points: [
      "Built Sudoku-Buster: a computer vision + OCR pipeline that detects, reads, and solves Sudoku puzzles from images. Implemented grid detection, digit recognition, and a backtracking solver in Python with OpenCV.",
      "Built Lorcana-DB: a searchable card database web app consuming the Disney Lorcana REST API. Designed a responsive UI with search, filtering, and detailed card views.",
    ],
  },
];

const CORE_SKILLS = [
  "Python", "JavaScript", "Java", "MySQL", "REST APIs",
  "OpenCV", "OCR", "Git", "Algorithms", "Data Structures",
];

export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: "oklch(0.195 0.01 255)" }}
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, oklch(0.78 0.18 200 / 40%), transparent 60%)" }}
      />

      <div className="container">
        {/* Header */}
        <div
          className={`mb-14 flex items-end justify-between flex-wrap gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.45 0.01 255)",
              }}
            >
              // resume.pdf
            </p>
            <h2 className="section-heading text-3xl md:text-4xl">
              Resume
            </h2>
          </div>

          {/* Download CTA — amber accent */}
          <a
            href="mailto:placeholder@outlook.com?subject=Resume Request — Shaundre"
            className="btn-press flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "oklch(0.87 0.17 85 / 10%)",
              color: "oklch(0.87 0.17 85)",
              border: "1px solid oklch(0.87 0.17 85 / 30%)",
              transition: "background 200ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "oklch(0.87 0.17 85 / 18%)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "oklch(0.87 0.17 85 / 10%)")}
          >
            <Download size={14} />
            Request Resume
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Education + Experience */}
          <div className="lg:col-span-2 space-y-10">
            {/* Education */}
            <div
              className={`transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center"
                  style={{
                    background: "oklch(0.235 0.01 255)",
                    color: "oklch(0.65 0.01 255)",
                  }}
                >
                  <GraduationCap size={14} />
                </div>
                <h3
                  className="font-semibold text-sm tracking-wide uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.55 0.01 255)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Education
                </h3>
              </div>

              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="pl-4"
                  style={{ borderLeft: "2px solid oklch(0.78 0.18 200)" }}
                >
                  <p
                    className="font-bold text-base mb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "oklch(0.87 0.005 255)",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "oklch(0.65 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {edu.institution}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "oklch(0.235 0.01 255)",
                      color: "oklch(0.55 0.01 255)",
                      border: "1px solid oklch(0.27 0.01 255)",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center"
                  style={{
                    background: "oklch(0.235 0.01 255)",
                    color: "oklch(0.65 0.01 255)",
                  }}
                >
                  <Briefcase size={14} />
                </div>
                <h3
                  className="font-semibold text-sm tracking-wide uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.55 0.01 255)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Experience
                </h3>
              </div>

              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.role}
                  className="pl-4"
                  style={{ borderLeft: "2px solid oklch(0.78 0.18 200)" }}
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                    <div>
                      <p
                        className="font-bold text-base"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "oklch(0.87 0.005 255)",
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "oklch(0.65 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded shrink-0"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "oklch(0.235 0.01 255)",
                        color: "oklch(0.55 0.01 255)",
                        border: "1px solid oklch(0.27 0.01 255)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "oklch(0.62 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "oklch(0.45 0.01 255)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core skills + availability */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="p-6 rounded sticky top-24"
              style={{
                background: "oklch(0.205 0.01 255)",
                border: "1px solid oklch(0.27 0.01 255)",
                borderTop: "2px solid oklch(0.78 0.18 200)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center"
                  style={{
                    background: "oklch(0.235 0.01 255)",
                    color: "oklch(0.65 0.01 255)",
                  }}
                >
                  <Award size={14} />
                </div>
                <h3
                  className="font-semibold text-sm tracking-wide uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.55 0.01 255)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Core Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {CORE_SKILLS.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>

              <div
                className="pt-5 border-t space-y-3"
                style={{ borderColor: "oklch(0.27 0.01 255)" }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.52 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                >
                  Available for full-time roles, internships, and freelance projects.
                  Based in Singapore — open to remote.
                </p>
                <a
                  href="mailto:officiallyshaundre@outlook.com"
                  className="block text-center py-2.5 rounded text-sm font-semibold btn-press"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "oklch(0.78 0.18 200)",
                    color: "oklch(0.12 0.01 255)",
                    transition: "opacity 200ms ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
