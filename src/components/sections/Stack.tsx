import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { stackGroups } from "@/content/career";

export function Stack() {
  return (
    <section className="border-y border-hairline bg-elevated/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
        <SectionHeader
          index="05"
          label="Stack"
          title="The tools, and"
          accent="only the honest ones"
          lede="Everything listed here appears in something I have built. If I have only read about it, it is not on this page."
        />

        <div className="space-y-px overflow-hidden border border-hairline bg-hairline">
          {stackGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.05}
              className="grid gap-4 bg-canvas px-6 py-7 md:grid-cols-[200px_1fr] md:gap-8 md:px-8"
            >
              <p className="hud pt-1 text-gold">{group.label}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-hairline bg-elevated/60 px-3 py-1.5 text-sm text-ink/80 transition-colors hover:border-gold/35 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
