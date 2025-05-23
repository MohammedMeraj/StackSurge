"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { LayoutDashboard, Handshake, PenLine, CircleUser, Boxes, } from 'lucide-react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Companysidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex">
      {/* Icon Sidebar */}
      <div className={`fixed md:relative transition-transform duration-300 ease-in-out 
                      flex h-screen w-16 flex-col justify-between border-e bg-white z-40
                      ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            {/* Mini Logo */}
          </div>
          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <Link
                  href="/company/dashboard"
                  className={`group relative flex justify-center rounded px-2 py-1.5 ${
                    isActive('/company/dashboard') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  <LayoutDashboard size={20} color={isActive('/company/dashboard') ? '#3b82f6' : '#8f8f8f'} strokeWidth={1.75} />
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Dashboard
                  </span>
                </Link>
              </div>
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <Link
                    href="/company/equity-holder"
                    className={`group relative flex justify-center rounded px-2 py-1.5 ${
                      isActive('/company/equity-holder') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <Boxes size={20} color={isActive('/company/equity-holder') ? '#3b82f6' : '#8f8f8f'} strokeWidth={1.75} />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Equity Holders
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/investors"
                    className={`group relative flex justify-center rounded px-2 py-1.5 ${
                      isActive('/company/investors') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <Handshake size={20} color={isActive('/company/investors') ? '#3b82f6' : '#8f8f8f'} strokeWidth={1.75} />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Find Investors
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/your-company"
                    className={`group relative flex justify-center rounded px-2 py-1.5 ${
                      isActive('/company/your-company') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <PenLine size={20} color={isActive('/company/your-company') ? '#3b82f6' : '#8f8f8f'} strokeWidth={1.75} />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Your Company
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/profile"
                    className={`group relative flex justify-center rounded px-2 py-1.5 ${
                      isActive('/company/profile') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <CircleUser size={20} color={isActive('/company/profile') ? '#3b82f6' : '#8f8f8f'} strokeWidth={1.75} />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Profile
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <div className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            <LogoutLink>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </LogoutLink>
          </div>
        </div>
      </div>

      {/* Expanded Sidebar */}
      <div className={`fixed left-16 md:relative md:left-0 transition-transform duration-300 ease-in-out 
                      flex h-screen w-64 flex-col justify-between border-e bg-white shadow-lg z-30
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-4 py-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            style={{ width: 'auto', height: 'auto', maxWidth: '190px' }}
          />
          <ul className="mt-6 space-y-1">
            <li>
              <Link href="/company/dashboard" className={`block rounded-lg px-4 py-2 text-sm font-medium ${isActive('/company/dashboard') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/company/equity-holder" className={`block rounded-lg px-4 py-2 text-sm font-medium ${isActive('/company/equity-holder') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                Equity Holders
              </Link>
            </li>
            <li>
              <Link href="/company/investors" className={`block rounded-lg px-4 py-2 text-sm font-medium ${isActive('/company/investors') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                Find Investors
              </Link>
            </li>
            <li>
              <Link href="/company/your-company" className={`block rounded-lg px-4 py-2 text-sm font-medium ${isActive('/company/your-company') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                Your Company
              </Link>
            </li>
            <li>
              <Link href="/company/profile" className={`block rounded-lg px-4 py-2 text-sm font-medium ${isActive('/company/profile') ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-4">
          <LogoutLink className="group block w-full rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-200">
            Logout
          </LogoutLink>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setIsOpen(false)} />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 p-4 ${!isMobile ? (isOpen ? 'ml-80' : 'ml-16') : ''}`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Companysidebar;
