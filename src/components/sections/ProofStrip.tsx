import { Reveal } from "@/components/ui/Reveal";
import { proofMetrics } from "@/content/profile";

/** Numbers before claims. No commentary — the figures do the arguing. */
export function ProofStrip() {
  return (
    <section
      aria-label="Key figures"
      className="border-y border-hairline bg-elevated/40"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-5">
        {proofMetrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.06}
            className="bg-canvas px-6 py-8 sm:px-7 sm:py-10"
          >
            <p className="tabular text-[clamp(1.6rem,3vw,2.1rem)] leading-none text-gold">
              {m.value}
            </p>
            <p className="mt-3 text-sm leading-snug text-ink/85">{m.label}</p>
            {m.note && <p className="hud mt-2">{m.note}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
