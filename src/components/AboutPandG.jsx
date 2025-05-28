import React from 'react'
import img from "../assets/abouthero.png"
const AboutPandG = () => {
 
     return (
        <div className="bg-[#25184f] text-white flex justify-center p-4">
          <div className="flex  justify-between items-center max-w-[1296px] w-full mt-[40px]  gap-10">
            
            {/* Text Section */}
            <div className="flex flex-col justify-between w-full h-auto px-[10px]">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">A About P & G</h1>
                <p className=" mt-6 overflow-hidden text-ellipsis">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
              <button className="bg-white text-black  px-6 py-2 rounded-md mt-8 w-fit hover:bg-gray-100 transition">Read more</button>
            </div>
    
            {/* Image Section */}
            <div className="w-full ">
              <img
                src={img}
                alt="Hero"
                className="w-full h-auto rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      );
  
}

export default AboutPandG