"use client";
import React, { useState } from 'react';
import Payment from '@/app/_components/Payment';
import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '../../../../../../../../convex/_generated/api';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Loader from '@/app/_components/Loader'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  currentRevenue: z.string().min(3, {
    message: "At least $ 100 to invest.",
  }),
});




const MakePayment = () => {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentRevenue: "",
    },
  });

    const [amt, setamount] = useState("100");
    const [flag, setflag] = useState("false")

    const backHandler = () =>{
       setflag("false")
    }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const d = form.getValues("currentRevenue");
    console.log(d);
    setamount(d);
    setflag("true");
    console.log(amt,values)
    
  }

  const { companyId } = useParams();
  const Id = typeof companyId === 'string' ? companyId : companyId[0];

  const CRcmp = useQuery(api.company.getCurCompanyById, { id: Id });
  const cmp = CRcmp ? CRcmp[0] : null;
  

  const numAmt = Number(amt);

  if(!cmp?.companyname){
    return <Loader/>
  }
  

  return (

    <div>
      <div className='text-lg font-bold mx-7 mt-7 mb-6'>Investment Page</div>
      {flag=="false" ? <><div className='mx-7'>
      

      
        
<div className='mx-auto max-w-6xl rounded-md border items-center flex flex-col justify-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="text-xl mx-auto w-full mt-10">Invest</div>
            <div className="flex w-full justify-between gap-5">
              <FormField
                control={form.control}
                name="currentRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Amount to Invest &#40; &#36; &#41; </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="$ 100"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter amount that you are willing to invest in the company
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mb-20 w-full h-36'> <Button type="submit" className="w-full">
              Submit
            </Button>
            </div>
           
          </form>
        </Form>
      </div>
      </div></> : <>
      <div className="text-base w-fit mb-1 cursor-pointer flex items-center justify-start gap-2 mx-8 hover:bg-gray-50 rounded-md p-2" onClick={backHandler}>
       <ChevronLeft size={24} /> <div >Go Back</div>
     </div>
      <Payment amount={numAmt} companyName={cmp?.companyname} />
      </>}
    

      
    </div>
  );
};

export default MakePayment;
