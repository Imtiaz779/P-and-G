import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'; // Adjust this path if needed
import img1 from "../../assets/card01.png";
import img2 from "../../assets/card02.png";
import img3 from "../../assets/card03.png";

const OurPlanetCard = () => {
  const cards = [
    {
      img: img1,
      title: "Invest 1",
      text: "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.",
    },
    {
      img: img2,
      title: "Invest 2",
      text: "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.",
    },
    {
      img: img3,
      title: "Invest 3",
      text: "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-white py-16 px-4 text-black">
      <div className="w-full max-w-7xl flex flex-col gap-10 overflow-hidden">
        
        {/* Header */}
        <motion.div
          className="px-2 md:px-4 text-left md:text-center"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Investing In Our Planet</h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center sm:items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[320px] bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col justify-between"
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={card.img}
                alt={`Illustration for ${card.title}`}
                className="w-full h-[180px] object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
              <p className="text-sm text-gray-700 mt-2 flex-1">{card.text}</p>
              <button className="bg-white text-[#4F46E5] font-medium px-6 py-2 rounded-md hover:bg-[#f2f2f2] transition mt-4">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlanetCard;
