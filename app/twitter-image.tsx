import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 600 };
export const contentType = "image/png";
export const alt = "Thel Nu — UI/UX Designer";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#11121A",
          padding: 48,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #7657FF 0%, transparent 70%)",
            opacity: 0.55,
            left: -100,
            top: -120,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #5BE7FF 0%, transparent 70%)",
            opacity: 0.4,
            right: -80,
            top: -40,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 999,
              background: "#1B1C2B",
              border: "1px solid rgba(247,245,242,0.12)",
              color: "#A9A9B2",
              fontSize: 12,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 999, background: "#7657FF" }} />
            thelnueain.com
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#F7F5F2",
              fontFamily: "Georgia, serif",
              letterSpacing: -1,
            }}
          >
            Thel Nu — UI/UX Designer
          </div>
          <div style={{ fontSize: 16, color: "#A9A9B2" }}>Research → Interface → Prototype</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
