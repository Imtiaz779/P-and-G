import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/PG Complete Logo 1.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const Footer = () => {
  return (
    <motion.div
      className="w-full h-auto bg-[#25184F] text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex flex-col justify-center items-center p-4 gap-6 max-w-7xl mx-auto">

        {/* Logo and Nav Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center w-full px-4 sm:px-12 lg:px-32 gap-6"
          variants={fadeInUp}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo"
                className="h-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <motion.nav
            className="flex flex-col flex-wrap justify-center md:flex-row md:justify-start gap-2 font-medium text-center md:text-left"
            variants={fadeInUp}
          >
            <Link to="/" className="whitespace-nowrap hover:underline">Home</Link>
            <Link to="/about" className="whitespace-nowrap hover:underline">About</Link>
            <Link to="/insights" className="whitespace-nowrap hover:underline">Insights</Link>
            <Link to="/corporatesustainability" className="whitespace-nowrap hover:underline">Corporate Sustainability</Link>
            <Link to="/career" className="whitespace-nowrap hover:underline">Career</Link>
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 text-xl justify-center mt-2"
            variants={fadeInUp}
          >
            {[{
              href: "https://www.facebook.com", icon: <FaFacebookF />, color: "hover:text-blue-500"
            }, {
              href: "https://www.twitter.com", icon: <FaTwitter />, color: "hover:text-sky-400"
            }, {
              href: "https://www.instagram.com", icon: <FaInstagram />, color: "hover:text-pink-500"
            }, {
              href: "https://www.linkedin.com", icon: <FaLinkedinIn />, color: "hover:text-blue-700"
            }].map(({ href, icon, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social"
                className={`transition-colors ${color}`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm sm:text-base"
          variants={fadeInUp}
        >
          Copyright © 2025 P&G | All Rights Reserved
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
