import { Wrapper } from "components/common/layouts/Wrapper";
import { Section } from "components/Section/Section";

export const AboutSection = () => {
  return (
    <Section id="about" className="bg-light text-dark">
      <Wrapper>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a quam
          culpa eligendi modi quo esse qui illum tempore quae!
        </p>

        <div className="mt-20">
          <a href="#" className="rounded bg-dark px-2 pt-2  pb-1 text-light">
            Download resume
          </a>
        </div>
      </Wrapper>
    </Section>
  );
};
