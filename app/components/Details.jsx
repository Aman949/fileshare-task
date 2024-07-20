import React from 'react'

const Details = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg sm:m-8 shadow-xl max-w-[650px] sm:h-auto p-4'>
      <div className='mb-4'>
        <p className='font-semibold text-lg'>Leave your contacts and we will call you back</p>
        <p className='font-semibold text-lg'>within 30 minutes</p>
      </div>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col flex-1'>
          <label htmlFor="fullName" className='font-medium mb-1'>Full Name:</label>
          <input
            id="fullName"
            type="text"
            className='border border-gray-300 rounded-lg p-2 shadow-sm'
            placeholder='Enter your full name'
          />
          <label htmlFor="phoneNumber" className='font-medium mt-4 mb-1'>Phone Number:</label>
          <input
            id="phoneNumber"
            type="text"
            className='border border-gray-300 rounded-lg p-2 shadow-sm'
            placeholder='Enter your phone number'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor="businessName" className='font-medium mb-1'>Business Name:</label>
          <input
            id="businessName"
            type="text"
            className='border border-gray-300 rounded-lg p-2 shadow-sm'
            placeholder='Enter your business name'
          />
          <label htmlFor="businessEmail" className='font-medium mt-4 mb-1'>Business Email:</label>
          <input
            id="businessEmail"
            type="text"
            className='border border-gray-300 rounded-lg p-2 shadow-sm'
            placeholder='Enter your business email'
          />
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button className='bg-lime-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-lime-600 transition duration-300'>
          Get Consultation
        </button>
      </div>
    </div>
  )
}

export default Details
