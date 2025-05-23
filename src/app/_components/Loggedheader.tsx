"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import userimage from '../../../public/userimage.jpg';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function LoggedHeader() {
  const { user } = useKindeBrowserClient(); 
  const userImage = user?.picture;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b relative z-20 bg-white shadow-sm">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-blue-600 text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-blue-600 text-sm font-medium"
                    href="#"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-blue-600 text-sm font-medium"
                    href="#"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* User profile */}
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden max-w-6xl flex left-0 w-fit justify-center items-center cursor-pointer border pr-5 pl-1 py-1 text-sm font-medium text-zinc-900 gap-3 hover:bg-gray-50 transition-colors">
              <Image 
                src={userImage || userimage} 
                alt="Profile" 
                width={40} 
                height={40} 
                className="overflow-hidden rounded-full border border-gray-100"  
              />
              
              <div className="flex flex-col">
                <div className="text-xs text-gray-600">Welcome</div>
                <div className="text-sm font-medium truncate max-w-[120px] sm:max-w-full">
                  {user?.given_name || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 bg-white border-t">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Documentation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default LoggedHeader;