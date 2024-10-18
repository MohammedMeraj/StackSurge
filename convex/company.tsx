
import { convexToJson, v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const createCompany= mutation({
    args:{
        email:v.string(),
        companyname:v.string(),
        description:v.string(),
        website:v.string(),
        companyEmail:v.string(),
        grossMargin:v.string(),
        netProfitMargin:v.string(),
        operatingMargin:v.string(),
        freeCashFlow:v.string(),
        burnRate:v.string(),
        latestValuation:v.string(),
        ebitda:v.string(),
        projectedValuation:v.string(),
        currentRevenue:v.string(),
        revenueIncreased:v.string(),
        companyVerified:v.string()
        
       
    },
    handler:async(ctx, args)=> {
       return await ctx.db.insert("company",args);

    },
})


export const getCompany = query({
    handler: async(ctx)=>{
        return await ctx.db.query("company").collect(); 
    }
})