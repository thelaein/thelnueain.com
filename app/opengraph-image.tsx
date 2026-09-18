import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "Thel Nu — UI/UX Designer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11121A",
          padding: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* aurora blobs */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #7657FF 0%, transparent 70%)",
            opacity: 0.55,
            left: -180,
            top: -220,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 640,
            height: 640,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #5BE7FF 0%, transparent 70%)",
            opacity: 0.42,
            right: -180,
            top: -80,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%, #FF8FAE 0%, transparent 70%)",
            opacity: 0.32,
            left: 220,
            bottom: -260,
          }}
        />

        {/* top nav pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(27,28,43,0.9)",
              border: "1px solid rgba(247,245,242,0.12)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#7657FF",
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "#F7F5F2",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
              }}
            >
              Thel Nu
            </span>
            <span style={{ fontSize: 13, color: "#A9A9B2" }}>UI/UX Designer</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(247,245,242,0.12)",
              color: "#A9A9B2",
              fontSize: 12,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#43D17A",
              }}
            />
            Open to opportunities
          </div>
        </div>

        {/* main */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#A9A9B2",
              fontSize: 13,
              letterSpacing: 1,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 999, background: "#7657FF" }} />
            PORTFOLIO 2026
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <div
              style={{
                fontSize: 68,
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: "#F7F5F2",
                fontFamily: "Georgia, serif",
                display: "flex",
              }}
            >
              I design digital
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontSize: 68,
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: -1.5,
                  color: "#F7F5F2",
                  fontFamily: "Georgia, serif",
                }}
              >
                experiences that feel
              </span>
              <span
                style={{
                  fontSize: 68,
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#5BE7FF",
                }}
              >
                human.
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#A9A9B2",
              lineHeight: 1.5,
              maxWidth: 640,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <span
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                background: "linear-gradient(120deg, #7657FF, #5BE7FF)",
                color: "#0c0c14",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Explore work →
            </span>
            <span
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid rgba(247,245,242,0.22)",
                color: "#F7F5F2",
                fontSize: 13,
              }}
            >
              thelnueain.com
            </span>
          </div>
          <div style={{ fontSize: 12, color: "rgba(247,245,242,0.5)" }}>
            Mobile + Web · Research → UI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
