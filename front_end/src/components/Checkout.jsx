import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import { jwtDecode } from 'jwt-decode'

const Checkout = () => {
  const token = localStorage.getItem("authToken")

   const decode = jwtDecode(token)
  const userId=decode.id

    const navigate = useNavigate()

    const [image,setImage] = useState()
    const [badType,setBadType] = useState()
    const [price,setPrice] = useState()
    const [people,setPeople] = useState()


   

    const {id} = useParams()
    const {checkinDate} = useParams()
    const {checkoutDate} = useParams()

    console.log(id,checkinDate,checkoutDate)
    

    useEffect(()=>{
  axios.get("http://localhost:3011/getEachRoom/"+id)
  .then(user => {
    
    setImage(user.data.image)
    setBadType(user.data.badType)
    setPrice(user.data.price)
    setPeople(user.data.people)
  })
  .catch(err => {
    console.log(err)
  })
    },[])

    const payment = () => {
      const options = {
        key: "rzp_test_o4U80LCCoyS7UE", // Replace with your Razorpay API key
        amount: price*100, // Example: 50000 paise = 500 INR
        currency: "INR",
        name: "Online Shopping",
        description: "Test Payment",
        image: "https://example.com/your_logo.png", // Optional: Your company logo
        handler: function (response) {
          console.log(response);
          toast.success('Payment Success: ' + response.razorpay_payment_id);
          axios.post("http://localhost:3011/bookRoom",{id,userId,checkinDate,checkoutDate})
          .then(user => {
            if(user.data.success){
              toast.success(user.data.message)
              navigate("/profile")
            }
            else{
              toast.success(user.data.message)
            }
          })
          .catch(err => {
            console.log(err)
          })
        
          
        },
        prefill: {
          name: "hiren",
          email: "hien2912@gmail.com",
          contact: "9978019893"
        },
        notes: {
          address: "Corporate Office"
        },
        theme: {
          color: "black"
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    }

   
  return (
    <>
    <Header/>
    <div>
     <div class="font-[sans-serif] p-4">
  <div class="lg:max-w-6xl max-w-xl mx-auto">
    <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
      <div class="w-full lg:sticky top-0">
        <div class="flex flex-row gap-2">
         
          <div class="w-[600px] h-[500px] bg-green-300">
            <img src={`http://localhost:3011/uploads/${image}`} alt="Room Image"
              class="w-[100%] h-[500px]  " />
          
          </div>
        </div>
      </div>

      <div class="w-full">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800">{badType} Room</h3>
          <p class="text-gray-500 mt-1 text-sm">This Room Is perfect For You
          </p>
          <div class="flex items-center flex-wrap gap-4 mt-4">
            <h4 class="text-gray-800 text-2xl sm:text-3xl font-bold">Price For This Room {price}</h4>
          
          </div>

          <div class="flex items-center gap-4 mt-2">
            <div class="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
              <p>4</p>
              <svg class="w-[13px] h-[13px] fill-white" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <p class="text-gray-500 text-sm">253 ratings and 27 reviews</p>
          </div>
        </div>

        <hr class="my-6 border-gray-300" />

        <div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800">CheckOut</h3>
         

          <div class="mt-6 flex flex-wrap gap-4">
            
            <button type="button" onClick={payment}
              class="px-4 py-3 w-[45%] border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold  ">Pay Now
              </button>
          </div>
        </div>

        <hr class="my-6 border-gray-300" />





        <div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800">Room Information</h3>
          <div class="mt-2" role="accordion">
            <div class="hover:bg-gray-100 transition-all">
              
              This Room is a well placed room with big area covered.
              
            </div>

       

          
          </div>
        </div>

        <hr class="my-6 border-gray-300" />

        <div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800">Customer Reviews</h3>
          <div class="flex items-center gap-1.5 mt-4">
            <svg class="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 h-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

          <div class="flex items-center flex-wrap gap-4 mt-4">
            <h4 class="text-2xl sm:text-3xl text-gray-800 font-semibold">4.0 / 5</h4>
            <p class="text-sm text-gray-500">Based on 253 ratings</p>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex items-start">
            <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
            <div class="ml-3">
              <h4 class="text-sm font-bold">John Doe</h4>
              <div class="flex space-x-1 mt-1">
                <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <p class="text-xs text-gray-500 !ml-2">2 months ago</p>
              </div>
              <p class="text-sm text-gray-500 mt-4">This Room is best for any travelers with good area and good facility and good view.
            </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Checkout
