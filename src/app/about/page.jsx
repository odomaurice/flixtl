import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import RootLayout from "@/components/RootLayout";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: 'Apex | About us'
    
   
};

const AboutPage = () => {
  return (
    <>
    <RootLayout>
      <PageIntro eyebrow="About Apex"  title="We exist to serve you better">
        <p className="font-poppins">
        Investing your hard-earned money is a significant decision, and with the myriad of options available, it's crucial to choose a partner that aligns with your financial goals, values, and expectations for service. Here's why considering an investment with APEX could be advantageous for your portfolio.
        </p>
        {/* <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          I was always on my dad's computer and most times, I destroyed some of his equipment to try and repair them. I only had limited time as he limited us from using his system.
           Growing up, I spent most times in Cyber-cafe as systems were limited trying to work on some new things. This increased my desire for problem solving and my overall love for the tech field.
          </p>
          <p>
          I was always on my dad's computer and most times, I destroyed some of his equipment to try and repair them. I only had limited time as he limited us from using his system.
           Growing up, I spent most times in Cyber-cafe as systems were limited trying to work on some new things. This increased my desire for problem solving and my overall love for the tech field.
            
          </p>
        </div> */}
      </PageIntro>
     
      <Cultures />
      <Footer/>
      </RootLayout>
    </>
  );
};

export default AboutPage;
