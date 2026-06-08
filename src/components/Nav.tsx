"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useStrings } from "@/lib/strings";
import { Button } from "@/components/ui/Button";
import { BrandLockup } from "@/components/Brand";
import { cn } from "@/lib/cn";
import { X_URL, TELEGRAM_ALERTS_URL } from "@/lib/site";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function Nav() {
  const { strings } = useStrings();
  const n = strings.nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: { href: string; label: string; external?: boolean }[] = [
    { href: "#features", label: n.links.features },
    { href: "#how", label: n.links.how },
    { href: "/terminal", label: n.links.terminal },
    { href: "#pricing", label: n.links.pricing },
    { href: TELEGRAM_ALERTS_URL, label: n.links.alerts, external: true },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_72%,transparent)] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        className={cn(
          "container-content flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20",
        )}
        aria-label="Primary"
      >
        <a href="#top" className="-m-1 rounded-lg p-1" aria-label={n.brand}>
          <BrandLockup />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-7 text-sm text-text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3.5 border-l border-[var(--border)] pl-6">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SmartApe on X"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <XLogo className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={TELEGRAM_ALERTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SmartApe alerts on Telegram"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <TelegramLogo className="h-5 w-5" />
            </a>
          </div>
          <Button href="#waitlist" size="sm">
            {n.cta}
          </Button>
        </div>

        <button
          type="button"
          className="-m-2 inline-flex items-center justify-center rounded-lg p-2 text-text lg:hidden"
          aria-label={open ? n.closeMenu : n.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="container-content flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block rounded-xl px-3 py-3 text-base text-text-muted transition-colors hover:bg-[var(--surface)] hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-2">
            <Button
              href="#waitlist"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {n.cta}
            </Button>
          </li>
          <li className="flex items-center justify-center gap-8 px-1 pt-5">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SmartApe on X"
              onClick={() => setOpen(false)}
              className="text-text-muted transition-colors hover:text-accent"
            >
              <XLogo className="h-5 w-5" />
            </a>
            <a
              href={TELEGRAM_ALERTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SmartApe alerts on Telegram"
              onClick={() => setOpen(false)}
              className="text-text-muted transition-colors hover:text-accent"
            >
              <TelegramLogo className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
