"use client"
import Image from 'next/image'
import React from 'react'
import zomato from '../../../public/zomato.png'
import Link from 'next/link'
const Companysnippet = () => {
    const alertBox = ()=>{
        alert('StackSurge is currently in development mode, Continue...');
    }
    alertBox();
    
  return (
    <div className='p-7 flex flex-col justify-center items-center'>
        <div className='text-xl self-start font-bold mb-8 text-gray-900'>Explore Start Up's</div>
        <div className='w-full h-fit py-6 px-8  border border-gray-300 rounded-md'>
         <div className='flex flex-row m-w-[60vw] items-center justify-between'> 
            <div className='flex flex-row gap-3 items-center justify-center'>
                <Image width={45} height={45} src={zomato || ""} alt='company-logo' className='rounded-md overflow-hidden border border-gray-300'/>
                <div className='text-3xl font-bold text-gray-800 italic'>Zomato</div>
            </div>
            <div className='flex flex-row items-center justify-center gap-8'>
                <Link href={"/"} className='text-gray-800 hover:text-gray-500'>Visit Website </Link>
                <Link href={"/"} className='text-gray-800 hover:text-gray-500'>About Company </Link>
                
            </div>
         </div>
         <div>snips</div>
         <div>invest</div>
        </div>
    </div>
  )
}

export default Companysnippet