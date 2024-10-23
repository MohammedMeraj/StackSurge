"use client"
import Iregister from '@/app/_components/Iregister'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../../../../../convex/_generated/api';
import Loader from '@/app/_components/Loader'
const Profile = () => {

  const {user} = useKindeBrowserClient();
  const userr = user?.email;

  const investorData = useQuery(api.investor.getCurrentInverstor, userr ? {email : userr} : "skip")
  const investorDetail = investorData ? investorData[0] : null;
  


  if(!investorData){
    return <div><Loader/></div>;
  }

  return (

    
    <div>

      {investorDetail ? <>Submitted : This page is currently under construction, Visite next time</> : <><Iregister/></>}

   
        
    </div>
  )
}

export default Profile