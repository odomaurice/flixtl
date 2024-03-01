import React from "react";
import Section from "./Section";
import discover from "@/images/discover.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: discover, shape: 1 }}>
      <div className="space-y-6 font-poppins text-base text-neutral-100">
        <p>
          Understanding the needs, hopes, and painpoints of our clients is a great virtue,
          we work closely with my clients to understand their{" "}
          <strong className="font-semibold text-neutral-300">needs</strong> and
          goals, through this, we provide client satisfaction.
        </p>
        
        </div>
    </Section>
  );
};

export default Discover;
