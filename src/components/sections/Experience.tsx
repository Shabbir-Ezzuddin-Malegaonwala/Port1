import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { education, experience } from "@/content/career";

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
      <SectionHeader
        index="04"
        label="Experience"
        title="Where the work"
        accent="actually happened"
      />

      {experience.map((job) => (
        <Reveal
          key={job.company}
          className="relative border-l border-hairline pl-8 md:pl-12"
        >
          <span
            className="absolute -left-1 top-1.5 size-2 bg-gold"
            aria-hidden
          />

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">
              {job.href ? (
                <a
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-gold"
                >
                  {job.company}
                  <ArrowUpRight className="size-3.5 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                job.company
              )}
            </h3>
            <span className="hud">{job.period}</span>
          </div>

          <p className="mt-1.5 text-gold">{job.role}</p>
          <p className="hud mt-1">{job.location}</p>
          <p className="mt-5 max-w-2xl text-pretty text-muted">{job.summary}</p>

          <ul className="mt-7 space-y-4">
            {job.highlights.map((h, i) => (
              <li key={h} className="flex gap-4">
                <span className="hud mt-1 shrink-0 text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="max-w-2xl text-pretty text-sm leading-relaxed text-ink/85">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}

      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal
            key={e.degree}
            delay={i * 0.08}
            className="bg-elevated/60 p-7"
          >
            <span className="hud">{e.period}</span>
            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-0.02em]">
              {e.degree}
            </h3>
            <a
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm text-gold transition-opacity hover:opacity-75"
            >
              {e.school}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {e.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
