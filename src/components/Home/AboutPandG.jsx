import React from 'react';
import img from "../../assets/abouthero.png";

const AboutPandG = () => {
  return (
    <div className="bg-[#25184f] text-white flex justify-center px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-2" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap">
            About P & G
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md mt-8 w-fit hover:bg-gray-100 transition">
            Read more
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 px-2" data-aos="fade-left">
          <img
            src={img}
            alt="About P & G"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPandG;
