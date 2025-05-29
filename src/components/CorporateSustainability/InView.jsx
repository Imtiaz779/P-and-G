import React from "react";
import img from "../../assets/image_Corporate3.png";
import img1 from "../../assets/image_Corporate2.png";

const contentList = [
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
    img: img1,
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
    img: img,
  },
];

const InView = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto text-black flex flex-col gap-16 py-10 px-4">
      <h1 className="font-bold text-3xl">Our Corporate Sustainability in View</h1>

      {contentList.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } justify-between items-center w-full mx-auto gap-8`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4 flex flex-col">
            <h2 className="font-outfit font-medium text-2xl leading-[1.2] tracking-normal">
              {item.title}
            </h2>
            <p className="font-zilla text-xl md:text-2xl leading-[1.5] tracking-[0.05em] mt-4 text-gray-700">
              {item.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[24px] shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InView;
