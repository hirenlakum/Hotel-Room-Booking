import React from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from "./Loader"
import {useContext} from "react"
import { RoomContext } from '../../store/roomStore'

import Room from './Room'

const AllRooms = () => {

  const {rooms} = useContext(RoomContext)

  if(!rooms || rooms.length ===0){
    return <Loader/>
  }

  

  rooms.map((room)=>console.log(room))

 
 
  return (
    <div>
      <Header/>
    
      <div 
    data-aos="fade-right" className="mt-11 w-[1200px] min-h-[400px] gap-[50px] mb-5  mx-auto flex  flex-wrap justify-between">
{
    rooms.map(room => <Room key={room._id} room={room}/>
    )
}
    
   


 
  
</div>
{/* } */}
      <Footer/>
    </div>
  )
}

export default AllRooms
