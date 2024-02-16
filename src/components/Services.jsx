import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import dp from "@/images/dp.jpg";
import boss from "@/images/boss.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Our services"
        title="Before choosing us, take a look at the services we offer."
        className="mt-24  font-poppins sm:mt-32 lg:mt-40"
      >
        <p>
        No more missed opportunities. No shoehorning, railroading or using a jack hammer to crack a walnut.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={boss}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center  lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 font-poppins lg:min-w-[33rem] lg:pl-4">
            <ListItem title="">
            Investing with us means partnering with a firm that is as invested in your financial success as you are. Our commitment to individualized strategies, expert management, risk mitigation, and exceptional client service, combined with our dedication to transparency and ethical standards, creates a robust platform where your investments can thrive.
            </ListItem>
            <ListItem title="Ethical investing">
            For those interested in socially responsible investing, we offer options that align with ethical and environmental values. We are attentive to the impact of investment choices and offer portfolios that cater to those who wish to make a positive impact while also seeking financial returns.
            </ListItem>
            <ListItem title="Client-oriented">
            Our investment philosophy centers around a tailor-made approach to suit individual client objectives. Whether you're seeking to grow capital, generate income, or preserve wealth for future generations, our strategies are adjusted to meet these specific needs. We do not believe in a one-size-fits-all strategy and instead prioritize a personalized investment plan that resonates with your financial aspirations.
            </ListItem>
            <ListItem title="Prompt customer service">
            We take pride in our commitment to client service. Every client is paired with a dedicated advisor, ensuring that you have a go-to expert who understands your investment portfolio and financial goals intimately. This personalized attention means your queries are addressed promptly, and your investment strategy can swiftly pivot in response to life changes or shifting financial objectives.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
