"use client";

import { useState } from "react";
import { EXPERTISE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Expertise() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-label="Expertise">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            Expertise
          </div>
          <h2>What I bring to the table</h2>
        </Reveal>
        <div className="expertise-grid">
          {EXPERTISE.map((e, i) => (
            <div
              key={e.t}
              className={`expertise-panel ${open === i ? "open" : ""}`}
              data-i={i}
              role="button"
              tabIndex={0}
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  setOpen(open === i ? null : i);
                }
              }}
            >
              <div className="exp-num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{e.t}</h4>
              <ul>
                {e.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
