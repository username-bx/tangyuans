import { defineUserConfig } from "vuepress";
import { shikiPlugin } from '@vuepress/plugin-shiki'
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
  plugins: [
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});



