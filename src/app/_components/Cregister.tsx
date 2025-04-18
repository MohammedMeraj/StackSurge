"use client";
import { useMutation } from "convex/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/utils/uploadthing";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  companyName: z.string().min(3, {
    message: "Company Name must be at least 3 characters.",
  }),
  businessType: z.string().min(4, {
    message: "Please Select an Option",
  }),
  companyServices: z.string().min(3, {
    message: "At least 3 characters.",
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
  ebitda: z.string().min(1, {
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
});

const Page = () => {
  const { user } = useKindeBrowserClient();
  const userEmail = user?.email;

  const createCompany = useMutation(api.company.createCompany);
  const [companyImage, setCompanyimage] = useState<string>("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      businessType: "",
      companyServices: "",
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
      revenueIncreased: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!companyImage) {
      toast("Please Upload Logo", {
        description: "Company logo is required, Pleade upload the image.",
        action: {
          label: "Ok",
          onClick: () => console.log("Company Registered"),
        },
      });
    } else {
      await createCompany({
        email: userEmail ?? "", // Ensure email is always a string
        companyname: form.getValues("companyName"),
        businessType: form.getValues("businessType"),
        companyServices: form.getValues("companyServices"),
        description: form.getValues("description"),
        website: form.getValues("website"),
        companyEmail: form.getValues("companyEmail"),
        companyLogo: companyImage ?? "",
        grossMargin: form.getValues("grossMargin"),
        netProfitMargin: form.getValues("netProfitMargin"),
        operatingMargin: form.getValues("operatingMargin"),
        freeCashFlow: form.getValues("freeCashFlow"),
        burnRate: form.getValues("burnRate"),
        latestValuation: form.getValues("latestValuation"),
        ebitda: form.getValues("ebitda"),
        projectedValuation: form.getValues("projectedValuation"),
        currentRevenue: form.getValues("currentRevenue"),
        revenueIncreased: form.getValues("revenueIncreased"),
        companyVerified: "false", // Example value (set this based on your logic)
      });

      toast("Company Registered Successfully", {
        description: "You need to verify the company before raising funds.",
        action: {
          label: "Ok",
          onClick: () => console.log("Company Registered"),
        },
      });
      console.log(values);
      console.log("Registered")
    }
  }

  return (
    <div className="max-w-7xl ml-auto mr-auto mb-14">
      <div className="pl-7 pr-7 pt-7 flex flex-col justify-center items-center">
        <div className="text-xl self-start font-bold mb-8 text-gray-900">
          Register Your Company
        </div>

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
                    <FormDescription>Specify your company name</FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Business Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Start Up">Start Up</SelectItem>
                        <SelectItem value="Company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Products and Services</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example : E-commerce, Education..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Service/Products you provide
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
                      <Input
                        placeholder="example : Investor and Startup Association Platform"
                        {...field}
                      />
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
                      <Input
                        placeholder="example : stack-surge.vercel.app"
                        {...field}
                      />
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
                      <Input
                        type="email"
                        placeholder="example : email@stacksurge.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Company&apos;s email address
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full">
                <div className="text-sm mb-2 ">Company Logo</div>
                <div className=" flex items-start justify-between mx-auto rounded-md py-2 px-4 border">
                  <UploadButton
                    appearance={{
                      button: {
                        background: "black",
                        fontSize: "small",
                        height: "fit",
                      },
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res[0].url);
                      const cImage = res[0].url;
                      setCompanyimage(cImage);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                  <div className="w-fit">
                    <div className="text-sm mt-1">
                      Upload your Company Logo{" "}
                    </div>
                    <div className="text-xs text-center">
                      &#91; Preferred image ratio is 1:1 &#93;
                    </div>
                  </div>
                </div>
                {companyImage && (
                  <>
                    <div className="flex gap-5 mt-3">
                      <div className="text-sm">Logo Preview :</div>
                      <Image
                        src={companyImage}
                        width={100}
                        height={100}
                        className="w-fit h-fit overflow-hidden rounded-md"
                        alt="Company Logo"
                      />
                    </div>
                  </>
                )}
              </div>

              <Separator />

              {/*Profit Margin  &#40; Overall &#41; */}
              <div className="text-xl">Profit Margin</div>
              <div className="flex w-full justify-between gap-5">
                <FormField
                  control={form.control}
                  name="grossMargin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gross Margin &#40; &#36; &#41; </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Company&apos;s Operatig Margin
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/*Cash Flow  &#40; Overall &#41; */}
              <div className="text-xl">Cash Flow</div>
              <div className="flex w-full justify-between gap-5">
                <FormField
                  control={form.control}
                  name="freeCashFlow"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Free Cash Flow &#40; &#36; &#41; </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Company&apos;s Burn Rate per month
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/*Valuation &#40; Overall &#41;*/}
              <div className="text-xl">Company Valuation</div>
              <div className="flex w-full justify-between gap-5">
                <FormField
                  control={form.control}
                  name="latestValuation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latest valuation &#40; &#36; &#41; </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Company&apos;s EBITDA</FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectedValuation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Projected Valuation &#40; &#36; &#41;
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Company&apos;s Projected Valuation for next 3 years
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/*Revenue Growth*/}
              <div className="text-xl">Revenue Growth</div>
              <div className="flex w-full justify-between gap-5">
                <FormField
                  control={form.control}
                  name="currentRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Revenue &#40; &#36; &#41; </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Company&apos;s Revenue Increased in last one year
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
