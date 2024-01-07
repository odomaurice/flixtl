import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto font-poppins">
          <h2 className=" text-3xl font-medium font-quicksand text-white [text-wrap:balance] sm:text-4xl">
           Let's discuss your project
          </h2>
          <p className="text-white my-6 [text-wrap:balance] font-normal leading-[30px]">I am eager to work with you throughout the lifecycles of your project. Why waste time? reach out let's start out immediately. </p>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Say Hello
            </Button>
          </div>
          
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
