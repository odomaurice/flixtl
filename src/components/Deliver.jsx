import React from "react";
import Section from "./Section";

import deliver from "@/images/deliver.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: deliver, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we conduct timely survey and check to take note of how our clients are faring on the{" "}
          <strong className="font-semibold text-neutral-950">
            application
          </strong>
          . This allows us to avoid single point of failure.
        </p>
       
        <p>
          We ensure that the all possible mishaps{" "}
          <strong className="font-semibold text-neutral-950">
            are curtailed and hence satisfaction is achieved.
          </strong>{" "}
          
        </p>
      </div>
     
    </Section>
  );
};

export default Deliver;
