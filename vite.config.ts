import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: "tool/index.ts", // 工具库入口
      name: "senyou-tool", // 工具库名称
      fileName: (format) => `senyou-tool.${format}.js`, // 工具库名称
    },
  },
});
