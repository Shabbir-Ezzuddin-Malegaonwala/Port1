"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * Scroll reveal via IntersectionObserver.
 *
 * The revealed state is a class on the DOM node, not React state — this is one
 * flag per element with no bearing on rendering, so keeping it out of React
 * avoids 40+ extra renders on a long page.
 *
 * Visibility degrades safely: `prefers-reduced-motion` is handled in CSS, the
 * `<noscript>` block in layout.tsx covers JS being off, and a browser without
 * IntersectionObserver is revealed immediately below.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
