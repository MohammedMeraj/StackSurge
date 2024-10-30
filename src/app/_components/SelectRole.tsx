"use client";
import React from "react";
import company from "../../../public/company.png";
import investor from "../../../public/investor.png";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}



const SelectRole = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center text-center items-center mt-9 sm:text-xl text-lg  text-gray-800 px-10">
      <div className="mb-16 w-full align-middle">
        Excited to Have You! <br />
        Are You an Investor or a Company?
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-36 gap-20">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="sm:w-72 sm:h-72 w-36 h-36 p-3 opacity-75 hover:opacity-100 border-2 rounded-lg border-gray-400 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black">
              <Image src={investor} alt="investor" className="sm:w-48 w-20" />
              <div>Investor</div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Register as an Investor</AlertDialogTitle>
              <AlertDialogDescription>
                You are about to Register as an investor, do you still want to
                continue?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                {" "}
                <Link href={"/investor"} >Continue </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="sm:w-72 sm:h-72 w-36 h-36 opacity-75 hover:opacity-100 p-3 border-2 rounded-lg border-gray-400 flex flex-col justify-center items-center gap-4 cursor-pointer hover:border-black">
              <Image src={company} alt="company" className="sm:w-48 w-20" />
              <div>Company</div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Register as a Company</AlertDialogTitle>
              <AlertDialogDescription>
                You are about to Register as a company, do you still want to continue?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                {" "}
                <Link href={"/company"} >Continue </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="h-36"></div>
    </div>
  );
};

export default SelectRole;
