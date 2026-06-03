"use client";
import { useState, useEffect } from "react";

const links = ["about", "experience", "education", "writing", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = links.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean) as { id: string; top: number }[];
      const current = offsets.filter((o) => o.top <= 100).at(-1);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 3, // below deco line
          left: 0,
          right: 0,
          zIndex: 50,
          background: "var(--bg)",
          borderBottom: scrolled || menuOpen ? "0.5px solid var(--border)" : "0.5px solid transparent",
          transition: "border-color 0.3s",
          padding: "0 clamp(24px, 6vw, 80px)",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="font-serif" style={{ fontSize: 16, fontStyle: "italic", color: "var(--text-primary)" }}>
          Beatriz Alves
        </span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "clamp(16px, 3vw, 28px)" }} className="desktop-nav">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono"
              onClick={() => handleNavClick(id)}
              style={{
                fontSize: 12,
                color: active === id ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              {id}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen
                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                    : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        style={{
          position: "fixed",
          top: menuOpen ? 59 : 40,
          left: 0,
          right: 0,
          zIndex: 49,
          background: "var(--bg)",
          borderBottom: "0.5px solid var(--border)",
          padding: menuOpen ? "16px clamp(24px, 6vw, 80px) 20px" : "0 clamp(24px, 6vw, 80px)",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "top 0.25s ease, opacity 0.2s ease, padding 0.25s ease",
          overflow: "hidden",
        }}
        className="mobile-menu"
      >
        {links.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-mono"
            onClick={() => handleNavClick(id)}
            style={{
              fontSize: 13,
              color: active === id ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              padding: "10px 0",
              borderBottom: "0.5px solid var(--border-soft)",
              transition: "color 0.2s",
            }}
          >
            {id}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 641px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
