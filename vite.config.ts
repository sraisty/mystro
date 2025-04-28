import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({}),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        presets: ["@emotion/babel-preset-css-prop"],
        plugins: ["@emotion"],
      },
    }),
  ],
  build: {
    target: "es2022",
  },
});
