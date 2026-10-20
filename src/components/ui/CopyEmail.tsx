"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the mailto link next to this still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="panel inline-flex items-center gap-2 bg-elevated px-5 py-2.5 text-sm transition-colors hover:bg-overlay"
    >
      {copied ? (
        <Check className="size-4 text-live" aria-hidden />
      ) : (
        <Copy className="size-4 text-gold" aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
    </button>
  );
}
