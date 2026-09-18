"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home", match: "/" },
  { href: "/work", label: "Work", match: "/work" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/process", label: "Process", match: "/process" },
  { href: "/playground", label: "Playground", match: "/playground" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  useEffect(() => {
    queueMicrotask(() => setOpen(false));
  }, [pathname]);

  const isActive = (match: string) => {
    if (match === "/") return pathname === "/";
    return pathname.startsWith(match);
  };

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`} aria-label="Primary">
      <Link href="/" className="nav-logo">
        <b>Thel Nu</b>
      </Link>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>

      <div className={`nav-links ${open ? "open" : ""}`} id="nav-links">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.match) ? "active" : ""}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta">
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}
