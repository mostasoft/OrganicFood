import React from 'react'

const More = () => {
  return (
    <div className='bg-green-400 flex h-[200px] items-center justify-center py-8 px-4'>
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center'>
        <h1 className='text-2xl md:text-3xl font-bold text-white'>
          Want More Some Of This Amazing Organic Food
        </h1>
        <button className='text-xl font-bold rounded-sm p-3 border-white border-2'>
          Yes, Please!
        </button>
      </div>
    </div>
  )
}

export default More
