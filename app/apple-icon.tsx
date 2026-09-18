import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 42,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #7657FF 0%, transparent 70%)",
            opacity: 0.85,
            left: -30,
            top: -30,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #5BE7FF 0%, transparent 70%)",
            opacity: 0.7,
            right: -20,
            top: 20,
          }}
        />
        <div
          style={{
            width: 126,
            height: 126,
            borderRadius: 28,
            background: "#1B1C2B",
            border: "1px solid rgba(247,245,242,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#F7F5F2",
              fontFamily: "Georgia, serif",
              display: "flex",
            }}
          >
            T
            <span
              style={{
                background: "linear-gradient(120deg, #7657FF, #5BE7FF)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              N
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
