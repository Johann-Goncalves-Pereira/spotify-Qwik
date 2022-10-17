import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite({
        ssr: { outDir: "netlify/edge-functions/entry.netlify-edge" },
      }),
      tsconfigPaths(),
      netlifyEdge({ functionName: "entry.netlify-edge" }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@component": path.resolve(__dirname, "src/components"),
        "@router": path.resolve(__dirname, "src/routers"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  };
});
