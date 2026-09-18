import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Numbers } from "@/components/sections/Numbers";
import { Expertise } from "@/components/sections/Expertise";
import { Journey } from "@/components/sections/Journey";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Tools } from "@/components/sections/Tools";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Personal } from "@/components/sections/Personal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Numbers />
      <Expertise />
      <Journey />
      <BeforeAfter />
      <Tools />
      <ExperienceTimeline />
      <Personal />
      <FinalCTA />
    </>
  );
}
