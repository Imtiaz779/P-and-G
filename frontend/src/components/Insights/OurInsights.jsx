import React from 'react';
import img from "../../assets/insightshero.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const OurInsights = () => {
  return (
    <div className="bg-white text-black flex justify-center p-4">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center max-w-7xl w-full mt-10 gap-10">
        
        {/* Image Section */}
        <motion.div 
         variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
        className="w-full  md:w-1/2 px-4" >
          <img
            src={img}
            alt="Our Insights"
            className="w-full h-full rounded-[24px] object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
         variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
        className="w-full md:w-1/2 px-3" >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Insights</h1>
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default OurInsights;
