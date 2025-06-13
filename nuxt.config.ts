// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      PUSHER_KEY: process.env.NUXT_PUBLIC_PUSHER_KEY,
      PUSHER_CLUSTER: process.env.NUXT_PUBLIC_PUSHER_CLUSTER,
    },
  },
});
