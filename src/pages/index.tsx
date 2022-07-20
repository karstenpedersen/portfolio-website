import { AboutSection } from "components/sections/AboutSection";
import { ContactSection } from "components/sections/ContactSection";
import { HeroSection } from "components/sections/HeroSection";
import { ToolSection } from "components/sections/ToolSection";
import { WorkSection } from "components/sections/WorkSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ToolSection />
      <ContactSection />
    </main>
  );
};

export default Home;

/*
      

*/
