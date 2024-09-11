import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-white to-gray-100'>
        <div className='rounded-full border border-gray-800 text-xs sm:text-lg  py-1 sm:py-2 px-4 m-10 text-center text-gray-800 b mt-8 mb-7 '>Investor - StartUp Association Platform</div>
        <div className='sm:text-6xl text-3xl px-10 sm:leading-snug text-center text-gray-800 w-10/12 break-words '>Transform Dreams into Global Ventures with StackSurge</div>
        <div className='sm:text-xl mt-8 mb-11 text-lg text-center px-10'>Where Big Ideas Meet Big Investor</div>
        <div className='flex flex-row sm:gap-32 gap-8 mb-36 px-10 sm:text-lg text-sm '>
            <a href=""><div className='bg-gray-900 rounded-md text-white p-2 px-6 '>Join Now</div></a>
            <a href=""><div className='rounded-md  border border-gray-800 p-2 px-6'>About Us</div></a>
        </div>
    </div>
  )
}
