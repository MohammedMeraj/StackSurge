// dashboard/layout.tsx
import Loggedheader from "@/app/_components/Loggedheader";
import Side from "@/app/_components/Side";

import type { Metadata } from "next";
import { Literata } from 'next/font/google';




// Configure the font
const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you want
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard : Investor",
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
        <div className="col-span-3">
          <Side />
        </div>
        <div className="col-span-9 h-screen overflow-y-scroll">
          <Loggedheader/>
            {children} {/* Render the page content */}
        </div>
      </div>
    </body>
  </html>
 
  );
}
