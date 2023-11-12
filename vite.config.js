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
            'resources/pages/charts/chartjs.html',
            'resources/pages/forms/basic_elements.html',
            'resources/pages/icons/mdi.html',
            'resources/pages/samples/blank-page.html',
            'resources/pages/samples/error-404.html',
            'resources/pages/samples/error-500.html',
            'resources/pages/samples/login.html',
            'resources/pages/samples/register.html',
            'resources/pages/tables/basic-table.html',
            'resources/pages/ui-features/buttons.html',
            'resources/pages/ui-features/dropdowns.html',
            'resources/pages/ui-features/typography.html',
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
