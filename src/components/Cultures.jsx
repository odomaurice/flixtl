import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Experiences"
        title="I have worked individually and with groups and so I provide the best to you."
        invert
      >
        {/* <p>
          We are a group of like-minded people who share the same core values.
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Mekanand" invert>
            I worked as an web development intern with the company from 2020-2022, alongside other talents. I was remarkable for their famous, signature landing page which was used till the beginning of 2023.
          </GridListItem>
          <GridListItem title="CareerEdu" invert>
            The firm is into relocation, education and advisory services. I worked as frontend web developer, and Chief Technology Officer (CTO) from 2022 to 2023, I helped boost the company through amplifying their online presence. I was known for my persistence in implementing light and dark mode switching on all websites of the company, and for my promptness in migrating from basic, free SSL to COMODO.
          </GridListItem>
          <GridListItem title="TechUni" invert>
            This is a subsidiary to CareerEdu, it is their section that is majorly for tutoring. I was the frontend and the backend web faculty when the faculty incharge resigned. I had about 12 students locally and globally during my stay.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
