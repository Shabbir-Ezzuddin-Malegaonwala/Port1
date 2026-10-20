import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";
import { achievements, education, languages } from "@/content/career";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Engineer in Pune. Production agentic systems, LLM cost and observability engineering, and the data work underneath it.",
};

const PRINCIPLES = [
  {
    title: "Measure before you build",
    body: "The most useful thing I have done on several projects is prove that the planned approach would not work, early, and say so. A measurement that kills a sprint is cheaper than a sprint.",
  },
  {
    title: "Make the next change easy",
    body: "Code is read far more than it is written, and changed more than it is read. A smaller diff that a reviewer can hold in their head beats a clever one that nobody wants to touch.",
  },
  {
    title: "Show the working",
    body: "A system that produces a number nobody can interrogate is a liability. Explainability is not a feature you add at the end; it is a constraint you design against from the start.",
  },
  {
    title: "Say what it cannot do",
    body: "Every case study on this site ends with its own limitations. Volunteering them is not modesty — it is the fastest way to a real technical conversation.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-10 md:pt-40">
      <header>
        <div className="flex items-center gap-4">
          <span className="hud text-gold">About</span>
          <span className="rule-fade flex-1" aria-hidden />
          <span className="hud">{profile.location}</span>
        </div>

        <h1 className="mt-7 max-w-3xl text-balance text-[clamp(2.4rem,5.6vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
          I care about the
          <span className="accent"> unglamorous half</span> of AI engineering.
        </h1>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
        <Reveal className="space-y-6">
          {profile.bio.map((para) => (
            <p
              key={para.slice(0, 32)}
              className="text-pretty text-lg leading-relaxed text-ink/85"
            >
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="panel overflow-hidden">
            <Image
              src="/portrait-about.webp"
              alt={`${profile.firstName} outdoors`}
              width={900}
              height={643}
              sizes="(max-width: 768px) 100vw, 340px"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="hud">Pune, India</p>
        </Reveal>
      </div>

      <section className="mt-24">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">How I work</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="bg-elevated/60 p-7"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Beyond the code</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <Reveal className="mt-10 grid items-center gap-10 md:grid-cols-[160px_1fr]">
          <div className="panel overflow-hidden">
            <Image
              src="/portrait-speaking.webp"
              alt={`${profile.firstName} hosting a college programme`}
              width={480}
              height={480}
              sizes="160px"
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-pretty text-lg leading-relaxed text-ink/85">
              I have hosted and anchored annual college programmes, competed in
              the Smart India Hackathon, and spent a lot of time explaining
              technical systems to people who do not read code. That is not a
              side note — a large part of this job is making something
              complicated legible to the person who has to approve it.
            </p>
            <ul className="mt-7 space-y-3">
              {achievements.map((a) => (
                <li key={a.title} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden />
                  <span>
                    <span className="text-ink/85">{a.title}</span> — {a.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Education</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal
              key={e.degree}
              delay={i * 0.06}
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

        <Reveal className="mt-8">
          <p className="hud">Languages</p>
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
        </Reveal>
      </section>

      <Reveal className="mt-20 flex flex-wrap gap-3 border-t border-hairline pt-10">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[0.98]"
        >
          See the work
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <a
          href={profile.resumeHref}
          className="panel inline-flex items-center gap-2 bg-elevated px-6 py-3 text-sm font-medium transition-colors hover:bg-overlay"
        >
          Request résumé
        </a>
      </Reveal>
    </div>
  );
}
