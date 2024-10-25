"use client";
import CompanyCard from '@/app/_components/CompanyCard';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useQuery } from 'convex/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { api } from '../../../../convex/_generated/api';
import Loader from '@/app/_components/Loader';
 

const Page = () => {

  const { user } = useKindeBrowserClient();
  const email = user?.email;

  useEffect(() => {
    // Check if the login was successful and the toast hasn't been shown yet
    if (email && !sessionStorage.getItem('toastShown')) {
      toast("Logged in Successfully", {
        description: "You are now logged in as an Investor",
        action: {
          label: "Ok",
          onClick: () => console.log("Login in Success"),
        }});
      sessionStorage.setItem('toastShown', 'true'); // Mark the toast as shown
    }
  }, [email]); // Trigger when email is available


  const getCompany = useQuery(api.company.getCompany);

  return (
    <div className="w-full">
      {getCompany ? 
      <CompanyCard getCompany={getCompany}  /> : <div><Loader/></div>
}
    </div>
  );
};

export default Page;
