"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation } from 'convex/react'
import React, { useEffect } from 'react'
import { api } from '../../../../convex/_generated/api'

function Page() {
  const convex = useConvex();
  const { user } = useKindeBrowserClient() as { user: { given_name: string; email: string; picture: string } | null };

  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        const result = await convex.query(api.user.getUser, { email: user.email });
        if (!result?.length) {
          createUser({
            name: user.given_name,
            email: user.email,
            image: user.picture
          }).then(resp => {
            console.log(resp);
          });
        }
      }
    };

    if (user) {
      checkUser();
    }
  }, [user, convex, createUser]);

  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen">
      <div className="mb-5">Welcome to Dashboard!</div>
      <Button>
        <LogoutLink>
          LogOut
        </LogoutLink>
      </Button>
    </div>
  );
}

export default Page;
