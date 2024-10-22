import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createInvestor = mutation({
  args: {
    email: v.string(),
    investorName: v.string(),
    country: v.string(),
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
