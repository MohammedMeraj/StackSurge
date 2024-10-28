"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InvestorPrp {
    fieldName: string;
    fieldImage: string;
    fieldVerifyCheck: string;
    fieldCountry: string;
    fieldRole: string;
    fieldIndustry: string;
    fieldGeography: string;
    fieldSector: string;
    fieldEmail: string;
}


const Profile: React.FC<InvestorPrp> = (props) => {





  const verifyCheck = props.fieldVerifyCheck;
  console.log(props.fieldVerifyCheck)
  
  return (
    
      
      <div className="m-7">
      
        <div className="w-full max-w-6xl mx-auto my-7 flex border rounded-md">

            



              <div className="w-72  px-10   rounded-md flex flex-col items-center justify-start">
                <Avatar className="w-28 h-28 mx-auto mt-10 ">
                  <AvatarImage src={props.fieldImage} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                
                <div>
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
                </div>

         </div>

                
                  

                  

                  




                  <div className="w-full h-fit p-2 rounded-md flex flex-col items-center justify-center">
                    <table className="w-full max-w-4xl table-auto border-collapse mt-8">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Name
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldName}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Country
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldCountry}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Role/Position
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldRole}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Industry Expertise
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldIndustry}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Geographical Focus
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldGeography}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Investment Sector
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldSector}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4  text-gray-800">
                            Professional Email
                          </td>
                          <td className="py-2 px-4">
                            {props.fieldEmail}
                          </td>
                        </tr>                       
                      </tbody>
                      
                    </table>
                         <div  className="w-[100%] flex items-center justify-end gap-10 mr-10 h-fit mt-3 mb-5 p-5">
                          <Button className="bg-white text-gray-900 hover:bg-gray-100 border px-5 ">Contact</Button>  
                          <Button className="px-5">Pitch</Button>  
                         </div>
                  </div>




                  
                
              </div>
              

           
           
        </div>
      
    
  );
};

export default Profile;
