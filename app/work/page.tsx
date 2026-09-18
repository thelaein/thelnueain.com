import type { Metadata } from "next";
import { WorkClient } from "@/components/work/WorkClient";

export const metadata: Metadata = {
  title: "Work — Selected Projects",
  description:
    "Three products, three very different problems — an internal HR platform, a solo reading & writing app, and a data-dense operations dashboard.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Thel Nu",
    description:
      "Selected work, problems solved — HR Management Software, Readfam and POSCO Internal Operations.",
    url: "https://thelnueain.com/work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Work — Thel Nu" }],
  },
};

export default function WorkPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow reveal in">
          <span className="dot" />
          Work
        </div>
        <h1 className="reveal in">
          Selected work,
          <br />
          problems solved.
        </h1>
        <p className="lede reveal in">
          Three products, three very different problems — an internal HR platform, a solo reading &amp; writing
          app, and a data-dense operations dashboard.
        </p>
        <WorkClient />
      </div>
    </section>
  );
}
