"use client"
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'

import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex  justify-center min-w-screen bg-gradient-to-r from-white to-gray-100'>
    <div className='flex flex-col items-center  '>
        <div className='rounded-full border border-gray-800 text-xs sm:text-lg  py-1 sm:py-2 px-4 m-10 text-center text-gray-800 b sm:mt-[5vw] sm:mb-[4.5vw] mt-8'>Investor - StartUp Association Platform</div>
        <div className='sm:text-7xl text-4xl px-10 sm:leading-snug text-center text-gray-800 w-10/12 break-words '>Transform Dreams into Global Ventures with StackSurge</div>
        <div className='sm:text-xl sm:mt-[4vw] sm:mb-[5vw] mt-8 mb-8 text-lg text-center px-5 sm:px-10'>Where Big Ideas Meet Big Investor</div>
        <div className='flex flex-row sm:gap-32 gap-8 mb-36 px-10 sm:text-lg text-sm '>
            <RegisterLink><div className='bg-gray-900 rounded-md text-white p-2 px-6 '>Join Now</div></RegisterLink>
            <div className='rounded-md  border border-gray-800 p-2 px-6'>About Us</div>
        </div>
    </div>
    </div>
  )
}
