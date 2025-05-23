// dashboard/layout.tsx
import Loggedheader from "@/app/_components/Loggedheader";
import Side from "@/app/_components/Side";

import type { Metadata } from "next";
import { Toaster } from "sonner";






export const metadata: Metadata = {
  title: "Investor",
  description: "Investor : Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
   
      <div className="grid grid-cols-12 max-h-screen bg-white">
        <div className="col-span-3">
          <Side />
        </div>
        <div className="col-span-9 h-screen overflow-y-scroll">
          <Loggedheader/>
            {children} {/* Render the page content */}
            <Toaster/>
        </div>
      </div>
    
 
  );
}
