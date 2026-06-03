const Tag = ({ label, variant = "framework" }: { label: string; variant?: "framework" | "tool" }) => (
  <span
    className="font-mono"
    style={{
      fontSize: 10,
      padding: "4px 10px",
      borderRadius: 12,
      background: variant === "tool" ? "var(--tool)" : "var(--accent-light)",
      color: variant === "tool" ? "var(--tool-text)" : "#993556",
      border: `0.5px solid ${variant === "tool" ? "var(--tool-border)" : "var(--accent-border)"}`,
    }}
  >
    {label}
  </span>
);

type ExpItem = {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  bullets: string[];
  frameworks: string[];
  tools: string[];
  dotColor?: string;
  outlineColor?: string;
};

const experiences: ExpItem[] = [
  {
    role: "Mid-Level QA Automation Analyst",
    company: "Tata Consultancy Services",
    type: "Full-time",
    period: "January 2026 – Present",
    duration: "",
    bullets: [
      "Building and maintaining automated tests for web and API applications",
      "Bug lifecycle: reporting, tracking, and validating defects",
      "Participating in manual testing across project phases and release validations",
    ],
    frameworks: ["Playwright", "Robot Framework", "Python"],
    tools: ["Jira", "Postman"],
  },
  {
    role: "QA Intern",
    company: "Johnson & Johnson",
    type: "Internship",
    period: "January 2024 – January 2026",
    duration: "2 years",
    bullets: [
      "Automated tests for Windchill and Appian (low-code) applications",
      "Maintained regression tests for a web app featuring AI agents",
      "Reviewed pull requests ensuring code quality and best practices",
      "Mentored and trained new trainees in test automation",
    ],
    frameworks: ["Selenium", "Cucumber", "Java", "JavaScript"],
    tools: ["Jenkins", "Git", "Bitbucket"],
    dotColor: "#E8D0D4",
    outlineColor: "#D4A8B0",
  },
  {
    role: "Machine Learning with AWS — Scholarship",
    company: "Compass.UOL",
    type: "Program",
    period: "July 2023 – December 2023",
    duration: "6 months",
    bullets: [
      "Technical scholarship focused on AWS services, API creation, machine learning model training, and chatbot development.",
    ],
    frameworks: [],
    tools: ["AWS", "Python", "Machine Learning"],
    dotColor: "#EDD8C8",
    outlineColor: "#E8C4A8",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          marginBottom: 36,
        }}
      >
        Experience
      </p>

      {experiences.map((exp, i) => (
        <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < experiences.length - 1 ? 36 : 0 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: exp.dotColor ?? "var(--accent)",
                marginTop: 5,
                flexShrink: 0,
                border: "2px solid var(--bg)",
                outline: `1.5px solid ${exp.outlineColor ?? "var(--accent)"}`,
              }}
            />
            {i < experiences.length - 1 && (
              <div style={{ width: 1, background: "var(--dot-empty)", flex: 1, marginTop: 6 }} />
            )}
          </div>

          <div style={{ flex: 1, paddingBottom: 4 }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>
              {exp.role}
            </div>
            <div className="font-mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 2 }}>
              {exp.company} · {exp.type}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>
              {exp.period}{exp.duration ? ` · ${exp.duration}` : ""}
            </div>
            <ul style={{ paddingLeft: 16, marginBottom: 12 }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: 13, color: "#6A5048", lineHeight: 1.7, marginBottom: 4 }}>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {exp.frameworks.map((t) => <Tag key={t} label={t} variant="framework" />)}
              {exp.tools.map((t) => <Tag key={t} label={t} variant="tool" />)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
