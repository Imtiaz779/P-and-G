import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { fadeIn } from "../../variants"; // adjust path as needed

const KeyArea = () => {
  const perspectives = [
    {
      id: 1,
      title: "Perspective 1",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 2,
      title: "Perspective 2",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 3,
      title: "Perspective 3",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 4,
      title: "Perspective 4",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-white py-16 px-4 text-black">
      <div className="w-full max-w-7xl flex flex-col gap-10 overflow-hidden">

        {/* Heading */}
        <motion.div
          className="px-4"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Discover Our Perspective In Key Areas
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6 sm:flex sm:flex-col md:grid md:grid-cols-4 md:gap-6 px-2">
          {perspectives.map((perspective, index) => (
            <motion.div
              key={perspective.id}
              className="bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4"
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">{perspective.title}</h3>
              <p className="text-sm text-left text-gray-700">
                {perspective.description}
              </p>
              <button className="flex items-center text-[#4F46E5] font-medium hover:text-[#3730a3] transition">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.button
            whileHover="hover"
            variants={fadeIn().hover}
            className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-2 rounded-md transition"
          >
            See All
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyArea;
