"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"




const FormSchema = z.object({
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
    message: "At least 1 characters.",
  })
 
  
})

const SelectForm = () =>  {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("jhefoihef")
  }

  return (

    <div className="max-w-7xl ml-auto mr-auto mb-14 bg-gray-50">
    <div className='p-3 flex flex-col justify-center items-center  border rounded-md' >
    


    <div className="w-[95%] ml-[15%] mr-[15%] border p-7 rounded-md">
    <Form {...form}>


        
        {/*Profit Margin  &#40; Overall &#41; */}
     
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">

      <div className="text-xl">Basic Information</div>

              <FormField
          control={form.control}
          name="investorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                        <SelectItem value="South Africa">South Africa</SelectItem>
                        <SelectItem value="South Korea">South Korea</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                        <SelectItem value="Sweden">Sweden</SelectItem>
                        <SelectItem value="Switzerland">Switzerland</SelectItem>
                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        <SelectItem value="United States">United States</SelectItem>

                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>

          )}
        />

        <Separator />
        <div className="text-xl mt-5">Professional Information</div>



         <FormField
          control={form.control}
          name="currentRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Role/Position</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Angel Investor, Venture Capitalist..." {...field} />
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
                <Input placeholder="e.g., Tech, Healthcare, Finance..." {...field} />
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
                <Input type="number" placeholder="Enter Value" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<Separator/>
<div className="text-xl">Invetment Preferences</div>

       



<FormField
          control={form.control}
          name="investmentSector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investment Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Investment Sector Preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="Agriculture">Agriculture</SelectItem>
                    <SelectItem value="Automotive">Automotive</SelectItem>
                    <SelectItem value="Biotechnology">Biotechnology</SelectItem>
                    <SelectItem value="Construction">Construction</SelectItem>
                    <SelectItem value="Consumer Goods">Consumer Goods</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Energy">Energy</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Environmental">Environmental</SelectItem>
                    <SelectItem value="Fashion">Fashion</SelectItem>
                    <SelectItem value="Financial Services">Financial Services</SelectItem>
                    <SelectItem value="Food and Beverage">Food and Beverage</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Hospitality">Hospitality</SelectItem>
                    <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                    <SelectItem value="Insurance">Insurance</SelectItem>
                    <SelectItem value="Logistics">Logistics</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Media">Media</SelectItem>
                    <SelectItem value="Pharmaceuticals">Pharmaceuticals</SelectItem>
                    <SelectItem value="Real Estate">Real Estate</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="Robotics">Robotics</SelectItem>
                    <SelectItem value="SaaS">SaaS</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Telecommunications">Telecommunications</SelectItem>
                    <SelectItem value="Transportation">Transportation</SelectItem>
                    <SelectItem value="Venture Capital">Venture Capital</SelectItem>
                    <SelectItem value="Waste Management">Waste Management</SelectItem>
                    <SelectItem value="Water and Sanitation">Water and Sanitation</SelectItem>
                    <SelectItem value="Wellness">Wellness</SelectItem>
                    <SelectItem value="FinTech">FinTech</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Blockchain">Blockchain</SelectItem>

                        

                </SelectContent>
              </Select>
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

        



        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>

    </div></div>
  )
}

export default SelectForm 