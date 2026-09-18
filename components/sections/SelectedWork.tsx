"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

function Pin({ note, top, left, idx }: { note: string; top: string; left: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`pin ${open ? "open" : ""}`}
      style={{ top, left }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen((v) => !v);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
    >
      {idx + 1}
      <div className="pin-note">{note}</div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section aria-label="Selected work">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            Selected Work
          </div>
          <h2>
            Where research, interaction
            <br />
            and visual design met.
          </h2>
          <p>
            A few products where thinking through the problem shaped the
            interface as much as the pixels did.
          </p>
        </Reveal>

        {PROJECTS.map((p, i) => {
          const reverse = i % 2 === 1 ? " reverse" : "";
          const wide = i === 2 ? " wide" : "";
          return (
            <Reveal
              key={p.id}
              className={`work-item${reverse}${wide}`}
            >
              <div className="work-visual">
                <Link
                  href={`/case/${p.id}`}
                  className="work-frame"
                  data-cursor-view
                  aria-label={`View ${p.name} case study`}
                  style={{ display: "block", padding: 0, overflow: "hidden" }}
                >
                  {p.images?.[0] ? (
                    <Image
                      src={p.images[0]}
                      alt={`${p.name} — ${p.type}`}
                      width={1600}
                      height={1060}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  ) : (
                    <span style={{ display: "block", background: "var(--bg2)", height: "100%" }} />
                  )}
                </Link>
                {i === 0 && (
                  <>
                    <Pin note="Moved the primary action above the fold." top="14%" left="20%" idx={0} />
                    <Pin note="Reduced competing navigation choices." top="46%" left="70%" idx={1} />
                    <Pin note="Grouped related actions to reduce scanning effort." top="74%" left="32%" idx={2} />
                  </>
                )}
              </div>
              <div className="work-info">
                <div className="work-num">{p.num}</div>
                <h3>{p.name}</h3>
                <div className="work-tags">
                  {p.cats.slice(0, 3).map((c) => (
                    <span key={c} className="pill">
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </span>
                  ))}
                </div>
                <p>{p.short}</p>
                <div className="work-meta-row">
                  <div>
                    Role<b>{p.role}</b>
                  </div>
                  <div>
                    Timeline<b>{p.timeline}</b>
                  </div>
                </div>
                <Link href={`/case/${p.id}`} className="view-case">
                  View Case Study <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
