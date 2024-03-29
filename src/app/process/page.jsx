import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import RootLayout from "@/components/RootLayout";
import Values from "@/components/Values";
import React from "react";

export const metadata = {
  title: 'Apex | process'
    
   
};


const ProcessPage = () => {
  return (
    <>
    <RootLayout>
      <PageIntro eyebrow="Our process" title="Nature of our work">
        {/* <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p> */}
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <Footer/>
      </RootLayout>
    </>
  );
};

export default ProcessPage;
