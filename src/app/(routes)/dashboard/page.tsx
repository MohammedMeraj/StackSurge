"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Page() {
  return (
    <div className='w-screen  flex flex-col justify-center items-center h-screen'>
        <div className='mb-5'>  Welcome to Dashboard !</div>
          <Button>
           <LogoutLink>
            LogOut
           </LogoutLink>
           </Button>
        
        
       
    </div>
  )
}

export default Page