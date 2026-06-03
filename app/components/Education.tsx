type EduCard = {
  type: "Degree" | "Technical Education" | "Certification";
  title: string;
  issuer: string;
  year: string;
};

const education: EduCard[] = [
  {
    type: "Degree",
    title: "Systems Analysis and Development",
    issuer: "Fatec Taubaté",
    year: "2023 – 2025",
  },
  {
    type: "Technical Education",
    title: "Systems Development",
    issuer: "ETEC João Gomes de Araújo",
    year: "2020 – 2022",
  },
];

const certifications: EduCard[] = [
  {
    type: "Certification",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    type: "Certification",
    title: "TOEIC Certificate of Achievement",
    issuer: "ETS Global",
    year: "2025",
  },
  {
    type: "Certification",
    title: "Test Automation Foundations",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    type: "Certification",
    title: "Agile Testing",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
];

const Card = ({ card }: { card: EduCard }) => {
  const isCert = card.type === "Certification";
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "0.5px solid var(--border)",
        borderLeft: `2.5px solid ${isCert ? "var(--accent)" : "var(--degree-accent)"}`,
        borderRadius: "0 10px 10px 0",
        padding: "14px 16px",
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: isCert ? "var(--accent)" : "var(--degree-text)",
          marginBottom: 5,
        }}
      >
        {card.type}
      </div>
      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: 3 }}>
        {card.title}
      </div>
      <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3 }}>{card.issuer}</div>
      <div className="font-mono" style={{ fontSize: 10, color: "var(--text-faint)" }}>{card.year}</div>
    </div>
  );
};

const SubLabel = ({ label }: { label: string }) => (
  <p
    className="font-mono"
    style={{
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: 10,
      gridColumn: "1 / -1",
    }}
  >
    {label}
  </p>
);

export default function Education() {
  return (
    <section
      id="education"
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
        Education & certifications
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        <SubLabel label="Education" />
        {education.map((c, i) => <Card key={i} card={c} />)}

        <div style={{ gridColumn: "1 / -1", borderTop: "0.5px solid var(--border-soft)", margin: "4px 0" }} />
        <SubLabel label="Certifications" />
        {certifications.map((c, i) => <Card key={i} card={c} />)}
      </div>
    </section>
  );
}
