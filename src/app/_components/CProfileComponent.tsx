"use client";


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CprofileCmp{
    fldCompanyId: string;
    fldImage: string;
    fldCompanyName: string;
    fldCompanyServices: string;
    fldBusinessType: string;
    fldWebsite: string;
    fldDescription: string;
    fldCompanyEmail: string;
    fldCurrentRevenue: string;
    fldRevenueIncreased: string;
    fldFreeCashFlow: string;
    fldBurnRate: string;
    fldGrossMargin: string;
    fldOperatingMargin: string;
    fldProfitMargin: string;
    fldLatestValuation: string;
    fldEbitda: string;
    fldProjectedValuation: string;
}


const Page: React.FC<CprofileCmp> = (props) => {
  



  return (
    <div>
      
        <div>
          <div className="border rounded-md overflow-hidden h-fit max-w-6xl mx-auto mb-20 flex flex-col  ">
            <div className="flex items-center justify-between border-b py-7 pl-[5%] pr-[5%] mb-10">
              <div className="w-fit flex items-center justify-center gap-5">
                
               <Image alt="" src={props.fldImage} width={100} height={100} className=" rounded-md w-20 h-20" />
                
                
                


                <div>
                  <div className="text-3xl font-bold text-gray-800">
                    {props.fldCompanyName}
                  </div>
                  <div className="text-base">{props.fldCompanyServices}</div>
                  <div className="text-sm">{props.fldBusinessType}</div>

                </div>
              </div>
              <div className="w-fit flex gap-8">
                <a href={props.fldWebsite} target="_blank">
                  Visit Website
                </a>
                <div>learn More</div>
              </div>
            </div>
            {/* company Verify notification removed from here */}
            <div className="w-[90%] mx-auto mt-3 h-fit mb-10">
              <div className="text-lg mb-2">Description</div>
              <div className="ml-5 text-base">{props.fldDescription}</div>
              <div className="text-base mb-2 mt-7">Email</div>
              <div className="ml-5 text-base">{props.fldCompanyEmail}</div>

              <div className="flex justify-center mt-10 gap-20 mx-auto w-[90%] ">
                <div className="w-[40%]">
                  <div className="text-gray-800 text-lg mt-5 mb-2">
                    Revenue Growth
                  </div>
                  <Separator />
                  <div className="ml-5 mb-2  text-base mt-4">
                    <div className="text-base">
                      Current revenue : {props.fldCurrentRevenue} million
                    </div>
                    <div className="text-base">
                      revenue up by {props.fldRevenueIncreased} %
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
                      Free Cash Flow: $ {props.fldFreeCashFlow} million
                    </div>
                    <div className="text-base">
                      Burn Rate: $ {props.fldBurnRate} million/month
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
                      Gross Margin : {props.fldGrossMargin} %
                    </div>
                    <div className="text-base">
                      Operating Margin: {props.fldOperatingMargin} %
                    </div>
                    <div className="text-base">
                      Net Profit Margin: {props.fldProfitMargin} %
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
                      Latest Valuation: $ {props.fldLatestValuation} billion
                    </div>
                    <div className="text-base">
                      EBITDA: {props.fldEbitda} %
                    </div>
                    <div className="text-base">
                      Projected Valuation: $ {props.fldProjectedValuation} billion
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href={`/investor/companies/${props.fldCompanyId}/invest`}>
            <Button className="mt-10 w-full">Invest</Button>
          </Link>
              
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default Page;
