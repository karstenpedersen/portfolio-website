import { ProjectCard } from "components/cards/ProjectCard";
import { Section } from "components/sections/Section";
import { Wrapper } from "components/utilities/Wrapper";

export const WorkSection = () => {
  return (
    <Section id="work" className="bg-dark">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ProjectCard
            title="Engdal Elevator ApS"
            tags={["Website", "Branding"]}
            href="/"
            thumbnail="/images/backgrounds/blackwater.gif"
          />
          <ProjectCard
            title="Engdal Elevator ApS"
            tags={["Web", "Branding"]}
            href="/"
            thumbnail="/images/backgrounds/blackwater.gif"
          />
          <ProjectCard
            title="Engdal Elevator ApS"
            tags={["Web", "Branding"]}
            href="/"
            thumbnail="/images/backgrounds/blackwater.gif"
          />
          <ProjectCard
            title="Engdal Elevator ApS"
            tags={["Web", "Branding"]}
            href="/"
            thumbnail="/images/backgrounds/blackwater.gif"
          />
        </div>
      </Wrapper>
    </Section>
  );
};
