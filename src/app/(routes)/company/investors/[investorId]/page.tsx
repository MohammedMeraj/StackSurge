"use client"
import React from 'react'
import InvestorDetails from '@/app/_components/InvestorDetails'
import { useQuery } from 'convex/react'
import { api } from '../../../../../../convex/_generated/api'
import { Skeleton } from '@/components/ui/skeleton'
const InvestorId = ({params} : {params : {investorId : string}}) => {

   const getCurrInvestor = useQuery(api.investor.getCurInvestorById , { id: params.investorId})
   const data = getCurrInvestor ? getCurrInvestor[0] : null;

   if(!data){
    return <div>

<Skeleton className='w-28 h-8 rounded-md mt-5 ml-7'/>
<div className='w-[90%] max-w-6xl h-fit flex mx-7 mt-10 border rounded-md '> 
                <div className='w-[30%] h-fit p-10 '>
                    <Skeleton className='w-28 h-28 rounded-full overflow-hidden'/>
                </div>
                <div className='w-[70%] p-5 h-fit '>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                     <Skeleton className='w-[90%] h-4 rounded-md mt-2 mb-4 p-3'/>
                </div>

           </div>

    </div>
    
    
    
   }
 
  return (
    <>
    
    <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Profile</div>
    <InvestorDetails fieldName={data?.investorName} fieldCountry={data?.country} fieldEmail={data?.proEmail} fieldImage={data?.invetorImage} fieldGeography={data?.geographicalFocus}
      fieldIndustry={data?.industryExpertise} fieldRole={data?.currentRole} fieldSector={data?.investmentSector} fieldVerifyCheck={data?.investorVerified} 
    />
    </>
    
  )
}

export default InvestorId