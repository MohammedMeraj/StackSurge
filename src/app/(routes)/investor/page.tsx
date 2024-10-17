"use client"
import Companysnippet from '@/app/_components/Companysnippet'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React, { useEffect } from 'react'
import { toast } from 'sonner'


const Page = () => {


    const { user } = useKindeBrowserClient();
    const email = user?.email;
  
    useEffect(() => {
      // Check if the login was successful and the toast hasn't been shown yet
      if (email && !sessionStorage.getItem('toastShown')) {
        toast('Logged in successfully');
        sessionStorage.setItem('toastShown', 'true'); // Mark the toast as shown
      }
    }, [email]); // Trigger when email is available

  return (
    <div className='w-full'>
      
      <Companysnippet/>
    </div>
  )
}

export default Page