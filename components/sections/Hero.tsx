"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const WORDS = ["human.", "intuitive.", "clear.", "useful.", "delightful."];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  // word swap
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  // parallax
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      canvas.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth")!);
        el.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
      });
    };
    const onLeave = () => {
      canvas.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        el.style.transform = "translate(0,0)";
      });
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // animated dot along path
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) return;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;
    const len = path.getTotalLength();
    let t0: number | null = null;
    let raf = 0;
    const animate = (ts: number) => {
      if (t0 === null) t0 = ts;
      const progress = ((ts - t0) / 4200) % 1;
      const pt = path.getPointAtLength(progress * len);
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <Reveal className="hero-intro">Hello — I&apos;m Thel Nu.</Reveal>
          <Reveal>
            <h1>
              I design digital
              <br />
              experiences that
              <br />
              feel{" "}
              <span className="swap-words" aria-live="polite">
                {WORDS.map((w, i) => (
                  <span key={w} className={i === idx ? "active" : ""}>
                    {w}
                  </span>
                ))}
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="hero-desc">
              UI/UX Designer creating intuitive mobile, web and product
              experiences through research, systems thinking, and thoughtful
              visual design.
            </p>
          </Reveal>
          <Reveal>
            <div className="hero-meta">
              <span className="pill">
                <span className="live-dot" /> Open to opportunities
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="hero-ctas">
              <Link href="/work" className="btn btn-primary magnetic">
                Explore my work <span className="arrow">→</span>
              </Link>
              <Link href="/about" className="btn btn-secondary magnetic">
                About me
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="hero-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
            </div>
          </Reveal>
        </div>

        <Reveal className="canvas" as="div">
          <div ref={canvasRef} id="hero-canvas" className="canvas" style={{ width: "100%", height: "100%" }}>
            <svg className="connector">
              <path
                ref={pathRef}
                d="M40,60 C140,40 160,180 260,160 S 300,320 90,300"
              />
              <circle ref={dotRef} r={4} />
            </svg>
            <div className="canvas-card card-flow" data-depth="18">
              <h5>Design Process</h5>
              <div className="steps">
                <div className="step done"><i /> Research</div>
                <div className="step done"><i /> Define</div>
                <div className="step"><i /> Design</div>
                <div className="step"><i /> Test</div>
              </div>
            </div>
            <div className="canvas-card card-wire" data-depth="30">
              <h5>Wireframe</h5>
              <div className="mini-screen">
                <div className="bar" />
                <div className="bar short" />
                <div className="bar" style={{ height: 40, marginTop: 14 }} />
              </div>
            </div>
            <div className="canvas-card card-swatch" data-depth="10">
              <i style={{ background: "var(--accent1)" }} />
              <i style={{ background: "var(--accent2)" }} />
              <i style={{ background: "var(--accent3)" }} />
            </div>
            <div className="canvas-card card-phone" data-depth="24">
              <div className="screen">
                <div className="row avatar" />
                <div className="row w60" />
                <div className="row" />
                <div className="row" />
                <div className="row w60" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
