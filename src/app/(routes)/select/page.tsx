import Footer from '@/app/_components/Footer'
import Loggedheader from '@/app/_components/Loggedheader'
import SelectRole from '@/app/_components/SelectRole'
import React from 'react'

const Page = () => {
  return (
   <div className='bg-white'>
    <Loggedheader />
    <SelectRole />
    <Footer />
    
    
    
   </div>
  )
}

export default Page