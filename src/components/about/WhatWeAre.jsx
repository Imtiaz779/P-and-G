import React from 'react'
import { MapPin, ArrowRight } from "lucide-react";

const WhatWeAre = () => {
  const perspectives = [
    {
      id: 1,
      title: "We’re 1",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 2,
      title: "We’re 2",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 3,
      title: "We’re 3",
      description:
        "Donec sit lorem, consectetur a ipsum risus, pellentesque porttitor lorem. Morbi lorem magna.",
    },
    {
      id: 4,
      title: "We’re 4",
      description:
        "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#25184F] py-16 px-4 text-black">
      <div className="w-full max-w-[1296px] flex flex-col gap-10 overflow-hidden">
        
        {/* Heading */}
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
           What We Are
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-4 px-2 sm:px-0">
          {perspectives.map((perspective) => (
            <div
              key={perspective.id}
              className="min-w-[280px] sm:min-w-[300px] sm:flex-1 bg-white rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4"
            >
              <div className="w-8 h-8 bg-purple-200 rounded-[10px] flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>

              <h3 className="text-xl font-semibold">{perspective.title}</h3>
              <p className="text-sm text-left text-gray-700">{perspective.description}</p>

             
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default WhatWeAre