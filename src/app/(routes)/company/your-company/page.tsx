"use client";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";


const formSchema = z.object({
    companyName: z.string().min(3, {
      message: "Company Name must be at least 3 characters.",
    }),
    description: z.string().min(50, {
      message: "Company Description must be at least 50 characters.",
    }),
    website: z.string().min(4, {
      message: "Company Website must be at least 4 characters.",
    }),
    companyEmail: z.string().min(5, {
      message: "Company Email must be at least 5 characters.",
    }),
    grossMargin: z.string().min(1, {
      message: "At leaststring 1 characters.",
    }),
    netProfitMargin: z.string().min(1, {
      message: "At least 1 characters.",
    }),
    operatingMargin: z.string().min(1, {
      message: "At least 1 characters.",
    }),
    freeCashFlow: z.string().min(1, {
      message: "At least 1 characters.",
    }),


    burnRate: z.string().min(1, {
      message: "At least 1 characters.",
    }),
    latestValuation: z.string().min(1, {
      message: "At least 1 characters.",
    }),
    ebitda: z.string().min(4, {
      message: "At least 1 characters.",
    }),
    projectedValuation: z.string().min(1, {
      message: "At least 1 characters.",
    }),

    currentRevenue: z.string().min(1, {
      message: "At least 1 characters.",
    }),
    revenueIncreased: z.string().min(1, {
      message: "At least 1 characters.",
    }),
   
    
  })




const Page = () => {
  const [nameI, setName] = useState("");
  const [companynameI, setCompanyname] = useState("");
  const [worthI, setWorth] = useState("");

  const createInvestor = useMutation(api.investor.createInvestor);

  const create = async () => {
    await createInvestor({
      name: nameI,
      companyname: companynameI,
      worth: parseFloat(worthI),
    });
  };


   // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      description: "",
      website: "",
      companyEmail: "",
      grossMargin: "",
      netProfitMargin: "",
      operatingMargin: "",
      freeCashFlow: "",
      burnRate: "",
      latestValuation: "",
      ebitda: "",
      projectedValuation: "",
      currentRevenue: "",
      revenueIncreased: ""

      
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="max-w-7xl ml-auto mr-auto">
    <div className='pl-7 pr-7 pt-7 flex flex-col justify-center items-center' >
      <form className="hidden"
        onSubmit={(e) => {
          e.preventDefault();
          create();
        }}
      >
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="company name"
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <input
          type="number"
          placeholder="net worth"
          onChange={(e) => setWorth(e.target.value)}
        />
        <button type="submit">Create Investor</button>
      </form>

    

      <div className='text-xl self-start font-bold mb-8 text-gray-900'>Register Your Company</div>
      
      <div className="w-[95%] ml-[15%] mr-[15%] border p-7 rounded-md">
      <div className="text-xl mb-7">Basic Details</div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
             <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="example : StackSurge" {...field} />
              </FormControl>
              <FormDescription>
                Specify your company name
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Description</FormLabel>
              <FormControl>
                <Input placeholder="example : Investor and Startup Association Platform" {...field} />
              </FormControl>
              <FormDescription>
                Provide company description
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="example : stack-surge.vercel.app" {...field} />
              </FormControl>
              <FormDescription>
                Company&apos;s official website
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example : email@stacksurge.com" {...field} />
              </FormControl>
              <FormDescription>
                Company&apos;s email address
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Separator/>
        
           {/*Profit Margin  &#40; Overall &#41; */}
        <div className="text-xl">Profit Margin</div>
              <div className="flex w-full justify-between gap-5" >
             <FormField 
        control={form.control}
        name="grossMargin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gross Margin  &#40; &#36; &#41; </FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Gross Margin
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              <FormField 
        control={form.control}
        name="netProfitMargin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Net Profit Margin &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Net Profit Margin
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField 
        control={form.control}
        name="operatingMargin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Operatig Margin &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Operatig Margin
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              </div>

              <Separator/>


            {/*Cash Flow  &#40; Overall &#41; */}
              <div className="text-xl">Cash Flow</div>
              <div className="flex w-full justify-between gap-5" >
             <FormField 
        control={form.control}
        name="freeCashFlow"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Free Cash Flow  &#40; &#36; &#41; </FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Free Cash Flow
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              <FormField 
        control={form.control}
        name="burnRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Burn Rate &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Burn Rate per month
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
        
              </div>

              <Separator/>


            {/*Valuation &#40; Overall &#41;*/}
            <div className="text-xl">Company Valuation</div>
              <div className="flex w-full justify-between gap-5" >
             <FormField 
        control={form.control}
        name="latestValuation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Latest valuation  &#40; &#36; &#41; </FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Latest valuation
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              <FormField 
        control={form.control}
        name="ebitda"
        render={({ field }) => (
          <FormItem>
            <FormLabel>EBITDA &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s EBITDA
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField 
        control={form.control}
        name="projectedValuation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Projected Valuation &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Projected Valuation for next 3 years
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              </div>

              <Separator/>

              {/*Revenue Growth*/}
              <div className="text-xl">Revenue Growth</div>
              <div className="flex w-full justify-between gap-5" >
             <FormField 
        control={form.control}
        name="currentRevenue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Revenue &#40; &#36; &#41; </FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Current Revenue
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
              <FormField 
        control={form.control}
        name="revenueIncreased"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Revenue increased &#40; &#36; &#41;</FormLabel>
            <FormControl >
              <Input type="number" placeholder="Enter Amount" {...field} />
            </FormControl>
            <FormDescription>
              Company&apos;s Revenue Increased in last one year
            </FormDescription>
            
            <FormMessage />
          </FormItem>
        )}
      />
        
              </div>

              <Separator/>






              
            
        
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
   </div>
    </div>
    </div>
  );
};

export default Page;
