import { Section } from "components/sections/Section";
import { ImageBackground } from "components/utilities/ImageBackground";
import { Wrapper } from "components/utilities/Wrapper";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 10, y: -10 },
};

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <Section id="hero" className="!p-0">
      <ImageBackground
        image="/images/backgrounds/blackwater.gif"
        className="bg-black bg-opacity-80 py-[var(--header-height)]"
      >
        <Wrapper className="mix-blend-difference">
          <motion.div
            className="flex w-full flex-col gap-2"
            style={{ y: sectionY }}
          >
            <span className="font-semibold uppercase">
              <p className="text-3xl italic">Hi I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl">Karsten</h1>
              <h1 className="text-5xl sm:text-6xl">Pedersen</h1>
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
          </motion.div>

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
