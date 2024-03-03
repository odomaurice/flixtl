import React from 'react'
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Image from "next/image";
import step1 from "@/images/step1.svg"
import step2 from "@/images/step2.svg"
import step3 from "@/images/step3.svg"

const Steps = () => {
  return (
    <Container className="mt-24  rounded-4xl sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-full">
        <section id=""
            className=" font-poppins my-12 p-6">
            <h2 className="my-6 text-center text-2xl font-bold text-white sm:text-5xl">
                The three steps
            </h2>
            <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
                <li
                    className="flex w-full flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                    <Image src={step1} alt="Explorer" className="mb-6 w-full sm:w-1/2" />
                    <h3 className="text-center text-xl text-default">
                        Get validation code
                    </h3>
                    <p className="mt-2  text-center text-base  dark:text-slate-100 sm:block">
                        To activate your account, you need a validation code to enjoy full access.
                    </p>
                    <div className="mt-6 flex">
                        <Button href={"/getCode"} invert>
                        Get code
                        </Button>
                    </div>
                    
                </li>
                <li
                    className="flex w-full flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                    <Image src={step2} alt="Adventurer" className="mb-6 w-full sm:w-1/2" />
                    <h3 className="text-center text-xl text-default">
                        Access your dashboard
                    </h3>
                    <p className="mt-2   text-center text-base  dark:text-slate-100 sm:block">
                        Once you are authenticated with the validation code, you have access to the dashboard.
                    </p>
                   
                </li>
                <li
                    className="flex w-full flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                    <Image src={step3} alt="Infinity" className="mb-6 w-full sm:w-1/2" />
                    <h3 className="text-center text-xl text-default">
                        You're in, enjoy!
                    </h3>
                    <p className="mt-2 text-center text-base dark:text-slate-100 sm:block">
                        You now have access to all the tools you need to increase your earnings, including credits, wauthdrawals, and even referrals.
                    </p>
                    
                </li>
            </ul>
        </section>
        </FadeIn>
    </Container>
  )
}

export default Steps