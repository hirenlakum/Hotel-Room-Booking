import React from 'react'
import {jwtDecode} from "jwt-decode"
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Link, useNavigate } from 'react-router-dom'


const Profile = () => {



  const [uname,setUname] = useState("")
  const [email,setEmail] = useState("")
  const [image,setImage] = useState("")
  const [roomData,setRoomData] = useState([])
  const [id,setId] = useState(null)



  const token = localStorage.getItem("authToken")
  const navigate = useNavigate()

 
  useEffect(()=>{

    if(token){
      const decoded = jwtDecode(token)
      const userId = decoded.id
      setId(userId)

      axios.get("http://localhost:3011/getUser/"+userId)
      .then(user => {
        setUname(user.data.userName)
        setEmail(user.data.email)
        setImage(user.data.image)
      })
      .catch(err => console.log(err))

      axios.get("http://localhost:3011/bookroomdata/"+userId)
      .then((user) => {
        setRoomData(user.data.bookedRooms)
       
      })
      .catch(err => {
        console.log(err)
      })
  
    }
  },[])


 
  


     
   


    

   

   
  

  

 

  

    const logout = () => {
        localStorage.removeItem("authToken")
        navigate("/")
        
    }
  return (
   <>
   <Header/>

   {token ?
   <div className=' flex  flex-col '>
   <h1 className='text-[20px] font-bold text-blue-600 text-center'>User Profile</h1>
  <div className="flex flex-col justify-center mx-auto mt-[20px]  items-center w-[600px] min-h-[400px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
 <img src={`http://localhost:3011/profileUpload/${image}`} alt="profile image" className="w-32 h-32 mb-[40px] mx-auto rounded-full dark:bg-gray-500 aspect-square" />
 <div className="space-y-4 text-center divide-y dark:divide-gray-300">
   <div className="my-2 space-y-1">
     <h2 className="text-xl font-semibold sm:text-2xl mb-[40px]">{uname}</h2>
     <p className="px-5 text-xs sm:text-base dark:text-gray-600 mb-[40px]">{email}</p>
     
   </div>
   <button className='w-[140px] mb-[40px] h-[40px] bg-red-600 text-white' onClick={logout}>LogOut</button>

 </div>
</div>
<h1 className='mt-[20px] text-[20px] text-center'>Your Book Room</h1>

      <table class="w-full bg-white mt-[20px] min-[400px]">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
           
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
              Check-In Date
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Check-out Date
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
    





{roomData.map((room)=>


  <tr class="hover:bg-gray-50">
   
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
  <img src= {`http://localhost:3011/uploads/${room.image}`} className='w-[100px] h-[60px]' alt="book image" />
   </td>

  
  
   <td class="p-4 text-[15px] text-gray-800">
   {
    room.bookedDate.map((date)=>{
      if(date.userId===id)
      {

         return date.checkinDate
        
      }
    })
 
   }
   </td>
  

   <td class="p-4 text-[15px] text-gray-800">
{
       room.bookedDate.map((date)=>{
        if(date.userId===id)
        {
          return date.checkoutDate
        }
      })
}
   </td>
  
   
   
   </tr>
)



}
  

  
  



      


        </tbody>
      </table>
      
  
   
</div>



:

<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
<div className="text-center text-white p-6 rounded-lg shadow-xl bg-opacity-70">
  <h1 className="text-4xl font-bold mb-4">Oops! You're not logged in</h1>
  <p className="text-lg mb-6">To view your profile, please sign in.</p>
  <div className="flex justify-center items-center space-x-4">
    <div className="animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636a9 9 0 11-12.728 12.728A6.974 6.974 0 017 12a7 7 0 1114 0c0-.175-.03-.35-.09-.522z"
        />
      </svg>
    </div>
    <div className="animate-pulse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
  <Link className="mt-6 text-lg" to="/signin">Redirecting you to sign-in...</Link>
</div>
</div>

  
  }
   
<Footer/>
   </>
  )
}


export default Profile
