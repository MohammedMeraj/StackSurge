"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";


const formSchema = z.object({
  investorName: z.string().min(3, {
    message: "Investor Name must be at least 3 characters.",
  }),
  currentRole: z.string().min(4, {
    message: "Current Role must be at least 4 characters.",
  }),
  industryExpertise: z.string().min(4, {
    message: "Industry Expertise must be at least 4 characters.",
  }),
  yearsExperience: z.string().min(1, {
    message: "Experience must be at least 1 characters.",
  }),
  country: z.string().min(1, {
    message: "Please select a country",
  }),
  geographicalFocus: z.string().min(1, {
    message: "Enter a geographical location",
  }),
  proEmail: z.string().min(4, {
    message: "Enter a valid Email",
  }),
  investmentSector: z.string().min(1, {
    message: "Enter a valid Sector",
  }),
});

const Page = () => {
  const { user } = useKindeBrowserClient();
  const userEmail = user?.email || "";

  const currentUser = useQuery(api.investor.getPictureCurrentUser , {email: userEmail})
  const pict = currentUser ? currentUser[0]?.image : null;

  const createInvestor = useMutation(api.investor.createInvestor);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      investorName: "",
      country: "",
      currentRole: "",
      industryExpertise: "",
      yearsExperience: "",
      geographicalFocus: "",
      proEmail: "",
      investmentSector: "",
    },
  });

  //              2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createInvestor({
      email: userEmail ?? "",
      investorName: form.getValues("investorName"),
      country: form.getValues("country"),
      invetorImage: pict ?? "",
      currentRole: form.getValues("currentRole"),
      industryExpertise: form.getValues("industryExpertise"),
      yearsExperience: form.getValues("yearsExperience"),
      geographicalFocus: form.getValues("geographicalFocus"),
      proEmail: form.getValues("proEmail"),
      investmentSector: form.getValues("investmentSector"),
      investorVerified: "false",
    });

      
      toast("Profile Added Successfully", {
        description: "You need to verify your profile before Investing",
        action: {
          label: "Ok",
          onClick: () => console.log("Profile"),
        }});
      console.log(values)

   
  }

  return (
    <div className="max-w-7xl ml-auto mr-auto mb-14  ">
      <div className="pl-7 pr-7 pt-7 flex flex-col justify-center items-center">
        <div className="text-xl self-start font-bold mb-8 text-gray-900">
          Setup Your Profile
        </div>

        <div className="w-[95%] ml-[15%] mr-[15%] border p-7 rounded-md">
          <div className="text-xl mb-7">Basic Details</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="investorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Argentina">Argentina</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="Austria">Austria</SelectItem>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="Belgium">Belgium</SelectItem>
                        <SelectItem value="Brazil">Brazil</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                        <SelectItem value="Denmark">Denmark</SelectItem>
                        <SelectItem value="Egypt">Egypt</SelectItem>
                        <SelectItem value="Finland">Finland</SelectItem>
                        <SelectItem value="France">France</SelectItem>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="Greece">Greece</SelectItem>
                        <SelectItem value="Hungary">Hungary</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="Indonesia">Indonesia</SelectItem>
                        <SelectItem value="Ireland">Ireland</SelectItem>
                        <SelectItem value="Israel">Israel</SelectItem>
                        <SelectItem value="Italy">Italy</SelectItem>
                        <SelectItem value="Japan">Japan</SelectItem>
                        <SelectItem value="Kenya">Kenya</SelectItem>
                        <SelectItem value="Malaysia">Malaysia</SelectItem>
                        <SelectItem value="Mexico">Mexico</SelectItem>
                        <SelectItem value="Netherlands">Netherlands</SelectItem>
                        <SelectItem value="New Zealand">New Zealand</SelectItem>
                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                        <SelectItem value="Norway">Norway</SelectItem>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                        <SelectItem value="Philippines">Philippines</SelectItem>
                        <SelectItem value="Poland">Poland</SelectItem>
                        <SelectItem value="Portugal">Portugal</SelectItem>
                        <SelectItem value="Russia">Russia</SelectItem>
                        <SelectItem value="Saudi Arabia">
                          Saudi Arabia
                        </SelectItem>
                        <SelectItem value="South Africa">
                          South Africa
                        </SelectItem>
                        <SelectItem value="South Korea">South Korea</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                        <SelectItem value="Sweden">Sweden</SelectItem>
                        <SelectItem value="Switzerland">Switzerland</SelectItem>
                        <SelectItem value="United Kingdom">
                          United Kingdom
                        </SelectItem>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="proEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professsional Email</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., MyName@email.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              {/*Profit Margin  &#40; Overall &#41; */}
              <div className="text-xl">Professional Information</div>
              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role/Position</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Angel Investor, Venture Capitalist..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryExpertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Expertise</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Tech, Healthcare, Finance..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Value"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              {/*Cash Flow  &#40; Overall &#41; */}
              <div className="text-xl">Invetment Preferences</div>

              <FormField
                control={form.control}
                name="investmentSector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Sector</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Automotive, Fashion, Electronics..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="geographicalFocus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Geographical Focus</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Location" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

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
