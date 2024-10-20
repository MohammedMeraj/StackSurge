"use client"

import React from 'react';

import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Button } from '@/components/ui/button';

interface Company {
    companyname: string;
    // other fields if needed
  }

const InvestorCard = () => {
 const {user} = useKindeBrowserClient();
 const picture = user?.picture || "";

 const data: Company[] | undefined = useQuery(api.company.getCompany);

 if (data && data.length > 0) {
   console.log(data[5].companyname); // Access the companyname from the first company
 } 

     

  return (
    <div className='w-fit max-w-7xl bg-white mt-7  h-fit p-5 rounded-md border text-gray-800 mx-auto  flex flex-row justify-center items-start'>
     <Avatar>
        <AvatarImage src={picture} />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
     <div className='flex text-base flex-col items-start justify-center ml-3 min-w-96 '>
         <div className='text-gray-900'>Ashneer Grover</div>
         <div className='text-gray-700 text-sm'>Scientist, Harvard university</div>
     </div>
     <Button className='ml-2'>View</Button>
     <ChevronDown className='p-2 ml-8 rounded-full overflow-hidden hover:bg-gray-50' size={40} color="#8f8f8f" strokeWidth={1.75} />
     
    </div>
  )
}

export default InvestorCard