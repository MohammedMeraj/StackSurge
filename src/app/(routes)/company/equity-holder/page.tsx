import React from 'react'
import ShareHolders from '@/app/_components/ShareHolders'

const ShareHolder = () => {
  return (
    <div className='mx-7'>
      <div className='text-xl self-start font-bold mb-3 mt-4 w-fit text-gray-900'>Equity Holders</div>
      
        <ShareHolders/>
      
    </div>
  )
}

export default ShareHolder