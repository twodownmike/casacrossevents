"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/hooks";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  style,
  className,
}: Props) {
  const [ref, shown] = useReveal<HTMLElement>(0.15);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
        transition: `transform 1000ms cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity 800ms ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
