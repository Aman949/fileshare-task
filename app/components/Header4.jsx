import React from 'react'
import Image from 'next/image'
const Header4 = () => {
  return (
    <div  className='bg-[#FFFFFF]'>
      <h1 className=' font-bold text-3xl p-10'>Application Development Stages</h1>
      <div className='grid sm:grid-cols-12 gap-2 sm:gap-4 sm:m-10'>
        <div className=' sm:col-span-4 '>
        <div className='grid sm:grid-cols-1 gap-4'>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4 gap-2'>
      <Image src='/planing.svg' height={40} width={40} alt='planning' />
      <p className='font-bold '>Analysis</p>
    </div>
    <p className='pl-4'>We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
  </div>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4  gap-2'>
    <Image src='/graphic-design.svg' height={40} width={40} alt='graphic'/> <p className=' font-bold '>Design</p>
    </div>
    <p className='pl-4'>We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
  </div>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4 gap-2'>
    <Image src='/coding-language.svg' height={40} width={40} alt='coding'/> <p className=' font-bold '>Development</p>
    </div>
    <p className='pl-4'>We create an extensible architecture, write clean and stable code. We integrate with customer technologies..</p>
  </div>
</div>

        </div>
        <div className=' col-span-4'>
      <Image src="/phn.png" height={400} width={400} alt='phone' className='ml-20'/>
         
        </div>
        <div className=' col-span-4 '>
        <div className='grid sm:grid-cols-1 gap-4'>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4  gap-2'>
      <Image src='/Security.svg' height={40} width={40} alt='planning' />
      <p className='font-bold'>Testing</p>
    </div>
    <p className='pl-4'>We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions</p>
  </div>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4 gap-2'>
      <Image src='/hosting 1.svg' height={40} width={40} alt='planning' />
      <p className='font-bold'>Launching</p>
    </div>
    <p className='pl-4'>We design the application page and publish it in the App Store and Google Play stores.
</p>
  </div>
  <div className='border border-white/80 shadow-xl rounded-lg p-4'>
    <div className='flex items-center p-4 gap-2'>
      <Image src='/application.svg' height={40} width={40} alt='planning' />
      <p className='font-bold'>Support</p>
    </div>
    <p className='pl-4'>We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Header4