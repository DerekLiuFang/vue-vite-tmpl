// import { webUpdateNotice } from "@plugin-web-update-notification/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    // webUpdateNotice({
    //   logVersion: true,
    //   // 自定义通知栏
    //   notificationProps: {
    //     title: "标题",
    //     description: "System update, please refresh the page",
    //     buttonText: "刷新",
    //     dismissButtonText: "忽略",
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
