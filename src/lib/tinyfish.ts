import "dotenv/config";

// TinyFish Configuration
export const tinyFishConfig = {
  apiKey: process.env.TINYFISH_API_KEY,
  searchUrl: "https://api.search.tinyfish.ai",
  fetchUrl: "https://api.fetch.tinyfish.ai",
};

// Validate TinyFish API key on startup
if (!tinyFishConfig.apiKey) {
  console.warn("⚠️ TINYFISH_API_KEY not set in environment variables");
  console.warn("Set it in .env.local to enable open-web job discovery");
}

export default tinyFishConfig;
