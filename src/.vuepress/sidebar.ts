import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "nextjs",
      icon: "laptop-code",
      prefix: "nextjs/",
      link: "nextjs/",
      children: "structure",
    },
    {
      text: "react",
      icon: "laptop-code",
      prefix: "react/",
      link: "react/",
      children: "structure",
    },
    {
      text: "reactNative",
      icon: "laptop-code",
      prefix: "reactNative/",
      link: "reactNative/",
      children: "structure",
    },
    {
      text: "record",
      icon: "laptop-code",
      prefix: "record/",
      link: "record/",
      children: "structure",
    },
    {
      text: "software",
      icon: "laptop-code",
      prefix: "software/",
      link: "software/",
      children: "structure",
    },
    {
      text: "vue3",
      icon: "laptop-code",
      prefix: "vue3/",
      link: "vue3/",
      children: "structure",
    },
    {
      text: "vuepress",
      icon: "laptop-code",
      prefix: "vuepress/",
      link: "vuepress/",
      children: "structure",
    },
    {
      text: "java",
      icon: "laptop-code",
      prefix: "java/",
      link: "java/",
      children: "structure",
    },
    "intro",
  ],
});
