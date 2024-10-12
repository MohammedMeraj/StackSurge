
import Companysnippet from '@/app/_components/Companysnippet'
import Loggedheader from '@/app/_components/Loggedheader'
import React from 'react'


const Page = () => {
  return (
    <div className='w-full'>
      <Loggedheader/>
      <Companysnippet/>
    </div>
  )
}

export default Page