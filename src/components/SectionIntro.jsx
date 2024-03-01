import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "mb-6 block font-display text-2xl font-semibold",
                  invert ? "text-white" : "text-neutral-100"
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display leading-[50px] sm:leading[100px] tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-2xl font-medium sm:text-4xl",
              invert ? "text-white" : "text-default"
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              "mt-6 text-xl",
              invert ? "text-neutral-300" : "text-neutral-600"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
