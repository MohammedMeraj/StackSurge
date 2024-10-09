// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Literata } from 'next/font/google';
import { ConvexClientProvider } from "./ConvexClientProvider";





// Configure the font
const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you want
});

export const metadata: Metadata = {
  title: "Stack Surge",
  description: "Investor Start-Up Association Plaform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <html lang="en">
    <body className={literata.className}>
      
        
        
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
       
      
    </body>
  </html>
 
  );
}
