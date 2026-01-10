 import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16'>

        <div     data-aos="zoom-in"
                 data-aos-anchor-pacement="top-center"
                 data-aos-delay="0"
         className='lg:col-span-2 bg-gray-900 rounded-xl p-6'>
            {/* name */}
          <input type="text" placeholder='Name' className='border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white' />
          {/* Email */}
          <input type="email" placeholder='Email' className='border-2  border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white' />
          {/* Subject */}
          <input type="text" placeholder='Subject' className='border-2  border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white' />
          {/* Comments */}
          <textarea rows={5} placeholder='Comments' className='border-2 resize-none  border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white outline-none text-white' />
          {/* Button */}
          <button className='w-full px-6 py-3 bg-[#b69474] uppercase cursor-pointer rounded-full text-white hover:bg-[#7c5c31] transition-all duration-400'>Submit</button>
        </div>

        {/* Card */}
        <div data-aos="zoom-out"
                 data-aos-anchor-pacement="top-center"
                 data-aos-delay="100" className='lg:col-span-1'>
            {/* 1ft card */}
            <div className='p-6 bg-blue-800 flex items-center space-x-4'>
                <div className='w-15 h-15 rounded-full bg-[#d9ff36] flex items-center justify-center flex-col'>
                    <FaArrowRight className='text-blue-800'/>
                </div>
                <div>
                    <h1 className='text-white text-sm font-semibold'>Call Now</h1>
                    <h1 className='text-[20px] font-bold text-white'>+994 8686200</h1>
                </div>
            </div>
            {/* 2nd card */}
            <div className='p-6 bg-blue-800 mt-4 mb-4 flex items-center space-x-4'>
                <div className='w-15 h-15 rounded-full bg-[#d9ff36] flex items-center justify-center flex-col'>
                    <FaArrowRight className='text-blue-800'/>
                </div>
                <div>
                    <h1 className='text-white text-sm font-semibold'>Email Now</h1>
                    <h1 className='text-[20px] font-bold text-white'>maqatito963@gmail.com</h1>
                </div>
            </div>
            {/* 3rd card */}
            <div className='p-6 bg-blue-800 flex items-center space-x-4'>
                <div className='w-15 h-15 rounded-full bg-[#d9ff36] flex items-center justify-center flex-col'>
                    <FaArrowRight className='text-blue-800'/>
                </div>
                <div>
                    <h1 className='text-white text-sm font-semibold'>Address</h1>
                    <h1 className='text-[20px] font-bold text-white'>Tashkent, Uzbekistan</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
