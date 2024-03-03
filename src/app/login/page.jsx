'use client'

import Image from "next/image"
import Link from "next/link"
import LoginImg from "@/images/login.svg"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { motion } from "framer-motion"
import { FaGoogle } from "react-icons/fa"
import { TbCircleArrowLeftFilled } from "react-icons/tb"
import * as Yup from "yup"
import styles from "@/style"
import Logo from "@/components/Logo"





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
})

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
}

const onSubmit = (values, { setSubmitting }) => {
  // Add your authentication logic here
  console.log("Form submitted:", values)
  setSubmitting(false)
}

const Login = ({ 
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,}) => {
  

 

  
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      
      <section>
      <Link href={"/"} aria-label="Home">
          <Logo className="text-[30px] sm:text-[40px] text-white mt-3 font-poppins font-[18.912px] leading-[30.2592px]" invert={invert}>🐺PEX</Logo>
        </Link>
        <div
          className={`${styles.paddingX} ${styles.flexCenter} font-poppins  min-h-screen`}
        >
         
          {/* <div className="absolute z-[1] w-[100%] h-[100%] -top-[80%]  rounded-full blue__gradient bottom-40" /> */}
          <div className={`${styles.boxWidth} px-[30px] z-[5]`}>
            <h1 className="text-white text-center font-bold text-[30px] sm:text-[40px] z-[5]">
              <Link href="/" className="cursor-pointer z-[1000px]">
                <TbCircleArrowLeftFilled className="text-default mb-6  w-[50px] h-[50px]  mt-12 z-[1000px] cursor-pointer" />
              </Link>
              Welcome Back
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="">
                <div className="py-[10px]">
                  <label htmlFor="email" className="text-white">
                    Email:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-white border border-gray-700"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="py-[10px]">
                  <label htmlFor="password" className="text-white">
                    Password:
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    className="w-full rounded-3xl outline-none p-[10px] bg-transparent text-white border border-gray-700"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="pt-[20px]">
                  <Link href="">
                    <button
                      type="submit"
                      className={`py-2 px-4 font-poppins font-bold text-[18px] text-black w-[100%] primary-gradient hover:bg-primary-gradient rounded-3xl mr-3 outline-none`}
                    >
                      Sign In
                    </button>
                  </Link>

                  <p className="py-3 text-white text-2xl text-center">OR</p>

                  <Link href="">
                    <button 
                      type="submit"
                      className={`${styles.flexCenter} py-2 px-4 font-poppins font-bold text-[18px] text-black w-[100%] border primary-gradient hover:bg-default hover:text-black rounded-3xl mr-3 outline-none`}
                    >
                      <FaGoogle className="mr-2 sm:mr-4" />
                      Sign in with Google
                    </button>
                  </Link>
                  <p className={` ${styles.flexCenter} text-white pt-[10px]  text-[12px]`}>
                    Not yet a member?
                    <Link
                      href="/register"
                      className="text-blue-700 pl-1 text-[16px] font-semibold"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>

          <Image
            src={LoginImg}
            alt="auth_img"
            width={600}
            height={600}
            className="md:block hidden"
          />
        </div>
      </section>
    </motion.div>
  )
}

export default Login
