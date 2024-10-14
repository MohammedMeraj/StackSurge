"use client";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form";

const formSchema = z.object({
    companyName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(20, {
      message: "Username must be at least 20 characters.",
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
      description: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <form
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

    


      <div className="w-[70%] ml-[15%] mr-[15%]  mt-20   ">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Input placeholder="Company" {...field} />
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
              
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                Provide company description
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
   </div>
    </div>
  );
};

export default Page;
