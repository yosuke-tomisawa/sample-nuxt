const { API_KEY, API_URL } = process.env;

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: API_KEY,
    public: {
      apiUrl: API_URL,
    },
  },
});
