"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#11121A",
          color: "#F7F5F2",
          fontFamily: "-apple-system, Inter, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 13, opacity: 0.6, letterSpacing: "0.02em" }}>Critical error</div>
          <h1 style={{ fontSize: 40, marginTop: 12, fontFamily: "Georgia, serif", lineHeight: 1.1 }}>
            Aurora needs a refresh.
          </h1>
          <p style={{ marginTop: 16, opacity: 0.7, lineHeight: 1.6 }}>{error.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: 24,
              padding: "12px 22px",
              borderRadius: 999,
              background: "linear-gradient(120deg, #7657FF, #5BE7FF)",
              color: "#0c0c14",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again →
          </button>
        </div>
      </body>
    </html>
  );
}
