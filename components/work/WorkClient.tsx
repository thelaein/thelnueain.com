"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["all", "mobile", "web", "enterprise", "ux", "ui"] as const;

function cap(s: string) {
  if (s === "ui") return "UI";
  if (s === "ux") return "UX";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function WorkClient() {
  const [active, setActive] = useState<string>("all");
  const rows = PROJECTS.filter((p) => active === "all" || p.cats.includes(active));

  return (
    <>
      <div className="filters reveal in" id="work-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${f === active ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {cap(f)}
          </button>
        ))}
      </div>
      <div className="work-list reveal in" id="work-list">
        {rows.map((p) => (
          <Link key={p.id} href={`/case/${p.id}`} className="work-row">
            <div className="wr-num">{p.num}</div>
            <div className="wr-title">{p.name}</div>
            <div className="wr-cat">{p.type}</div>
            <div className="wr-tools">{p.tools}</div>
            <div className="wr-arrow">→</div>
          </Link>
        ))}
      </div>
    </>
  );
}
