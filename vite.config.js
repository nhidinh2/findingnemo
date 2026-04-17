import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        probability: resolve(__dirname, "probability.html"),
        "statistical-inference": resolve(__dirname, "statistical-inference.html"),
        "statistical-models-and-methods": resolve(
          __dirname,
          "statistical-models-and-methods.html"
        ),
        "time-series": resolve(__dirname, "time-series.html"),
        "categorical-data": resolve(__dirname, "categorical-data.html"),
      },
    },
  },
});
