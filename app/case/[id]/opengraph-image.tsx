import { ImageResponse } from "next/og";
import { getProject } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study — Thel Nu";

export async function generateStaticParams() {
  const { PROJECTS } = await import("@/lib/data");
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default async function CaseOgImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  const title = project?.name ?? "Case Study";
  const subtitle = project?.type ?? "Product Design";
  const desc = project?.short ?? "UI/UX case study by Thel Nu";

  // Aurora palette — keep in sync with globals.css
  const bg = "#11121A";
  const surface = "#1B1C2B";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* blobs */}
        <div
          style={{
            position: "absolute",
            width: 680,
            height: 680,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #7657FF 0%, transparent 70%)",
            opacity: 0.52,
            left: -160,
            top: -200,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #5BE7FF 0%, transparent 70%)",
            opacity: 0.4,
            right: -160,
            top: -60,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #FF8FAE 0%, transparent 70%)",
            opacity: 0.28,
            left: 240,
            bottom: -220,
          }}
        />

        {/* top */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 14px",
              borderRadius: 999,
              background: surface,
              border: "1px solid rgba(247,245,242,0.12)",
              color: "#F7F5F2",
              fontSize: 13,
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: 999, background: "#7657FF" }} />
            {subtitle}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#A9A9B2",
              fontSize: 12,
            }}
          >
            thelnueain.com &nbsp;·&nbsp; {project?.num ?? "—"}
          </div>
        </div>

        {/* middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: 62,
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: -1.2,
                color: "#F7F5F2",
                fontFamily: "Georgia, serif",
                display: "flex",
              }}
            >
              {title}
            </div>
          </div>
          <div
            style={{
              fontSize: 17,
              color: "#A9A9B2",
              lineHeight: 1.5,
              maxWidth: 760,
              display: "flex",
            }}
          >
            {desc}
          </div>
        </div>

        {/* bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#F7F5F2",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: "linear-gradient(120deg, #7657FF, #5BE7FF)",
                  display: "flex",
                }}
              />
              Thel Nu — UI/UX Designer
            </div>
            <div
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid rgba(247,245,242,0.14)",
                color: "#A9A9B2",
                fontSize: 11,
              }}
            >
              {project?.timeline ?? ""}
            </div>
          </div>
          <div style={{ fontSize: 11, color: "rgba(247,245,242,0.45)" }}>Research → Interface → Prototype</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
