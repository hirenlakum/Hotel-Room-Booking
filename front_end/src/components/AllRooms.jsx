import React from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from "./Loader"
import {useContext} from "react"
import { RoomContext } from '../../store/roomStore'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const AllRooms = () => {

  const {rooms} = useContext(RoomContext)

  const navigate = useNavigate()

  
  


   
    // const [loader,setLoader] = useState(true)

    // useEffect(()=>{

    //   if(rooms && rooms.length>0){
    //     setLoader(false)
    //   }
    // },[rooms])

    

  
    

    

 
 

    const bookRoom = (id) => {
     const token= localStorage.getItem("authToken")

    

     if(token){

      navigate("/bookroom/"+id)

      
/*
const decode = jwtDecode(token)
const userId = decode.id

const checkinDate = prompt('please enter check in date')

  if(!checkinDate){
    alert('checkin date is required')
    return;

  }

  const checkoutDate = prompt('please enter check out date')

  if(!checkoutDate){
    alert('checkout date is required')
    return;

  }

  if(checkinDate>checkoutDate){
    alert('checkout date must ne greater than checkin date')
    return;
  }
  

 

axios.post("http://localhost:3011/bookroom",{id,userId,checkinDate,checkoutDate})
.then(user => {
  if(user.data.success){
    alert(user.data.message)
  }
  else{
    alert(user.data.message)
  }
})
.catch(err => {
  console.log("error while booking room",err)
})
  */

     }
     else{
 navigate("/signin")
     }
 }

 
 
  return (
    <div>
      <Header/>
      {/* {loader ? <Loader/>


: */}
      <div 
    data-aos="fade-right" className="mt-11 w-[1200px] min-h-[400px] gap-[50px] mb-5  mx-auto flex  flex-wrap justify-between">
{
    rooms.map(room => 

<div className="w-[350px] h-[500px]  border border-gray-600 flex items-center flex-col">
        <img src={`http://localhost:3011/uploads/${room.image}`} alt="room image" className="w-[100%] h-[300px]" />
        <h1 className="p-3 text-[25px]">{room.badType}</h1>
        <p className="text-[17px] p-3 ">Make Yourself Comfortable in any of our serene  guest rooms and spacious suites..</p>
        <p className="p-2 text-gray-600 text-[20px]">Price:<span className="text-black text-[25px] font-bold pl-2">${room.price}</span>/night</p>
        <button className='w-[140px] mb-2 h-[40px] bg-blue-600 text-white' onClick={()=>bookRoom(room._id)}>Book Now</button>
        
    </div>
    )
}
    
   


 
  
</div>
{/* } */}
      <Footer/>
    </div>
  )
}

export default AllRooms
