import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-white border border-gray-200 rounded-xl flex flex-wrap items-center p-4 sm:m-10'>
      <div className='flex items-center gap-8 sm:gap-12 md:gap-16 flex-1'>
        <Image src='./logo-bg-2 1.png' width={150} height={150} alt='logo' />
        <div className='flex gap-6 md:gap-10 sm:mr-4'>
          <Link href='' className='hover:text-blue-500 transition duration-300'>Services</Link>
          <Link href='' className='hover:text-blue-500 transition duration-300'>Media</Link>
          <Link href='' className='hover:text-blue-500 transition duration-300'>Cases</Link>
          <Link href='' className='hover:text-blue-500 transition duration-300'>FAQ</Link>
          <Link href='' className='hover:text-blue-500 transition duration-300'>Contacts</Link>
        </div>
      </div>
      <div className='flex gap-4 md:gap-8'>
        <Image src='./top1.png' width={150} height={150} alt='top1' />
        <Image src='./top2.png' width={150} height={150} alt='top2' />
      </div>
    </nav>
  )
}

export default Nav
