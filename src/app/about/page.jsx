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
        <p className="font-poppins text-neutral-300">
        Investing your hard-earned money is a significant decision, and with the myriad of options available, it's crucial to choose a partner that aligns with your financial goals, values, and expectations for service. Here's why considering an investment with APEX could be advantageous for your portfolio.
        </p>
        
      </PageIntro>
     
      <Cultures />
      <Footer/>
      </RootLayout>
    </>
  );
};

export default AboutPage;
