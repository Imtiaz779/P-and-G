import React from "react";
import img1 from "../../assets/image_Corporate5.png";
import img2 from "../../assets/image_Corporate6.png";
import img3 from "../../assets/image_Corporate7.png";
import img4 from "../../assets/image_Corporate8.png";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

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
    img: img2,
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
    img: img3,
  },
  {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.",
    img: img4,
  },
];

const OurPlanetCorporate = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto text-black flex flex-col gap-8 py-8 px-4">
      <h1 className="font-bold text-3xl">Investing in Our Planet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
        {contentList.map((item, index) => (
          <div key={index} className="">
            {/* Image Section */}
            <motion.div 
             variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}
            className="w-full px-8">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-[24px] shadow-md " >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
             variants={fadeIn("right", 0.2)}
                      initial={{...fadeIn("right",0.2).hidden,opacity:1,scale:0.5}}
                      whileInView="show"
                      viewport={{ once: false, amount: 0.5 }}
            className="w-full p-4">
              <h2 className="font-outfit font-medium text-[20px] leading-[32px] tracking-normal">
                {item.title}
              </h2>
              <p className="font-zilla text-[14px] md:text-[16px] leading-[22px] tracking-[0.05em] mt-4 text-gray-700">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlanetCorporate;
