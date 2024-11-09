"use client"
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { AvatarFallback } from '@radix-ui/react-avatar';
import React from 'react'

const CuserProfile = () => {
    
  const {user} = useKindeBrowserClient();
  const name = user?.given_name;
  const email = user?.email;
  const picture = user?.picture ? user?.picture : "";
  console.log(picture)

  
  return (
    <div className='w-[100%]  border rounded-md flex flex-col items-center justify-center'>

        { picture ? <>
        
        <Avatar className='w-24 h-24 mx-auto mt-10 '>
        <AvatarImage src={picture} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Separator className='mt-10'/>
      
                <div className='w-[80%] mb-20'>
                <div className='w-full mt-4 flex items-start justify-center gap-2'>
                        <div>Public Name :</div>
                        <div >{name}</div>
                </div>
                
                
                <div  className='w-full mt-4 flex items-center justify-center gap-2'>
                        <div>Public Email :</div>
                        <div>{email}</div>
                </div>
                </div>
                </> : <>
                
                <Skeleton className='w-24 h-24 rounded-full mx-auto mt-10 ' />
                <Separator className='mt-10'/>
                <Skeleton className='w-[50%] h-4 mt-4' />
                <Skeleton className='w-[50%] h-4  mt-7 mb-20' />
                
                </> }
        
         
      
    </div>
  )
}

export default CuserProfile