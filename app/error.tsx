"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow reveal in">
          <span className="dot" />
          Something went wrong
        </div>
        <h1 className="reveal in">
          A glitch in the
          <br />
          aurora.
        </h1>
        <p className="lede reveal in">
          An unexpected error occurred. Try again — if it persists, reach out at&nbsp;
          <a href="mailto:thelnuaein5450@gmail.com" style={{ borderBottom: "1px solid var(--border-strong)" }}>
            thelnuaein5450@gmail.com
          </a>
          .
        </p>
        {error.digest && (
          <p style={{ marginTop: 12, fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            Ref: {error.digest}
          </p>
        )}
        <div className="reveal in" style={{ marginTop: 32 }}>
          <button className="btn btn-primary" onClick={() => reset()}>
            Try again <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
