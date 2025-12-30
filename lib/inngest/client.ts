import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: ' stock-market',
  ai: { gemini: { apiKey: process.env.Gemini_API_KEY  } }
  

})