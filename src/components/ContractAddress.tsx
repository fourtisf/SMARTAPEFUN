"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useStrings } from "@/lib/strings";
import { CONTRACT_ADDRESS } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Compact mid-truncation for a Solana mint: 8AG3Xx…itpump (case preserved). */
function shorten(address: string): string {
  if (address.length <= 13) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

/**
 * Hero CA pill. Renders "Coming soon" until a mint is set, otherwise a one-tap
 * copyable contract address so apes can verify the real token. The address is
 * kept in its original case (Solana base58 is case-sensitive) — never uppercased.
 */
export function ContractAddress({ className }: { className?: string }) {
  const { strings } = useStrings();
  const c = strings.hero.ca;
  const [copied, setCopied] = useState(false);
  const hasAddress = CONTRACT_ADDRESS.length > 0;

  const base =
    "inline-flex items-center gap-1.5 rounded-full border border-transparent bg-[var(--surface-2)] font-mono text-[0.7rem] tracking-[0.14em] text-text-muted";

  // Pre-launch: nothing to copy yet.
  if (!hasAddress) {
    return (
      <span className={cn(base, "px-3 py-1 uppercase", className)}>
        {c.label}: {c.comingSoon}
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
        base,
        "group py-1 pl-3 pr-2.5 transition-colors hover:text-text",
        className,
      )}
    >
      <span className="uppercase">{c.label}:</span>
      <span className="text-text">{shorten(CONTRACT_ADDRESS)}</span>
      {copied ? (
        <Check className="h-3 w-3 text-accent" aria-hidden />
      ) : (
        <Copy
          className="h-3 w-3 opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      )}
    </button>
  );
}
