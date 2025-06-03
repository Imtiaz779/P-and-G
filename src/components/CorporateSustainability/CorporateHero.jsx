import React from 'react';
import img from "../../assets/image_Corporate1.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const CorporateHero = () => {
  return (
    <div className="bg-white text-black flex justify-center p-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl w-full mt-10 gap-10">
        
        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={{...fadeIn("right",0.2).hidden,opacity:1,scale:0.5}}
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col justify-between w-full md:w-1/2 h-auto px-3"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Corporate Sustainability
            </h1>
            <p className="mt-6 text-base lg:text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-1/2 px-3"
        >
          <img
            src={img}
            alt="Hero"
            className="w-full h-full rounded-[24px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CorporateHero;
