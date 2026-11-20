import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram favicon in the site's dark palette.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1818",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 8,
        }}
      >
        K
      </div>
    ),
    size,
  );
}
