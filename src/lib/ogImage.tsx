import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({
  eyebrow,
  title,
  accent = "#0F766E",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0C4A6E 0%, #075985 55%, #115E59 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 48,
              borderRadius: 4,
              background: accent === "#0F766E" ? "#5EEAD4" : accent,
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#BAE6FD" }}>
            {eyebrow}
          </div>
        </div>
        <div
          style={{
            fontSize: title.length > 80 ? 52 : 62,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#E0F2FE" }}>
          FacilityComplianceHub.org
        </div>
      </div>
    ),
    ogSize
  );
}
