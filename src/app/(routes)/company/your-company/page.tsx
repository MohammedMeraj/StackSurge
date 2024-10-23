import React from 'react'
import CProfile from '@/app/_components/CProfile'

const page = () => {
  return (
    <div >
      <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Your Company</div>
      <div className='p-7'>
      <CProfile/>
      </div>
      
    </div>
  )
}

export default page