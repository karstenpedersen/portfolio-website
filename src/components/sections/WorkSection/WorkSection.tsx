import { Wrapper } from "components/common/layouts/Wrapper";
import { Section } from "components/Section/Section";

export const WorkSection = () => {
  return (
    <Section id="work" className="bg-dark">
      <Wrapper>
        <h1>My Work</h1>

        <div className="rounded bg-light p-3 text-dark">
          <form action="">
            <label htmlFor="search-bar">Project Search</label>
            <input type="text" name="" id="search-bar" />
            <button>Search</button>
          </form>
        </div>

        <div></div>
      </Wrapper>
    </Section>
  );
};
