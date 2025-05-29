import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white  relative">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-4 md:px-8 lg:px-32">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/corporatesustainability" className="whitespace-nowrap">
            Corporate Sustainability
          </Link>
          <Link to="/career">Career</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center px-4 gap-4 pb-6 text-gray-700 font-medium bg-white w-full absolute">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/insights" onClick={toggleMenu}>Insights</Link>
          <Link to="/corporatesustainability" onClick={toggleMenu}>
            Corporate Sustainability
          </Link>
          <Link to="/career" onClick={toggleMenu}>Career</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
