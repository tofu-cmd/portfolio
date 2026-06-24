/* ============================================================
   Contact + Footer — Graphite Blueprint
   Clean contact section — no placeholder-looking copy
   Blueprint structure: top rule, coordinate labels
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Send, MapPin } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: <Mail size={16} />,
    label: "email",
    value: "officiallyshaundre@outlook.com",
    href: "mailto:officiallyshaundre@outlook.com",
  },
  {
    icon: <Phone size={16} />,
    label: "phone",
    value: "WhatsApp",
    href: "https://wa.me/+6582985165",
  },
  {
    icon: <Github size={16} />,
    label: "github",
    value: "github.com/tofu-cmd",
    href: "https://github.com/tofu-cmd",
  },
  {
    icon: <MapPin size={16} />,
    label: "location",
    value: "Singapore",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:officiallyshaundre@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputBase = {
    background: "oklch(0.235 0.01 255)",
    border: "1px solid oklch(0.27 0.01 255)",
    color: "oklch(0.87 0.005 255)",
    borderRadius: "4px",
    padding: "0.625rem 0.875rem",
    fontSize: "0.875rem",
    fontFamily: "'Inter', sans-serif",
    width: "100%",
    outline: "none",
    transition: "border-color 200ms ease",
  };

  return (
    <>
      <section
        id="contact"
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
              // contact.init()
            </p>
            <h2 className="section-heading text-3xl md:text-4xl mb-6">
              Let's Work Together
            </h2>
            <p
              className="text-base max-w-md"
              style={{ color: "oklch(0.62 0.01 255)", fontFamily: "'Inter', sans-serif" }}
            >
              Hiring, freelance project, or just want to talk tech — I'm open.
              Drop me a message and I'll get back to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact links */}
            <div
              className={`space-y-3 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {CONTACT_LINKS.map((link) => {
                const inner = (
                  <div
                    className="flex items-center gap-4 p-4 rounded group transition-all duration-200"
                    style={{
                      background: "oklch(0.205 0.01 255)",
                      border: "1px solid oklch(0.27 0.01 255)",
                    }}
                    onMouseEnter={(e) => {
                      if (link.href) {
                        (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.35 0.01 255)";
                        (e.currentTarget as HTMLElement).style.background = "oklch(0.215 0.01 255)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.27 0.01 255)";
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.205 0.01 255)";
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                      style={{
                        background: "oklch(0.235 0.01 255)",
                        color: "oklch(0.65 0.01 255)",
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs mb-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "oklch(0.45 0.01 255)",
                        }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: link.href ? "oklch(0.82 0.005 255)" : "oklch(0.65 0.01 255)",
                        }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </div>
                );

                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={link.label}>{inner}</div>
                );
              })}

              {/* Availability note */}
              <div
                className="mt-4 p-4 rounded"
                style={{
                  background: "oklch(0.78 0.18 200 / 5%)",
                  border: "1px solid oklch(0.78 0.18 200 / 15%)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "oklch(0.78 0.18 200)",
                      boxShadow: "0 0 6px oklch(0.78 0.18 200)",
                    }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "oklch(0.78 0.18 200)",
                    }}
                  >
                    Currently available
                  </span>
                </div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.52 0.01 255)", fontFamily: "'Inter', sans-serif" }}
                >
                  Open to full-time roles, internships, and freelance work.
                  Singapore-based, remote-friendly.
                </p>
              </div>
            </div>

            {/* Quick message form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.45 0.01 255)",
                    }}
                  >
                    name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={inputBase}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 200 / 50%)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.27 0.01 255)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.45 0.01 255)",
                    }}
                  >
                    email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    style={inputBase}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 200 / 50%)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.27 0.01 255)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.45 0.01 255)",
                    }}
                  >
                    message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 200 / 50%)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "oklch(0.27 0.01 255)")}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-press w-full py-3 rounded font-semibold text-sm flex items-center justify-center gap-2"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: sent ? "oklch(0.62 0.18 145)" : "oklch(0.78 0.18 200)",
                    color: "oklch(0.12 0.01 255)",
                    transition: "background 300ms ease, opacity 200ms ease",
                  }}
                  onMouseEnter={(e) => !sent && ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {sent ? (
                    "✓ Opening email client..."
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "oklch(0.155 0.01 255)",
          borderTop: "1px solid oklch(0.235 0.01 255)",
        }}
      >
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663781667632/JQVrWwkFfkMBCFDZiBqbt8/logo-s-EJ6eDACsQAc4Dc7RZFhmtS.webp"
              alt="logo"
              className="w-6 h-6 object-contain"
            />
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.72 0.005 255)" }}
            >
              Shaundre
            </span>
          </div>
          <p
            className="text-xs text-center"
            style={{ color: "oklch(0.38 0.01 255)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            // every problem has a solution · {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/tofu-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{ color: "oklch(0.45 0.01 255)", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.01 255)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.45 0.01 255)")}
          >
            <Github size={13} />
            @tofu-cmd
          </a>
        </div>
      </footer>
    </>
  );
}
