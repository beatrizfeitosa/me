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
      "Building and maintaining automated tests for web and API applications using Robot Framework with Browser Library (Playwright).",
      "Managing the bug lifecycle, including defect reporting, tracking, retesting, and validation.",
      "Participating in manual testing activities across different project phases and release validations.",
      "Reviewing pull requests to ensure code quality and adherence to best practices.",
      "Training and mentoring other QAs in test automation practices.",
      "Studying performance testing to create load tests with Playwright and Octoperf."
    ],
    frameworks: ["Robot Framework", "Playwright", "Python"],
    tools: ["Octoperf", "Bruno", "Jenkins", "Git", "Bitbucket", "Jira", "Confluence", "Xray"],
  },
  {
    role: "QA Intern",
    company: "Johnson & Johnson",
    type: "Internship",
    period: "January 2024 – January 2026",
    duration: "2 years",
    bullets: [
      "Worked on automated end-to-end web testing for GxP and Appian projects using Java, Selenium, Cucumber, and Robot Framework.",
      "Analyzed user stories to identify automation opportunities and maintain regression coverage.",
      "Collaborated on automation development, pull request reviews, and framework migration to Robot Framework.",
      "Mentored and trained new QA trainees in automation practices and testing workflows.",
      "Built and maintained regression tests for AI-based web applications using Robot Framework with Browser Library (Playwright).",
      "Worked throughout the bug lifecycle, including defect reporting, tracking, retesting, and validation.",
      "Participated in manual testing activities across different project phases and release validations.",
    ],
    frameworks: ["Selenium", "Cucumber", "Java", "Robot Framework", "Playwright", "Python"],
    tools: ["Jenkins", "Git", "Bitbucket", "Jira", "Confluence", "Xray"],
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
      "This technical scholarship was fully focused on Amazon Web Services (AWS) and lasted for six months. The program followed a two-week sprint model, where each sprint included technical courses and collaborative group projects. Throughout the experience, we worked on building APIs, developing chatbots, and training machine learning models using AWS services.",
      "At the end of the program, participants received a voucher to take the AWS Certified Cloud Practitioner exam, which I successfully passed."
    ],
    frameworks: ["Python", "Node.js"],
    tools: ["AWS", "Chatbot", "Machine Learning"],
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
