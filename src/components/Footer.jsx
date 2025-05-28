import React from "react";
import logo from "../assets/PG Complete Logo 1.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div class="w-full  h-auto bg-[#25184F] text-white">
      <div className="flex flex-col justify-center items-center  p-4  gap-8">

        <div className="flex  justify-between items-center gap-12">
          <div className="">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
          <nav className="flex gap-4  font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/corporatesustainability" className="whitespace-nowrap">Corporate Sustainability</Link>
            <Link to="/career">Career</Link>
          </nav>
          <nav className="flex gap-4  text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-sky-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-700 transition-colors" />
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-center ">Copyright © 2025 P&G | All Rights Reserved </div>
      </div>
    </div>
  );
};

export default Footer;
