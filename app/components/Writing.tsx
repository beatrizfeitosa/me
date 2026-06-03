export default function Writing() {
  return (
    <section
      id="writing"
      style={{
        padding: "72px clamp(24px, 6vw, 80px)",
        borderTop: "0.5px solid var(--border-soft)",
        maxWidth: 760,
      }}
    >
      <p
        className="font-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Writing
      </p>

      <div
        style={{
          background: "var(--bg-card)",
          border: "0.5px dashed var(--degree-accent)",
          borderRadius: 10,
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--degree-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ margin: "0 auto 12px" }}
        >
          <path d="M20 12V22H4V12" />
          <path d="M22 7H2v5h20V7z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
        <p
          className="font-serif"
          style={{
            fontSize: 15,
            fontStyle: "italic",
            color: "#8A7068",
            marginBottom: 8,
          }}
        >
          Posts coming soon
        </p>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
          I&apos;ll be writing about test automation, quality engineering,<br />
          and lessons from the field.
        </p>
      </div>
    </section>
  );
}
