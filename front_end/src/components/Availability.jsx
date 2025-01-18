import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Availability = () => {

   useEffect(()=>{
      Aos.init({
        duration:1200,
        once:true,
      })
    })
    return(
        <>
      <div data-aos="fade-right" className="mt-5 w-[1100px] h-[70px] flex mx-auto mb-9 items-center justify-between p-3    gap-6 border-2 border-gray-600" >
  <div>
    <input type="date" className="w-[170px] p-2 h-[40px] border border-gray-600" />
  </div>

  

  <div>
    <input type="input" placeholder="Enter Total People"  className="w-[170px] h-[40px] p-2 font-bold  outline-none border border-gray-600" />
  </div>

  <div>
    <button className="w-[170px] h-[40px] bg-blue-500 text-white">Check Availability</button>
  </div>
      </div>
        </>
    )
}

export default Availability