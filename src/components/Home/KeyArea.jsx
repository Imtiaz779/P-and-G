import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

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
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Discover Our Perspective In Key Areas
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-4 px-2 sm:px-0">
          {perspectives.map((perspective) => (
            <div
              key={perspective.id}
              className="min-w-[280px] sm:min-w-[300px] sm:flex-1 bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4"
            >
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>

              <h3 className="text-xl font-semibold">{perspective.title}</h3>
              <p className="text-sm text-left text-gray-700">{perspective.description}</p>

              <button className="flex items-center text-[#4F46E5] font-medium hover:text-[#3730a3] transition">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-2 rounded-md transition">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyArea;
