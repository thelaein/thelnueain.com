"use client";

import { useEffect, useState } from "react";

export function PlaygroundClient() {
  const [toggle, setToggle] = useState(false);
  const [navIdx, setNavIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNavIdx((i) => (i + 1) % 3), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Micro Interactions</h2>
          </div>
          <div className="play-grid">
            <div className="play-card reveal in">
              <h5>01 · Animated Toggle</h5>
              <div className="play-demo">
                <div
                  className={`demo-toggle ${toggle ? "on" : ""}`}
                  onClick={() => setToggle((v) => !v)}
                  role="switch"
                  aria-checked={toggle}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setToggle((v) => !v);
                    }
                  }}
                >
                  <i />
                </div>
              </div>
            </div>

            <div className="play-card reveal in">
              <h5>02 · Card Interaction</h5>
              <div className="play-demo">
                <div className="demo-card" />
              </div>
            </div>

            <div className="play-card reveal in">
              <h5>03 · Mobile Nav Transition</h5>
              <div className="play-demo">
                <div className="demo-phone">
                  <div className="dnav">
                    <i className={navIdx === 0 ? "active" : ""} />
                    <i className={navIdx === 1 ? "active" : ""} />
                    <i className={navIdx === 2 ? "active" : ""} />
                  </div>
                </div>
              </div>
            </div>

            <div className="play-card reveal in">
              <h5>04 · Button States</h5>
              <div className="play-demo">
                <div className="btn-states">
                  <button>Default</button>
                  <button disabled>Disabled</button>
                  <button>Primary</button>
                </div>
              </div>
            </div>

            <div className="play-card reveal in">
              <h5>05 · Loading Animation</h5>
              <div className="play-demo">
                <div className="loader-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="play-card reveal in">
              <h5>06 · Interactive Typography</h5>
              <div className="play-demo">
                <div className="type-demo">Hover me</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Mini Design Studies</h2>
          </div>
          <div className="play-grid">
            <div className="play-card reveal in">
              <h5>Color Exploration</h5>
              <div className="play-demo">
                <div className="study-swatches">
                  <i style={{ background: "var(--accent1)" }} />
                  <i style={{ background: "var(--accent2)" }} />
                  <i style={{ background: "var(--accent3)" }} />
                  <i style={{ background: "var(--indigo)" }} />
                </div>
              </div>
            </div>
            <div className="play-card reveal in">
              <h5>Component Variations</h5>
              <div className="play-demo">
                <div className="btn-states">
                  <button style={{ borderRadius: 2 }}>Square</button>
                  <button style={{ borderRadius: 999 }}>Pill</button>
                </div>
              </div>
            </div>
            <div className="play-card reveal in">
              <h5>Mobile Cards</h5>
              <div className="play-demo">
                <div className="study-cards">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="play-card reveal in">
              <h5>Dashboard Widgets</h5>
              <div className="play-demo" style={{ width: "100%" }}>
                <div className="study-widget">
                  <i style={{ width: "60%" }} />
                  <i style={{ width: "40%" }} />
                  <i style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
