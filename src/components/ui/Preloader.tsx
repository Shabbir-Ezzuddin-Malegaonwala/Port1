"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BOOT_LINES = [
  "init · design system",
  "mount · case studies",
  "link · github / resume",
  "ready",
];

const RUN_MS = 1200;
const FADE_MS = 450;

/**
 * Short boot sequence. Once per session, capped at ~1.6s including the fade,
 * and skipped entirely for reduced-motion visitors and repeat arrivals.
 */
export function Preloader() {
  const [state, setState] = useState<"idle" | "running" | "leaving">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("booted") === "1";
    } catch {
      seen = false;
    }
    if (reduced || seen) return;

    setState("running");
    document.body.style.overflow = "hidden";

    const started = performance.now();
    let frame = requestAnimationFrame(function step() {
      const pct = Math.min(
        100,
        Math.round(((performance.now() - started) / RUN_MS) * 100),
      );
      setProgress(pct);
      if (pct < 100) frame = requestAnimationFrame(step);
    });

    const fade = setTimeout(() => setState("leaving"), RUN_MS);
    const done = setTimeout(() => {
      setState("idle");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("booted", "1");
      } catch {
        // Storage blocked: the boot screen simply shows again next load.
      }
    }, RUN_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fade);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  if (state === "idle") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-80 grid place-items-center bg-canvas transition-opacity duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        state === "leaving" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="w-full max-w-sm px-8">
        <div className="flex items-baseline justify-between">
          <span className="hud">S.E.M.</span>
          <span className="tabular text-4xl text-gold">
            {String(progress).padStart(3, "0")}
          </span>
        </div>

        <div className="mt-4 h-px w-full bg-hairline">
          <div
            className="h-px bg-gold transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="mt-5 space-y-1.5">
          {BOOT_LINES.map((line, i) => (
            <li
              key={line}
              className="hud flex items-center gap-2 transition-opacity duration-300"
              style={{ opacity: progress > (i + 1) * 22 ? 1 : 0.18 }}
            >
              <span className="text-gold">
                {progress > (i + 1) * 22 ? "✓" : "·"}
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
