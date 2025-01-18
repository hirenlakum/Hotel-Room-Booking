import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"

const OurTeams = () => {

   useEffect(()=>{
            Aos.init({
              duration:1200,
              once:true,
            })
          })
  const teamMembers = [
    {
      name: 'Hiren Lakum',
      position: 'CEO & Founder',
      description: 'Hiren has over 15 years of experience in hospitality management, leading our team to success with a vision for innovation.',
      image: 'img/hiren.jpeg',
    },
    {
      name: 'Kaushik Lakum',
      position: 'Chief Technology Officer',
      description: 'Kaushik is responsible for the development and innovation of our hotel management software. His focus is on creating seamless, scalable solutions.',
      image: 'img/kaushik2.png',

    },
    {
      name: 'Ravi Lakum',
      position: 'Marketing Director',
      description: 'Ravi brings fresh ideas to the table, creating engaging campaigns and strategies that help grow our brand presence worldwide.',
      image: 'img/ravi.png',
    },
    {
      name: 'Abhijeet Lakum',
      position: 'Operations Manager',
      description: 'Abhijeet ensures everything runs smoothly in day-to-day operations, optimizing workflows and maintaining high-quality service for our clients.',
      image: 'img/abhi.png',
    },
  ];

  return (

    <>
<Header/>
    <div    data-aos="fade-right" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
        <p className="mt-4 text-xl text-gray-500">Our team is dedicated to providing exceptional hotel management solutions and making your experience seamless.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-[350px] object-cover" src={member.image} alt={member.name} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.position}</p>
              <p className="mt-4 text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600">
          Our team is always ready to assist you with any needs related to hotel management, ensuring your operations run smoothly.
        </p>
        <div className="mt-8">
          <Link
           to="/contactus"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  
 <Footer/>
    </>
  );
};

export default OurTeams;
