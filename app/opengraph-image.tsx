import { ImageResponse } from "next/og";

export const alt = "Shyam Mahato — Senior Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#ECE8E1",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9A958C",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          Senior Software Developer · Full-Stack
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 0.95 }}>Shyam Mahato</div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#9A958C",
              maxWidth: 860,
              lineHeight: 1.35,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Production web apps, portals, and booking systems. News18 · 4M+
            monthly impressions. Available for freelance.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#5E5A54",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>5+ years full-stack</span>
          <span>Next.js · Node · PostgreSQL</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
