import React from 'react';
import img from "../../assets/Frame.png";

const Career = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="flex flex-col justify-center items-center gap-6 max-w-2xl text-center">
        <div className="flex flex-col justify-center items-center gap-2 px-2">
          <h1 className="text-4xl sm:text-5xl font-bold">Sorry!</h1>
          <p className="text-lg sm:text-xl font-semibold">
            There are no job opportunities available
          </p>
        </div>

        <img
          src={img}
          alt="No jobs"
          className="w-full max-w-xs sm:max-w-sm object-contain"
        />

        <button className="bg-[#25184F] text-white px-6 py-2 rounded-md mt-8 hover:bg-[#3c2b85] transition-colors duration-300">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Career;
