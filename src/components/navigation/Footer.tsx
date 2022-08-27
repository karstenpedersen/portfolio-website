import { IconLink } from "components/utilities/IconLink";
import { Wrapper } from "components/utilities/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";

export const Footer = () => {
  return (
    <footer id="contact" className="h-screen snap-start pb-10">
      <Wrapper className="flex items-center overflow-hidden">
        <motion.div className="flex min-h-max flex-col gap-6">
          <Link href="/">
            <a className="2xl:9xl text-5xl font-semibold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
              Karsten
              <br />
              Pedersen
            </a>
          </Link>

          <div className="grid max-w-max gap-3 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-6">
            <IconLink
              text="karstenpedersen"
              href="https://github.com/karstenpedersen"
              icon={<FiIcons.FiGithub className="text-xl" />}
              className="text-lg"
            />
            <IconLink
              text="@KarstenFinderup"
              href="https://twitter.com/KarstenFinderup"
              icon={<FiIcons.FiTwitter className="text-xl" />}
              className="text-lg"
            />
            <IconLink
              text="Karsten Pedersen"
              href="https://www.linkedin.com/in/karsten-pedersen-864418246/"
              icon={<FiIcons.FiLinkedin className="text-xl" />}
              className="text-lg"
            />
            <IconLink
              text="karstenfp.all@gmail.com"
              href="mailto:karstenfp.all@gmail.com"
              icon={<FiIcons.FiMail className="text-xl" />}
              className="text-lg"
            />
          </div>
        </motion.div>
      </Wrapper>
    </footer>
  );
};
