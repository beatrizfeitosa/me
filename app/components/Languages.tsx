const languages = [
  { flag: "🇧🇷", name: "Portuguese", level: "Native", dots: 5 },
  { flag: "🇺🇸", name: "English", level: "Full professional", dots: 4 },
];

export default function Languages() {
  return (
    <section
      style={{
        padding: "72px clamp(24px, 6vw, 80px) 72px",
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
          marginBottom: 20,
        }}
      >
        Languages
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {languages.map((lang) => (
          <div
            key={lang.name}
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--border)",
              borderRadius: 10,
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              flex: 1,
              minWidth: 160,
            }}
          >
            <span style={{ fontSize: 24 }}>{lang.flag}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{lang.name}</div>
              <div className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>
                {lang.level}
              </div>
              <div style={{ display: "flex", gap: 4, marginTop: 7 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: i < lang.dots ? "var(--accent)" : "var(--dot-empty)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
