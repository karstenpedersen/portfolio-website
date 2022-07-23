import { AboutSection } from "components/sections/AboutSection";
import { ContactSection } from "components/sections/ContactSection";
import { HeroSection } from "components/sections/HeroSection";
import { ToolSection } from "components/sections/ToolSection";
import { WorkSection } from "components/sections/WorkSection";
import type { NextPage } from "next";

// TODO - Fix  z-index (cant click button)
const Home: NextPage = () => {
  return (
    <main>
      <div className="h-screen w-screen snap-start bg-blue-500 text-white">
        <h1>HELLO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsa earum libero molestiae magni ad ipsam soluta quod sapiente ab.
        </p>
      </div>
      <div className="h-screen w-screen snap-start bg-green-500 text-white">
        <h1>HELLO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsa earum libero molestiae magni ad ipsam soluta quod sapiente ab.
        </p>
      </div>
      <div className="h-screen w-screen snap-start bg-red-500 text-white">
        <h1>HELLO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsa earum libero molestiae magni ad ipsam soluta quod sapiente ab.
        </p>
      </div>
      <div className="h-screen w-screen snap-start bg-purple-500 text-white">
        <h1>HELLO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsa earum libero molestiae magni ad ipsam soluta quod sapiente ab.
        </p>
      </div>
      <div className="h-screen w-screen snap-start bg-pink-500 text-white">
        <h1>HELLO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsa earum libero molestiae magni ad ipsam soluta quod sapiente ab.
        </p>
      </div>
    </main>
  );
};

export default Home;
