"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hasFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover:hover) and (pointer:fine)").matches;

    if (!hasFinePointer) {
      document.body.classList.add("no-fine-pointer");
      return;
    }

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;

      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor-view], .work-frame, [data-open-case]"
      );
      const dragTarget = (e.target as HTMLElement).closest("#hero-canvas, .canvas");
      const linkTarget = (e.target as HTMLElement).closest("a, button");

      ring.classList.remove("is-view", "is-drag", "is-link");
      if (target) {
        ring.classList.add("is-view");
        label.textContent = "VIEW";
      } else if (dragTarget) {
        ring.classList.add("is-drag");
        label.textContent = "DRAG";
      } else if (linkTarget) {
        ring.classList.add("is-link");
        label.textContent = "";
      } else {
        label.textContent = "";
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px,${ringY}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    document.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} />
      </div>
    </>
  );
}
