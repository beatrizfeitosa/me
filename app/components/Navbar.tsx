"use client";
import { useState, useEffect } from "react";

const links = ["about", "experience", "education", "writing", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "0.5px solid transparent",
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
      <div style={{ display: "flex", gap: "clamp(16px, 3vw, 28px)" }}>
        {links.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-mono"
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
    </nav>
  );
}
