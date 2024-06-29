import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/Antv/demo1", component: "Antv/demo1.jsx" },
    { path: "/Antv/demo2", component: "Antv/demo2.jsx" },
  ],

  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
