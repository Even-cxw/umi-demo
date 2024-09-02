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
    { path: "/Antv/demo15", component: "Antv/demo15.jsx" },
    { path: "/Antv/demo16", component: "Antv/demo16.jsx" },
    { path: "/Antv/demo17", component: "Antv/demo17.jsx" },
    { path: "/Antv/demo18", component: "Antv/demo18.jsx" },
    { path: "/Antv/demo19", component: "Antv/demo19.jsx" },
    { path: "/Antv/demo20", component: "Antv/demo20.jsx" },
    { path: "/Antv/demo21", component: "Antv/demo21.jsx" },
    { path: "/Antv/demo22", component: "Antv/demo22.jsx" },
    // { path: "/Antv/antv1", component: "Antv/antv1.jsx" },


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
    { path: "/TS/demo2", component: "TS/demo2.tsx" },
    { path: "/TS/demo3", component: "TS/demo3.tsx" },
    { path: "/TS/demo4", component: "TS/demo4.tsx" },
    { path: "/TS/demo5", component: "TS/demo5.tsx" },
    { path: "/TS/demo6", component: "TS/demo6.tsx" },
    { path: "/TS/demo7", component: "TS/demo7.tsx" },
    { path: "/TS/demo8", component: "TS/demo8.tsx" },

    // antd
    { path: "/antd/demo1", component: "antd/demo1.jsx" },

    // CSS
    { path: "/CSS/demo1", component: "CSS/demo1.tsx" },
    { path: "/CSS/demo2", component: "CSS/demo2.tsx" },
    { path: "/CSS/demo3", component: "CSS/demo3.tsx" },
    { path: "/CSS/demo4", component: "CSS/demo4.tsx" },

    // Javascript
    { path: "/Javascript/demo1", component: "Javascript/demo1.tsx" },
    { path: "/Javascript/demo2", component: "Javascript/demo2.tsx" },
    { path: "/Javascript/demo3", component: "Javascript/demo3.tsx" },

  ],
  // history: { type: "hash" },
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
