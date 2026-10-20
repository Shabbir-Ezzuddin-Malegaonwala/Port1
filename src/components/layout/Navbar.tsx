"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const focusables =
      panelRef.current?.querySelectorAll<HTMLElement>("a, button");
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled
          ? "border-hairline bg-canvas/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10"
      >
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
            &#9670;
          </span>
          <span
            className="text-sm tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            SEM Corp.
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hud hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <a href={profile.resumeHref} className="btn-primary !px-5 !py-2.5">
            Request résumé
            <ArrowUpRight className="size-3" />
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center text-ink transition-colors hover:text-gold"
          >
            {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-hairline bg-canvas px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col">
          {LINKS.map((l) => (
            <li key={l.href} className="ledger-row">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-lg text-ink/90 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-5">
            <a
              href={profile.resumeHref}
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Request résumé
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
