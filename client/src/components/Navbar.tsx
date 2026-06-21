/* ============================================================
   Navbar — Graphite Blueprint
   Fixed top nav, transparent → opaque on scroll
   Logo: <S/> mark + name, cyan accent
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.175 0.01 255 / 95%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.27 0.01 255)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663781667632/JQVrWwkFfkMBCFDZiBqbt8/logo-s-EJ6eDACsQAc4Dc7RZFhmtS.webp"
            alt="<S/> logo"
            className="w-8 h-8 object-contain"
          />
          <span
            className="font-bold text-base tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "oklch(0.87 0.005 255)",
            }}
          >
            Shaundre
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:placeholder@outlook.com"
            className="btn-press ml-2 px-4 py-1.5 text-sm font-medium rounded"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "oklch(0.78 0.18 200 / 12%)",
              color: "oklch(0.78 0.18 200)",
              border: "1px solid oklch(0.78 0.18 200 / 35%)",
              transition: "background 200ms ease, border-color 200ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.18 200 / 20%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.18 200 / 12%)";
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: "oklch(0.87 0.005 255)" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.175 0.01 255 / 98%)",
            borderColor: "oklch(0.27 0.01 255)",
          }}
        >
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 px-2 text-sm font-medium border-b"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: active === link.href.replace("#", "")
                    ? "oklch(0.78 0.18 200)"
                    : "oklch(0.72 0.01 255)",
                  borderColor: "oklch(0.27 0.01 255)",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:placeholder@outlook.com"
              className="mt-3 py-2.5 px-4 text-sm font-medium text-center rounded"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "oklch(0.78 0.18 200 / 12%)",
                color: "oklch(0.78 0.18 200)",
                border: "1px solid oklch(0.78 0.18 200 / 35%)",
              }}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
