import type { NextPage } from "next";

import { Section } from "components/Section";
import { Splitter } from "components/Splitter";
import Image from "next/image";
import { Wrapper } from "components/common/layouts/Wrapper";

const Project: NextPage = () => {
  return (
    <main className="relative">
      <Section id="title" className="!min-h-[0]">
        <Wrapper>
          <Splitter className="!gap-4">
            <h1>Engdal Elevator ApS</h1>
            <div>
              <p>Website, Branding</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                nobis molestias, quia deleniti sunt a magni itaque perspiciatis
                natus quidem?
              </p>
            </div>
          </Splitter>
        </Wrapper>
      </Section>
      <Section id="showcase">
        <Wrapper>
          <Splitter>
            <div className="h-full">
              <h1 className="sticky top-8">Showcase</h1>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative min-h-[300px] w-full">
                <Image
                  src="/images/backgrounds/blackwater.gif"
                  alt="image"
                  layout="fill"
                />
              </div>
              <div className="relative min-h-[300px] w-full">
                <Image
                  src="/images/backgrounds/blackwater.gif"
                  alt="image"
                  layout="fill"
                />
              </div>
              <div className="relative min-h-[300px] w-full">
                <Image
                  src="/images/backgrounds/blackwater.gif"
                  alt="image"
                  layout="fill"
                />
              </div>
              <div className="relative min-h-[300px] w-full">
                <Image
                  src="/images/backgrounds/blackwater.gif"
                  alt="image"
                  layout="fill"
                />
              </div>
            </div>
          </Splitter>
        </Wrapper>
      </Section>
      <Section id="showcase" className="bg-blue-500">
        <Wrapper>
          <Splitter>
            <h1>Test</h1>
          </Splitter>
        </Wrapper>
      </Section>
    </main>
  );
};

export default Project;
