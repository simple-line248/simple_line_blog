# SimpleLine's Blog

一个极简主义的个人静态博客，基于 **Astro** 构建，专注于结构美学与纯粹的阅读体验。

## 🌟 特性

- **极致性能**：基于 Astro 静态站点生成 (SSG)，无多余的客户端 JavaScript（零 JS 首屏），极速加载。
- **极简美学**：
  - 响应式的“物理卡片”正文排版与悬浮目录 (TOC)。
  - 自适应系统的深色/浅色模式 (Dark Mode)。
  - 全局精细打磨的排版与字体设定，剔除一切分散注意力的冗余装饰。
- **现代图片管道**：依靠 stro:assets 进行图片构建期极致压缩优化，原生解决图片闪烁与加载布局偏移问题。
- **现代化数据解耦**：
  - /src/pages/blog/：存放博客文章。
  - /src/projects/：存放独立的项目履历。
  - 基于 Vite 的 import.meta.glob 自动收集并根据时间线升序/降序排列。
- **云端可视化后台 (CMS)**：
  - 集成 Sveltia CMS。
  - 一键通过 GitHub OAuth 登录 https://[你的域名]/admin。
  - 在浏览器里即可直接完成文章增删改、图片上传和项目管理，像发朋友圈一样写博客。

## 📁 核心目录结构

\\\	ext
simple_line_blog/
├── public/                 # 静态资源，不会被编译
│   └── admin/              # Sveltia CMS 的可视化后台配置文件
├── src/
│   ├── assets/             # 被 Astro 接管优化的图片及静态资产
│   ├── layouts/            # 核心布局文件
│   │   ├── Layout.astro    # 侧边栏及全局框架
│   │   └── PostLayout.astro# 沉浸式文章阅读模板
│   ├── pages/              # Astro 路由入口
│   │   ├── blog/           # 博客文章对应的 Markdown 文件存放处
│   │   ├── about.astro     # 关于我页面
│   │   ├── index.astro     # 博客文章的时间线列表页
│   │   └── projects.astro  # 项目流列表页
│   └── projects/           # 项目流对应的 Markdown 数据源
├── astro.config.mjs        # Astro 配置文件
└── package.json
\\\

## 🚀 本地开发与运行

确保你已经安装了 [Node.js](https://nodejs.org/)。

`ash
# 1. 安装项目依赖
npm install

# 2. 启动本地热更新开发服务器 (http://localhost:4321)
npm run dev

# 3. 生产环境打包测试
npm run build
npm run preview
`

## ✏️ 内容维护指南

你有两种方式可以添加新的内容/项目：

### 方式一：云端写入（推荐）
当博客部署到 GitHub Pages 后，访问 你的域名/admin，点击 **Login with GitHub**。进入可视化面板即可傻瓜式发布文章与项目。系统会在底层自动为你提交 Git 记录。

### 方式二：本地 Markdown 写入
1. **写文章**：在 src/pages/blog/ 下新建 .md 文件，指定 layout: "../../layouts/PostLayout.astro"。
2. **存草稿**：图片放置在 src/assets/ 下，由于配置了 Astro 资源管道，你可以直接在 md 或 astro 组件中安全引用。
3. **加项目**：在 src/projects/ 下新建 .md 文件，写上 Frontmatter（title, description, url, date）即可，列表页引擎会自动收集渲染。

## 👨‍💻 作者与许可

**作者**：[SimpleLine] - 中国科学技术大学 (USTC) 数学系，关注机器学习、数据科学与极简数字产品。

> “Mathematics is the art of giving the same name to different things.”

使用 [Astro](https://astro.build/) 强力驱动。
