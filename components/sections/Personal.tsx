import { Reveal } from "@/components/ui/Reveal";

export function Personal() {
  return (
    <section aria-label="Personal">
      <div className="wrap personal-wrap">
        <Reveal>
          <div className="eyebrow">
            <span className="dot" />
            Off the Clock
          </div>
          <h2>
            Designer at work.
            <br />
            Plant keeper after hours.
          </h2>
          <p
            style={{
              marginTop: 20,
              color: "var(--text-dim)",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: "46ch",
            }}
          >
            When I&apos;m not deep in a flow diagram, I&apos;m usually keeping a
            few stubborn plants alive, enjoying a good dessert, or jotting down
            half-formed ideas in a notebook I rarely finish.
          </p>
          <div className="personal-icons">
            <div className="p-icon">
              <svg viewBox="0 0 64 64">
                <path
                  className="plant-leaf"
                  d="M32 54V30"
                  stroke="var(--accent1)"
                  strokeWidth={2}
                  fill="none"
                />
                <path
                  className="plant-leaf"
                  d="M32 34C22 34 16 26 16 18C26 18 32 26 32 34Z"
                  fill="var(--indigo)"
                />
                <path
                  className="plant-leaf"
                  d="M32 40C42 40 48 32 48 24C38 24 32 32 32 40Z"
                  fill="var(--accent3)"
                />
                <rect x={24} y={54} width={16} height={8} rx={2} fill="var(--border-strong)" />
              </svg>
              <span>Plants</span>
            </div>
            <div className="p-icon">
              <svg viewBox="0 0 64 64">
                <rect x={14} y={28} width={30} height={22} rx={4} fill="var(--accent2)" />
                <path
                  d="M44 32H50C52 32 52 40 46 40"
                  stroke="var(--border-strong)"
                  strokeWidth={2}
                  fill="none"
                />
                <path
                  className="steam"
                  d="M22 24C22 20 26 20 26 16"
                  stroke="var(--text-dim)"
                  strokeWidth={2}
                  fill="none"
                />
                <path
                  className="steam"
                  d="M32 24C32 20 36 20 36 16"
                  stroke="var(--text-dim)"
                  strokeWidth={2}
                  fill="none"
                />
              </svg>
              <span>Dessert</span>
            </div>
            <div className="p-icon">
              <svg viewBox="0 0 64 64">
                <rect
                  x={16}
                  y={10}
                  width={32}
                  height={44}
                  rx={3}
                  fill="var(--surface-strong)"
                  stroke="var(--border-strong)"
                />
                <line
                  x1={22}
                  y1={22}
                  x2={42}
                  y2={22}
                  stroke="var(--border-strong)"
                  strokeWidth={2}
                />
                <line
                  x1={22}
                  y1={30}
                  x2={42}
                  y2={30}
                  stroke="var(--border-strong)"
                  strokeWidth={2}
                />
                <line
                  x1={22}
                  y1={38}
                  x2={34}
                  y2={38}
                  stroke="var(--border-strong)"
                  strokeWidth={2}
                />
              </svg>
              <span>Notebook</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="personal-visual">
          <div className="notebook">
            <div className="line" style={{ width: "80%" }} />
            <div className="line" style={{ width: "60%" }} />
            <div className="line short" />
            <div
              className="line"
              style={{ width: "70%", marginTop: 20 }}
            />
            <div className="line short" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
