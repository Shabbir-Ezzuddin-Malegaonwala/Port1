import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { WorkCard } from "@/components/work/WorkCard";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, sideProjects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: a real-estate valuation engine, a production streaming refactor, LLM cost engineering, an agentic workflow builder, two multi-tenant SaaS apps, and a 51,532-row data pipeline.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 md:pt-40">
      <header>
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Work</span>
          <span className="rule-fade flex-1" aria-hidden />
          <span className="hud">{caseStudies.length} case studies</span>
        </div>

        <h1 className="mt-7 max-w-3xl text-balance text-[clamp(2.4rem,5.6vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
          Everything here
          <span className="accent"> actually got built.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted text-justify hyphens-auto">
          Each case study covers the architecture, the engineering decisions
          behind it, and the measured results.
        </p>
      </header>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.05}>
            <WorkCard study={study} />
          </Reveal>
        ))}
      </div>

      <section className="mt-28">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Also</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold tracking-[-0.03em]">
          Smaller builds and
          <span className="accent"> experiments</span>
        </h2>

        <ul className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {sideProjects.map((p, i) => {
            const body = (
              <>
                <h3 className="flex items-start justify-between gap-2 font-medium leading-snug">
                  {p.name}
                  {p.href && (
                    <ArrowUpRight className="size-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <p className="hud mt-4">{p.stack}</p>
              </>
            );

            return (
              <Reveal
                key={p.name}
                as="li"
                delay={i * 0.04}
                className="bg-elevated/60 transition-colors hover:bg-elevated"
              >
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full p-6"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="h-full p-6">{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
