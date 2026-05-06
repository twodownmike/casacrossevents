import { AnimatedHeading } from "./animated-heading";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "I",
    t: "Inquire",
    d: "Reach out with your vision, your vendors, or your wildest curiosity. We'll start with a conversation.",
  },
  {
    n: "II",
    t: "Design",
    d: "We craft a mood, a palette, and a guest list of artists. Every detail considered, every collaborator chosen with care.",
  },
  {
    n: "III",
    t: "Gather",
    d: "The day arrives. Florals bloom. Tables are set. The light is right. We make something to remember together.",
  },
  {
    n: "IV",
    t: "Share",
    d: "Imagery is delivered for every contributor — a body of work to grow each business that touched the day.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-surface)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 96 }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--c-accent)",
                marginBottom: 24,
              }}
            >
              ── The Process
            </div>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Slow steady together"
            italicWords={[1]}
            scriptWords={[2]}
            style={{
              fontFamily: "var(--ff-display)",
              fontWeight: "var(--fw-display)" as unknown as number,
              fontSize: "clamp(2.4rem, 4.5vw, 4.4rem)",
              letterSpacing: "-0.015em",
              color: "var(--c-ink)",
              margin: 0,
            }}
          />
        </div>
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 32,
              left: "10%",
              right: "10%",
              height: 1,
              background: "var(--c-line)",
            }}
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div style={{ position: "relative", paddingTop: 0 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--c-bg)",
                    border: "1px solid var(--c-line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 32px",
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "var(--ff-display)",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: "var(--c-accent)",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontSize: 28,
                    fontWeight: "var(--fw-display)" as unknown as number,
                    color: "var(--c-ink)",
                    margin: "0 0 12px",
                    textAlign: "center",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--c-muted)",
                    margin: 0,
                    textAlign: "center",
                    textWrap: "pretty",
                  }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
