

import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const createInvestor= mutation({
    args:{
        name:v.string(),
        companyname:v.string(),
        worth:v.number()
       
       
    },
    handler:async(ctx, args)=> {
       return await ctx.db.insert("investor",args);

    },
})


