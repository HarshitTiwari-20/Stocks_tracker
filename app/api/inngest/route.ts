import { inngest } from "@/lib/inngest/client";
import { server } from "inngest/next";
import { sendSignUpEmail, sendDailyNewsSummary } from "@/lib/inngest/functions";



export const { GET, POST, PUT } = server({
  client: inngest,
  functions: [sendSignUpEmail, sendDailyNewsSummary],
})