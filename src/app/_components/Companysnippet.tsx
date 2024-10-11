"use client"
import Image from 'next/image'
import React from 'react'
import zomato from '../../../public/zomato.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Companysnippet = () => {
    
    
  return (
    <div className='p-7 flex flex-col justify-center items-center'>
        <div className='text-xl self-start font-bold mb-8 text-gray-900'>Explore Start Up&apos;s</div>
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
         <div className='flex flex-col items-center justify-center w-full mt-4 mb-4'>
            <div className='flex flex-row items-center justify-between w-full mb-[2%]'>
              <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
                <h1 className='text-base font-bold text-gray-800'>Revenue Growth</h1>
                  <p className='flex flex-col items-center justify-center'>
                    <p>Current revenue : $25 million</p>
                    <p>Revenue up by 10%</p>
                  </p>
              </div>
              <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'  >
                <h1 className='text-base font-bold text-gray-800'>Profit Margin</h1>
                    <p className='flex flex-col items-center justify-center'>
                        <p>Gross margin : $25 million</p>
                        <p>Operating margin : $87 million</p>
                        <p>Net profit margin : $87 million</p>
                      </p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
                <h1 className='text-base font-bold text-gray-800'>Cash Flow</h1>
                    <p className='flex flex-col items-center justify-center'>
                        <p>Free cash flow : -$0.3 million</p>
                        <p>Burn rate : $1.2 million/month </p>
                      </p>
              </div>
              <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
                <h1 className='text-base font-bold text-gray-800'>Valuation</h1>
                      <p className='flex flex-col items-center justify-center'>
                          <p>Latest valuation : $25 million</p>
                          <p>Operating margin : $34 million </p>
                          <p>Projected Valuation : 22$ million</p>
                        </p>
              </div>
            </div>
         </div>
         <div className='flex flex-row items-center justify-between rounded-md overflow-hidden'> 
            <div className='text-base font-bold text-gray-700'>
              Total Valuation : $3429935
            </div>
            <div className='flex flex-row items-center justify-center gap-6'>
              <div className='h-11 flex items-center justify-center border border-gray-300 rounded-md text-sm p-5 cursor-pointer hover:bg-gray-100'>Contact Company</div>
              <Button>
                Invest
              </Button>

            </div>
         </div>
        </div>
    </div>
  )
}

export default Companysnippet