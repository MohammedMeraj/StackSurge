"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation } from 'convex/react'
import React, { useEffect, useState } from 'react'
import { api } from '../../../../convex/_generated/api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


type UserPermissionsResponse = {
  permissions: string[];
  orgCode: string | null;
};


const Page = () => {  
   

 const { getPermissions, isAuthenticated } = useKindeBrowserClient();
 
 const router = useRouter();
 useEffect(() => {
  const fetchPermissions = async () => {
    if (isAuthenticated) {
      const userPermissions: UserPermissionsResponse = await getPermissions(); // Fetch the permissions
      // Store the permissions in state

      // Check if 'user:investor' is in the permissions array
      if (userPermissions.permissions.includes('user:investor')) {
        if (router) {
          // Example: navigating to the dashboard
          router.push('/investor');
        }
      } else if(userPermissions.permissions.includes('user:company')){
        if (router) {
          // Example: navigating to the dashboard
          router.push('/company');
        }
      }

      
    }
  };

  fetchPermissions();
}, [isAuthenticated, getPermissions, router]);
 



  const convex = useConvex();
  const { user } = useKindeBrowserClient() as { user: { given_name: string; email: string; picture: string } | null };

  const createUser = useMutation(api.user.createUser);

  // Check if the user exists in the Convex database and create if not
  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        const result = await convex.query(api.user.getUser, { email: user.email });
        if (!result?.length) {
          await createUser({
            name: user.given_name,
            email: user.email,
            image: user.picture,
            
          });
          console.log("User created in Convex DB");
        }
      }
    };

    if (user) {
      checkUser();
    }
  }, [user, convex, createUser]);

  // Now we handle getting user details from Kinde
  const { getUser } = useKindeBrowserClient();
  const [userr, setUserr] = useState<{ name: string } | null>(null);
  const [userimage, setUserimage] = useState<{picture: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const thisUser = await getUser();
        console.log(thisUser);

        // Update state only if we have the user data
        if (thisUser?.given_name) {
          setUserr({ name: thisUser.given_name });
          setUserimage({picture: thisUser.picture || ""});
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    // Fetch the user details only once when the component mounts
    fetchUser();
  }, [getUser]); // Empty dependency array ensures this effect runs only once

  return (
    <div className=" flex flex-col w-full justify-center items-center h-screen">
     
      <div className="mb-5">Welcome {user?.given_name || userr?.name} </div> 
      
      {/* Display the user's image, use a fallback if picture is null */}
      <Image src={user?.picture || userimage?.picture || ""}  alt="User profile" width={90} height={90} className="mb-5" /> 
      
      

      <Button>
        <LogoutLink>
          LogOut
        </LogoutLink>
      </Button>
    </div>
  );
};

export default Page;