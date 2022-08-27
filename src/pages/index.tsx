import type { NextPage } from "next";
import { AboutSection } from "sections/AboutSection";
import { HeroSection } from "sections/HeroSection";
import { WorkSection } from "sections/WorkSection";

const Home: NextPage = () => {
  return (
    <main>
      <div className="sticky top-0">
        <HeroSection />
      </div>

      <div className="snap-start">
        <AboutSection />
      </div>
      <div className="snap-start">
        <WorkSection />
      </div>
    </main>
  );
};

export default Home;
