import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; 
import { user, account, session, verification } from "@/db/auth-schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user,
            account,
            session,
            verification
        },
    }),
    emailAndPassword: {
        enabled: true
    },
    trustedOrigins: ["http://localhost:4321"]
})