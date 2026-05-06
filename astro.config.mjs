import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  // 你的自定义独立域名
  site: 'https://simpleline.ink', 
  // 绑定独立域名后，不需要 base 子路径了，必须注释或删除！
  // base: '/simple_line_blog', 
  devToolbar: {
    enabled: false
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  }
});
