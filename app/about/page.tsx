import type { Metadata } from "next";
import Image from "next/image";
import { EXPERIENCE, PRINCIPLES, SKILLS, SOFT, TOOLS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Designer Turning Complexity into Clarity",
  description:
    "I'm Thel Nu — UI/UX Designer with ~3 years experience in startups, enterprise & freelance. B.C.Sc Hpa-An, focused on research-driven, accessible product design.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Thel Nu",
    description:
      "UI/UX Designer — 3 years, 3 case studies, translating business needs into humane interfaces.",
    url: "https://thelnueain.com/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About — Thel Nu" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="about-hero-grid">
            <div>
              <div className="eyebrow reveal in">
                <span className="dot" />
                About
              </div>
              <h1 className="reveal in">
                I&apos;m Thel Nu — a UI/UX designer who enjoys turning
                complexity into clarity.
              </h1>
              <p className="lede reveal in">
                Approximately 3 years of product design experience spanning
                startups, enterprise products, freelance projects, mobile apps
                and web applications. Focused on user-centric, accessible
                experiences and continuously improving through research,
                experimentation, and practice.
              </p>
              <div className="stat-strip reveal in">
                <div>
                  <span>3+</span>
                  <small>Years Experience</small>
                </div>
                <div>
                  <span>3</span>
                  <small>Case Studies</small>
                </div>
                <div>
                  <span>2023</span>
                  <small>B.C.Sc Graduate</small>
                </div>
              </div>
            </div>
            <div className="about-portrait reveal in" style={{ padding: 0, overflow: "hidden" }}>
              <Image
                src="/cases/about-portrait.jpg"
                alt="Thel Nu — reading in a plant-filled café, Yangon"
                width={1500}
                height={1325}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
                sizes="(max-width: 900px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <div className="eyebrow">
              <span className="dot" />
              My Story
            </div>
            <h2>Approaching product design as translation work.</h2>
            <p>
              Most of what I design sits between what a business needs and what
              a person can actually use without friction — the job is
              translating between the two.
            </p>
          </div>
          <div className="about-cols reveal in">
            <div>
              <h5>Experience</h5>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {EXPERIENCE.map((e) => (
                  <li key={e.co}>
                    <b>{e.co}</b> — {e.role}{" "}
                    <span style={{ color: "var(--text-dim)" }}>
                      ({e.dates})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Education</h5>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
                University of Computer Studies (Hpa-An)
                <br />
                Bachelor of Computer Science (B.C.Sc)
                <br />
                2016 – 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <div className="eyebrow">
              <span className="dot" />
              Design Principles
            </div>
            <h2>What guides the work</h2>
          </div>
          <div className="principles-list">
            {PRINCIPLES.map((p, i) => (
              <div key={p} className="principle-line reveal in">
                <span className="pl-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <div className="eyebrow">
              <span className="dot" />
              Skills &amp; Tools
            </div>
            <h2>Capabilities &amp; toolkit</h2>
          </div>
          <div
            className="about-cols reveal in"
            style={{ marginBottom: 40 }}
          >
            <div>
              <h5>Core Capabilities</h5>
              <ul>
                {SKILLS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Soft Skills</h5>
              <div className="tag-cloud">
                {SOFT.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h5 style={{ marginTop: 30 }}>Tools</h5>
              <div className="tag-cloud">
                {TOOLS.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <div className="eyebrow">
              <span className="dot" />
              Personal
            </div>
            <h2>Outside of design work</h2>
            <p>
              Keeping plants alive, enjoying a good dessert, and protecting a
              bit of personal downtime between projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
