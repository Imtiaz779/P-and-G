import React from 'react';
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
      <div className="w-full max-w-7xl flex flex-col gap-10">
        
        {/* Header */}
        <div className="px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Investing In Our Planet</h2>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-2 px-2 sm:px-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] sm:flex-1 bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4"
            >
              <img
                src={card.img}
                alt={`Illustration for ${card.title}`}
                className="w-full max-h-[180px] object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-left text-gray-700">{card.text}</p>
              <button className="bg-white text-[#4F46E5] font-medium px-6 py-2 rounded-md hover:bg-[#f2f2f2] transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlanetCard;
