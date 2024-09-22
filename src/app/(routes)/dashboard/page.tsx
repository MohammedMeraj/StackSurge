"use client"
import { Button } from '@/components/ui/button';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React, { useEffect } from 'react'

function Page() {

  const {user} = useKindeBrowserClient();

  useEffect(()=>{console.log("--",user)},[user])
  return (
    <div>
<div>The Dashboard page</div>
   <Button>
   <LogoutLink>LogOut</LogoutLink>
   </Button>

    </div>
    

  )
}

export default Page