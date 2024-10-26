//page to add in place of form where the
"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "convex/react";
import Cregister from "@/app/_components/Cregister";
import Loader from "@/app/_components/Loader"
import { Separator } from "@/components/ui/separator";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";


const Page = () => {
  const { user } = useKindeBrowserClient();
  const mi = user?.email;

  // Directly use useQuery here
  const emailExists = useQuery(
    api.company.CompanyEmail,
    mi ? { email: mi } : "skip"
  );

  const eliz = emailExists ? emailExists[0] : null;

  console.log(eliz?.companyname);

  // Return loading if the query is still being processed
  if (!emailExists) {
    return <div><Loader/></div>;
  }

  return (
    <div>
      {emailExists.length > 0 ? (
        <div>
          <div className="border rounded-md overflow-hidden h-fit max-w-6xl mx-auto mb-20 flex flex-col  ">
            <div className="flex items-center justify-between border-b py-7 pl-[5%] pr-[5%] mb-10">
              <div className="w-fit flex items-center justify-center gap-5">
                
               <Image alt="" src={eliz?.companyLogo} width={100} height={100} className=" rounded-md w-20 h-20" />
                
                
                


                <div>
                  <div className="text-3xl font-bold text-gray-800">
                    {eliz?.companyname}
                  </div>
                  <div className="text-base">{eliz?.companyServices}</div>
                  <div className="text-sm">{eliz?.businessType}</div>
                </div>
              </div>
              <div className="w-fit flex gap-8">
                <a href={eliz?.website} target="_blank">
                  Visit Website
                </a>
                <div>learn More</div>
              </div>
            </div>
            <div className="w-[90%] bg-gray-800 text-white text-sm flex items-center justify-center gap-[5%] p-2 rounded-md  mx-auto mb-10 ">
              <div className="w-[75%] ml-[5%]">
                Your Company is currently not verified. Verify your company to
                get investments.
              </div>
              <div className=" h-fit py-2 w-fit mr-[5%] px-5 bg-white text-gray-800 flex items-center justify-center rounded-full cursor-pointer">
                Verify
              </div>
            </div>
            <div className="w-[90%] mx-auto mt-3 h-fit mb-10">
              <div className="text-lg mb-2">Description</div>
              <div className="ml-5 text-base">{eliz?.description}</div>
              <div className="text-base mb-2 mt-7">Email</div>
              <div className="ml-5 text-base">{eliz?.companyEmail}</div>

              <div className="flex justify-center mt-10 gap-20 mx-auto w-[90%] ">
                <div className="w-[40%]">
                  <div className="text-gray-800 text-lg mt-5 mb-2">
                    Revenue Growth
                  </div>
                  <Separator />
                  <div className="ml-5 mb-2  text-base mt-4">
                    <div className="text-base">
                      Current revenue : {eliz?.currentRevenue} million
                    </div>
                    <div className="text-base">
                      revenue up by {eliz?.revenueIncreased} %
                    </div>
                  </div>
                </div>
                <div className=" w-[40%] ">
                  <div className="text-gray-800 text-lg mt-5 mb-2">
                    Cash Flow
                  </div>
                  <Separator />
                  <div className="ml-5 mb-2  text-base mt-4">
                    <div className="text-base">
                      Free Cash Flow: $ {eliz?.freeCashFlow} million
                    </div>
                    <div className="text-base">
                      Burn Rate: $ {eliz?.burnRate} million/month
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-20 mx-auto w-[90%] mt-6">
                <div className="w-[40%]">
                  <div className="text-gray-800 text-lg mt-5 mb-2">
                    Profit Margin
                  </div>
                  <Separator />
                  <div className="ml-5 mb-2  text-base mt-4">
                    <div className="text-base">
                      Gross Margin : {eliz?.grossMargin} %
                    </div>
                    <div className="text-base">
                      Operating Margin: {eliz?.operatingMargin} %
                    </div>
                    <div className="text-base">
                      Net Profit Margin: {eliz?.netProfitMargin} %
                    </div>
                  </div>
                </div>
                <div className=" w-[40%] ">
                  <div className="text-gray-800 text-lg mt-5 mb-2">
                    Valuation
                  </div>
                  <Separator />
                  <div className="ml-5 mb-2  text-base mt-4">
                    <div className="text-base">
                      Latest Valuation: $ {eliz?.latestValuation} billion
                    </div>
                    <div className="text-base">
                      Operating Margin: {eliz?.operatingMargin} %
                    </div>
                    <div className="text-base">
                      Projected Valuation: $ {eliz?.projectedValuation} billion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Cregister />
        </>
      )}
    </div>
  );
};

export default Page;
