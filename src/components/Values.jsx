import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 font-poppins pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-900">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-800 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
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
          <GridListItem title="Meticulous" >
            The first part of any partnership is getting our clients to onboard. The second step is getting them to know and assist them.
          </GridListItem>
          <GridListItem title="Efficient">
            Our pride comes from satisfaction of our clients. We try as much as possible to work with them, and that is why our customer service is 24/7.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and one of the greatest challenge is
            shoe-horning those needs into something we already built. Scalability is a priority.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of my processes, banking on the simple
            fact that clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with clients that go beyond initial transactions.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new technologies to provide seamless experiences to our clients.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
