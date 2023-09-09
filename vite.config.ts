import eslintPlugin from '@nabla/vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { resolve } from 'node:path';
import { defineConfig, normalizePath } from 'vite';
import svgLoader from 'vite-svg-loader';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// 全局 less 文件的路径, 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(resolve('./src/styles/variable.less'));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // additionalData 的内容会在每个 less 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
      ],
    },
  },
  plugins: [vue(), svgLoader(), eslintPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
