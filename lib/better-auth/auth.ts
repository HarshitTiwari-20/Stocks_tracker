import { connectToDatabase } from "@/Database/Mongoose";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";



let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if(authInstance) return authInstance;

  const mongoose = await connectToDatabase();

  if(!mongoose) throw new Error('Mongo Connection Error');

  const db =  mongoose.connection.db;

  if(!db) throw new Error('Mongo db Connection Error');

  authInstance = betterAuth({
    database: mongodbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 96,
      autoLoginAfterSignUp: true,
      autoSignIn: true
    },
    plugins: [nextCookies()]
  });
  return authInstance;
}

export const auth = await getAuth();
