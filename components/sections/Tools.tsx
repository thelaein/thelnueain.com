"use client";

import { useRef } from "react";
import { TOOLS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Tools() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.querySelectorAll<HTMLElement>(".tool-pill").forEach((pill) => {
      const pr = pill.getBoundingClientRect();
      const px = pr.left + pr.width / 2 - rect.left;
      const py = pr.top + pr.height / 2 - rect.top;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dx = px - mx;
      const dy = py - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 90;
      if (dist < radius) {
        const force = (radius - dist) / radius;
        pill.style.transform = `translate(${dx * force * 0.35}px, ${dy * force * 0.35}px)`;
      } else {
        pill.style.transform = "translate(0,0)";
      }
    });
  };

  const onLeave = () => {
    ref.current
      ?.querySelectorAll<HTMLElement>(".tool-pill")
      .forEach((p) => (p.style.transform = "translate(0,0)"));
  };

  return (
    <section aria-label="Tools">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            Designer Toolkit
          </div>
          <h2>Tools I reach for daily</h2>
        </Reveal>
        <Reveal>
          <div
            ref={ref}
            className="tools-canvas"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            {TOOLS.map((t) => (
              <div key={t} className="tool-pill">
                {t}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
