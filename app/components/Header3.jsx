import Image from 'next/image'
import React from 'react'

import ProjectsNavigation from './ProjectsNavigation'

const Header3 = () => {
  return (
    <div className='bg-[#F2F4F7]'>
      <div className='pt-10 px-4 sm:px-20'>
        <p className='font-bold text-2xl sm:text-3xl'>
          Developed more than <span className='text-green-800'>100</span>
        </p>
        <p className='font-bold text-2xl sm:text-3xl'>
          projects in <span className='text-green-800'>15</span> industries
        </p>
        <div className='pt-10 pb-20'>
          <Image
            src="./Frame 2.png"
            width={1400}
            height={1400}
            alt='img'
            className='w-full h-auto'
          />
        </div>
        <div className=' m-10'>
          <h1 className=' font-bold text-4xl pb-4'>Projects we are proud of</h1>
          <p>Our software development company is truly proud of the wonderful clients we have </p>
          <p>worked with. We enjoy a long-term partnership</p>
        </div>
        <ProjectsNavigation/>
      </div>
    </div>
  )
}

export default Header3
