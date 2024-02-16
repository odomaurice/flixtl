import React from "react";
import Section from "./Section";
import build from "@/images/build.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: build, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we  and the client develop a comprehensive roadmap
          for each package plan and start working towards realization. The roadmap is an
          intricately tangled mess of technical nonsense designed to drag the
          project out as long as possible.
        </p>
      
      </div>
     
    </Section>
  );
};

export default Build;
