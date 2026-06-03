export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        padding: "24px clamp(24px, 6vw, 80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <span
        className="font-serif"
        style={{ fontSize: 14, fontStyle: "italic", color: "#C4A098" }}
      >
        Beatriz Feitosa
      </span>
      <span
        className="font-mono"
        style={{ fontSize: 11, color: "#6A5048" }}
      >
        Built with Next.js
      </span>
    </footer>
  );
}
