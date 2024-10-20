//page to add in place of form where the 
"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { api } from '../../../../convex/_generated/api';
import { useQuery } from 'convex/react';
import Cregister from '@/app/_components/Cregister'





const Page = () => {
  const { user } = useKindeBrowserClient();
  const mi = user?.email;
  const mt = "haowe"

  

  // Directly use useQuery here
  const emailExists = useQuery(api.company.CompanyEmail, mi ? { email: mi } : 'skip');

  const eliz = emailExists ? emailExists[0] : null;

  console.log(eliz?.companyname)
  
  
  // Return loading if the query is still being processed
  if (!emailExists) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {emailExists.length > 0 ? (
        <p>your company is already registered
          <div>as <span className='font-bold text-lg'>{eliz.companyname}</span> </div>
          
        </p>
      ) : (
        <>
        
        <Cregister/>
        </>
        

      )}
    </div>
  );
};

export default Page;
