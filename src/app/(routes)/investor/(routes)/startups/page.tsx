"use client"

import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../../../convex/_generated/api'
import Loader from '@/app/_components/Loader'
import Notfound from '@/app/_components/Notfound'
import StartupCard from '@/app/_components/StartupCard'



const Page = () => {

  const getCompany = useQuery(api.company.getBusinessTypeStartup) ;
  console.log(getCompany)
  return (
    <div>
      <div className='text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Explore Start Up&apos;s</div>
      { getCompany ? <StartupCard  getCompany={getCompany} />  :  <Loader/> }
      <div>
        {getCompany != null && getCompany.length <=0 && <><Notfound/></>}
      </div>
      
    </div>
  )
}

export default Page