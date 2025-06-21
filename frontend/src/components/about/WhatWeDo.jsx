import React from "react";
import img from "../../assets/AboutPlaceholderimage .png";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

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
      <h1 className="font-bold text-3xl" data-aos="fade">What We Do</h1>

      {contentList.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } justify-between items-center gap-8`} 
        >
          {/* Text Section */}
          <motion.div
           variants={fadeIn("right", 0.2)}
                                      initial="hidden"
                                      whileInView="show"
                                      viewport={{ once: false, amount: 0.1 }}
          className="w-full md:w-1/2 px-2">
            <h1 className="font-outfit font-medium text-2xl leading-3xl tracking-normal">
              {item.title}
            </h1>
            <p className="font-zilla text-xl leading-2xl tracking-[0.05em] mt-6 text-gray-700">
              {item.description}
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={fadeIn("right", 0.2)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.1 }}
          className="w-full md:w-1/2 px-2">
            <img
              src={img}
              alt={item.title}
              className="w-full h-full rounded-[24px] object-cover shadow-md"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
