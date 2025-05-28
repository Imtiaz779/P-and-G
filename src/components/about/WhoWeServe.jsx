import React from 'react'

const WhoWeServe = () => {
  return (
   <section className="flex justify-center items-center bg-[#F8F9FA] py-16 px-4 text-black">
  <div className="w-full max-w-[1296px] flex flex-col gap-10">
    
    {/* Heading */}
    <div className="px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#25184F]">
        Who We Serve
      </h2>
    </div>

    {/* Grid Cards */}
    <div className="grid grid-cols-3 gap-6 px-2 sm:px-0">
      {[
        {
          id: 1,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          id: 2,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          id: 3,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          id: 4,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          id: 5,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          id: 6,
          title: "We’ serve  1",
          description: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ].map((item) => (
        <div
          key={item.id}
          className="bg-[#EEE9FF] rounded-[16px] p-6 shadow-md flex flex-col items-start gap-4"
        >
        
          <h3 className="text-xl font-semibold text-[#25184F]">{item.title}</h3>
          <p className="text-sm text-left text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default WhoWeServe