import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Thel Nu
              <br />
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-body)",
                }}
              >
                UI/UX Designer
              </span>
            </div>
            <p>
              Designing thoughtful digital experiences through research, clarity
              and craft.
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/playground">Playground</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Selected Work</h5>
            <ul>
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <Link href={`/case/${p.id}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
              <li><a href="mailto:thelnuaein5450@gmail.com">thelnuaein5450@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-huge">
          LET&apos;S CREATE
          <br />
          SOMETHING
          <br />
          MEANINGFUL.
        </div>
        <div className="footer-bottom">
          <span>© 2026 Thel Nu. All rights reserved.</span>
          <span>Designed with intention. Built for the web.</span>
        </div>
      </div>
    </footer>
  );
}
