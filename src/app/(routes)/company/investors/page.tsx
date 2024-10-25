"use client"
import InvestorCard from '@/app/_components/InvestorCard'
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../../convex/_generated/api'
import Loader from "@/app/_components/Loader"




const Page = () => {
  const inv = useQuery(api.investor.getAllInvestor);


  if(!inv){
    return <><Loader/></>
  }


  
  return (

<>
<div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Find Investors</div>
{ inv?.map((inv)=>(
  <div>
  
  <InvestorCard investorName={inv?.investorName} currentRole={inv?.currentRole} investmentSector={inv?.investmentSector} picture={"pictureLink"} geographicalFocus={inv?.geographicalFocus}/>
</div>
))
  
}
    

    </>
  )
}

export default Page



