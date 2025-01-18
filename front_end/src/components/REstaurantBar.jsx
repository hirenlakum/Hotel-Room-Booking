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

const REstaurantBar = () => {

    useEffect(()=>{
        Aos.init({
          duration:1200,
          once:true,
        })
      })
  return (
    <div>
      <h1 className='text-[30px] text--400 font-bold text-blue-800b text-center ' data-aos="fade-right">Restaurant & Bar</h1>
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
                  <img src="img/menu1.png" alt="" className='w-[1200px] h-[600px] object-cover'  />
              </SwiperSlide>
      
              <SwiperSlide>
                  <img src="img/menu2.png" alt="" className='w-[1200px] h-[600px] object-cover' />
              </SwiperSlide>
      
              <SwiperSlide>
                  <img src="img/menu3.png" alt="" className='w-[1200px] h-[600px] object-cover' />
              </SwiperSlide>
      
              <SwiperSlide>
                  <img src="img/menu4.png" alt="" className='w-[1200px] h-[600px] object-cover' />
              </SwiperSlide>
            </Swiper>
         
    </div>
  )
}

export default REstaurantBar
