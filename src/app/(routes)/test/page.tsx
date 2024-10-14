"use client"

import { api } from '../../../../convex/_generated/api'
import { useQuery } from 'convex/react'

const Page = () => {


        const getAll = useQuery(api.user.getAlluser);
  
    

  return (
    <div>
      {getAll?.map((user)=>{
        return <div key={user.email} className='w-screen mb-1 flex flex-row items-center justify-between p-5 text-xs'>
         
        {/*} <div className='w-[24vw] ml-3 '>{user?._id}</div> 
         <div className='w-[24vw] ml-3'>{user?.email}</div> 
         <div className='w-[24vw] ml-3 overflow-x-scroll'>{user?.image}</div> */}
         <div className='  ml-3'>{user?.name}</div> 
         
        </div>
      })}
    </div>
  )
}

export default Page