import React from 'react'
import img from "../../assets/Frame.png"

const Career = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FFFFFF] text-black px-4">
      <div className='flex flex-col justify-center items-center gap-6 max-w-2xl text-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-4xl font-bold'>Sorry!</h1>
          <p className='text-xl font-semibold'>There are no job opportunities available</p>
        </div>
        
        <img src={img} alt="No jobs" className="w-full max-w-sm" />
        
        <button className='bg-[#25184F] text-white px-6 py-2 rounded-md mt-8'>
          Go Home
        </button>
      </div>
    </div>
  )
}

export default Career
