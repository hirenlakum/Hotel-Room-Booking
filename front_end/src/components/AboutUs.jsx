import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer"


const AboutUs = () => {

    useEffect(()=>{
            Aos.init({
              duration:1200,
              once:true,
            })
          })
  return (
    <>
    <Header/>
  
    <div   data-aos="fade-right" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
        <p className="mt-4 text-xl text-gray-500">We provide seamless and efficient hotel management solutions to make your hospitality experience perfect.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to empower hoteliers with state-of-the-art tools and technology for easy room management, customer engagement, and business growth.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">What We Do</h3>
          <p className="mt-4 text-gray-600">
            We provide an all-in-one hotel management system, including room bookings, customer management, payment processing, and reporting tools to optimize your operations.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
          <p className="mt-4 text-gray-600">
            We believe in quality service, user-friendly design, and efficiency. Our goal is to make your hotel operations smoother, allowing you to focus on providing great guest experiences.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600">
          With our hotel management system, your hotel operations are in safe hands. We're here to help you grow.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default AboutUs;
