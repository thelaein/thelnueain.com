"use client";

import { useEffect, useRef } from "react";
import { PROCESS_FULL } from "@/lib/data";

function ProcessStep({ s }: { s: (typeof PROCESS_FULL)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="process-step reveal">
      <div className="ps-dot" />
      <div className="ps-num">{s.n}</div>
      <h3>{s.t}</h3>
      <div className="process-step-grid">
        <div>
          <h6>Purpose</h6>
          <p>{s.purpose}</p>
        </div>
        <div>
          <h6>Methods</h6>
          <ul>
            {s.methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6>Example Artifact</h6>
          <div className="ps-artifact">{s.artifact}</div>
        </div>
      </div>
    </div>
  );
}

export function ProcessClient() {
  return (
    <div className="process-path">
      <div className="process-line" />
      {PROCESS_FULL.map((s) => (
        <ProcessStep key={s.n} s={s} />
      ))}
    </div>
  );
}
