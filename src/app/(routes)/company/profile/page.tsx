import CuserProfile from '@/app/_components/CuserProfile'
import React from 'react'

const Page = () => {
  return (
    <div >
        <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Profile</div>

        <div className='p-7 max-w-6xl mx-auto'>
          <CuserProfile/>
      </div>
    </div>
  )
}

export default Page