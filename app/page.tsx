import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Decorative top gradient line */}
      <div style={{ height: 3, background: "linear-gradient(to right, #E8A8B8, #F0C8B0, #E8D8C8)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }} />

      <Navbar />

      <main style={{ maxWidth: 960, margin: "0 auto" }}>
        <Hero />

        <div style={{ borderTop: "0.5px solid var(--border-soft)" }}>
          <Experience />
        </div>

        <div style={{ borderTop: "0.5px solid var(--border-soft)" }}>
          <Education />
        </div>

        <div style={{ borderTop: "0.5px solid var(--border-soft)" }}>
          <Languages />
        </div>

        <Writing />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
