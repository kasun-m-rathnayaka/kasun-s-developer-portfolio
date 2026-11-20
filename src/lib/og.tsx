import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type OgProps = {
  title: string;
  /** Muted line under the title. */
  subtitle?: string;
  /** Small label above the title. */
  kicker?: string;
};

/** Shared OG card: warm near-black, big title, quiet footer. Used by the home page and each project. */
export function renderOg({ title, subtitle, kicker }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a1818",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {kicker ?? ""}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 18 ? 80 : 104,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", fontSize: 38, color: "rgba(255,255,255,0.6)" }}>
              {subtitle}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "2px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          kasun.tech
        </div>
      </div>
    ),
    ogSize,
  );
}
