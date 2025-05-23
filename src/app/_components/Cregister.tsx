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
  // Company fields
  grossMargin: z.string().optional(),
  netProfitMargin: z.string().optional(),
  operatingMargin: z.string().optional(),
  freeCashFlow: z.string().optional(),
  burnRate: z.string().optional(),
  latestValuation: z.string().optional(),
  ebitda: z.string().optional(),
  projectedValuation: z.string().optional(),
  currentRevenue: z.string().optional(),
  revenueIncreased: z.string().optional(),
  // Startup fields
  yearsOfExperience: z.string().optional(),
  achievementRate: z.string().optional(),
  marketSize: z.string().optional(),
  mvpSuccessRate: z.string().optional(),
}).superRefine((data, ctx) => {
  // Validation for startup fields when businessType is "Start Up"
  if (data.businessType === "Start Up") {
    // Years of Experience validation
    if (!data.yearsOfExperience || data.yearsOfExperience.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Years of Experience is required for startups",
        path: ["yearsOfExperience"],
      });
    } else {
      const years = parseFloat(data.yearsOfExperience);
      if (isNaN(years) || years < 0 || years > 50) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Years of Experience must be between 0 and 50",
          path: ["yearsOfExperience"],
        });
      }
    }

    // Achievement Rate validation
    if (!data.achievementRate || data.achievementRate.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Achievement Rate is required for startups",
        path: ["achievementRate"],
      });
    } else {
      const rate = parseFloat(data.achievementRate);
      if (isNaN(rate) || rate < 0 || rate > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Achievement Rate must be between 0 and 1",
          path: ["achievementRate"],
        });
      }
    }

    // Market Size validation
    if (!data.marketSize || data.marketSize.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Market Size is required for startups",
        path: ["marketSize"],
      });
    } else {
      const size = parseFloat(data.marketSize);
      if (isNaN(size) || size <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Market Size must be a positive number (in millions)",
          path: ["marketSize"],
        });
      }
    }

    // MVP Success Rate validation
    if (!data.mvpSuccessRate || data.mvpSuccessRate.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "MVP Success Rate is required for startups",
        path: ["mvpSuccessRate"],
      });
    } else {
      const rate = parseFloat(data.mvpSuccessRate);
      if (isNaN(rate) || rate < 0 || rate > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "MVP Success Rate must be between 0 and 1",
          path: ["mvpSuccessRate"],
        });
      }
    }
  }

  // Validation for company fields when businessType is "Company"
  if (data.businessType === "Company") {
    const companyFields = [
      { field: "grossMargin", label: "Gross Margin" },
      { field: "netProfitMargin", label: "Net Profit Margin" },
      { field: "operatingMargin", label: "Operating Margin" },
      { field: "freeCashFlow", label: "Free Cash Flow" },
      { field: "burnRate", label: "Burn Rate" },
      { field: "latestValuation", label: "Latest Valuation" },
      { field: "ebitda", label: "EBITDA" },
      { field: "projectedValuation", label: "Projected Valuation" },
      { field: "currentRevenue", label: "Current Revenue" },
      { field: "revenueIncreased", label: "Revenue Increased" },
    ];

    companyFields.forEach(({ field, label }) => {
      const value = data[field as keyof typeof data];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${label} is required for companies`,
          path: [field],
        });
      }
    });
  }
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
      yearsOfExperience: "",
      achievementRate: "",
      marketSize: "",
      mvpSuccessRate: "",
    },
  });

  const selectedBusinessType = form.watch("businessType");

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
      const isStartup = selectedBusinessType === "Start Up";
      
      await createCompany({
        email: userEmail ?? "", // Ensure email is always a string
        companyname: form.getValues("companyName"),
        businessType: form.getValues("businessType"),
        companyServices: form.getValues("companyServices"),
        description: form.getValues("description"),
        website: form.getValues("website"),
        companyEmail: form.getValues("companyEmail"),
        companyLogo: companyImage ?? "",
        // Company fields - null if startup
        grossMargin: isStartup ? "" : (form.getValues("grossMargin") ?? ""),
        netProfitMargin: isStartup ? "" : (form.getValues("netProfitMargin") ?? ""),
        operatingMargin: isStartup ? "" : (form.getValues("operatingMargin") ?? ""),
        freeCashFlow: isStartup ? "" : (form.getValues("freeCashFlow") ?? ""),
        burnRate: isStartup ? "" : (form.getValues("burnRate") ?? ""),
        latestValuation: isStartup ? "" : (form.getValues("latestValuation") ?? ""),
        ebitda: isStartup ? "" : (form.getValues("ebitda") ?? ""),
        projectedValuation: isStartup ? "" : (form.getValues("projectedValuation") ?? ""),
        currentRevenue: isStartup ? "" : (form.getValues("currentRevenue") ?? ""),
        revenueIncreased: isStartup ? "" : (form.getValues("revenueIncreased") ?? ""),
        // Startup fields - null if company
        yearsOfExperience: isStartup ? (form.getValues("yearsOfExperience") ?? "") : "",
        achievementRate: isStartup ? (form.getValues("achievementRate") ?? "") : "",
        marketSize: isStartup ? (form.getValues("marketSize") ?? "") : "",
        mvpSuccessRate: isStartup ? (form.getValues("mvpSuccessRate") ?? "") : "",
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

              {/* Conditional rendering based on business type */}
              {selectedBusinessType === "Start Up" && (
                <>
                  <div className="text-xl">Startup Information</div>
                  <div className="flex w-full justify-between gap-5">
                    <FormField
                      control={form.control}
                      name="yearsOfExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter years (0-50)"
                              min="0"
                              max="50"
                              step="0.1"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Years of experience in the industry (0-50 years)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="achievementRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Historical Achievement Rate &#40; 0-1 &#41; *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter rate (0-1)"
                              min="0"
                              max="1"
                              step="0.01"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Historical achievement rate (0-1, e.g., 0.8 for 80%)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex w-full justify-between gap-5">
                    <FormField
                      control={form.control}
                      name="marketSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Market Size &#40; Million &#36; &#41; *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter size in millions"
                              min="0"
                              step="0.1"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Total addressable market size in million dollars
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mvpSuccessRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>MVP Success Rate &#40; 0-1 &#41; *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter rate (0-1)"
                              min="0"
                              max="1"
                              step="0.01"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Minimum viable product success rate (0-1)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {selectedBusinessType === "Company" && (
                <>
                  {/*Profit Margin  &#40; Overall &#41; */}
                  <div className="text-xl">Profit Margin</div>
                  <div className="flex w-full justify-between gap-5">
                    <FormField
                      control={form.control}
                      name="grossMargin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gross Margin &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Net Profit Margin &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Operatig Margin &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Free Cash Flow &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Burn Rate &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Latest valuation &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>EBITDA &#40; &#36; &#41; *</FormLabel>
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
                            Projected Valuation &#40; &#36; &#41; *
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
                          <FormLabel>Current Revenue &#40; &#36; &#41; *</FormLabel>
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
                          <FormLabel>Revenue increased &#40; &#36; &#41; *</FormLabel>
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
                </>
              )}

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