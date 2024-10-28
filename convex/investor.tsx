import {  convexToJson, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createInvestor = mutation({
  args: {
    email: v.string(),
    investorName: v.string(),
    country: v.string(),
    invetorImage: v.string(),
    currentRole: v.string(),
    industryExpertise: v.string(),
    yearsExperience: v.string(),
    geographicalFocus: v.string(),
    proEmail: v.string(),
    investmentSector: v.string(),
    investorVerified: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("investor", args);
  },
});

export const getAllInvestor = query({
     handler: async(ctx)=>{
      return await ctx.db.query("investor").collect()     
    }
});

export const getCurrentInverstor = query({
  args:{
    email:v.string()
  },
  handler: async(ctx, args)=>{
    return await ctx.db.query("investor").filter((q)=>q.eq(q.field("email"),args.email)).take(1)
  }
})

export const getCurInvestorById = query({
  args:{
    id: v.string()
  },
  handler: async(ctx, args)=>{
      return await ctx.db.query("investor").filter((q)=>q.eq(q.field("_id"),args.id)).take(1)
  }
})

export const getPictureCurrentUser = query({
  args:{
    email : v.string()
  },
  handler: async(ctx,args)=>{
     return await ctx.db.query("user").filter((q)=>q.eq(q.field("email"),args.email)).take(1)
  }
})
