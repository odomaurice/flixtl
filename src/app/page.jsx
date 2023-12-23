
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-quicksand text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            MAURICE ODO
          </h1>
          <p className="mt-6 text-xl font-poppins text-neutral-600">
            FRONT-END WEB ENGINEER || SOC ANALYST || IT SUPPORT SPECIALIST || CONTENT-WRITER || TUTOR
          </p>
        </FadeIn>
      </Container>
      <Skills />
     
      <Services />
      <ContactSection />
    </main>
  );
}
