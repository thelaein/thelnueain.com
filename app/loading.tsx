export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" style={{ opacity: 0.6 }} />
            Loading
          </div>
          <div
            style={{
              marginTop: 20,
              height: 56,
              maxWidth: 520,
              borderRadius: 12,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              marginTop: 18,
              height: 18,
              maxWidth: 420,
              borderRadius: 999,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  height: 180,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
