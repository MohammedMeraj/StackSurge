import { Activity,TrendingUp, UserRound, Zap } from 'lucide-react'
import React from 'react'

const CompanyDashboard = () => {
  return (

    <div>
        <div className='w-full h-fit flex flex-row items-center justify-center gap-4 mt-4'>
            <div className=' border w-[25%] rounded-md p-4'>
                <div className='flex flex-row items-start justify-between'>
                    <div className='text-sm'>Total Funds</div>
                    <Activity size={20} />
                </div>
                <div className='px-4 pt-2 pb-2  text-2xl font-bold'>879</div>
            </div>
            <div className=' border w-[25%] rounded-md p-4'>
                <div className='flex flex-row items-start justify-between'>
                    <div className='text-sm'>Total Investors</div>
                    <UserRound size={20} />
                </div>
                <div className='px-4 pt-2 pb-2  text-2xl font-bold'>23</div>
            </div>
            <div className=' border w-[25%] rounded-md p-4'>
                <div className='flex flex-row items-start justify-between'>
                    <div className='text-sm'>Sales</div>
                    <Zap size={20} />
                </div>
                <div className='px-4 pt-2 pb-2  text-2xl font-bold'>462523</div>
            </div>
            <div className=' border w-[25%] rounded-md p-4'>
                <div className='flex flex-row items-start justify-between'>
                    <div className='text-sm'>Company Growth</div>
                    <TrendingUp size={20} />
                </div>
                <div className='px-4 pt-2 pb-2  text-2xl  font-bold'>352 %</div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDashboard