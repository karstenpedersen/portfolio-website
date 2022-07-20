import { Wrapper } from "components/common/layouts/Wrapper";
import { Logo } from "components/common/Logo";
import { Socials } from "components/common/Socials";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MobileNav } from "../MobileNav";
import { Navigation } from "../Navigation";

const motionVariants = {
  bgNone: { opacity: 0 },
  bgDisplay: { opacity: 0.8 },
};

const variants = {
  small: { width: 30, height: 4 },
  large: { width: 40, height: 4 },
};

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [displayBackground, setDisplayBackground] = useState(false);

  // Toggle mobilenav
  function handleMobile() {
    setMobile(!mobile);
  }

  // Handle scroll padding
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-padding",
      window.innerWidth > 1280 ? "0" : "var(--header-height)"
    );

    const handleResize = () => {
      // Change --scroll-padding
      document.documentElement.style.setProperty(
        "--scroll-padding",
        window.innerWidth > 1280 ? "0" : "var(--header-height)"
      );
    };

    // Add event listener to resize
    window.addEventListener("resize", handleResize);

    // Remove event listener from resize
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle header background
  useEffect(() => {
    function handleScroll() {
      setDisplayBackground(window.scrollY > 10 && window.innerWidth <= 1280);
    }

    window.addEventListener("scroll", handleScroll);

    return function unMount() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] xl:mix-blend-difference`}
      >
        <motion.span
          variants={motionVariants}
          animate={displayBackground ? "bgDisplay" : "bgNone"}
          className="absolute -z-10 h-full w-full bg-black"
        />

        <Wrapper className="flex items-center justify-between 2xl:items-start">
          <div className="xl:absolute xl:left-10 xl:top-8">
            <Logo mobile={mobile} onClick={handleMobile} />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Navigation className="flex gap-10 text-right text-lg font-semibold  xl:absolute xl:top-8 xl:right-10 xl:flex-col xl:gap-4" />
            <span className="inline-block h-4 w-[2px] rounded-full bg-light-gray xl:hidden" />
            <Socials className="flex gap-4 text-xl xl:hidden" />
          </div>
          <button
            className="flex flex-col items-end gap-3 md:hidden"
            onClick={() => {
              handleMobile();
            }}
          >
            <motion.span
              variants={variants}
              animate={mobile ? "large" : "small"}
              className="block rounded-full bg-light"
            />
            <motion.span
              variants={variants}
              animate={mobile ? "small" : "large"}
              className="block rounded-full bg-light"
            />
          </button>
        </Wrapper>
      </header>

      {/* Mobile navbar */}
      <MobileNav mobile={mobile} handleMobile={handleMobile} />
    </>
  );
};
