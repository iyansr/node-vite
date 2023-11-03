import path from "path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 6969,
    hmr: {
      timeout: 10000,
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/main.ts",
      tsCompiler: "esbuild",
      appName: "viteNode",
      exportName: "viteNode",
    }),
  ],
});
