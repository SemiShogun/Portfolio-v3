import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  extends: ["@nuxtjs/eslint-config-typescript"],
  css: ["/assets/scss/global.scss"],
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  pageTransition: {
    "page-fade": true,
  },
});
