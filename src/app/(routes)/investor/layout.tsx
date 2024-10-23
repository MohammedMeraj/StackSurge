// dashboard/layout.tsx
import Loggedheader from "@/app/_components/Loggedheader";
import Side from "@/app/_components/Side";

import type { Metadata } from "next";
import { Literata } from 'next/font/google';
import { Toaster } from "sonner";




// Configure the font
const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you want
});

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
   
    <html lang="en">
    <body className={literata.className}>
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
    </body>
  </html>
 
  );
}
