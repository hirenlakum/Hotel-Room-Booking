import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer     className="bg-gray-800 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-xl font-extrabold text-white">Hotel Management System</h2>
            <p className="mt-4 text-gray-400">
              Your ultimate solution for smooth and efficient hotel operations. We provide technology-driven tools for better customer service.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Useful Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
              <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
              <li><a href="#privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
              <FiInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
              <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
              <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-gray-400">Email: sailing2912hotel@gmail.com</p>
            <p className="mt-2 text-gray-400">Phone: +91 9978019893</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Sailing Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
