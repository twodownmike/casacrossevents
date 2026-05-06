type Props = {
  words: string[];
  accent?: string;
};

export function Marquee({ words, accent = "var(--c-accent)" }: Props) {
  const items = [...words, ...words, ...words];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--c-line)",
        borderBottom: "1px solid var(--c-line)",
        padding: "28px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "3rem",
          animation: "marquee 40s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {items.map((w, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontStyle: i % 2 ? "italic" : "normal",
              fontWeight: 400,
              color: i % 3 === 1 ? accent : "var(--c-ink)",
              letterSpacing: "-0.01em",
            }}
          >
            {w}
            <span style={{ marginLeft: "3rem", color: "var(--c-line)" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
