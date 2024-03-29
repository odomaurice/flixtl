'use client'
import React, { useRef, useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import avatar1 from "@/images/avatar1.svg"
import avatar2 from "@/images/avatar2.svg"
import avatar3 from "@/images/avatar3.svg"
import avatar4 from "@/images/avatar4.svg"
import bot1 from "@/images/bot1.svg"
import bot2 from "@/images/bot2.svg"
import { IoIosArrowDropdown } from "react-icons/io";
import {  TbCircleArrowLeftFilled } from "react-icons/tb"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../public/styles.css';

// import required modules
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Logo from '@/components/Logo';

const Code = ({ 
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,}) => {
  return (
    
        <>
        <Link href={"/"} aria-label="Home">
          <Logo className="text-[30px] sm:text-[40px] text-white my-4 font-poppins font-[18.912px] leading-[30.2592px]" invert={invert}>🐺PEX</Logo>
        </Link>
        <h1 className='text-center mt-6  text-2xl sm:text-2xl font-poppins'>Swipe to select a suitable 🐺ccount</h1>
        <Link href="/register" className="cursor-pointer z-[1000px]">
                <TbCircleArrowLeftFilled className="text-default ml-6 mb-6  w-[50px] h-[50px]  mt-12 z-[1000px] cursor-pointer" />
              </Link>
        <div className='app bg-black' id="app">
        <Swiper
        //  slidesPerView={1}
         spaceBetween={30}
        //  loop={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
           
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
            clickable: true,
          }}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper mx-12"
      >
        <SwiperSlide>
            <div className='flex flex-col  flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'>For <span className='text-2xl'>O<span className='text-green-700'>P</span>ay</span> 
             </p>
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Adora</p>
            </Link>
           
           
            </div>
            
          <Image src={avatar1} alt='avatar1' />
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'> For <span className='text-2xl'>Fairmoney</span>
             </p>
            
           
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Ephraim</p>
            </Link>
           
           
            </div>
            
          <Image src={avatar2} alt='avatar2' />
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'>For  <span className='text-2xl'>Palmpay</span>
             </p>
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Tosin</p>
            </Link>
           
           
            </div>
            
          <Image src={avatar3} alt='avatar3' />
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'>For <span className='text-2xl'>Fairmoney</span> 
             </p>
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Ekene</p>
            </Link>
           
           
            </div>
            
          <Image src={avatar4} alt='avatar4' />
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'> 
             </p>
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Bot1</p>
            </Link>
           
           
            </div>
            
          <Image src={bot1} alt='bot1' />
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col flex-wrap justify-between mx-3'>
            <IoIosArrowDropdown className="text-[40px] z-[1000px] scroll-smooth text-green-700 right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " /> 
            <p className='text-lg font-poppins mb-3'> 
             </p>
           
            <Link href="https://wa.me/message/VHQNGFNNDUHXO1"> 
           
            <p className='text-base font-poppins mb-3'>Click to chat with Bot2</p>
            </Link>
           
           
            </div>
            
          <Image src={bot2} alt='bot2' />
        </SwiperSlide>
      </Swiper>
    
      </div>
    </>
    
  )
}

export default Code