"use client";

import type { CSSProperties, ElementType } from "react";
import { useReveal } from "@/lib/hooks";

type Props = {
  text: string;
  italicWords?: number[];
  scriptWords?: number[];
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
};

export function AnimatedHeading({
  text,
  italicWords = [],
  scriptWords = [],
  delay = 0,
  className,
  style,
  as: Tag = "h2",
}: Props) {
  const [ref, shown] = useReveal<HTMLElement>(0.2);
  const words = text.split(" ");
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...style, lineHeight: 1.05 }}
    >
      {words.map((word, wi) => {
        const isItalic = italicWords.includes(wi);
        const isScript = scriptWords.includes(wi);
        return (
          <span
            key={wi}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              marginRight: "0.28em",
            }}
          >
            {word.split("").map((ch, ci) => (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  fontStyle: isItalic ? "italic" : "normal",
                  fontFamily: isScript ? "var(--ff-script)" : "inherit",
                  fontWeight: isScript ? 400 : "inherit",
                  transform: shown
                    ? "translateY(0) rotate(0)"
                    : "translateY(0.5em) rotate(2deg)",
                  opacity: shown ? 1 : 0,
                  transition: `transform 900ms cubic-bezier(.2,.7,.2,1) ${
                    delay + wi * 60 + ci * 18
                  }ms, opacity 700ms ease ${delay + wi * 60 + ci * 18}ms`,
                }}
              >
                {ch}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
