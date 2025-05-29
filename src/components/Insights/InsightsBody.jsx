import React from 'react';
import img from "../../assets/insight2.png";

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

const InsightsBody = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto text-black flex flex-col gap-16 py-10 px-4">
      <h1 className="font-bold text-3xl">Our Perspectives in Key Areas</h1>

      {contentList.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } justify-between items-center gap-8`} data-aos="zoom-in"
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="font-outfit font-medium text-2xl md:text-3xl">
              {item.title}
            </h2>
            <p className="font-zilla text-base md:text-xl mt-4 text-gray-700">
              {item.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto px-4">
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

export default InsightsBody;
