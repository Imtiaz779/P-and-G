import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div class="w-full h-[100px] mx-auto bg-[#FFFFFF]">
      <div className="flex justify-between items-center h-full px-12 lg:px-32">
        <div className="">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>
        <nav className="flex gap-2 sm:gap-6 md:gap-10 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/corporatesustainability">Corporate Sustainability</Link>
          <Link to="/career">Career</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
