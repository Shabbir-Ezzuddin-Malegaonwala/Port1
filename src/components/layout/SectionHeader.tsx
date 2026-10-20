import { Reveal } from "@/components/ui/Reveal";

type Props = {
  index: string;
  label: string;
  title: string;
  accent?: string;
  lede?: string;
};

export function SectionHeader({ index, label, title, accent, lede }: Props) {
  return (
    <header className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4 border-b border-hairline pb-4">
          <span className="hud text-gold">{index}</span>
          <span className="hud">{label}</span>
          <span className="rule flex-1" aria-hidden />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="display mt-8 max-w-3xl text-balance text-[clamp(2rem,4.6vw,3.4rem)]">
          {title}
          {accent && <span className="accent"> {accent}</span>}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-balance text-muted">{lede}</p>
        </Reveal>
      )}
    </header>
  );
}
