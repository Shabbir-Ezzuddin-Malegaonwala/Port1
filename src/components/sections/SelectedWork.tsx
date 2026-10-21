import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { WorkCard } from "@/components/work/WorkCard";
import { Reveal } from "@/components/ui/Reveal";
import { featuredWork } from "@/content/work";
import type { CaseStudy } from "@/lib/types";

/** Spans tile into complete 12-column rows: 7+5, 5+7, 6+6. */
const SPAN: Record<CaseStudy["span"], string> = {
  wide: "md:col-span-7",
  narrow: "md:col-span-5",
  half: "md:col-span-6",
};

export function SelectedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
      <SectionHeader
        index="03"
        label="Selected work"
        title="Selected"
        accent="work that performs"
        lede="Real products, real users, real outcomes. Each case study shows the opportunity, what the product does, and the difference it made."
      />

      <div className="grid gap-5 md:grid-cols-12">
        {featuredWork.map((study, i) => (
          <Reveal
            key={study.slug}
            delay={i * 0.06}
            className={SPAN[study.span]}
          >
            <WorkCard study={study} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <Link
          href="/work"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold"
        >
          Explore the full body of work
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}
