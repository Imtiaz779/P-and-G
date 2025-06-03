import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const MotionLink = motion(Link);

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
      ease: "easeOut",
    }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "ease" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const hoverEffectDesktop = {
  scale: 1.1,
  color: "#2563EB", // Tailwind blue-600
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

const hoverEffectMobile = {
  scale: 1.05,
  backgroundColor: "rgba(229, 231, 235, 1)", // Tailwind gray-200 bg
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white relative shadow-sm">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-4 md:px-8 lg:px-32">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Nav with Framer Motion */}
        <motion.nav
          className="hidden md:flex gap-6 text-gray-700 font-medium"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/insights", label: "Insights" },
            { to: "/corporatesustainability", label: "Corporate Sustainability" },
            { to: "/career", label: "Career" },
          ].map(({ to, label }) => (
            <MotionLink
              key={to}
              to={to}
              variants={linkVariants}
              className="whitespace-nowrap"
              whileHover={hoverEffectDesktop}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </MotionLink>
          ))}
        </motion.nav>

        {/* Mobile Menu Icon */}
        <motion.div
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center px-4 gap-4 pb-6 text-gray-700 font-medium bg-white w-full absolute z-10 top-full left-0 shadow-md"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/insights", label: "Insights" },
              { to: "/corporatesustainability", label: "Corporate Sustainability" },
              { to: "/career", label: "Career" },
            ].map(({ to, label }) => (
              <MotionLink
                key={to}
                to={to}
                onClick={toggleMenu}
                variants={linkVariants}
                className="w-full text-center py-2 rounded"
                tabIndex={0}
                role="link"
                whileHover={hoverEffectMobile}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </MotionLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
