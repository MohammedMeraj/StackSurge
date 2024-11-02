"use client";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../../../convex/_generated/api";
import CProfileComponent from "@/app/_components/CProfileComponent";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const CompanyDetails = ({ params }: { params: { companyId: string } }) => {
  const companyDetail = useQuery(api.company.getCurCompanyById, {
    id: params.companyId,
  });
  const data = companyDetail ? companyDetail[0] : null;

  if(!data){
    return <div className="mx-7">
    <Skeleton className="w-32 h-5 mb-10  mt-7 rounded-md" />
                <div className="mx-auto mt-7 border rounded-md p-6 max-w-6xl"> 
        
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3 ">
            <Skeleton className="w-20 h-20 rounded-md"/>
            <div>
            <Skeleton className="w-32 h-6 mb-3" />
            <Skeleton className="w-28 h-3 " />
            </div>
        </div>
        <Separator className="mt-5 mb-5" />
        <div>
        <Skeleton className="w-20 mt-10  h-6 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        <Skeleton className="w-[90%] mt-5 mx-auto  h-4 mb-3" />
        </div>
    </div>
    </div >
  }

  return (
    <div>
      <div className="text-xl px-8 self-start font-bold mb-3 mt-4 text-gray-900">
        Details : Company
      </div>
      <div className="px-8 mt-10 mb-3">
        <CProfileComponent
          fldCompanyId={params.companyId}
          fldCompanyName={data?.companyname}
          fldCompanyEmail={data?.companyEmail}
          fldBurnRate={data?.burnRate}
          fldBusinessType={data?.businessType}
          fldCompanyServices={data?.companyServices}
          fldCurrentRevenue={data?.currentRevenue}
          fldDescription={data?.description}
          fldEbitda={data?.ebitda}
          fldFreeCashFlow={data?.freeCashFlow}
          fldGrossMargin={data?.grossMargin}
          fldImage={data?.companyLogo}
          fldLatestValuation={data?.latestValuation}
          fldOperatingMargin={data?.operatingMargin}
          fldProfitMargin={data?.netProfitMargin}
          fldProjectedValuation={data?.projectedValuation}
          fldRevenueIncreased={data?.revenueIncreased}
          fldWebsite={data?.website}
        />
      </div>
    </div>
  );
};

export default CompanyDetails;
