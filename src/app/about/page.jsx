import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="I find my strength in persistence and collaboration">
        <p>
        From a very young age, I have always derived this joy, satisfaction and sense of accomplishment from inventing new things, for establishing projects that weren't initially there.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          I was always on my dad's computer and most times, I destroyed some of his equipment to try and repair them. I only had limited time as he limited us from using his system.
           Growing up, I spent most times in Cyber-cafe as systems were limited trying to work on some new things. This increased my desire for problem solving and my overall love for the tech field.
          </p>
          <p>
            
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
