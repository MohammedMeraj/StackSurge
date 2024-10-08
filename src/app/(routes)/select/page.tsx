import React from 'react'

const Page = () => {
  return (
    <div className='w-screen h-full flex flex-col justify-center text-center items-center mt-9 sm:text-xl text-lg  text-gray-800 px-10'>
        <div className='mb-16 w-full align-middle'>
        Excited to Have You! <br/>Are You an Investor or a Company?
        </div>
        <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-36 gap-20'> 
            <div className='sm:w-72 sm:h-72 w-36 h-36 p-3 border rounded-lg border-gray-200 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black'> 
                <img src="./company.png" alt="company" className='sm:w-48 w-20' />
                <div>Investor</div>
            </div>
            <div className='sm:w-72 sm:h-72 w-36 h-36 p-3 border rounded-lg border-gray-200 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black'>
                <img src="./investor.png" alt="investor" className='sm:w-48 w-20'/>
                <div>Company</div>
            </div>
        </div>
        
    </div>
  )
}

export default Page