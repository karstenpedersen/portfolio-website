import { Section } from "components/sections/Section";
import { StickySection } from "components/sections/StickySection";
import { Splitter } from "components/utilities/Splitter";
import { Wrapper } from "components/utilities/Wrapper";
import type { NextPage } from "next";
import Image from "next/image";

const Project: NextPage = () => {
  return (
    <main className="relative">
      <Section id="title" className="!min-h-[0]">
        <Wrapper>
          <Splitter>
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
      <StickySection
        id="showcase"
        title="Showcase"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-1"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          molestiae, reprehenderit quia sequi asperiores magni dolores possimus,
          placeat minus sapiente architecto esse dolore nemo libero provident
          delectus, dicta unde laudantium vel quod deserunt cupiditate quisquam.
          Officiis sequi quisquam iusto expedita quibusdam, ratione repudiandae,
          quod ea eum tenetur cum laborum est dolores dolorum! Fugiat soluta
          nemo iure perspiciatis, cumque consectetur est molestias reiciendis
          quo doloribus, inventore consequatur possimus. Dolore asperiores
          incidunt aliquam cumque iste laboriosam tenetur perferendis
          temporibus, odio neque deserunt. Eveniet, tempora! Soluta delectus
          harum sequi, esse dolore quidem deserunt iste cumque eius
          reprehenderit quos omnis voluptatibus doloribus atque velit?
        </p>
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
      </StickySection>
    </main>
  );
};

export default Project;
