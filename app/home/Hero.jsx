import React from 'react'

const Hero = () => {
  return (
    <div className='h-[65vh] w-full relative overflow-hidden bg-[url("/1.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className='relative space-y-4 text-center'>
        <h1 className='text-white text-3xl font-bold'>
          We Offer The <span className='text-green-500'> Best Organics</span>
        </h1>
        <div className='flex justify-center items-center'>
          <button className='bg-green-500 p-3 mt-5 text-xl rounded-xl text-white font-bold'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
