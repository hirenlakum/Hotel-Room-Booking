import React from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

 const AddRoom = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const navigate = useNavigate()


    const onSubmit = (data) => {

        
    const formData = new FormData()

        formData.append("image",data.image[0])
        formData.append("badtype",data.badtype)
        formData.append("price",data.price)
       formData.append("people",data.people)
       

       axios.post("http://localhost:3011/addRoom",formData)
       .then(user => {
        
        if(user.data.success){
          alert(user.data.message)
          navigate("/managerooms")
        }
        else{
          alert(user.data.message)
        }
      })
       .catch(err => console.log(err))
      
for (let [key,value]  of formData.entries()) {
    console.log(`${key}:`,value)
}
    }

  return (
    <>

<div className='w-[100%] flex  '>
  
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
  
  <div class="flex justify-center items-center font-[sans-serif] w-screen h-screen p-4 bg-[url('img/back.png')] bg-cover bg-no-repeat">
      <div class="max-w-md w-full mx-auto">
        <form class="bg-opacity-70  bg-white rounded p-6 shadow-[0_2px_16px_-3px_rgba(125,126,131,0.3)]" onSubmit={handleSubmit(onSubmit)} >
          <div class="mb-12">
            <h3 class="text-gray-800 text-3xl font-bold">Add Room</h3>
          </div>


          <div>
            <div class="relative flex flex-col items-center">
              <input  type="text"
              {...register("badtype")}
             
               class="bg-transparent mb-5 w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter BadType" />
            
          
            </div>
          </div>





          <div>
            <div class="relative flex flex-col items-center">
              <input  type="text"
            {...register("people")}
               class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter Total people" />
                
           
            </div>
          </div>


          <div>
            <div class="relative flex flex-col items-center">
              <input 
           {...register("image")}
              type="file"  class="bg-transparent mt-5 w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                 />
         
       
            </div>
          </div>

          <div class="mt-6">
            <div class="relative flex flex-col items-center">
              <input name="password" type="text" 
{...register("price")}

                class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter Price" />
              
            </div>
          </div>

   

           <div class="mt-12">
            <input type="submit" className='w-full bg-blue-600 h-8 text-white'  />
            
           
          </div> 

         


        </form>
      </div>
    </div>
   </div>
   
    </>
  )
}

export default AddRoom

