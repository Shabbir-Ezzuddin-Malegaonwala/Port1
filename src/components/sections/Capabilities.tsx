import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/content/profile";

export function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
      <SectionHeader
        index="02"
        label="Capabilities"
        title="Three things I am"
        accent="actually good at"
        lede="Not a list of every technology I have opened. These are the areas where I have shipped something a reviewer signed off on."
      />

      <div className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal
            key={c.index}
            delay={i * 0.08}
            className="bg-elevated/60 p-7 md:p-8"
          >
            <span className="hud text-gold">{c.index}</span>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>

            <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
              {c.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-sm leading-snug text-ink/80"
                >
                  <span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
