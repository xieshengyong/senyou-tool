import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    include: ["tool/**/*.ts"],
    outDir: "dist",
  })],
  build: {
    // 指定输出目录
    outDir: 'dist',
    emptyOutDir: false, // 不清空输出目录，允许多次构建累积结果
    lib: {
      entry: resolve(__dirname, "tool/index.ts"), // 工具库入口
      name: "senyou-tool", // 工具库名称
      formats: ['umd'],
      fileName: () => 'senyou-tool.js', // 固定为非压缩版本的名称
    },
    // 关闭全局的压缩，确保非压缩版本不会被压缩
    minify: false,
  }
});
