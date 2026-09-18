"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

function Count({ target }: { target: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            let cur = 0;
            const step = Math.max(1, Math.round(target / 30));
            const iv = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(iv);
              }
              setN(cur);
            }, 40);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="num">
      {n}
    </div>
  );
}

export function Numbers() {
  return (
    <section aria-label="Design impact">
      <div className="wrap">
        <Reveal className="numbers-grid">
          <div>
            <Count target={3} />
            <div className="lbl">Years Design Experience</div>
          </div>
          <div>
            <Count target={3} />
            <div className="lbl">Featured Case Studies</div>
          </div>
          <div>
            <div className="num-text">Mobile + Web</div>
            <div className="lbl">Platforms Designed For</div>
          </div>
          <div>
            <div className="num-text">Research → UI</div>
            <div className="lbl">End-to-End Process</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
