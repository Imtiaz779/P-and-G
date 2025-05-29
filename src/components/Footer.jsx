import React from "react";
import logo from "../assets/PG Complete Logo 1.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#25184F] text-white">
      <div className="flex flex-col justify-center items-center p-4 gap-6 max-w-7xl mx-auto">
        
        {/* Logo and Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 sm:px-12 lg:px-32 gap-6">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col flex-wrap  justify-center md:flex-row md:justify-start gap-2 font-medium text-center md:text-left">
            <Link to="/" className="whitespace-nowrap hover:underline">Home</Link>
            <Link to="/about" className="whitespace-nowrap hover:underline">About</Link>
            <Link to="/insights" className="whitespace-nowrap hover:underline">Insights</Link>
            <Link to="/corporatesustainability" className="whitespace-nowrap hover:underline">Corporate Sustainability</Link>
            <Link to="/career" className="whitespace-nowrap hover:underline">Career</Link>
          </nav>

           {/* Social Icons */}
        <div className="flex gap-6 text-xl justify-center mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
        </div>

       

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base">
          Copyright © 2025 P&G | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
