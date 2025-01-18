import React from 'react'

import  { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Service = () => {

     useEffect(()=>{
            Aos.init({
              duration:1200,
              once:true,
            })
          })
  return (
    <>
    <h1 data-aos="fade-right" className='font-bold text-[30px] text-center mt-4 mb-5'>Our Service</h1>
    <div data-aos="fade-right" className='w-[1200px] h-[400px] p-3  mx-auto flex gap-5 justify-between'>
      <div className='w-[350px] h-[100%]  rounded-[20px] shadow-slate-400 shadow-2xl flex flex-col p-3 items-center justify-between '>
       <img src="img/service1.jpg" alt="" className='w-[100%] h-[50%] rounded-t-[20px] object-cover ' />
       <h1 className='font-bold text-center text-[30px] mt-3'>Restaurant</h1>
       <h1 className='font-bold text-center text-[15px] text-gray-700 mt-3'>Children Eat free,and many more fun activities</h1>
      </div>
      <div className='w-[350px] h-[100%] flex flex-col p-3 items-center justify-between shadow-slate-400 shadow-2xl rounded-[20px] '>
      <img src="img/service2.jpg" alt="" className='w-[100%] h-[50%] rounded-t-[20px] object-cover ' />
      <h1 className='font-bold text-center text-[30px] mt-3'>Spa & Wellness</h1>
       <h1 className='font-bold text-center text-[15px] text-gray-700 mt-3'>Up to 20% Off</h1>
      
</div>
<div className='w-[350px] h-[100%] flex flex-col p-3 items-center justify-between shadow-slate-400 shadow-2xl    rounded-[20px] '>
<img src="img/service3.jpg" alt="" className='w-[100%] h-[50%] rounded-t-[20px] object-cover ' />
<h1 className='font-bold text-center text-[30px] mt-3'>Fitness Center</h1>
       <h1 className='font-bold text-center text-[15px] text-gray-700 mt-3'>Discount Room Rates & Reward Points</h1>
</div>
    </div>
    </>
  ) 
}

export default Service
