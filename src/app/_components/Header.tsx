import Image from 'next/image'
import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";



function Header() {
  return (
    <header className="bg-gradient-to-r from-white to-gray-100 border-b relative z-10 ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
        <Image src='/logo.svg' alt='logo' width={200} height={200}/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-800 transition hover:text-gray-500" href="#"> Home </a>
            </li>

            <li>
              <a className="text-gray-800 transition hover:text-gray-500" href="#">About </a>
            </li>

            <li>
              <a className="text-gray-800 transition hover:text-gray-500" href="#">Documentation </a>
            </li>

            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <LoginLink
            className="rounded-full b border border-black  px-3 py-2 sm:px-5 sm:py-2.5  text-sm font-medium text-black "
            
          >
            Login
          </LoginLink>

          <div className="hidden sm:flex">
            <RegisterLink
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white"
              
            >
              Register
            </RegisterLink>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
</header>
  
  )
}

export default Header