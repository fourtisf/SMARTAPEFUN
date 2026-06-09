"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useStrings } from "@/lib/strings";
import { CONTRACT_ADDRESS } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Compact mid-truncation for a Solana mint: AbCdEf…WxYz */
function shorten(address: string): string {
  if (address.length <= 13) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

/**
 * Hero CA pill. Shows "Coming soon" until a mint is configured; once
 * CONTRACT_ADDRESS is set it renders a one-tap copyable address so apes can
 * verify the real token instead of a scam clone.
 */
export function ContractAddress({ className }: { className?: string }) {
  const { strings } = useStrings();
  const c = strings.hero.ca;
  const [copied, setCopied] = useState(false);
  const hasAddress = CONTRACT_ADDRESS.length > 0;

  // Pre-launch: nothing to copy yet — static informative pill.
  if (!hasAddress) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 font-mono text-xs",
          className,
        )}
      >
        <span className="uppercase tracking-[0.14em] text-text-muted">
          {c.label}
        </span>
        <span className="inline-flex items-center gap-1.5 text-text">
          <span className="relative inline-flex h-1.5 w-1.5" aria-hidden>
            <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {c.comingSoon}
        </span>
      </span>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked (insecure context / denied) — no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={CONTRACT_ADDRESS}
      aria-label={`${c.label}: ${copied ? c.copied : c.copy}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 font-mono text-xs transition-colors hover:border-[color:color-mix(in_srgb,var(--accent)_40%,transparent)]",
        className,
      )}
    >
      <span className="uppercase tracking-[0.14em] text-text-muted">
        {c.label}
      </span>
      <span className="text-text">{shorten(CONTRACT_ADDRESS)}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
      ) : (
        <Copy
          className="h-3.5 w-3.5 text-text-muted transition-colors group-hover:text-text"
          aria-hidden
        />
      )}
    </button>
  );
}
