// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Configure for client-side rendering
  ssr: false,

  // Base URL configuration for GitHub Pages
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/nuxt-3-form/",
    buildAssetsDir: "assets",
  },

  // ProvetCloud Design System
  css: [
    "@nordhealth/fonts/lib/fonts.css",
    "@provetcloud/css/lib/provet.min.css",
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
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("provet-"),
        },
      },
    },
  },
});
