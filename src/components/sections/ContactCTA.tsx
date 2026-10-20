import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
      <Reveal className="panel relative overflow-hidden bg-elevated/70 px-8 py-16 text-center md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgb(var(--gold-rgb) / 0.10), transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <span className="hud text-gold">07</span>
            <span className="hud">Contact</span>
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-balance text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Have a system that needs to
            <span className="accent"> actually work?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-balance text-muted">
            {profile.availabilityLine}. The fastest way to reach me is email — I
            reply to everything that is not a template.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[0.98]"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <Link
              href="/contact"
              className="panel inline-flex items-center gap-2 bg-canvas px-6 py-3 text-sm font-medium transition-colors hover:bg-overlay"
            >
              More ways to reach me
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center text-muted transition-colors hover:bg-ink/8 hover:text-ink"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center text-muted transition-colors hover:bg-ink/8 hover:text-ink"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
