"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { MockVisual } from "@/components/ui/MockVisual";

function FlowDiagram({ flow }: { flow: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="flow-diagram" ref={ref}>
      {flow.map((f, i) => (
        <span key={f} style={{ display: "contents" }}>
          {i > 0 && <div className="flow-arrow" />}
          <div
            className={`flow-node ${visible ? "in" : ""}`}
            style={{ transitionDelay: `${i * 140}ms` }}
          >
            {f}
          </div>
        </span>
      ))}
    </div>
  );
}

function ProtoDemo({ project }: { project: Project }) {
  const [tab, setTab] = useState(0);
  // Real screenshots per tab — fallback to clean bars if missing
  const imgForTab = [
    project.images?.[0],
    project.images?.[1] ?? project.images?.[0],
    project.images?.[2] ?? project.images?.[1] ?? project.images?.[0],
  ];
  const labelForTab = ["Overview", "Detail", "Confirm"];

  const contents = [
    <div key={0} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {imgForTab[0] ? (
        <div style={{ width: "100%", maxWidth: 720, borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg2)" }}>
          <Image src={imgForTab[0]!} alt={`${project.name} — ${labelForTab[0]}`} width={1600} height={1000} style={{ width: "100%", height: "auto", display: "block" }} sizes="(max-width: 900px) 100vw, 720px" />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          <div className="row" style={{ width: "100%" }} />
          <div className="row" style={{ width: "72%" }} />
          <div className="row" style={{ width: "88%" }} />
        </div>
      )}
    </div>,
    <div key={1} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {imgForTab[1] ? (
        <div style={{ width: "100%", maxWidth: 720, borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg2)" }}>
          <Image src={imgForTab[1]!} alt={`${project.name} — ${labelForTab[1]}`} width={1600} height={1000} style={{ width: "100%", height: "auto", display: "block" }} sizes="(max-width: 900px) 100vw, 720px" />
        </div>
      ) : (
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <div className="row" style={{ width: "30%" }} />
          <div className="row" style={{ width: "60%" }} />
        </div>
      )}
    </div>,
    <div key={2} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {imgForTab[2] ? (
        <div style={{ width: "100%", maxWidth: 420, borderRadius: 24, overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg2)", padding: 10 }}>
          <Image src={imgForTab[2]!} alt={`${project.name} — ${labelForTab[2]}`} width={800} height={1400} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }} sizes="420px" />
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(120deg, var(--accent1), var(--accent2))", flexShrink: 0 }} />
          <div className="row" style={{ width: "50%" }} />
          <div style={{ width: 44, height: 28, borderRadius: 999, background: "var(--accent1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#0c0c14", fontSize: 11, fontWeight: 700 }}>✓</div>
        </div>
      )}
    </div>,
  ];

  return (
    <div className="proto-demo">
      <div className="proto-tabs">
        {["Overview", "Detail", "Confirm"].map((t, i) => (
          <button
            key={t}
            className={`proto-tab ${tab === i ? "active" : ""}`}
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="proto-panel">{contents[tab]}</div>
    </div>
  );
}

export function CaseSections({ project, next }: { project: Project; next: Project }) {
  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-eyebrow reveal in">
            <span className="pill">{project.type}</span>
            <span className="pill">{project.timeline}</span>
          </div>
          <h1 className="reveal in">{project.name}</h1>
          <div className="cs-meta-grid reveal in">
            <div>
              <span>Role</span>
              <b>{project.role}</b>
            </div>
            <div>
              <span>Team</span>
              <b>{project.team}</b>
            </div>
            <div>
              <span>Tools</span>
              <b>{project.tools}</b>
            </div>
            <div>
              <span>Timeline</span>
              <b>{project.timeline}</b>
            </div>
          </div>
          <div
            className="cs-hero-visual reveal in"
            style={{ aspectRatio: "16/8", overflow: "hidden", background: "var(--bg2)" }}
          >
            {project.images?.[0] ? (
              <Image
                src={project.images[0]}
                alt={`${project.name} hero`}
                width={1600}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                sizes="100vw"
                priority
              />
            ) : (
              <MockVisual mockClass={project.mockClass} />
            )}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Overview</div>
          <div className="cs-two-col reveal in">
            <h2>
              Context, problem
              <br />
              and goal.
            </h2>
            <div>
              <p>
                <b style={{ color: "var(--text)" }}>Context.</b> {project.context}
              </p>
              <p style={{ marginTop: 16 }}>
                <b style={{ color: "var(--text)" }}>Problem.</b> {project.problem}
              </p>
              <p style={{ marginTop: 16 }}>
                <b style={{ color: "var(--text)" }}>Goal.</b> {project.goal}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Challenge</div>
          <div className="reveal in">
            <h2>{project.challenge}</h2>
          </div>
          {project.hypothesis && (
            <div
              className="reveal in"
              style={{
                marginTop: 28,
                padding: "22px 24px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-dim)",
                lineHeight: 1.6,
              }}
            >
              <div style={{ fontSize: 12, color: "var(--accent1)", fontWeight: 600, marginBottom: 8 }}>
                Hypothesis
              </div>
              {project.hypothesis}
            </div>
          )}
          {project.whatWhoWhyHow && (
            <div className="pain-grid reveal in" style={{ marginTop: 22 }}>
              <div className="pain-card">
                <div className="pn">What</div>
                <p>{project.whatWhoWhyHow.what}</p>
              </div>
              <div className="pain-card">
                <div className="pn">Who</div>
                <p>{project.whatWhoWhyHow.who}</p>
              </div>
              <div className="pain-card">
                <div className="pn">Why</div>
                <p>{project.whatWhoWhyHow.why}</p>
              </div>
              <div className="pain-card">
                <div className="pn">How</div>
                <p>{project.whatWhoWhyHow.how}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Research</div>
          <div className="cs-two-col reveal in">
            <h2>
              Grounding the design
              <br />
              in real behaviour.
            </h2>
            <ul>
              {project.research.map((r) => (
                <li
                  key={r}
                  style={{ padding: "6px 0", color: "var(--text-dim)" }}
                >
                  — {r}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="section-head reveal in"
            style={{ marginTop: 60, marginBottom: 24 }}
          >
            <h2 style={{ fontSize: 26 }}>Users</h2>
          </div>
          <div className="pain-grid reveal in">
            {project.users.map((u) => (
              <div key={u.t} className="pain-card">
                <div className="pn">{u.t}</div>
                <p>{u.d}</p>
              </div>
            ))}
          </div>
          {project.personas && project.personas.length > 0 && (
            <>
              <div className="section-head reveal in" style={{ marginTop: 48, marginBottom: 24 }}>
                <h2 style={{ fontSize: 26 }}>Personas</h2>
              </div>
              <div className="pain-grid reveal in">
                {project.personas.map((p) => (
                  <div key={p.name} className="pain-card">
                    <div className="pn">
                      {p.name} · {p.age}
                    </div>
                    <p style={{ marginTop: 8, color: "var(--text)", fontWeight: 600, fontSize: 13 }}>
                      {p.occupation} · {p.education}
                    </p>
                    <p style={{ marginTop: 6, fontSize: 12, color: "var(--text-dim)" }}>{p.status} · {p.tech}</p>
                    <div style={{ marginTop: 14 }}>
                      <div style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 600 }}>Goals</div>
                      <ul style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 4 }}>
                        {p.goals.map((g) => (
                          <li key={g} style={{ fontSize: 13, color: "var(--text-dim)" }}>
                            — {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ marginTop: 12 }}>
                      <div style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 600 }}>Pains</div>
                      <ul style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 4 }}>
                        {p.pains.map((pain) => (
                          <li key={pain} style={{ fontSize: 13, color: "var(--text-dim)" }}>
                            — {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {project.taskFlows && (
            <>
              <div className="section-head reveal in" style={{ marginTop: 48, marginBottom: 16 }}>
                <h2 style={{ fontSize: 26 }}>Key task flows</h2>
              </div>
              <div className="pain-grid reveal in" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {project.taskFlows.map((t) => (
                  <div
                    key={t}
                    className="pain-card"
                    style={{ padding: "18px 20px", fontSize: 13, color: "var(--text-dim)" }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </>
          )}
          {project.userStories && (
            <>
              <div className="section-head reveal in" style={{ marginTop: 48, marginBottom: 16 }}>
                <h2 style={{ fontSize: 26 }}>User stories</h2>
              </div>
              <div className="reveal in" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {project.userStories.map((s) => (
                  <div
                    key={s}
                    style={{
                      padding: "16px 18px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      color: "var(--text-dim)",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    “{s}”
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Problem Synthesis</div>
          <div className="reveal in">
            <h2>Key pain points</h2>
          </div>
          <div className="pain-grid reveal in" style={{ marginTop: 30 }}>
            {project.pain.map((pt, i) => (
              <div key={pt} className="pain-card">
                <div className="pn">0{i + 1}</div>
                <p>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">User Flow</div>
          <div className="reveal in">
            <h2>Mapping the primary path</h2>
          </div>
          <FlowDiagram flow={project.flow} />
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Wireframes</div>
          <div className="reveal in">
            <h2>Low-fidelity exploration</h2>
          </div>
          {project.wireframeImage ? (
            <div className="reveal in" style={{ marginTop: 30 }}>
              <div
                style={{
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg2)",
                }}
              >
                <Image
                  src={project.wireframeImage}
                  alt={`${project.name} wireframe flow`}
                  width={2400}
                  height={1200}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  sizes="100vw"
                />
              </div>
              <div style={{ marginTop: 10, fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                Early flows — task & user flow mapping before visual design.
              </div>
            </div>
          ) : (
            <div className="wireframe-grid reveal in">
              {[0, 1, 2].map((i) => (
                <div key={i} className="wf-screen">
                  <div className="wf-bar w40" />
                  <div className="wf-bar w70" />
                  <div className="wf-block" />
                  <div className="wf-bar w100" />
                  <span className="wf-tag">Screen 0{i + 1}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Design Decisions</div>
          <div className="reveal in">
            <h2>
              Why the interface
              <br />
              ended up this way
            </h2>
          </div>
          <div className="reveal in">
            {project.decisions.map((d) => (
              <div key={d.p} className="decision-row">
                <div>
                  <span>Problem</span>
                  <p>{d.p}</p>
                </div>
                <div>
                  <span>Design Decision</span>
                  <p>{d.d}</p>
                </div>
                <div>
                  <span>Why</span>
                  <p>{d.w}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Visual System</div>
          <div className="reveal in">
            <h2>A compact system board</h2>
            {project.styleGuide?.notes && (
              <p style={{ marginTop: 12, color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6, maxWidth: 60 + "ch" }}>
                {project.styleGuide.notes}
              </p>
            )}
          </div>
          <div className="system-board reveal in">
            <div className="system-card">
              <h5>Typography</h5>
              <div className="type-sample" style={{ fontSize: 22, lineHeight: 1.4 }}>
                {project.styleGuide?.typography ?? `${project.name.split(" ")[0]} — Body text sample for reading comfort.`}
              </div>
              <div
                className="type-sample"
                style={{ fontSize: 16, fontFamily: "var(--font-body)", marginTop: 8 }}
              >
                Body text sample for reading comfort.
              </div>
              {project.styleGuide?.icons && (
                <div style={{ marginTop: 14, fontSize: 12, color: "var(--text-dim)" }}>Icons: {project.styleGuide.icons}</div>
              )}
            </div>
            <div className="system-card">
              <h5>Color — case artifact</h5>
              {project.styleGuide?.colors ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div className="color-swatches">
                    {project.styleGuide.colors.map((c) => (
                      <i key={c.hex} title={`${c.name} ${c.hex}`} style={{ background: c.hex }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {project.styleGuide.colors.map((c) => (
                      <div key={c.name} style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                        {c.name} — {c.hex}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)", opacity: 0.7 }}>
                    Shown as artifact — Aurora site tokens unchanged.
                  </div>
                </div>
              ) : (
                <div className="color-swatches">
                  <i style={{ background: "var(--accent1)" }} />
                  <i style={{ background: "var(--accent2)" }} />
                  <i style={{ background: "var(--accent3)" }} />
                  <i style={{ background: "var(--indigo)" }} />
                  <i style={{ background: "var(--text)" }} />
                </div>
              )}
            </div>
            <div className="system-card">
              <h5>Buttons</h5>
              <div className="btn-samples">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
              </div>
            </div>
            <div className="system-card">
              <h5>Spacing Scale</h5>
              <div className="spacing-scale">
                <i style={{ height: 8 }} />
                <i style={{ height: 16 }} />
                <i style={{ height: 24 }} />
                <i style={{ height: 36 }} />
                <i style={{ height: 52 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Final UI</div>
          <div className="reveal in">
            <h2>Immersive presentation</h2>
          </div>
          <div className="final-frames reveal in">
            <div className="final-frame" style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--bg2)" }}>
              {project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={`${project.name} final UI`}
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  sizes="100vw"
                />
              ) : (
                <MockVisual mockClass={project.mockClass} />
              )}
            </div>
            {project.images?.[1] && (
              <div className="final-frame" style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--bg2)" }}>
                <Image
                  src={project.images[1]}
                  alt={`${project.name} detail`}
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  sizes="100vw"
                />
              </div>
            )}
            {project.images?.[2] && (
              <div className="final-frame" style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--bg2)" }}>
                <Image
                  src={project.images[2]}
                  alt={`${project.name} detail 2`}
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  sizes="100vw"
                />
              </div>
            )}
          </div>
          <div
            className="section-head reveal in"
            style={{ marginTop: 70, marginBottom: 0 }}
          >
            <h2 style={{ fontSize: 26 }}>Prototype</h2>
          </div>
          <div className="reveal in">
            <ProtoDemo project={project} />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="cs-label">Reflection</div>
          <div className="reveal in">
            <h2>What I learned</h2>
          </div>
          <div className="reflect-grid reveal in">
            <div className="reflect-card">
              <h5>What worked</h5>
              <p>{project.reflect.worked}</p>
            </div>
            <div className="reflect-card">
              <h5>What I learned</h5>
              <p>{project.reflect.learned}</p>
            </div>
            <div className="reflect-card">
              <h5>What could improve</h5>
              <p>{project.reflect.improve}</p>
            </div>
          </div>
        </div>
      </section>

      <Link href={`/case/${next.id}`} className="cs-next" style={{ display: "block" }}>
        <div className="wrap">
          <span>Next Project</span>
          <h2>{next.name} →</h2>
        </div>
      </Link>
    </>
  );
}
