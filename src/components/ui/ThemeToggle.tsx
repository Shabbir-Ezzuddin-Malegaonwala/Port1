"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Theme toggle with no React state.
 *
 * The theme already lives on <html data-theme>, set before first paint by the
 * inline script in layout.tsx. Mirroring it into React state would only create
 * a hydration mismatch, so the button reads the DOM on click and CSS decides
 * which icon is visible.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the toggle still works for this session.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="grid size-9 place-items-center text-muted transition-colors hover:text-gold"
    >
      <Sun className="icon-light size-4" aria-hidden />
      <Moon className="icon-dark size-4" aria-hidden />
    </button>
  );
}
