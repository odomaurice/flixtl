
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Link from "next/link"
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";


const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24  sm:mt-32">
        <FadeIn className="max-w-full">
        
          <h1 className="font-poppins mx-auto  text-3xl font-[72.96px] leading-[50px] sm:leading-[77.3376px] tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
           <span className="text-default">Transaction</span>{" "}Purity. <br/>
            
          </h1>
          <h1 className="font-poppins mx-auto  text-3xl font-[72.96px]  tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            
            Happy <span className="text-default ">Returns.</span> 
          </h1>
          
         
          
          
         
       
       
         
        </FadeIn>
        
      </Container>
      <Skills />
     
     
      <Services /> 
      <Steps />
      <Testimonials />
     
      <Footer />
    </main>
  );
}
