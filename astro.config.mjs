import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // 你的 GitHub Pages 网址
  site: 'https://simple-line248.github.io', 
  // 如果你的仓库名叫 "my-repo"，则取消下面这行的注释并填入仓库名
   base: '/simple_line_blog', 
  devToolbar: {
    enabled: false
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});
