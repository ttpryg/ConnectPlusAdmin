import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const pageData = {
//   "/index.html": {
//     title: "Main Page",
//   },
  "/pages/about.html": {
    title: "Sub Page",
  },
};

export default defineConfig({
  root: "resources",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
        input: [
            'resources/index.html',
            'resources/pages/about.html',
        ]
    }
  },
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, "resources/partials"),
    }),
  ],
});
