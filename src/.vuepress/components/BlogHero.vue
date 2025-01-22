<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";

</script>

<template>
  <BlogHero>
    <template #heroBg>
      <BingHeroBackground />
    </template>
    <template #heroInfo="heroInfo">
      <!-- 当同时使用 每日的必应壁纸和 一言描述 -->
      <!-- 如果按照文档的方式,将整个 heroinfo 传进去 -->
      <!-- 就会报错: Extraneous non-props attributes (tagline, isFullScreen) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.  -->
      <!-- 错误原因: HitokotoBlogHero.js 文件的 prop, 不能接收 tagline, isFullScreen, heroFullScreen -->
      <!-- <HitokotoBlogHero v-bind="heroInfo" /> -->
      <HitokotoBlogHero :text="heroInfo.text" :alt="heroInfo.tagline" :image="heroInfo.image" />
    </template>
  </BlogHero>
</template>
