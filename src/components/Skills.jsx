'use client'
import Image from "next/image";
import Container from "./Container";
import team from "@/images/team.jpg";
import work from "@/images/teamwork.svg";
import man from "@/images/man.svg";

import FadeIn, { FadeInStagger } from "./FadeIn";
import BackgroundDesign from "./BackgroundDesign";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css'


const Skills = () => {
  return (
    <div className="mt-24 rounded-4xl h-[1028px] z-50 w-full overflow-hidden  bg-white py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-poppins text-xl mb-3 font-semibold tracking-wider text-black sm:text-left">
            Become part of our team.
          </h2>
         
        </FadeIn>
        <div className="relative mt-0  sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1024px] w-[1024px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              
              </div>
    </div>
    <Image src={work} className=' z-[1000px] bg-white   w-full sm:w-3/5 md:w-2/3 mx-auto rounded-4xl' alt='team' />
        
         
       
      </Container>
    </div>
  );
};

export default Skills;
