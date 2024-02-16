import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Testimonials = ({ children, client, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
         
        <section id="testimonials"
            class="widescreen:section-min-height tallscreen:section-min-height w-full my-12 scroll-mt-20 ">
            <h2 class="mb-6 text-center text-4xl font-bold font-poppins  text-black sm:text-5xl">
                What our past clients say<span className="text-default">...</span>
            </h2>
            <figure class="my-12 rounded-4xl w-full font-poppins py-12 primary-gradient">
                <blockquote class="relative rounded-2xl  text-black py-12 pl-14 pr-8 ">
                    <p
                        class="mt-2  text-left text-xl text-black before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-black before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-black after:opacity-25 after:content-['\201D']  sm:text-2xl">
                        Apex has always been there for me. Their packages are top-notch and are more than I expected. Life-long customer! A++
                        experience.
                    </p>
                </blockquote>
                <figcaption class="mt-2 text-right  text-xl italic mr-3 text-slate-800 sm:text-xl">
                    &#8212;Odunlade E. Oluwatosin, Genius
                </figcaption>
            </figure>
            <figure class="my-12 rounded-4xl py-12 font-poppins primary-gradient">
                <blockquote class="relative rounded-2xl  py-12 pl-14 pr-8 ">
                    <p
                        class="mt-2 text-left text-xl text-black before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-black before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-black after:opacity-25 after:content-['\201D']  sm:text-2xl">
                        The Apex customer service is one of the best I've ever seen after the Namecheap platform. They were with me all through till my transaction frustration was resolved. I gladly recommend their service to everyone.
                        
                    </p>
                </blockquote>
                <figcaption class="mt-2 text-right text-xl italic text-slate-800 mr-3  sm:text-xl">
                    &#8212;Bright .C. Ani 
                </figcaption>
            </figure>
            <figure class="my-12 rounded-4xl py-12 font-poppins primary-gradient">
                <blockquote class="relative rounded-2xl py-12 pl-14 pr-8">
                    <p
                        class="mt-2 text-left text-xl text-black before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-black before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-black after:opacity-25 after:content-['\201D'] sm:text-2xl">
                        I knew I not only wanted &#8212;
                        <span class="italic">I needed</span> &#8212; Apex services from initial impressions. Apex delivers, and has made my life a lot easier.
                        
                    </p>
                </blockquote>
                <figcaption class="mt-2 text-right text-xl italic mr-3 text-slate-800 sm:text-xl">
                    &#8212;Ifunanya Ekandem
                </figcaption>
            </figure>
        </section>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
