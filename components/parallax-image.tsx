"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useParallax } from "@/lib/hooks";

type Props = {
  src: string;
  alt?: string;
  ratio?: string;
  strength?: number;
  clip?: boolean;
  style?: CSSProperties;
};

export function ParallaxImage({
  src,
  alt = "",
  ratio = "4/5",
  strength = 30,
  clip = true,
  style,
}: Props) {
  const [ref, p] = useParallax<HTMLDivElement>();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  const translate = -p * strength;
  const aspectRatio = ratio === "auto" ? undefined : ratio;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        aspectRatio,
        overflow: "hidden",
        background: "var(--c-line)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: `-${strength}px 0`,
          clipPath: clip
            ? shown
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)"
            : "none",
          transition: "clip-path 1400ms cubic-bezier(.2,.7,.2,1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `translateY(${translate}px) scale(${shown ? 1 : 1.15})`,
            transition: "transform 1800ms cubic-bezier(.2,.7,.2,1)",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}
