import React from 'react';
import img from "../../assets/join.png";

const JoiningPG = () => {
  return (
    <div className="bg-[#25184f] text-white flex justify-center p-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl w-full mt-10 gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 h-auto px-3" data-aos="fade-right" >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
            Interested in Joining P & G
          </h1>
          <p className="mt-6 text-sm md:text-base text-ellipsis overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md mt-8 w-fit hover:bg-gray-100 transition">
            Find the opportunity
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <img
            src={img}
            alt="Join P&G"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default JoiningPG;
