import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Rooms = () => {

     useEffect(()=>{
          Aos.init({
            duration:1200,
            once:true,
          })
        })

    return(
        <>
        <div 
    data-aos="fade-right" className="mt-11 w-[1200px] min-h-[400px]  mb-5  mx-auto flex gap-[10px] flex-wrap justify-between">
    <div className="w-[350px] h-[500px]  border border-gray-600">
        <img src="img/room1.webp" alt="" className="w-[100%] h-[300px]" />
        <h1 className="p-3 text-[25px]">Couple Room</h1>
        <p className="text-[17px] p-3 ">Make Yourself Comfortable in any of our serene  guest rooms and spacious suites..</p>
        <p className="p-2 text-gray-600 text-[20px]">Price:<span className="text-black text-[25px] font-bold pl-2">$275.00</span>/night</p>
    </div>

    <div className="w-[350px] h-[500px]  border border-gray-600">
    <img src="img/room2.webp" alt="" className="w-[100%] h-[300px]" />
    <h1 className="p-3 text-[25px]">Family Room</h1>
    <p className="text-[17px] p-3 ">Make Yourself Comfortable in any of our serene  guest rooms and spacious suites..</p>
    <p className="p-2 text-gray-600 text-[20px]">Price:<span className="text-black text-[25px] font-bold pl-2">$452.00</span>/night</p>
    </div>

    <div className="w-[350px] h-[500px]  border border-gray-600">
    <img src="img/room3.webp" alt="" className="w-[100%] h-[300px]" />
    <h1 className="p-3 text-[25px]">Luxiours Room</h1>
    <p className="text-[17px] p-3 ">Make Yourself Comfortable in any of our serene  guest rooms and spacious suites..</p>
    <p className="p-2 text-gray-600 text-[20px]">Price:<span className="text-black text-[25px] font-bold pl-2">$1234.00</span>/night</p>
    </div>
  
</div>
<div className="flex justify-center items-center gap-3 mb-3">
<div>
<FaArrowLeft />
</div>

<div>
<Link to="/allrooms" className="text-[20px] text-center text-black-800 hover:text-blue-600 cursor-pointer">View All Rooms </Link>
</div>

<div>

<FaArrowRight />
</div>
</div>


      
        </>
    )
}

export default Rooms