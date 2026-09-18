import { Reveal } from "@/components/ui/Reveal";

export function Marquee() {
  return (
    <Reveal className="marquee-wrap">
      <div className="marquee-track">
        <span>
          RESEARCH <i>×</i> EMPATHY <i>×</i> SYSTEMS <i>×</i> INTERACTION{" "}
          <i>×</i> CLARITY <i>×</i> CRAFT <i>×</i>
        </span>
        <span>
          RESEARCH <i>×</i> EMPATHY <i>×</i> SYSTEMS <i>×</i> INTERACTION{" "}
          <i>×</i> CLARITY <i>×</i> CRAFT <i>×</i>
        </span>
      </div>
    </Reveal>
  );
}
