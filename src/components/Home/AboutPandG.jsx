import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import img from "../../assets/abouthero.png";

const AboutPandG = () => {
  return (
    <div className="bg-[#25184f] text-white flex justify-center px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        
        {/* Text Section with motion */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="w-full md:w-1/2 px-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap">
            About P & G
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <motion.button
            variants={fadeIn().hover}
            whileHover="hover"
            className="bg-white text-black px-6 py-2 rounded-md mt-8 w-fit hover:bg-gray-100 transition"
          >
            Read more
          </motion.button>
        </motion.div>

        {/* Image Section with motion */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-1/2 px-2"
        >
          <img
            src={img}
            alt="About P & G"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPandG;
