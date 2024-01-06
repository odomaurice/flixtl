import Image from "next/image";
import { skills } from "@/constants";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";



const Skills = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-poppins text-sm font-semibold tracking-wider text-white sm:text-left">
            Tools I work with...
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8  gap-y-10 lg:grid-cols-4"
          >
            {skills.map((skill) => (
              <li key={skill.id} className="mx-auto">
                <FadeIn>
                
                  <Image src={skill.logo} alt={skill} className="w-[50px]" unoptimized />
                  <h5 className="text-white font-poppins ">{skill.title}</h5>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Skills;
