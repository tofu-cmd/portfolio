/* ============================================================
   Hero — Graphite Blueprint
   Full-width, left-aligned. Hero background, dot-grid.
   Large typographic name, typewriter role, CTAs.
   Cyan: only on active status, typewriter, primary CTA.
   ============================================================ */
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Software Developer",
  "Problem Solver",
  "Data Enthusiast",
  "Tech Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "4rem" }}
    >
      {/* Hero background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663781667632/JQVrWwkFfkMBCFDZiBqbt8/hero-bg-DzeGbnedbKVFotvzgzAqRE.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay — strong on left for text, fades right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(110deg, oklch(0.175 0.01 255 / 96%) 0%, oklch(0.175 0.01 255 / 82%) 50%, oklch(0.175 0.01 255 / 45%) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-xl">
          {/* Status badge — cyan signal */}
          <div
            className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "oklch(0.78 0.18 200 / 8%)",
              border: "1px solid oklch(0.78 0.18 200 / 25%)",
              color: "oklch(0.78 0.18 200)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "oklch(0.78 0.18 200)",
                boxShadow: "0 0 8px oklch(0.78 0.18 200)",
                animation: "pulse 2s infinite",
              }}
            />
            Open to opportunities
          </div>

          {/* Name — display size */}
          <h1
            className="animate-in-up font-bold leading-none mb-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              color: "oklch(0.92 0.005 255)",
              letterSpacing: "-0.025em",
              animationDelay: "60ms",
            }}
          >
            Shaundre
          </h1>

          {/* Typewriter role — cyan */}
          <div
            className="animate-in-up mb-6 h-9 flex items-center"
            style={{ animationDelay: "120ms" }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 500,
                color: "oklch(0.78 0.18 200)",
              }}
            >
              {displayed}
              <span
                className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                style={{
                  background: "oklch(0.78 0.18 200)",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>

          {/* Tagline — large, confident */}
          <p
            className="animate-in-up mb-3 font-semibold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "oklch(0.82 0.005 255)",
              animationDelay: "180ms",
            }}
          >
            Every problem has a solution.
          </p>

          <p
            className="animate-in-up mb-10 leading-relaxed"
            style={{
              color: "oklch(0.58 0.01 255)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              animationDelay: "240ms",
              maxWidth: "420px",
            }}
          >
            I build what's needed. I learn what's required. From computer vision
            to APIs to algorithms — if there's a problem, I'll find the path through.
          </p>

          {/* CTAs */}
          <div
            className="animate-in-up flex flex-wrap gap-3 mb-12"
            style={{ animationDelay: "300ms" }}
          >
            {/* Primary — cyan fill */}
            <button
              onClick={scrollToProjects}
              className="btn-press px-6 py-3 rounded font-semibold text-sm flex items-center gap-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "oklch(0.78 0.18 200)",
                color: "oklch(0.12 0.01 255)",
                transition: "opacity 200ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              View My Work
              <ArrowDown size={14} />
            </button>

            {/* Secondary — neutral ghost */}
            <a
              href="mailto:placeholder@outlook.com"
              className="btn-press px-6 py-3 rounded font-semibold text-sm flex items-center gap-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "transparent",
                color: "oklch(0.72 0.005 255)",
                border: "1px solid oklch(0.32 0.01 255)",
                transition: "border-color 200ms ease, color 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.45 0.01 255)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.87 0.005 255)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.32 0.01 255)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.005 255)";
              }}
            >
              <Mail size={14} />
              Get In Touch
            </a>
          </div>

          {/* Social links — neutral, not cyan */}
          <div
            className="animate-in-up flex items-center gap-5"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="https://github.com/tofu-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "oklch(0.48 0.01 255)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.01 255)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.48 0.01 255)")}
            >
              <Github size={15} />
              github.com/tofu-cmd
            </a>
            <span style={{ color: "oklch(0.3 0.01 255)" }}>·</span>
            <a
              href="tel:+6512345678"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "oklch(0.48 0.01 255)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.01 255)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.48 0.01 255)")}
            >
              <Phone size={15} />
              +65 1234 5678
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "oklch(0.35 0.01 255)" }}
      >
        <ArrowDown size={15} />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
