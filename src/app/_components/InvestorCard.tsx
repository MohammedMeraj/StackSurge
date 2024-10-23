"use client";

import React, { useState } from "react";
import { ChevronDown, CircleDollarSign, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

interface Company {
  companyname: string;
  // other fields if needed
}

const InvestorCard = () => {
  const { user } = useKindeBrowserClient();
  const picture = user?.picture || "";

  const data: Company[] | undefined = useQuery(api.company.getCompany);

  if (data && data.length > 0) {
    console.log(data[0].companyname); // Access the companyname from the first company
  }

  // State to manage visibility and icon rotation
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-fit max-w-7xl bg-white mt-7 h-fit p-5 rounded-md border text-gray-800 mx-auto flex flex-row justify-center items-start">
      <Avatar>
        <AvatarImage src={picture} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex text-base flex-col items-start justify-center ml-3 min-w-96">
        <div className="text-gray-900">Ashneer Grover</div>
        <div className="text-gray-700 text-sm">Scientist, Harvard University</div>

        {/* Smooth transition for collapsing and expanding */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isVisible ? "h-auto opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="mt-3 bg-gray-50 rounded-md p-2 gap-3">
            <div className="flex flex-row items-center gap-3">
              <CircleDollarSign size={15} color="#8f8f8f" strokeWidth={1.75} />
              <div className="text-gray-700 text-sm">
                Investment Interest: Entertainment
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <MapPin size={15} color="#8f8f8f" strokeWidth={1.75} />
              <div className="text-gray-700 text-sm">
                Geographical Interest: Asia, America
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className="ml-2">View</Button>

      {/* Rotate the ChevronDown icon smoothly */}
      <ChevronDown
        onClick={handleToggle}
        className={`p-2 ml-8 rounded-full overflow-hidden hover:bg-gray-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "rotate-180" : ""
        }`}
        size={40}
        color="#8f8f8f"
        strokeWidth={1.75}
      />
    </div>
  );
};

export default InvestorCard;
