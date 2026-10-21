import type { Metadata } from "next";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import { StatusChip } from "@/components/ui/StatusChip";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.fullName}, AI Engineer, ${profile.location}.`,
};

const CHANNELS = [
  {
    label: "GitHub",
    value: "Shabbir-Ezzuddin-Malegaonwala",
    href: profile.github,
    Icon: GithubIcon,
    note: "Open builds and experiments",
  },
  {
    label: "LinkedIn",
    value: "shabbir-malegaonwala",
    href: profile.linkedin,
    Icon: LinkedinIcon,
    note: "Profile, updates and recommendations",
  },
  {
    label: "Instagram",
    value: "@mwshabbir",
    href: profile.instagram,
    Icon: InstagramIcon,
    note: "Behind the scenes, less filtered",
  },
  {
    label: "Start a project",
    value: "One email is enough",
    href: profile.ctaHref,
    Icon: FileText,
    note: "Tell me the problem and the outcome you need",
  },
];

const FIT = [
  "AI products from concept to launch",
  "Automation that removes a recurring cost from your business",
  "A second opinion on an AI system that is slow, expensive or unreliable",
  "Partnerships where the hard part is making AI dependable at scale",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-10 md:pt-40">
      <header>
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Contact</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <h1 className="mt-7 max-w-2xl text-balance text-[clamp(2.4rem,5.6vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
          Tell me what needs to
          <span className="accent"> work better.</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted text-justify hyphens-auto">
          I read every message and reply personally. Tell me the problem on
          your plate and what a win looks like, and we can start from there.
        </p>

        <div className="mt-8">
          <StatusChip />
        </div>
      </header>

      <Reveal className="panel mt-14 bg-elevated/60 p-8 md:p-10">
        <p className="hud">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-flex items-center gap-3 break-all text-[clamp(1.1rem,3vw,1.75rem)] font-medium tracking-[-0.02em] transition-colors hover:text-gold"
        >
          <Mail
            className="hidden size-6 shrink-0 text-gold sm:block"
            aria-hidden
          />
          {profile.email}
        </a>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[0.98]"
          >
            Open mail client
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <CopyEmail email={profile.email} />
        </div>
      </Reveal>

      <section className="mt-16">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Elsewhere</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <ul className="mt-8 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(({ label, value, href, Icon, note }, i) => (
            <Reveal
              key={label}
              as="li"
              delay={i * 0.06}
              className="bg-elevated/60"
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group block h-full p-7 transition-colors hover:bg-overlay"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-gold" />
                  <ArrowUpRight className="size-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-5 font-medium">{label}</p>
                <p className="mt-1 break-all text-sm text-muted">{value}</p>
                <p className="hud mt-4">{note}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex items-center gap-4">
          <span className="hud text-gold">Good fit for</span>
          <span className="rule-fade flex-1" aria-hidden />
        </div>

        <ul className="mt-8 space-y-3.5">
          {FIT.map((f, i) => (
            <Reveal key={f} as="li" delay={i * 0.05} className="flex gap-3.5">
              <span className="mt-2.5 size-1 shrink-0 bg-gold" aria-hidden />
              <span className="text-pretty leading-relaxed text-ink/85">
                {f}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
