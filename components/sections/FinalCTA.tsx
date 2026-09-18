import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Contact call to action">
      <div className="wrap">
        <Reveal className="eyebrow">
          <span className="dot" />
          Let&apos;s Talk
        </Reveal>
        <Reveal>
          <h2>
            Have a product idea, a complicated workflow, or something worth
            improving?
            <br />
            <span className="italic-accent">Let&apos;s design it.</span>
          </h2>
        </Reveal>
        <Reveal className="final-cta-row">
          <Link href="/contact" className="btn btn-primary magnetic">
            Start a conversation <span className="arrow">→</span>
          </Link>
          <a className="email-link" href="mailto:thelnuaein5450@gmail.com">
            thelnuaein5450@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
