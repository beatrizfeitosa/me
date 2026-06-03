export default function Hero() {
  return (
    <section
      id="about"
      style={{
        padding: "140px clamp(24px, 6vw, 80px) 80px",
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
        QA Automation Analyst
      </p>

      <h1
        className="font-serif"
        style={{
          fontSize: "clamp(40px, 7vw, 64px)",
          fontStyle: "italic",
          color: "var(--text-primary)",
          lineHeight: 1.1,
          marginBottom: 10,
        }}
      >
        Beatriz Feitosa
      </h1>

      <p
        className="font-mono"
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
          marginBottom: 28,
        }}
      >
        quality · automation · reliability
      </p>

      <p
        style={{
          fontSize: 15,
          color: "var(--text-secondary)",
          lineHeight: 1.85,
          maxWidth: 560,
        }}
      >
        Hi! I&apos;m Beatriz, a QA Automation Analyst with 2+ years of experience in
        software quality. I build scalable, easy-to-maintain frameworks using
        Playwright, Robot Framework, and Selenium — across web, API, and low-code
        platforms. I love working with test automation and I&apos;m always focused on
        keeping things clean, consistent, and reliable from the start.
      </p>
    </section>
  );
}
