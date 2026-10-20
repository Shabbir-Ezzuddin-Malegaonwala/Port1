import { Award, BadgeCheck, Mic } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { achievements, certifications, languages } from "@/content/career";

const ICONS = [Award, BadgeCheck, Mic];

export function Recognition() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
      <SectionHeader
        index="06"
        label="Recognition"
        title="Certified, and"
        accent="comfortable on a stage"
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="hud">Certifications</p>
          <ul className="mt-5 space-y-px overflow-hidden border border-hairline bg-hairline">
            {certifications.map((c, i) => (
              <Reveal
                key={c.name}
                as="li"
                delay={i * 0.06}
                className="flex items-center gap-4 bg-elevated/60 px-6 py-5"
              >
                <BadgeCheck className="size-5 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block text-sm font-medium">{c.name}</span>
                  <span className="hud mt-0.5 block">{c.issuer}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <p className="hud mt-10">Languages</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {languages.map((l) => (
              <li
                key={l}
                className="border border-hairline bg-elevated/60 px-3 py-1.5 text-sm text-ink/80"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="hud">Achievements</p>
          <ul className="mt-5 space-y-5">
            {achievements.map((a, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal
                  key={a.title}
                  as="li"
                  delay={i * 0.06}
                  className="panel bg-elevated/60 p-6"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-4.5 text-gold" aria-hidden />
                    <h3 className="font-medium">{a.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {a.detail}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
