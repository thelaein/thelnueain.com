import type { Metadata } from "next";
import { ProcessClient } from "@/components/process/ProcessClient";

export const metadata: Metadata = {
  title: "Process — From Questions to Experiences",
  description:
    "The end-to-end path a project usually takes — from open questions to a validated, shippable interface. Discover, Define, Structure, Explore, Design, Prototype, Test, Iterate.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Process — Thel Nu",
    description:
      "A disciplined 8-step design process: Discover → Define → Structure → Explore → Design → Prototype → Test → Iterate.",
    url: "https://thelnueain.com/process",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Process — Thel Nu" }],
  },
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal in">
            <span className="dot" />
            Process
          </div>
          <h1 className="reveal in">
            From questions
            <br />
            to experiences.
          </h1>
          <p className="lede reveal in">
            The end-to-end path a project usually takes — from open questions to a validated, shippable
            interface.
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <ProcessClient />
        </div>
      </section>
    </>
  );
}
