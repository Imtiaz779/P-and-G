import React from "react";
import logo from "../assets/PG Complete Logo 1.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#25184F] text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4 sm:px-12 lg:px-32">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-3 text-center md:text-left font-medium">
            <Link to="/" className="whitespace-nowrap hover:underline transition">Home</Link>
            <Link to="/about" className="whitespace-nowrap hover:underline transition">About</Link>
            <Link to="/insights" className="whitespace-nowrap hover:underline transition">Insights</Link>
            <Link to="/corporatesustainability" className="whitespace-nowrap hover:underline transition">
              Corporate Sustainability
            </Link>
            <Link to="/career" className="whitespace-nowrap hover:underline transition">Career</Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-6 text-xl justify-center md:justify-end">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm sm:text-base pt-4 ">
          © 2025 P&G | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
