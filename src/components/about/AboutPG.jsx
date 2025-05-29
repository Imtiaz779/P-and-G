import React from 'react';
import img from "../../assets/About image01.png";

const AboutPG = () => {
  return (
    <div className="bg-white text-black flex justify-center p-4">
      <div className="flex flex-col-reverse  md:flex-row justify-between items-center max-w-7xl w-full mt-10 gap-10">
        
        {/* Text Section */}
        <div className="w-full h-auto px-3" data-aos="zoom-in-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">About P & G</h1>
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full p-8" data-aos="zoom-out-right">
          <img
            src={img}
            alt="Hero"
            className="w-full h-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPG;
