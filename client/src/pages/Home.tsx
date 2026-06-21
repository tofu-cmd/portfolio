/* ============================================================
   Home — Shaundre Portfolio
   Assembles all sections in order
   ============================================================ */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.175 0.01 255)" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}
