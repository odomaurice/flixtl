"use client"

import Image from "next/image"
import Link from "next/link"

import RegisterImg from "@/images/register.svg"
import styles from "@/style"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { motion } from "framer-motion"
import { FaGoogle } from "react-icons/fa"
import { TbCircleArrowLeftFilled } from "react-icons/tb"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  referral: Yup.string().required("Validation code is required"),
  
})

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
  validation: ""
}

const onSubmit = (values, { setSubmitting }) => {
  // Add your authentication logic here
  console.log("Form submitted:", values)
  setSubmitting(false)
}

const Register = () => {
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >

    
     <section>
        <div
          className={`${styles.paddingX}  ${styles.flexCenter} font-poppins  min-h-screen`}
        >
          <div className={`${styles.boxWidth} px-[30px] z-[5]`}>
            <Link href="/" className="cursor-pointer">
              <TbCircleArrowLeftFilled className="text-default w-[50px] h-[50px]  my-8 z-50 cursor-pointer" />
            </Link>
            <h1 className="text-black text-center font-bold   text-[30px] sm:text-[40px]">
              Get Started
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="">
                <div className="py-[10px]">
                  <label htmlFor="fullName" className="text-black">
                    Full Name:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-black border border-gray-700"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="py-[10px]">
                  <label htmlFor="email" className="text-black">
                    Email:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-black border border-gray-700"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="py-[10px]">
                  <label htmlFor="password" className="text-black">
                    Password:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-black border border-gray-700"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="py-[10px]">
                  <label htmlFor="cpassword" className="text-black">
                    Confirm Password:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="cpassword"
                    name="cpassword"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-black border border-gray-700"
                  />
                  <ErrorMessage
                    name="cpassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="py-[10px]">
                  <label htmlFor="validation" className="text-black">
                    Validation code:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="validation"
                    name="validation"
                    placeholder="Please enter a valid validation code"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-black border border-gray-700"
                  />
                  <Link className="text-black" href="/getCode">Don't have a validation code?</Link>
                  <ErrorMessage
                    name="validation"
                    component="div"
                    className="text-red-500"
                  />
                </div>

               

               

                <div className="pt-[20px]">
                  <Link href="">
                    <button
                      type="submit"
                      className={`py-2 px-4 font-poppins font-bold text-[18px] text-black w-[100%] primary-gradient hover:bg-default rounded-3xl mr-3 outline-none`}
                    >
                      Register
                    </button>
                  </Link>

                  <p className="py-3 text-black text-2xl text-center">OR</p>

                 <button 
                      type="submit"
                      className={`${styles.flexCenter} py-2 px-4 font-poppins font-bold text-[18px] text-black w-[100%] primary-gradient border hover:bg-default hover:text-black rounded-3xl mr-3 outline-none`}
                    >
                      <FaGoogle className="mr-1 sm:mr-4" />
                      Register with Google
                    </button>
                    
                  
                  <p
                    className={` ${styles.flexCenter} text-black p-[10px]  text-[12px]`}
                  >
                    Already a member?
                    <Link 
                      href="/login"
                      className="text-blue-700 pl-1 text-[16px]  font-bold"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>

          <Image
            src={RegisterImg}
            alt="auth_img"
            width={700}
            height={700}
            className="md:block hidden"
          />
        </div>
      </section>
              
       
       
        
        
       
    </motion.div>
  )
}

export default Register
