import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";
import { StatusChip } from "@/components/ui/StatusChip";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:px-10 md:pb-28 md:pt-40">
      {/* Telemetry register above the hero. */}
      <div className="animate-rise mb-10 flex items-center gap-4 border-b border-hairline pb-4">
        <span className="hud text-gold">SEM Corp.</span>
        <span className="hud hidden sm:inline">
          Ref // AI-ENG · Pune, India
        </span>
        <span className="rule flex-1" aria-hidden />
        <span className="hud">01 / Index</span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-rise">
          <StatusChip />

          <h1 className="display mt-8 text-[clamp(2.75rem,6.6vw,5.25rem)]">
            <span className="block">Building AI systems</span>
            <span className="block">
              that reach <span className="accent">production.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted text-justify hyphens-auto">
            I build AI agents and multi-agent bots, workflow automation, and
            full-stack AI applications, so your systems run themselves. One
            touch or one voice, and the result appears.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/work" className="btn-primary group">
              View the work
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <a href={profile.resumeHref} className="btn-ghost">
              Request résumé
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center text-muted transition-colors hover:text-gold"
              >
                <GithubIcon className="size-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center text-muted transition-colors hover:text-gold"
              >
                <LinkedinIcon className="size-4.5" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center text-muted transition-colors hover:text-gold"
              >
                <InstagramIcon className="size-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Cinematic letterbox frame with engraved corner crosshairs. */}
        <div className="animate-rise relative [animation-delay:180ms]">
          <div className="brackets panel lit relative overflow-hidden p-3">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/hero-portrait-v2.webp"
                alt={`${profile.fullName}, ${profile.role}`}
                width={900}
                height={506}
                priority
                sizes="(max-width: 1024px) 92vw, 540px"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-canvas/55 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="hud">{profile.fullName}</span>
            <span className="hud text-gold">Frame 01</span>
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center gap-4">
        <ArrowDown className="size-3.5 text-gold" aria-hidden />
        <span className="hud">Scroll</span>
        <span className="rule-fade flex-1" aria-hidden />
      </div>
    </section>
  );
}
