import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const WhoWeServe = () => {
  return (
    <section className="flex justify-center items-center bg-[#F8F9FA] py-16 px-4 text-black">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        
        {/* Heading */}
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-left md:text-center text-[#25184F]" data-aos="fade">
            Who We Serve
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-2 sm:px-0">
          {[
            {
              id: 1,
              title: "We serve 1",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
            {
              id: 2,
              title: "We serve 2",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
            {
              id: 3,
              title: "We serve 3",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
            {
              id: 4,
              title: "We serve 4",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
            {
              id: 5,
              title: "We serve 5",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
            {
              id: 6,
              title: "We serve 6",
              description:
                "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
            },
          ].map((item) => (
            <motion.div
            variants={fadeIn("up", 0.2)}
                                      initial="hidden"
                                      whileInView="show"
                                      viewport={{ once: false, amount: 0.1 }}
              key={item.id}
              className="bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4" 
            >
              <h3 className="text-xl font-semibold text-[#25184F]">{item.title}</h3>
              <p className="text-sm text-left text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
