import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-ui',
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'packages/ui' }],
  },
  alias: {
    'dumi-ui': resolve(__dirname, 'packages'),
    // 引入包的时候，可以直接使用包名
    md: 'dumi',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
