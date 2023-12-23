import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import dp from "@/images/dp.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services I offer"
        title="Choose from the list of services available"
        className="mt-24 font-poppins sm:mt-32 lg:mt-40"
      >
        <p>
          I am ready to walk with you every step of the way, from inception to completion of your project - customer satisfaction, through inclusion is my priority.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={dp}
                sizes="(min-width: 1000px) 41rem, 31rem"
                className="justify-center  lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 font-poppins lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
             I build astonishing, scalable, and marketable websites, with great and world-class user interfaces bearing in mind, the experience of the user. I work with you to achieve customer satisfaction.
            </ListItem>
            <ListItem title="SOC Analysis">
              In a highly technical, global village like ours, where technology has almost taken over, there are possibilities and scenarios of cyber attacks, I help secure your websites and domains through best practices and platforms with my knowlege in security.
            </ListItem>
            <ListItem title="IT Support">
              I offer IT advice and troubleshooting services and sessions to boost your online presence.
            </ListItem>
            <ListItem title="Tutor">
             I teach web development, with 3 years experience and counting, I onboard you into tech with the recent and in-demand skills.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
