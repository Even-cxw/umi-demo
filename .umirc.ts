import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/Antv/demo1", component: "Antv/demo1.jsx" },
    { path: "/Antv/demo2", component: "Antv/demo2.jsx" },
    { path: "/Antv/demo3", component: "Antv/demo3.jsx" },
    { path: "/Antv/demo4", component: "Antv/demo4.jsx" },
    { path: "/Antv/demo5", component: "Antv/demo5.jsx" },
    { path: "/Antv/demo6", component: "Antv/demo6.jsx" },
    { path: "/Antv/demo7", component: "Antv/demo7.jsx" },
  ],

  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
