import { Section } from "components/sections/Section";
import { Wrapper } from "components/utilities/Wrapper";
import Image from "next/image";

export const ToolSection = () => {
  return (
    <Section id="tools" className="min-h-max bg-light text-dark">
      <Wrapper className="flex w-full flex-col gap-2">
        <h1>My cup of tea</h1>
        <p>
          I have always had a great interest in the environemtn, and is therefor
          always looking for new and better tools.
          <u>This have given me a great palette of tools and knowledge</u>
        </p>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          <Image
            src="/images/tools/html.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/javascript.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/typescript.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/markdown.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/next.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/react.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/css.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/sass.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/tailwindcss.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/github.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/npm.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/storybook.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/csharp.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/python.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/unity.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/arduino.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
      </Wrapper>
    </Section>
  );
};

/*
<Section id="tools" className="min-h-max bg-light text-dark">
      <Wrapper className="flex w-full flex-col gap-2">
        <h1 className="mb-14">My cup of tea</h1>

        <div className="grid grid-cols-2 gap-x-20 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          <Image
            src="/images/tools/html.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/javascript.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/typescript.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/markdown.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/next.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/react.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/css.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/sass.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/tailwindcss.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/github.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/npm.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/storybook.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/csharp.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/python.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />

          <Image
            src="/images/tools/unity.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/images/tools/arduino.svg"
            alt="html"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
      </Wrapper>
    </Section>
*/
