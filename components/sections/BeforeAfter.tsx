import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfter() {
  return (
    <section aria-label="Before and after">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            Design Thinking
          </div>
          <h2>Good design removes friction.</h2>
        </Reveal>
        <Reveal className="ba-wrap">
          <div className="ba-panel ba-before">
            <h4>Before</h4>
            <div className="ba-mock">
              <div className="row" style={{ width: "90%" }} />
              <div className="row" style={{ width: "70%" }} />
              <div className="row" style={{ width: "80%" }} />
              <div className="actions">
                <span>Save</span>
                <span>Save Draft</span>
                <span>Submit</span>
                <span>Cancel</span>
                <span>More</span>
              </div>
            </div>
          </div>
          <div className="ba-arrow">
            <svg width={34} height={18} viewBox="0 0 34 18" fill="none">
              <path
                d="M0 9H32M32 9L24 1M32 9L24 17"
                stroke="currentColor"
                strokeWidth={1.6}
              />
            </svg>
          </div>
          <div className="ba-panel ba-after">
            <h4>After</h4>
            <div className="ba-mock">
              <div className="primary" />
              <div className="row" />
              <div className="row" style={{ width: "50%" }} />
            </div>
          </div>
        </Reveal>
        <Reveal className="ba-labels">
          <div>
            Too many steps <b>→ Simplified flow</b>
          </div>
          <div>
            Hidden action <b>→ Visible primary action</b>
          </div>
          <div>
            Unclear feedback <b>→ Clear system status</b>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
