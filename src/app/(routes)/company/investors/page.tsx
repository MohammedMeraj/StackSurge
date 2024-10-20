import InvestorCard from '@/app/_components/InvestorCard'
import React from 'react'

const Page = () => {
  return (
    <div>
        <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Find Investors</div>
        <InvestorCard/>
        <InvestorCard/>
        <InvestorCard/>
        <InvestorCard/>
        <InvestorCard/>
    </div>
  )
}

export default Page