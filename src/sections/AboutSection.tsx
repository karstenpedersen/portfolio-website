import { Section } from "components/sections/Section";
import { Splitter } from "components/utilities/Splitter";
import { Wrapper } from "components/utilities/Wrapper";

export const AboutSection = () => {
  return (
    <Section id="about" className="bg-light text-dark">
      <Wrapper>
        <Splitter>
          <div>
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
              quam culpa eligendi modi quo esse qui illum tempore quae!
            </p>

            <h2>Education</h2>
            <p></p>

            <div className="mt-20">
              <a
                href="#"
                className="bg-dark px-3 pt-3 pb-2 font-semibold text-light"
              >
                Download resume
              </a>
            </div>
          </div>
          <div>
            <h1>Test</h1>
          </div>
        </Splitter>
      </Wrapper>
    </Section>
  );
};
