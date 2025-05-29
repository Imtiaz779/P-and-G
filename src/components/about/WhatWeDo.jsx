import React from "react";
import img from "../../assets/AboutPlaceholderimage .png";

const contentList = [
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto text-black flex flex-col gap-16 py-10 px-4">

        <h1 className="font-bold text-[32px]">What We Do</h1>

      {contentList.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } justify-between items-center max-w-[1296px] w-full mx-auto gap-8`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 px-4">
            <h1 className="font-outfit font-medium text-[20px] leading-[32px] tracking-normal">
              {item.title}
            </h1>
            <p className="font-zilla text-[12px] leading-[22px] tracking-[0.05em] mt-6 text-gray-700">
              {item.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 px-4">
            <img
              src={img}
              alt={item.title}
              className="w-full h-full rounded-[24px] object-cover shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
