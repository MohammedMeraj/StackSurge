
import Companysidebar from "@/app/_components/Companysidebar";
import Loggedheader from "@/app/_components/Loggedheader";

import type { Metadata } from "next";
import { Toaster } from "sonner";





// Configure the font


export const metadata: Metadata = {
  title: "Company",
  description: "Dashboard : Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    
      <div className="grid grid-cols-12 min-h-screen bg-white">
        <div className="col-span-3">
          <Companysidebar/>
        </div>
        <div className="col-span-9 h-screen overflow-y-scroll scrollbar-hide border-l">
          <Loggedheader />
          
            {children} {/* Render the page content */}
            <Toaster/>
        </div>
        
      </div>
    
 
  );
}
