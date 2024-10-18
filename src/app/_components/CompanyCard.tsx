"use client"
import Image from 'next/image'
import React from 'react'
import zomato from '../../../public/zomato.png'
import { Button } from '@/components/ui/button'
const CompanyCard = (props:any) => {
     const values = props.getCompany;

    
  return (
    
    <div>
<div className='text-xl   px-8 self-start font-bold mb-3 mt-4 text-gray-900'>Explore Start Up&apos;s</div>
        {values?.map((value:any)=>{
return <div key={value?.email} className='p-7 flex flex-col justify-center items-center'>

<div className='w-full h-fit py-6 px-8  border border-gray-300 rounded-md'>
 <div className='flex flex-row m-w-[60vw] items-center justify-between'> 
    <div className='flex flex-row gap-3 items-center justify-center'>
        <Image width={45} height={45} src={zomato || ""} alt='company-logo' className='rounded-md overflow-hidden border border-gray-300'/>
        <div className='text-3xl font-bold text-gray-800 italic'>{value?.companyname}</div>
    </div>
    <div className='flex flex-row items-center justify-center gap-8'>
        <a href={value?.website} target='_blank' className='text-gray-800 hover:text-gray-500'>Visit Website </a>
        <a href={''} className='text-gray-800  hover:text-gray-500'>About Company </a>
        
    </div>
 </div>
 <div className='flex flex-col items-center justify-center w-full mt-4 mb-4'>
    <div className='flex flex-row items-center justify-between w-full mb-[2%]'>
      <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
        <h1 className='text-base font-bold text-gray-800'>Revenue Growth</h1>
          <p className='flex flex-col items-center justify-center'>
            <p>Current revenue : $ {value?.currentRevenue} </p>
            <p>Revenue up by {value?.revenueIncreased} %</p>
          </p>
      </div>
      <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'  >
        <h1 className='text-base font-bold text-gray-800'>Profit Margin</h1>
            <p className='flex flex-col items-center justify-center'>
                <p>Gross margin : $ {value?.grossMargin} </p>
                <p>Operating margin : $ {value?.operatingMargin}</p>
                <p>Net profit margin : $ {value?.netProfitMargin}</p>
              </p>
      </div>
    </div>
    <div className='flex flex-row items-center justify-between w-full'>
      <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
        <h1 className='text-base font-bold text-gray-800'>Cash Flow</h1>
            <p className='flex flex-col items-center justify-center'>
                <p>Free cash flow : -$ {value?.freeCashFlow} million</p>
                <p>Burn rate : $ {value?.burnRate} million/month </p>
              </p>
      </div>
      <div className='flex flex-col items-center justify-center w-[49%] p-3 bg-gray-100 rounded-md h-36 gap-4'>
        <h1 className='text-base font-bold text-gray-800'>Valuation</h1>
              <p className='flex flex-col items-center justify-center'>
                  <p>Latest valuation : $ {value?.latestValuation} </p>
                  <p>EBITDA : $ {value?.ebitda}  </p>
                  <p>Projected Valuation : $ {value?.projectedValuation} </p>
                </p>
      </div>
    </div>
 </div>
 <div className='flex flex-row items-center justify-between rounded-md overflow-hidden'> 
    <div className='text-base font-bold text-gray-700'>
      Total Valuation : $ {value?.latestValuation}
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
        })
   

        }

    </div>
  )
}

export default CompanyCard