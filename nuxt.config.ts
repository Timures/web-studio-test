// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: { "Kantumruy Pro": true },
      },
    ],
    "@nuxt/image",
    "nuxt-aos",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config",
    cssPath: "~/assets/css/tailwind.css",
  },
  runtimeConfig: {
    public: {
      title: process.env.NUXT_TITLE,
      description: process.env.NUXT_DESCRIPTION,
    },
  },
});
