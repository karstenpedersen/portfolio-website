import { Wrapper } from "components/common/layouts/Wrapper";
import { Section } from "components/Section/Section";

export const ContactSection = () => {
  return (
    <Section id="contact" className="bg-light text-dark">
      <Wrapper className="flex w-full flex-col gap-2">
        <h1 className="mb-14">Contact me</h1>
      </Wrapper>
    </Section>
  );
};
