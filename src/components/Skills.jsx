'use client'
import Image from "next/image";
import Container from "./Container";
import team from "@/images/team.jpg";
import man from "@/images/man.jpg";
import man2 from "@/images/man2.png";
import woman from "@/images/woman.jpg";
import FadeIn, { FadeInStagger } from "./FadeIn";
import BackgroundDesign from "./BackgroundDesign";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css'


const Skills = () => {
  return (
    <div className="mt-24 rounded-4xl h-[1026px] z-50 overflow-hidden  bg-black py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-poppins text-xl mb-3 font-semibold tracking-wider text-white sm:text-left">
            Become part of our team.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <div className="relative mt-2  sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              
              </div>
    </div>
    <Image src={man} className=' z-[1000px]  w-full mx-auto rounded-4xl' alt='team' />
        
         
       
      </Container>
    </div>
  );
};

export default Skills;
