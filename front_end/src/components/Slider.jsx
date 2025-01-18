import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {

  useEffect(()=>{
    Aos.init({
      duration:1200,
      once:true,
    })
  })
  return (
    <>
    <h1 className='text-[30px] text--400 pl-[120px] text-blue-800 ' data-aos="fade-right">Explore Our Hotel View</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[1200px] mt-3 mb-4 "
      >
        <SwiperSlide>
            <img src="img/hero1.webp" alt="" className='w-[1200px] h-[600px] object-cover'  />
        </SwiperSlide>

        <SwiperSlide>
            <img src="img/hero2.webp" alt="" className='w-[1200px] h-[600px] object-cover' />
        </SwiperSlide>

        <SwiperSlide>
            <img src="img/hero6.png" alt="" className='w-[1200px] h-[600px] object-cover' />
        </SwiperSlide>

        <SwiperSlide>
            <img src="img/hero8.png" alt="" className='w-[1200px] h-[600px] object-cover' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
