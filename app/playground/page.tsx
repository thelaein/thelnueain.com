import type { Metadata } from "next";
import { PlaygroundClient } from "@/components/playground/PlaygroundClient";

export const metadata: Metadata = {
  title: "Playground — Digital Sketchbook",
  description:
    "Small interaction studies — animated toggles, card interactions, mobile nav transitions and design explorations. A designer's digital sketchbook.",
  alternates: { canonical: "/playground" },
  openGraph: {
    title: "Playground — Thel Nu",
    description: "Micro-interactions and mini design studies — the detail work between projects.",
    url: "https://thelnueain.com/playground",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Playground — Thel Nu" }],
  },
};

export default function PlaygroundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal in">
            <span className="dot" />
            Playground
          </div>
          <h1 className="reveal in">
            A designer&apos;s
            <br />
            digital sketchbook.
          </h1>
          <p className="lede reveal in">
            Small interaction studies — the kind of detail work that usually happens between projects.
          </p>
        </div>
      </section>
      <PlaygroundClient />
    </>
  );
}
