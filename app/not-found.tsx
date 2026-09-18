import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow reveal in">
          <span className="dot" />
          404 — Not found
        </div>
        <h1 className="reveal in">
          This page drifted
          <br />
          off the canvas.
        </h1>
        <p className="lede reveal in">
          The link you followed doesn&apos;t exist, or the project was moved.
          Let&apos;s get you back to something useful.
        </p>
        <div className="reveal in" style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Back home <span className="arrow">→</span>
          </Link>
          <Link href="/work" className="btn btn-secondary">
            View work
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
