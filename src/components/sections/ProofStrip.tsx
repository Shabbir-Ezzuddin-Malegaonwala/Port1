import { Reveal } from "@/components/ui/Reveal";
import { proofMetrics } from "@/content/profile";
import { PROOF_ICONS } from "@/components/ui/ProofIcons";

/**
 * A showcase strip, not a spreadsheet: each number gets an icon and a frame,
 * introduced by one line of context so it reads as part of the portfolio
 * rather than a resume table pasted onto the page.
 */
export function ProofStrip() {
  return (
    <section
      aria-label="Key figures"
      className="border-y border-hairline bg-elevated/40"
    >
      <div className="mx-auto max-w-6xl px-6 pt-10 sm:px-10">
        <Reveal className="flex items-center gap-4">
          <span className="hud text-gold">Proof</span>
          <span className="rule-fade flex-1" aria-hidden />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-xl text-pretty text-sm text-muted">
            A few things that are true because they are measured, not because
            they sound good.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-5">
        {proofMetrics.map((m, i) => {
          const Icon = PROOF_ICONS[i % PROOF_ICONS.length];
          return (
            <Reveal
              key={m.label}
              delay={0.1 + i * 0.06}
              className="bg-canvas px-6 py-8 sm:px-7 sm:py-10"
            >
              <Icon className="size-4 text-gold/70" aria-hidden />
              <p className="tabular mt-4 text-[clamp(1.6rem,3vw,2.1rem)] leading-none text-gold">
                {m.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-ink/85">{m.label}</p>
              {m.note && <p className="hud mt-2">{m.note}</p>}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
