布置 GitHub 个人页面（也就是 https://username.github.io）主要有两种主流方式，你可以根据需求选择：

### 方式一：最简单快速（推荐新手）——直接用现成的静态网站模板
1. 新建一个公开仓库，仓库名必须精确为：`username.github.io`（把 username 换成你自己的 GitHub 用户名）
2. 开启 GitHub Pages：
   - 进入仓库 → Settings → Pages  
   - Source 选 `Deploy from a branch` → branch 选 `main`（或 master）→ `/ (root)` → Save
3. 把模板代码直接放进去就行，常见好看的免费模板（直接 fork 然后改名即可）：

| 模板名称                  | 链接（直接点 Fork）                                      | 特点                                   |
|---------------------------|----------------------------------------------------------|----------------------------------------|
| al-folio                  | https://github.com/alshedivat/al-folio                   | 学术/个人主页最受欢迎，超漂亮，支持暗黑模式 |
| chirpy                    | https://github.com/cotes2020/jekyll-theme-chirpy         | 博客风格，清爽，有深色模式               |
| minima（官方默认）        | 直接用就行                                               | 最简洁                                 |
| Lanyon                    | https://github.com/poole/lanyon                          | 侧边栏风格                             |
| Beautiful Jekyll          | https://github.com/daattali/beautiful-jekyll             | 很多现成页面模板，适合零基础             |
| m0ai                      | https://github.com/kingcos/m0ai                          | 极简中文风，适合国内用户                 |

推荐：如果你是学生/科研狗，直接 Fork al-folio，改几行 YAML 配置（名字、头像、项目、论文）就能得到一个顶级好看的个人主页，5 分钟搞定。

### 方式二：完全自定义（适合会一点前端的）
技术栈随便选：
- Hugo（速度最快，主题超多）：https://github.com/theNewDynamic/gohugo-theme-ananke
- Next.js + TailwindCSS（最现代）
- VitePress / Astro / Docusaurus

步骤：
1. 一样新建 `username.github.io` 仓库
2. 本地写好项目后用 GitHub Actions 自动部署（几乎所有现代模板都自带 workflow）

示例：用 Next.js 的超漂亮模板（2025 年最流行风格）
https://github.com/ixartz/Next-js-Boilerplate（有内置 GitHub Actions 部署到 GitHub Pages）

### 加分项（让你的页面秒变专业）
1. 自定义域名（花 50 块买个 .me 或 .top）
   - 买域名 → DNS 解析加 CNAME 指向 username.github.io
   - 仓库根目录放个 CNAME 文件写上你的域名
2. 加访问统计：https://github.com/antonkomarev/github-profile-views-counter
3. 3D 动态背景：用 vite-plugin-wasm + three.js
4. 加 README 统计卡片（放在你的 profile 主页，不是 GitHub Pages）
   https://github.com/anuraghazra/github-readme-stats

### 超快上手示例（3 分钟出效果）
1. 打开 https://github.com/alshedivat/al-folio
2. 点右上角 Fork 到自己账号
3. 把仓库改名为 `你的用户名.github.io`
4. 改 _config.yml 里的名字、头像链接、简介
5. 几分钟后访问 https://你的用户名.github.io 就看到超漂亮的页面了！

需要我给你推荐具体某个风格（学术风、极简风、黑客风、卡片风），或者直接发你一个我整理好的 2025 年最受欢迎的 10 个模板合集吗？

你的 GitHub 用户名是 **WeiJiaXing**（全大写 W J X），所以你的 GitHub Pages 个人主页地址必须精确这样命名才能自动生效：

正确的仓库名称：  
**WeiJiaXing.github.io**  
（注意全部大写 W、J、X，必须和你的用户名一模一样！）

正确访问地址（部署成功后）：  
https://weijiaxing.github.io  

### 你现在应该立刻这样做（最快出效果）：
1. 直接点这个链接去 Fork al-folio（目前最好看最流行的学术/个人主页模板）：  
   https://github.com/alshedivat/al-folio
2. Fork 完成后，点仓库右上角的 Settings → 把仓库名字改成：  
   **WeiJiaXing.github.io**  
   （一定要精确大小写一致！）
3. 改完名字后等着 1–3 分钟，打开下面这个链接就能看到你的页面了：  
   https://weijiaxing.github.io

改好后你只需要再编辑几行配置（头像、名字、简介、项目列表）就超级好看了。

需要我现在直接帮你改好 _config.yml 里的中文配置模板吗？你把头像链接、自我介绍、邮箱这些发我，我 1 分钟给你弄好复制粘贴就行～