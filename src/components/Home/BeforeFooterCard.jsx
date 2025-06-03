import React from 'react';
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; // adjust path as needed

const BeforeFooterCard = () => {
  const perspectives = [
    {
      id: 1,
      title: "Corporate Sustainability 1",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 2,
      title: "Corporate Sustainability 2",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-white py-16 px-4 text-black">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 p-4">
        {perspectives.map((perspective, index) => (
          <motion.div
            key={perspective.id}
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="bg-white border border-gray-300 rounded-[16px] p-6 shadow-sm flex items-start gap-6 w-full"
          >
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-purple-600" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{perspective.title}</h3>
              <p className="text-sm text-left text-gray-700">{perspective.description}</p>
              <motion.button
                variants={fadeIn().hover}
                whileHover="hover"
                className="flex items-center text-black font-medium hover:underline transition"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeforeFooterCard;
