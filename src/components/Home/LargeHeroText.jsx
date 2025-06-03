import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'; // adjust path if needed
import img from "../../assets/image.png";

const LargeHeroText = () => {
  return (
    <div className="bg-white text-black flex justify-center px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl w-full gap-10">

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 px-3"
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            A large hero text here
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <motion.button
            variants={fadeIn().hover}
            whileHover="hover"
            className="bg-[#25184F] text-white px-6 py-2 rounded-md mt-6 w-fit"
          >
            Read more
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full h-auto md:w-1/2 px-5"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={img}
            alt="Hero"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default LargeHeroText;
