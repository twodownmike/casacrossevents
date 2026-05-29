import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    num: "01",
    title: "Styled Shoot Concepts",
    img: IMG.svc1,
    desc: "Curated themes, palettes, and visual direction created to give vendors beautiful portfolio content.",
  },
  {
    num: "02",
    title: "Vendor Collaboration",
    img: IMG.svc2,
    desc: "Thoughtful shoot planning that brings photographers, florists, models, venues, and makers together.",
  },
  {
    num: "03",
    title: "Portfolio Content",
    img: IMG.svc3,
    desc: "Styled scenes and details designed to help local creatives refresh their galleries and marketing.",
  },
  {
    num: "04",
    title: "Community Features",
    img: IMG.svc4,
    desc: "A shared space for participating vendors to be highlighted through cohesive styled-shoot imagery.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-surface)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="services-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
          <div>
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
                ── What We Do
              </div>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="A studio of soft intention"
              italicWords={[3]}
              scriptWords={[4]}
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
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--c-muted)",
                maxWidth: 480,
                textWrap: "pretty",
              }}
            >
              Every shoot is shaped around the vendors involved — a slow,
              considered process that leaves space for beauty to find its own
              form.
            </p>
          </Reveal>
        </div>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 64,
          }}
        >
          {ITEMS.map((it, i) => (
            <Reveal key={it.num} delay={i * 120}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <ParallaxImage
                    src={it.img}
                    alt={it.title}
                    ratio="5/4"
                    strength={40}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      fontFamily: "var(--ff-display)",
                      fontStyle: "italic",
                      fontSize: 18,
                      color: "#fff",
                      mixBlendMode: "difference",
                    }}
                  >
                    {it.num}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--ff-display)",
                      fontSize: "clamp(1.8rem, 2.6vw, 2.6rem)",
                      fontWeight: "var(--fw-display)" as unknown as number,
                      color: "var(--c-ink)",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {it.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--ff-script)",
                      fontSize: 26,
                      color: "var(--c-accent)",
                    }}
                  >
                    —
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--c-muted)",
                    margin: 0,
                    maxWidth: 460,
                    textWrap: "pretty",
                  }}
                >
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
