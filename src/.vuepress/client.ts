// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from 'vue';
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
  rootComponents: [
    BlogBg,
  ]
});
