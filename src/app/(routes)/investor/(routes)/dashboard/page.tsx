import React from 'react'
import InvestmentBarChart from '@/app/_components/InvestmentBarChart'
import LineChart from '@/app/_components/LineChart'
import TrackList from '@/app/_components/TrackList'
import { Factory, Wallet } from 'lucide-react'
const Dashboard = () => {
  return (
    <div className='mx-7  '>
      <div className="text-2xl  self-start font-bold mb-1 mt-4 text-gray-900">
        Dashboard
      </div>
      <div className=' mx-auto w-full max-w-6xl h-fit items-start justify-between gap-7 mt-3'>
          <div className=' mt-6 '>
            {/*
            <div className='text-lg  font-bold'>Overview</div>
          <div className='text-sm mb-7'>A refined summary of essential data insights</div>
            */}
          
            <div className='w-[100%] flex items-center justify-center gap-5'>
              <div className='w-[50%] border rounded-md p-4 h-28'> 
                <div className='flex items-start justify-between'>
                  <div className='text-sm'>Total Companies</div>
                  <div ><Factory size={20} color="#000000" strokeWidth={1.5} /></div>
                </div>
                <div className='p-4 text-3xl font-bold'> 52</div>
                
              </div>
              <div className='w-[50%] border rounded-md p-4 h-28'>
              <div className='flex items-start justify-between'>
                  <div className='text-sm'>Total Investments</div>
                  <div ><Wallet size={20} color="#000000" strokeWidth={1.5} /></div>
                </div>
                <div className='p-4 text-3xl font-bold'>$ 365246</div>
              </div>
            </div>
            <div className='mt-5 '>
            <InvestmentBarChart/>
            </div>
            
          </div>
          
          

            <div className='flex w-full h-fit items-start justify-between gap-7 mt-7 mb-7'>
          <div className='w-[40%]'> <LineChart/> </div>
          <div className=' border w-[60%] rounded-md p-4'> 
            <div className='text-lg  font-bold'>Recently Invested</div>
            <div className='text-sm mb-2'>Showing companies you recently Invested in.</div>
            <TrackList/> 
            </div>
           </div>
      </div>
      
      
      
    </div>
  )
}

export default Dashboard