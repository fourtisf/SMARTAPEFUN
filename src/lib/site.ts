/**
 * Central site constants — single source of truth for URLs, handles and brand
 * metadata reused across SEO, JSON-LD, sitemap and the footer.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://smartape.fun";

export const SITE_NAME = "SmartApe";
export const SITE_TAGLINE = "Follow the smartest money on Solana.";
export const SITE_DESCRIPTION =
  "SmartApe is a Solana-first memecoin smart-money tracker. We score profitable on-chain wallets and alert you in real time — segmented Smart, Sniper, Insider and KOL flows, anti-rug fused, delivered Telegram-native in your language.";

// Social / community
export const X_HANDLE = "smartape_fun";
export const X_URL = "https://x.com/smartape_fun";
export const TELEGRAM_MAIN = "https://t.me/smartapefun";
export const TELEGRAM_ALERTS_HANDLE = "smartapefun";
export const TELEGRAM_ALERTS_URL = "https://t.me/smartapefun";

// Token contract address (SPL mint). Drives the hero CA pill.
// Empty value renders "Coming soon"; override per-env with NEXT_PUBLIC_CONTRACT_ADDRESS.
export const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.trim() ||
  "8AG3XxUQ3H7WFMiyhhq8jqGGPnJD3tyAvG7FdUitpump";
