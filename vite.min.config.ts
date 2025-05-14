import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from 'path';

// https://vitejs.dev/config/
// 用于构建压缩版本的配置文件
export default defineConfig({
  plugins: [dts({
    include: ["tool/**/*.ts"],
    outDir: "dist", 
    // 不再生成类型文件，因为非压缩版本已经生成了
    afterBuild: () => {}
  })],
  build: {
    // 指定输出目录
    outDir: 'dist',
    emptyOutDir: false, // 不清空输出目录，避免覆盖非压缩版本
    lib: {
      entry: resolve(__dirname, "tool/index.ts"), // 工具库入口
      name: "senyou-tool", // 工具库名称
      formats: ['umd'],
      fileName: () => 'senyou-tool.min.js', // 确保包含.js扩展名
    },
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
}); 