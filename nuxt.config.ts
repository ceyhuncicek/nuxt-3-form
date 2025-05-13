// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Configure for client-side rendering
  ssr: false,

  // ProvetCloud Design System
  css: [
    "@provetcloud/css/lib/provet.css",
    "@provetcloud/themes/lib/provet.css",
    "@nordhealth/fonts/lib/fonts.css",
  ],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
  ],

  // Vite configuration for ProvetCloud web components
  vite: {
    optimizeDeps: {
      include: ["@provetcloud/web-components/lib/index.js"],
    },
  },

  // Add ProvetCloud web components to client plugins
  plugins: [{ src: "~/plugins/provetcloud.client.js", mode: "client" }],
});
