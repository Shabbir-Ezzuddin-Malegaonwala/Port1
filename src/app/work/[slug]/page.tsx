import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/work/ArchitectureDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, getCaseStudy } from "@/content/work";
import { profile } from "@/content/profile";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: `${study.title} · ${profile.fullName}`,
      description: study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next =
    caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    author: { "@type": "Person", name: profile.fullName, url: profile.siteUrl },
    dateCreated: study.year,
    keywords: study.stack.join(","),
  };

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-10 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Link
        href="/work"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        All work
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="hud text-gold">{study.index}</span>
          <span className="hud">{study.year}</span>
          <span className="hud">{study.role}</span>
          <span className="border border-gold/30 px-3 py-1 text-[0.6875rem] uppercase tracking-[0.18em] text-gold">
            {study.status}
          </span>
        </div>

        <h1 className="mt-6 text-balance text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.07] tracking-[-0.035em]">
          {study.title}
        </h1>
        <p className="accent mt-3 text-2xl">{study.kicker}</p>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink/85">
          {study.summary}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2 border-t border-hairline pt-7">
          {study.stack.map((s) => (
            <li
              key={s}
              className="border border-hairline bg-elevated/60 px-3 py-1.5 text-[0.8125rem] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </header>

      <Section index="01" label="Context">
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink/85">
          {study.context}
        </p>
      </Section>

      <Section index="02" label="The problem">
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink/85">
          {study.problem}
        </p>
      </Section>

      <Section index="03" label="What I built">
        <ul className="space-y-4">
          {study.built.map((b, i) => (
            <li key={b} className="flex gap-4">
              <span className="hud mt-1 shrink-0 text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-pretty leading-relaxed text-ink/85">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="04" label="Architecture">
        <ArchitectureDiagram
          caption={study.architecture.caption}
          layers={study.architecture.layers}
        />
      </Section>

      <Section index="05" label="Decisions I would defend">
        <div className="space-y-5">
          {study.decisions.map((d) => (
            <div key={d.title} className="panel bg-elevated/50 p-6 md:p-7">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">
                {d.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="06" label="Results">
        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {study.results.map((r) => (
            <div key={r.label} className="bg-elevated/60 p-6">
              <p className="tabular text-2xl leading-none text-gold">
                {r.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-ink/85">{r.label}</p>
              {r.note && <p className="hud mt-2">{r.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Section index="07" label="Honest limitations">
        <div className="border border-gold/20 bg-gold/[0.04] p-6 md:p-7">
          <p className="flex items-center gap-2.5 text-sm font-medium text-gold">
            <AlertTriangle className="size-4" aria-hidden />
            What this system does not do
          </p>
          <ul className="mt-5 space-y-4">
            {study.limitations.map((l) => (
              <li key={l} className="flex gap-3.5">
                <span
                  className="mt-2.5 size-1 shrink-0 bg-gold/60"
                  aria-hidden
                />
                <span className="text-pretty text-sm leading-relaxed text-ink/80">
                  {l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {study.links && study.links.length > 0 && (
        <Section index="08" label="Links">
          <ul className="flex flex-wrap gap-3">
            {study.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel group inline-flex items-center gap-2 bg-elevated px-5 py-2.5 text-sm transition-colors hover:bg-overlay"
                >
                  {l.label}
                  <ArrowUpRight className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <nav
        className="mt-20 border-t border-hairline pt-8"
        aria-label="Next case study"
      >
        <p className="hud">Next</p>
        <Link
          href={`/work/${next.slug}`}
          className="group mt-3 flex items-baseline gap-3 text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-[-0.03em] transition-colors hover:text-gold"
        >
          {next.title}
          <ArrowUpRight className="size-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </nav>
    </article>
  );
}

function Section({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="mt-16 md:mt-20">
      <div className="mb-6 flex items-center gap-4">
        <span className="hud text-gold">{index}</span>
        <span className="hud">{label}</span>
        <span className="rule-fade flex-1" aria-hidden />
      </div>
      {children}
    </Reveal>
  );
}
