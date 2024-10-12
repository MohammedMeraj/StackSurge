// dashboard/layout.tsx
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
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-3">
          <Side />
        </div>
        <div className="col-span-9 h-screen overflow-y-scroll bg-white">
           
            {children} {/* Render the page content */}
        </div>
      </div>
    </body>
  </html>
 
  );
}
