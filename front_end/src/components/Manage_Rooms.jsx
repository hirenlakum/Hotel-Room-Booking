import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Manage_Rooms = () => {

  const [rooms,setRooms] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{

    axios.get("http://localhost:3011/getrooms")
    .then(user => {

      setRooms(user.data)

    })
    .catch(err => {

      alert('something went wrong while fetching rooms data')
    })
  },[])

  const roomdelete = (id) => {
    axios.delete("http://localhost:3011/roomdelete/"+id)
    .then(user => {
      if(user.data.success){
        alert(user.data.message)
      }
    })
    .catch(err => {
      if(err.data.success){
        alert(user.data.message)
      }
    })
  }

  const newRoom = () => {

    navigate("/addroom")
  }

  const UpdateRoom = (id) => {
    navigate(`/updateroom/${id}`)
  }

 
  return (
    <>
    <div className=' w-[100%]  flex'>
    
    <div className='w-[30%] '>
    <nav class="bg-[#121e31] w-[30%] h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] tracking-wide overflow-auto">
      <div class="flex flex-wrap items-center gap-4 cursor-pointer">
        <img src='img/hiren.jpeg' class="w-10 h-10 rounded-full border-2 border-white" />
        <div>
          <p class="text-sm text-white">Hiren Lakum</p>
          <p class="text-xs text-gray-300 mt-0.5">hirenlakum2912@gmail.com</p>
        </div>
      </div>

      <hr class="my-6 border-gray-400" />

      <ul class="space-y-3">
        <li>
          <Link to="/admindashboard" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
              viewBox="0 0 512 512">
              <path
                d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                data-original="#000000" />
            </svg>
            <span>Manage User</span>
          </Link>
        </li>
        <li>
          <Link to="/managerooms" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4" viewBox="0 0 16 16">
              <path
                d="M13 .5H3A2.503 2.503 0 0 0 .5 3v10A2.503 2.503 0 0 0 3 15.5h10a2.503 2.503 0 0 0 2.5-2.5V3A2.503 2.503 0 0 0 13 .5ZM14.5 13a1.502 1.502 0 0 1-1.5 1.5H3A1.502 1.502 0 0 1 1.5 13v-.793l3.5-3.5 1.647 1.647a.5.5 0 0 0 .706 0L10.5 7.207V8a.5.5 0 0 0 1 0V6a.502.502 0 0 0-.5-.5H9a.5.5 0 0 0 0 1h.793L7 9.293 5.354 7.647a.5.5 0 0 0-.707 0L1.5 10.793V3A1.502 1.502 0 0 1 3 1.5h10A1.502 1.502 0 0 1 14.5 3Z"
                data-original="#000000" />
            </svg>
            <span>Manage Rooms</span>
          </Link>
        </li>
        <li>
          <a href="javascript:void(0)" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
              viewBox="0 0 512 512">
              <path
                d="M122.39 165.78h244.87c10.49 0 19-8.51 19-19s-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19zm164.33 99.44c0-10.49-8.51-19-19-19H122.39c-10.49 0-19 8.51-19 19s8.51 19 19 19h145.33c10.49 0 19-8.51 19-19z"
                data-original="#000000" />
              <path
                d="M486.63 323.71c2.04-22.33 3.41-48.35 3.44-78.68-.06-57.07-4.85-98.86-9.96-129.57-8.94-50.6-54.9-96.56-105.5-105.5C343.9 4.85 302.11.06 245.03 0c-57.07.06-98.87 4.85-129.58 9.96C64.86 18.9 18.9 64.86 9.96 115.46 4.85 146.17.07 187.96 0 245.03c.07 57.07 4.85 98.87 9.96 129.58 8.94 50.6 54.9 96.56 105.5 105.5 30.71 5.11 72.5 9.89 129.58 9.96 30.32-.03 56.34-1.4 78.66-3.44 19.84 15.87 45 25.37 72.38 25.37 64.02 0 115.93-51.9 115.93-115.92 0-27.38-9.5-52.54-25.37-72.37zM245.04 452.07c-45.02-.05-85.3-3.13-123.13-9.41-16.81-3.01-33.84-12.44-47.95-26.55s-23.53-31.13-26.55-47.95c-6.28-37.79-9.35-78.07-9.41-123.13.05-45.04 3.13-85.32 9.41-123.13 3.01-16.81 12.44-33.83 26.55-47.94s31.13-23.53 47.95-26.55C159.72 41.13 200 38.06 245.04 38c45.02.05 85.3 3.13 123.13 9.41 16.81 3.01 33.83 12.44 47.95 26.55 14.11 14.11 23.53 31.13 26.55 47.95 6.28 37.83 9.35 78.1 9.41 123.13-.02 16.9-.48 33.11-1.36 48.79-16.28-8.72-34.88-13.66-54.64-13.66-64.02 0-115.93 51.9-115.93 115.92 0 19.76 4.95 38.35 13.66 54.63-15.68.88-31.89 1.34-48.78 1.35zM396.08 474c-42.97 0-77.93-34.95-77.93-77.92s34.96-77.92 77.93-77.92 77.93 34.95 77.93 77.92S439.05 474 396.08 474z"
                data-original="#000000" />
              <path
                d="M406.28 418.24c-2.42-.4-5.71-.78-10.2-.78s-7.78.38-10.2.78c-3.98.7-7.6 4.32-8.31 8.31-.4 2.42-.78 5.71-.78 10.2s.38 7.78.78 10.2c.7 3.98 4.32 7.6 8.31 8.31 2.42.4 5.71.78 10.2.78s7.78-.38 10.2-.78c3.98-.7 7.6-4.32 8.31-8.31.4-2.42.78-5.71.78-10.2s-.38-7.78-.78-10.2c-.7-3.98-4.32-7.6-8.31-8.31zm-10.21-12.61c10.49 0 19-8.51 19-19v-31.7c0-10.49-8.51-19-19-19s-19 8.51-19 19v31.7c0 10.49 8.51 19 19 19z"
                data-original="#000000" />
            </svg>
            <span>Booking History</span>
          </a>
        </li>
      
  
     
    
      </ul>
    </nav>
    </div>
   
<div class="font-sans overflow-x-auto w-[70%]">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              RoomID
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Room Type
            </th>

           
           
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Total People
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Price
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Room Image
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Action
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
    



{
  rooms.map((room)=>
  
    <tr class="hover:bg-gray-50">
    <td class="p-4 text-[15px] text-gray-800">
    {room._id}
    </td>
    <td class="p-4 text-[15px] text-gray-800">
    {room.badType}
    </td>
    
    <td class="p-4 text-[15px] text-gray-800">
    {room.people}
    </td>
    
    <td class="p-4 text-[15px] text-gray-800">
    {room.price}
    </td>
    
    <td class="p-4 text-[15px] text-gray-800">
   <img src={`http://localhost:3011/uploads/${room.image}`} alt="room image" className='w-[80px] h-[60px]' /> 
    </td>
    
    <td class="p-4">

    <button class="mr-4" title="Edit" onClick={()=>{UpdateRoom(room._id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                  viewBox="0 0 348.882 348.882">
                  <path
                    d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                    data-original="#000000" />
                  <path
                    d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                    data-original="#000000" />
                </svg>
              </button>
    
      <button class="mr-4" title="Delete" onClick={()=>{roomdelete(room._id)}} >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
          <path
            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
            data-original="#000000" />
          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
            data-original="#000000" />
        </svg>
      </button>
    </td>
    </tr>
  
  )
}


      


        </tbody>
      </table>
      
    <button className='w-[200px] mx-auto
    flex items-center justify-center h-[40px] text-white bg-blue-700' onClick={newRoom}>
      <h1>Add New Room</h1>
    </button>
    </div>
    </div>

  

    </>
  )
}

export default Manage_Rooms
