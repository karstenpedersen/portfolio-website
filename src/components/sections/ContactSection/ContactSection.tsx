import { Wrapper } from "components/common/layouts/Wrapper";
import { Socials } from "components/common/Socials";
import { Section } from "components/Section/Section";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <Section id="contact" className="bg-green-500 text-light">
      <Wrapper className="flex items-center overflow-hidden">
        <div className="flex min-h-max flex-col gap-6">
          <Link href="/">
            <a className="2xl:9xl text-5xl font-semibold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
              Karsten
              <br />
              Pedersen
            </a>
          </Link>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
          </ul>

          <Socials className="flex gap-4 text-2xl" />
        </div>
      </Wrapper>
    </Section>
  );
};
