import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/logo/logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(700px 420px at 90% 0%, rgba(135,54,191,0.16), transparent 55%), radial-gradient(600px 400px at 5% 20%, rgba(41,179,226,0.18), transparent 50%), linear-gradient(180deg, #f7fbfe 0%, #e8f0f8 100%)",
          color: "#0f1724",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 4,
            background: "linear-gradient(90deg, #29b3e2, #5b72e0, #8736bf)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={148}
            height={148}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                background: "linear-gradient(105deg, #29b3e2, #5b72e0, #8736bf)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#3a4556",
                maxWidth: 720,
                lineHeight: 1.3,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#667385",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>PDF Pocket · OneSnap · OneCut</span>
          <span>corvyx.co</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
