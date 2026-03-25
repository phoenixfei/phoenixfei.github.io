# phoenixfei.github.io

这是一个基于 **Jekyll + Chirpy** 的个人技术博客仓库，聚焦算法、数据结构、编程技巧与大数据相关内容，部署地址为：

- 博客主页：<https://phoenixfei.github.io>

## 项目特点

- 以 Markdown 为中心的写作流程，适合持续沉淀技术笔记。
- 按主题组织文章内容：算法、数据结构、编程知识、数学知识、大数据。
- 使用 `jekyll-theme-chirpy`，具备响应式页面、目录、标签、分类、归档等功能。
- 支持 PWA 配置（可安装、可离线缓存）。

## 技术栈

- [Jekyll](https://jekyllrb.com/)
- [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
- Ruby / Bundler

## 目录结构

```text
.
├── _config.yml              # 站点配置
├── _data/                   # 侧边栏联系方式、文章分享平台等配置
├── _plugins/                # Jekyll 插件扩展
├── _posts/                  # 博客文章（按主题目录划分）
├── _tabs/                   # 导航页（分类、标签、归档、关于）
├── assets/                  # 静态资源（图片等）
├── tools/
│   ├── run.sh               # 本地启动脚本
│   └── test.sh              # 构建与内容检查脚本
└── index.html               # 首页入口
```

## 本地运行

### 1) 安装依赖

确保本地已安装 Ruby 与 Bundler，然后执行：

```bash
bundle install
```

### 2) 启动开发服务

```bash
bash tools/run.sh
```

可选参数：

- 指定监听地址：`bash tools/run.sh -H 0.0.0.0`
- 生产模式运行：`bash tools/run.sh -p`

默认访问地址通常为：<http://127.0.0.1:4000>

## 构建与检查

执行：

```bash
bash tools/test.sh
```

该脚本会：

1. 清理并重新构建站点到 `_site`。
2. 使用 `htmlproofer` 对生成内容做基础检查（禁用外链检查）。

## 文章编写规范（建议）

1. 在对应主题目录下新增 Markdown 文件（例如 `_posts/01_算法/`）。
2. 文件名遵循 `YYYY-MM-DD-标题.md`。
3. 在 Front Matter 中设置标题、分类、标签等元信息。
4. 优先使用仓库内图片资源路径（如 `/assets/images/...`）。

## 联系方式

当前站点已配置以下联系方式入口：

- GitHub: <https://github.com/phoenixfei>
- LeetCode: <https://leetcode.cn/u/phoenixfei/>

## License

本仓库采用 [MIT License](LICENSE)。
