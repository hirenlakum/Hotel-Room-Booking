import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Facility = () => {

   useEffect(()=>{
            Aos.init({
              duration:1200,
              once:true,
            })
          })
  return (
    <div  data-aos="fade-right" className='flex items-center justify-between mt-[60px] w-[1000px] mx-auto mb-7'>
      <div>
        <img src="img/swim_icon.webp" alt="" />
        <h1>Swimmimg Pool</h1>
      </div>

      <div>
        <img src="img/taxi-icon.webp" alt="" />
        <h1>Airport Taxi</h1>
      </div>

      <div>
        <img src="img/wifi-icon.webp" alt="" />
        <h1>Free Wifi</h1>
      </div>
    </div>
  )
}

export default Facility
