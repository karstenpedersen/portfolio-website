import { Splitter } from "components/utilities/Splitter";
import { Wrapper } from "components/utilities/Wrapper";
import { ReactNode } from "react";
import { Section } from "./Section";

interface Props {
  id: string;
  className?: string;
  title: string;
  children: ReactNode;
}

export const StickySection = ({ id, className, title, children }: Props) => {
  return (
    <Section id={id}>
      <Wrapper>
        <Splitter>
          <div className="h-full bg-blue-500">
            <h1 className="sticky lg:top-8">{title}</h1>
          </div>
          <div className={className}>{children}</div>
        </Splitter>
      </Wrapper>
    </Section>
  );
};
