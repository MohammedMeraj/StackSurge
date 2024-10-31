import CompanyDashboard from '@/app/_components/CompanyDashboard'
import React from 'react'
import LinearLineChart from '@/app/_components/LinearLineChart'
import LineChartInvForLastWeek from '@/app/_components/LineChartInvForLastWeek'

const Dashboard = () => {
  return (
    <div className='m-7'>
        <div className="text-2xl  self-start font-bold mb-1 mt-4 text-gray-900"> Dashboard </div>
        <div className='max-w-6xl mx-auto'>
        
        <CompanyDashboard/>
        <div className='mt-4 flex items-center justify-center gap-4 w-full'>
            <div className='w-[50%]'><LinearLineChart/></div>
            <div className='w-[50%]'><LineChartInvForLastWeek/></div>
            
            
        </div>
        </div>
    </div>
  )
}

export default Dashboard