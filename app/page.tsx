import React from 'react'
import Hero from './home/Hero';
import Featured from './home/featured';
import New from './home/New';
import More from './home/more';
import Details from './home/details';
import BioLabels from './home/BioLabels';

const page = () => {
  return (
    <div className='mt-24'>
      <Hero/>
      <Featured/>
      <New/>
      <More/>
      <Details/>
      <BioLabels/>
    </div>
  )
}

export default page
