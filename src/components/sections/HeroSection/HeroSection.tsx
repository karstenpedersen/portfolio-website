import { Wrapper } from "components/common/layouts/Wrapper";
import { ImageBackground } from "components/ImageBackground";
import { Section } from "components/Section/Section";
import { motion } from "framer-motion";

const variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 10, y: -10 },
};

export const HeroSection = () => {
  return (
    <Section id="hero" className="!p-0">
      <ImageBackground
        image="/images/backgrounds/blackwater.gif"
        className="bg-black bg-opacity-60 py-[var(--header-height)]"
      >
        <Wrapper className="mix-blend-difference">
          <div className="flex w-full flex-col gap-2">
            <span className="font-semibold uppercase">
              <p className="text-3xl italic">Hi I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl">Karsten Pedersen</h1>
            </span>
            <p className="lowercase text-light-gray">
              Designer & frontend developer
            </p>
            <p className="max-w-sm text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, pariatur?
            </p>
            <motion.a
              href="#contact"
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="mt-10 max-w-max bg-white"
            >
              <motion.div
                variants={variants}
                className="border-2 bg-dark px-4 pb-1 pt-2 font-semibold uppercase"
              >
                Get in contact
              </motion.div>
            </motion.a>
          </div>

          <motion.a
            href="#about"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: "linear",
              duration: 0.2,
            }}
            className="absolute bottom-6 sm:bottom-28"
          >
            <p>SCROLL</p>
          </motion.a>
        </Wrapper>
      </ImageBackground>
    </Section>
  );
};

/*
<Section id="hero" className="bg-dark">
      <Wrapper>
        

        
      </Wrapper>
    </Section>
*/
