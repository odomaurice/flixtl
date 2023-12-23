'use client'

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";


const ContactForm = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_iiv2jbd","template_1nia8s9",form.current,"wQFcmgXjcjqHYluEe")
     .then(() =>{
       toast.success("Message sent successfully!!")
     }, () => {
       toast.error("Something went wrong!")
     })
     e.target.reset()
  
  }
  return (
    <FadeIn>
      <form ref={form} onSubmit={sendMail} className="font-poppins">
        <h2 className=" text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          
        </div>
        <Button type="submit" className="mt-10 p-3">
          Let’s work together
        </Button>
      </form>
      <ToastContainer
       position="top-center"
       hideProgressBar={true}
       theme="light"
       autoClose={3000}
      
      />
    </FadeIn>
  );
};

export default ContactForm;
