import React from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Room = ({room}) => {



    const navigate = useNavigate()
    const bookRoom = (id) => {
        const token= localStorage.getItem("authToken")
   
       
   
        if(token){
   
         navigate("/bookroom/"+id)
   
   
   
        }
        else{
    navigate("/signin")
        }
    }
   
  return (
    <>
    
    <div className="w-[350px] h-[500px]  border border-gray-600 flex items-center flex-col">
              <img src={`http://localhost:3011/uploads/${room.image}`} alt="room image" className="w-[100%] h-[300px]" />
              <h1 className="p-3 text-[25px]">{room.badType}</h1>
              <p className="text-[17px] p-3 ">Make Yourself Comfortable in any of our serene  guest rooms and spacious suites..</p>
              <p className="p-2 text-gray-600 text-[20px]">Price:<span className="text-black text-[25px] font-bold pl-2">{room.price}</span>/night</p>
              <button className='w-[140px] mb-2 h-[40px] bg-blue-600 text-white' onClick={()=>bookRoom(room._id)}>Book Now</button>
              
          </div>
          </>
  )
}

export default Room
