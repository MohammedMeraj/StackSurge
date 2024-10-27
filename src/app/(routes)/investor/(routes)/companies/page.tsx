"use client"
import CompanyCard from '@/app/_components/CompanyCard'
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../../../convex/_generated/api'
import Loader from '@/app/_components/Loader'
import Notfound from '@/app/_components/Notfound'



const Page = () => {

  const getCompany = useQuery(api.company.getBusinessTypeCompany) ;
  console.log(getCompany)
  return (
    <div>
      <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Explore Companies</div>
      { getCompany ? <CompanyCard  getCompany={getCompany} />  :  <Loader/> }
      <div>
        {getCompany != null && getCompany.length <=0 && <><Notfound/></>}
      </div>
      
    </div>
  )
}

export default Page