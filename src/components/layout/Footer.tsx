import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/content/profile";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
              Let&apos;s build something
              <span className="accent"> worth shipping.</span>
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Footer">
              <p className="hud">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="hud">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <LinkedinIcon className="size-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resumeHref}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    Request résumé
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="hud">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p className="hud">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
