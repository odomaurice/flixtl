
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Link from "next/link"
import SocialMedia from "@/components/SocialMedia";


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
        
          <h1 className="font-quicksand mx-auto text-center text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            MAURICE ODO
          </h1>
          <div className="mt-6 text-center  text-base border-black  font-poppins  text-neutral-600">
            FRONT-END WEB ENGINEER .
           SOC ANALYST .
            IT SUPPORT SPECIALIST .
           CONTENT-WRITER .
           TUTOR
          </div>
         
          <Link href="/resume.pdf">
          <button
            type="submit"
            aria-label="Submit"
            className="flex p-3 mx-auto mt-10 font-poppins  items-center justify-center rounded-full bg-neutral-950 text-white transition hover:bg-neutral-800"
          > Download CV <ArrowIcon className="w-4 ml-1" /> 
          </button>
          </Link>
          
         <div className="mx-auto flex my-12 justify-center items-center">
             <SocialMedia />
          </div>
       
       
         
        </FadeIn>
        
      </Container>
      <Skills />
     
      <Services />
      <ContactSection />
    </main>
  );
}
