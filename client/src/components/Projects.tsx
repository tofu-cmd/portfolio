/* ============================================================
   Projects — Graphite Blueprint
   Cards with left-border accent, project images, tech tags
   Blueprint structure: top rule, coordinate labels, asymmetric
   Cyan disciplined to primary actions and key highlights only
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const PROJECTS = [
  {
    name: "Sudoku-Buster",
    tagline: "Computer Vision · OCR · Algorithm",
    description:
      "A Sudoku solver powered by computer vision and OCR. It takes in an image of a puzzle, detects the grid, reads the digits, and solves it — so you don't have to suffer through backtracking by hand.",
    tech: ["Python", "OpenCV", "OCR", "Backtracking"],
    lang: "Python",
    stars: 1,
    github: "https://github.com/tofu-cmd/Sudoku-Buster",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663781667632/JQVrWwkFfkMBCFDZiBqbt8/project-cv-WifuNKJ4ZaDjUfYUFG7rth.webp",
    index: "01",
  },
  {
    name: "Lorcana-DB",
    tagline: "REST API · Database · Web App",
    description:
      "A searchable card database built using the Disney Lorcana API. Lets users explore, search, and view detailed information about Lorcana cards in one place. Built to simplify card lookup and provide a clean, responsive browsing experience.",
    tech: ["CSS", "JavaScript", "REST API", "HTML"],
    lang: "CSS / JS",
    stars: 1,
    github: "https://github.com/tofu-cmd/Lorcana-DB",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663781667632/JQVrWwkFfkMBCFDZiBqbt8/project-api-fWNZkLHWFBLdRbBhiuFqVs.webp",
    index: "02",
  },
];

export default function Projects() {
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
      id="projects"
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
          className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.45 0.01 255)",
            }}
          >
            // projects.list
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="section-heading text-3xl md:text-4xl">
              What I've Built
            </h2>
            <a
              href="https://github.com/tofu-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.52 0.01 255)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.01 255)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.01 255)")}
            >
              View all on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className={`project-card overflow-hidden flex flex-col transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: "scale(1.02)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.02)")}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.205 0.01 255) 0%, transparent 60%)",
                  }}
                />
                {/* Index label — blueprint coordinate */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "oklch(0.175 0.01 255 / 85%)",
                    color: "oklch(0.45 0.01 255)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {project.index}
                </div>
                {/* Language badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-1 rounded text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "oklch(0.175 0.01 255 / 85%)",
                    color: "oklch(0.65 0.01 255)",
                    border: "1px solid oklch(0.27 0.01 255)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {project.lang}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3
                      className="text-xl font-bold mb-0.5"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "oklch(0.87 0.005 255)",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "oklch(0.52 0.01 255)",
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs shrink-0 mt-1"
                    style={{ color: "oklch(0.45 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <Star size={11} />
                    {project.stars}
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "oklch(0.62 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold w-fit"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "oklch(0.78 0.18 200)",
                    color: "oklch(0.12 0.01 255)",
                    transition: "opacity 200ms ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <Github size={13} />
                  View Source
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More coming soon */}
        <div
          className={`mt-6 p-5 rounded text-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            border: "1px dashed oklch(0.27 0.01 255)",
          }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.45 0.01 255)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            // more projects in progress...
          </p>
        </div>
      </div>
    </section>
  );
}
