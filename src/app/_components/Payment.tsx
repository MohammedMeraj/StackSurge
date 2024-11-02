"use client";

import CheckoutPage from "@/app/stripe-component/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import React from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface pay{
    amount: number;
    companyName: string;
}

const Payment:React.FC<pay> = (props) => { 
  const amount = props.amount;
  const companyName = props.companyName;

  return (
    
  <div className="mx-7">
    
    <div className="max-w-6xl mx-auto p-10 text-gray-800 text-center border m-10 rounded-md ">
      <div className="mb-10">
        <h1 className="text-2xl  mb-2">Make Payment </h1>
        <h2 className="text-lg mt-6">
          Investing &nbsp;&nbsp;
          <span className="font-bold text-base"> ${amount} &nbsp;&nbsp;</span>
          <span>in the company &nbsp; </span> 
          {companyName ? <span className="font-bold">{companyName}</span> : <span>Loading...</span>}
          
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
    </div>
  );
}

export default Payment