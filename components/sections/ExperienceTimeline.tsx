"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceTimeline() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-label="Experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            Experience
          </div>
          <h2>A short professional timeline</h2>
        </Reveal>
        <Reveal>
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.co}
              className={`timeline-item ${open === i ? "open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="timeline-head">
                <div className="th-left">
                  <h4>{e.co}</h4>
                  <span className="role">{e.role}</span>
                </div>
                <div className="dates">{e.dates}</div>
              </div>
              <div className="timeline-body">
                <p>{e.d}</p>
                <span className="view-story">View full story →</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
