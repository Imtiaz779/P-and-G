import React from 'react';
import { MapPin, ArrowRight } from "lucide-react";

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
    <section className="flex justify-center items-center bg-white py-16 px-8 text-black">
      <div className="w-full max-w-7xl flex flex-row gap-12">
        {perspectives.map((perspective) => (
          <div
            key={perspective.id}
            className="bg-white border border-gray-300 rounded-[16px] p-6 shadow-sm flex items-start gap-6 min-w-[300px] max-w-[100%] w-full"
          >
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{perspective.title}</h3>
              <p className="text-sm text-left text-gray-700">{perspective.description}</p>
              <button className="flex items-center text-black font-medium hover:underline transition">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeFooterCard;
