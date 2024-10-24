"use client";
import Iregister from "@/app/_components/Iregister";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../../convex/_generated/api";
import Loader from "@/app/_components/Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck } from "lucide-react";
const Profile = () => {
  const { user } = useKindeBrowserClient();
  const userr = user?.email;
  const picture = user?.picture || "";
  const name = user?.given_name;

  const investorData = useQuery(
    api.investor.getCurrentInverstor,
    userr ? { email: userr } : "skip"
  );
  const investorDetail = investorData ? investorData[0] : null;
  const verifyCheck = investorDetail?.investorVerified;

  if (!investorData && !verifyCheck) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  
  
  return (
    <div>
      <div className="text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900">
        Profile
      </div>
      <div className="m-7">
        <div className="max-w-6xl mx-auto my-7 ">
          {investorDetail ? (
            <>
              <div className="w-[100%]   border rounded-md flex flex-col items-center justify-center">
                <Avatar className="w-24 h-24 mx-auto mt-10 ">
                  <AvatarImage src={picture} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {verifyCheck == "true" && (
                  <>
                    <div className="flex items-center justify-center gap-1 mt-4 px-3 py-1 border border-blue-600 rounded-full">
                      <BadgeCheck
                        size={20}
                        color="#004cff"
                        strokeWidth={1.5}
                        absoluteStrokeWidth
                      />
                      <div className="text-xs text-blue-600">
                        Verified Investor
                      </div>
                    </div>
                  </>
                )}

                <Separator className="mt-6" />

                <div className="w-[80%] mb-20">
                  <div className="w-full mt-4 flex items-start justify-center gap-2">
                    <div>Your Name :</div>
                    <div>{name}</div>
                  </div>

                  <div className="w-full mt-4 flex items-center justify-center gap-2">
                    <div>Your Email :</div>
                    <div>{userr}</div>
                  </div>
                  {verifyCheck == "false" && (
                    <div className="w-full mt-4 flex items-center justify-between gap-4 bg-gray-800 rounded-md px-8 py-2">
                      <div className="text-white text-sm max-w-[70%]">
                        Your profile is curruntly not verified. Verify to Invest
                        in Companies / Start up&apos;s
                      </div>
                      <div className="py-1 px-2 text-gray-800 bg-white text-sm rounded-full cursor-pointer">
                        Verify
                      </div>
                    </div>
                  )}

                  <Separator className="mt-5" />

                  <div className="text-lg mt-10 mb-6 font-semibold">
                    Your Public Profile
                  </div>

                  <div className="w-full h-fit p-2 rounded-md flex flex-col items-center justify-center">
                    <table className="w-full max-w-4xl table-auto border-collapse">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Public Name
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.investorName}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Country
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.country}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Role/Position
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.currentRole}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Industry Expertise
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.industryExpertise}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Geographical Focus
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.geographicalFocus}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Investment Sector
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.investmentSector}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Professional Email
                          </td>
                          <td className="py-2 px-4">
                            {investorDetail?.proEmail}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </div>
              </div>
              

            </>
          ) : (
            <>
              <Iregister />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
