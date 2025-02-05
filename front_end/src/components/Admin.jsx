import React from 'react'
import {useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
const Admin = () => {

  const navigate = useNavigate()

      const {
        register,
        handleSubmit,
        formState:{errors},
    
      } = useForm()

      const onSubmit = (data) => {
        if(data.name=='hiren' && data.password=='2912'){
          toast.success("login success")
          navigate("/admindashboard")
        }
        else{
          toast.error('username or password is incorrect')
        }
      }
  return (
    <>
    <div class="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4 bg-[url('img/back.png')] bg-cover bg-no-repeat"
     
     >
       <div class="max-w-md w-full mx-auto">
         <form class="bg-opacity-70 bg-white rounded p-6 shadow-[0_2px_16px_-3px_rgba(125,126,131,0.3)]" onSubmit={handleSubmit(onSubmit)}>
           <div class="mb-12">
             <h3 class="text-gray-800 text-3xl font-bold">Admin Login</h3>
           </div>
 
           <div>
             <div class="relative flex items-center">
               <input  type="text" 
                 {...register('name',
                  {
                    required:{value:true,message:"admin name is required"},
                    minLength:{value:3,message:'min len is 3 required'}
                  })}
                 class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                 placeholder="Enter AdminName" />

               
               <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" class="w-[18px] h-[18px] absolute right-2"
                 viewBox="0 0 682.667 682.667">
                 <defs>
                   <clipPath id="a" clipPathUnits="userSpaceOnUse">
                     <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                   </clipPath>
                 </defs>
                 <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                   <path fill="none" stroke-miterlimit="10" stroke-width="40"
                     d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                     data-original="#000000"></path>
                   <path
                     d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                     data-original="#000000"></path>
                 </g>
               </svg>

             </div>
           </div>
           {errors.name && <p>{errors.name.message}</p>}
 
           <div class="mt-6">
             <div class="relative flex items-center">
               <input name="password" type="password" 
               {...register('password',
                {
                  required:{value:true,message:'password must be required'},
                  minLength:{value:3,message:'password length is at least 3 number'}
                }
               )}
                 class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 pl-2 pr-8 py-3 outline-none placeholder:text-gray-800"
                 placeholder="Enter password" />
               <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333"
                 class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                 <path
                   d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                   data-original="#000000"></path>
               </svg>
             </div>
           </div>
           {errors.password && <p>{errors.password.message}</p>}
           
 
           <div class="mt-12">
             <button type="submit"
               class="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
               Sign in
             </button>
           
           </div>
 
           <hr class="my-6 border-gray-400" />
 
         </form>
       </div>
     </div>
    </>
  )
}

export default Admin
