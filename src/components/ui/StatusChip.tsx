"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

/** Live local clock — the HUD detail that tells a visitor this is a real person's machine. */
export function StatusChip() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: profile.timezone,
        }).format(new Date()),
      );

    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hud inline-flex items-center gap-2.5 border border-hairline bg-elevated/70 px-3.5 py-1.5 backdrop-blur-md">
      <span className="pulse-dot size-1.5 bg-live" aria-hidden />
      <span className="text-ink/70">Open for projects</span>
      <span className="text-hairline-strong" aria-hidden>
        /
      </span>
      <span>{profile.location}</span>
      {/* Clock is decoration: dropped on narrow screens, and aria-hidden because
 a ticking time read aloud is noise, not information. */}
      <span className="hidden text-hairline-strong sm:inline" aria-hidden>
        /
      </span>
      <span
        className="tabular hidden text-[0.6875rem] tracking-normal sm:inline"
        aria-hidden
      >
        {time ?? "--:--"} IST
      </span>
    </div>
  );
}
