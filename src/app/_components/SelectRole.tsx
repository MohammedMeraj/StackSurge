import React from 'react'
import company from '../../../public/company.png';
import investor from '../../../public/investor.png';
import Image from 'next/image';
import Link from 'next/link'




const SelectRole = () => {

    
    

  return (
     <div className='w-full min-h-[90vh] flex flex-col justify-center text-center items-center mt-9 sm:text-xl text-lg  text-gray-800 px-10'>
        <div className='mb-16 w-full align-middle'>
        Excited to Have You! <br/>Are You an Investor or a Company?
        </div>
        <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-36 gap-20'> 
            <Link href={'/investor'}  className='sm:w-72 sm:h-72 w-36 h-36 p-3 opacity-75 hover:opacity-100 border-2 rounded-lg border-gray-400 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black'> 
                
                <Image src={investor} alt="company"  className='sm:w-48 w-20 ' />
                <div>Investor</div>
            </Link>
            <Link href={'/company'} className='sm:w-72 sm:h-72 w-36 h-36 opacity-75 hover:opacity-100 p-3 border-2 rounded-lg border-gray-400 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black'>
            <Image src={company} alt="company"  className='sm:w-48 w-20 ' />
                <div>Company</div>
            </Link>
        </div>
        <div className='h-36'>

        </div>
        
    </div>
  )
}

export default SelectRole