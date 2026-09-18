import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

// Aurora favicon — dark canvas with gradient TN monogram
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
          background: "#11121A",
          borderRadius: 112,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* soft aurora blobs */}
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #7657FF 0%, transparent 70%)",
            opacity: 0.85,
            left: -80,
            top: -80,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #5BE7FF 0%, transparent 70%)",
            opacity: 0.7,
            right: -70,
            top: 40,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #FF8FAE 0%, transparent 70%)",
            opacity: 0.5,
            left: 50,
            bottom: -100,
          }}
        />
        {/* inner card */}
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 72,
            background: "rgba(27,28,43,0.96)",
            border: "1.5px solid rgba(247,245,242,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 700,
              letterSpacing: -8,
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
        {/* tiny dot accent */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            width: 8,
            height: 8,
            borderRadius: 99,
            background: "#7657FF",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
