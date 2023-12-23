import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Understanding the needs, hopes, and painpoints of our clients is a great virtue
          I work closely with my clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, through this, they become part of the development, and production.
        </p>
        
        </div>
    </Section>
  );
};

export default Discover;
