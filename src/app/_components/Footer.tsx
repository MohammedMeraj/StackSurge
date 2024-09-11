import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-white to-gray-100 '>
        <div className='bg-gradient-to-t from-gray-900 to-black rounded-tl-lg rounded-tr-lg p-10 flex gap-6 text-gray-200 text-sm sm:text-md sm:flex-row flex-col justify-between tracking-wider ' >
        <div className='px-8'>
            <div><Image src='/logoW.svg' alt='logo' width={200} height={200}/></div>
            <div className='mt-2'>Empowering Startups and Investors to create <br/>game changing success stories together</div>
        </div>
        <div className='px-8'>
            <div className='text-3xl font-bold italic font-sans'>Team</div>
            <div className='mt-2'>
                Mohammed Meraj <br/> Mohammad Anas <br/> Shaikh Salman <br/> Karan thakar
            </div>
        </div>
        <div className='px-8'>
            <div className='text-3xl font-bold italic font-sans'>Important Links</div>
            <div className='mt-2'>
                <a href="">Home</a> <br/> <a href="">About Us</a> <br/> <a href="">Contact Us</a> <br/> <a href="">Documentation</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
