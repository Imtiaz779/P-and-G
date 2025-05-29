import React from 'react';
import img from "../../assets/image_Corporate1.png";

const CorporateHero = () => {
  return (
    <div className="bg-white text-black flex justify-center p-4">
      <div className="flex  justify-between items-center max-w-7xl  w-full mt-[40px]  gap-10">
        
        {/* Text Section */}
        <div className="flex flex-col justify-between w-full h-auto px-[10px]">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Corporate Sustainability</h1>
            <p className=" mt-6 overflow-hidden text-ellipsis">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            </p>
          </div>
         
        </div>

        {/* Image Section */}
        <div className="w-full ">
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

export default CorporateHero;
