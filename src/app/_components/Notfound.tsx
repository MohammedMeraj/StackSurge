import Image from 'next/image'
import React from 'react'
import notfound from '../../../public/notfound.jpg'

const Notfound = () => {
  return (
    <div className='w-full h-full flex flex-col text-base items-center justify-center '>
        <Image className='w-fit h-fit select-none' src={notfound} width={250} height={250} alt="Not Found"/>
        <div>Data is not Available</div>
    </div>
  )
}

export default Notfound