import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header2 = () => {
  return (
    <div className='bg-[#FFFFFF] sm:max-h-[900px]'>
      <div>
        <div className='border-b border-gray-600 m-10'></div>
        <div className='sm:m-10 flex flex-wrap justify-evenly gap-4'>
          {[...Array(6)].map((_, index) => (
            <Image key={index} src='/planet.png' height={200} width={200} alt='img' />
          ))}
        </div>
        <div className='border-b border-gray-600 m-10'></div>
      </div>
      <div className='flex flex-col sm:flex-row justify-evenly pb-40'>
        <div className='sm:max-w-md'>
          <h1 className='font-bold text-3xl'>Full development cycle</h1>
          <p className='font-semibold mt-4'>We use proven technologies</p>
          <div className='mt-6'>
            <h1 className='font-bold text-xl mb-2'>Web</h1>
            <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/</p>
            <p>Next / MySQL / Laravel / GO lang / django / Python</p>
          </div>
          <div className='mt-6'>
            <h1 className='font-bold text-xl mb-2'>Mobile</h1>
            <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /</p>
            <p>Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 font-semibold'>
          {['iOS development', 'Android development', 'Web development', 'UI/UX Design', 'Testing', 'Launch', 'IT consulting'].map((text, index) => (
            <Link key={index} href="#">{text}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header2
