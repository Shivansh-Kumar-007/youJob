import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const geminiProvider = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});
