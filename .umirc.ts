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
    { path: "/Antv/demo8", component: "Antv/demo8.jsx" },
    { path: "/Antv/demo9", component: "Antv/demo9.jsx" },
    { path: "/Antv/demo10", component: "Antv/demo10.jsx" },
    { path: "/Antv/demo11", component: "Antv/demo11.jsx" },
    { path: "/Antv/demo12", component: "Antv/demo12.jsx" },
    { path: "/Antv/demo13", component: "Antv/demo13.jsx" },
    { path: "/Antv/demo14", component: "Antv/demo14.jsx" },

    // react
    { path: "/React/demo1", component: "React/demo1.jsx" },
    { path: "/React/demo2", component: "React/demo2.jsx" },
    { path: "/React/demo3", component: "React/demo3.jsx" },
    { path: "/React/demo4", component: "React/demo4.jsx" },
    { path: "/React/demo5", component: "React/demo5.jsx" },
    { path: "/React/demo6", component: "React/demo6.jsx" },
    { path: "/React/demo7", component: "React/demo7.jsx" },
    { path: "/React/demo8", component: "React/demo8.jsx" },
    { path: "/React/demo9", component: "React/demo9.jsx" },
    
    // TS
    { path: "/TS/demo1", component: "TS/demo1.tsx" },

  ],

  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
