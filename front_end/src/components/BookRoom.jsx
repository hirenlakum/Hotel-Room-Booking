import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const BookRoom = () => {

    const {id} = useParams()
    const [checkinDate,setCheckin] = useState()
    const [checkoutDate,setCheckout] = useState()
    const token = localStorage.getItem("authToken")
    const decode = jwtDecode(token)
    const userId=decode.id

    const bookroom = (e) => {
        e.preventDefault()

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

        
       
        
    }
  return (
    <>
    <Header/>
      <div class="flex bg-[#121e31] mt-[30px] mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 text-white   ">
	<div class="mb-8 text-center">
		<h1 class="my-3 text-4xl font-bold">Book Room</h1>
		
	</div>
	<form novalidate="" action="" class="space-y-12" method="post">
		<div class="space-y-4">
			<div>
				<label for="checkin" class="block mb-2 text-sm">CheckIn Date</label>
				<input type="date" onChange={(e)=>setCheckin(e.target.value)}  id="checkin" class="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
			</div>
			<div>
				<div class="flex justify-between mb-2">
					<label for="checkout" class="text-sm">CheckOut Date</label>
					
				</div>
				<input type="date" onChange={(e)=>setCheckout(e.target.value)}  id="checkout" class="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
			</div>
		</div>
		<div class="space-y-2">
			<div>
				<button type="submit" onClick={bookroom} name="sbn" class="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Book Room</button>
			</div>
			
		</div>
	</form>
</div>
<Footer/>
    </>
  )
}

export default BookRoom
