import { cn } from "@/lib/cn";

/**
 * SmartApe mark — a confident, geometric gold ape head: a rounded crown with two
 * ears, two eyes and a recessed muzzle with nostrils. Premium gold (a
 * `--brand-hi → --brand-lo` gradient, lit from the top) on a pure-black,
 * borderless tile with a soft gold glow. Tokens keep it themeable; the gradient
 * is defined in the mark's own 0–32 space so every instance renders correctly.
 */
export function SmartApeMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      role="img"
      aria-label="SmartApe"
    >
      <defs>
        <linearGradient
          id="smartape-brand"
          x1="0"
          y1="6"
          x2="0"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--brand-hi)" />
          <stop offset="1" stopColor="var(--brand-lo)" />
        </linearGradient>
        <filter
          id="smartape-glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* pure-black, borderless tile */}
      <rect x="0" y="0" width="32" height="32" rx="9" fill="#000000" />
      <g filter="url(#smartape-glow)" fill="url(#smartape-brand)">
        {/* ears */}
        <circle cx="8.6" cy="11" r="3.1" />
        <circle cx="23.4" cy="11" r="3.1" />
        {/* head */}
        <circle cx="16" cy="15.7" r="8.3" />
        {/* recessed muzzle */}
        <circle cx="16" cy="18.7" r="4" fill="#000000" />
        {/* eyes */}
        <circle cx="12.5" cy="13.7" r="1.55" fill="#000000" />
        <circle cx="19.5" cy="13.7" r="1.55" fill="#000000" />
        {/* nostrils */}
        <circle cx="14.4" cy="18.5" r="0.85" />
        <circle cx="17.6" cy="18.5" r="0.85" />
      </g>
    </svg>
  );
}

/**
 * @deprecated Use {@link SmartApeMonogram}. Kept as a stable alias so existing
 * imports keep resolving to the canonical mark.
 */
export const SmartApeMark = SmartApeMonogram;

/** Wordmark lockup: monogram + "SmartApe" + optional tagline line. */
export function BrandLockup({
  poweredBy,
  className,
}: {
  poweredBy?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <SmartApeMonogram className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-text">
          SmartApe
        </span>
        {poweredBy && (
          <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-text-muted">
            {poweredBy}
          </span>
        )}
      </span>
    </span>
  );
}
