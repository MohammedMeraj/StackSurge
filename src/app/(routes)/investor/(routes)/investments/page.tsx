import React from 'react'
import TrackList from '@/app/_components/TrackList'

const Page = () => {
  return (
    <div className='m-7'>
      
      <div className="text-2xl  self-start font-bold mb-1 mt-4 text-gray-900"> Investments </div>
      <div className='max-w-6xl mt-5 mx-auto border rounded-md p-4'>
        <p className='text-sm text-gray-800'>Showing All the data about Investments</p>
        <TrackList/>
      </div>
      
    </div>
  )
}

export default Page