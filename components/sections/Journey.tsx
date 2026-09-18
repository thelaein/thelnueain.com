"use client";

import { useState } from "react";
import { JOURNEY } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Journey() {
  const [open, setOpen] = useState(0);
  return (
    <section aria-label="Process">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            My Process
          </div>
          <h2>From questions to experiences.</h2>
          <p>
            An interactive walk through how a project actually moves from
            question to shipped interface.
          </p>
        </Reveal>
        <Reveal className="journey">
          <div className="journey-track">
            {JOURNEY.map((j, i) => (
              <div
                key={j.n}
                className={`journey-stage ${open === i ? "open" : ""}`}
                tabIndex={0}
                role="button"
                onClick={() => setOpen(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(i);
                  }
                }}
              >
                <div className="journey-progress" />
                <div className="jn">{j.n}</div>
                <h5>{j.t}</h5>
                <div className="jmethods">
                  {j.m.map((m) => (
                    <div key={m}>{m}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
