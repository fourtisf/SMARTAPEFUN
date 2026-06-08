import { ImageResponse } from "next/og";

export const alt = "SmartApe — Solana smart-money terminal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded 1200×630 social card (replaces the old placeholder SVG). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 76,
          background:
            "linear-gradient(135deg, #0a0805 0%, #141009 55%, #0a0805 100%)",
          color: "#f5f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#000000",
              boxShadow: "0 0 22px rgba(255,181,52,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* SmartApe gold ape head (solid fills for the OG renderer) */}
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <circle cx="8.6" cy="11" r="3.1" fill="#ffb534" />
              <circle cx="23.4" cy="11" r="3.1" fill="#ffb534" />
              <circle cx="16" cy="15.7" r="8.3" fill="#ffb534" />
              <circle cx="16" cy="18.7" r="4" fill="#000000" />
              <circle cx="12.5" cy="13.7" r="1.55" fill="#000000" />
              <circle cx="19.5" cy="13.7" r="1.55" fill="#000000" />
              <circle cx="14.4" cy="18.5" r="0.85" fill="#ffb534" />
              <circle cx="17.6" cy="18.5" r="0.85" fill="#ffb534" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>SmartApe</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: "#d8c7a8",
              fontWeight: 600,
            }}
          >
            SOLANA SMART-MONEY TERMINAL
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08 }}>
            Follow the smartest money on Solana.
          </div>
          <div style={{ fontSize: 30, color: "#9b9183" }}>
            Scored wallets · anti-rug fused · real-time Telegram alerts.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9b9183",
          }}
        >
          <div>smartape.fun</div>
          <div>powered by Fourtis</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
