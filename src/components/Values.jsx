import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Work values"
        title="Balancing reliability and innovation"
      >
       
      </SectionIntro>
      <Container className="mt-24 font-poppins">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            My pride comes from  never missing a deadline which is easy because
            most of the work was done years ago. I try as much as possible to work with the timeframe, and that is why I bring my clients into the project.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and one of the greatest challenge is
            shoe-horning those needs into something we already built. Scalability is a priority.
          </GridListItem>
          <GridListItem title="Honest">
            I am transparent about all of my processes, banking on the simple
            fact that clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            I foster long-term relationships with clients that go beyond
            just delivering a product.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so am I. I am
            constantly on the lookout for new open source projects to clone and new platforms to learn and adopt.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
