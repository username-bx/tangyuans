import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // 左上角名称
  title: "汤圆",
  description: "汤圆的随笔记录",

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    )
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
