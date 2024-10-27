
import Companysidebar from "@/app/_components/Companysidebar";
import Loggedheader from "@/app/_components/Loggedheader";

import type { Metadata } from "next";
import { Literata } from 'next/font/google';
import { Toaster } from "sonner";





// Configure the font
const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you want
});

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
   
    <html lang="en">
    <body className={literata.className}>
      <div className="grid grid-cols-12 min-h-screen bg-white">
        <div className="col-span-3 overflow-x-scroll ">
          <Companysidebar/>
        </div>
        <div className="col-span-9 h-screen overflow-y-scroll scrollbar-hide border-l">
          <Loggedheader />
          
            {children} {/* Render the page content */}
            <Toaster/>
        </div>
        
      </div>
    </body>
  </html>
 
  );
}
