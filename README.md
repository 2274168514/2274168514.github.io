# 孙光宇的个人主页

网站地址：https://2274168514.github.io/

纯 HTML / CSS / JavaScript 网站，无构建依赖，由 GitHub Pages 托管。默认英文，中文版本位于 `/zh/`；每页右上角可切换语言。采用个人资料侧栏、白底蓝色链接、研究图文条目与紧凑奖项列表；主页支持浅色 / 深色切换和移动端布局。

## 修改内容

- `index.html`：英文首页，包含个人介绍、教育、动态、论文与稿件、研究、项目、奖项、技能及材料链接。
- `zh/index.html`：内容对应的中文首页。
- `css/style.css`：首页布局、颜色与响应式样式。
- `js/script.js`：主题切换和导航高亮。
- `unitree-g1-videos.html`：五类姿态的 MuJoCo 仿真演示。
- `project-davis.html`：交通感知项目详情。
- `blog.html`：项目记录入口，目前没有独立文章。
- `zh/` 下的三个同名子页：对应的中文页面。
- `css/pages.css`：三个子页的公共样式。
- `assets/`：头像、概念示意图、项目图片、证明附件与视频。

研究缩略图是原创概念示意，不是论文中的实验图。S-PDR 单独列入 Manuscripts / 论文与稿件，保留“Submitted / 投稿中”状态；G1 的指标标明来自仿真与合成数据。教育起止日期及 2024、2025 年综合优秀一等奖学金来自现有简历，毕业日期标记为预计。既有个人内容与附件保留；资料目录中存在不同版本及重复原件，附件仍使用原始语言。

修改内容时，请同步更新英文页面和 `zh/` 对应页面。中文页面的共享资源路径使用 `../assets/`、`../css/`、`../js/`；中文内部页面链接保持在 `zh/` 目录。语言切换使用普通链接，不依赖 JavaScript；首页切换时保留当前锚点。

后续增加论文时，在两种语言的 `#publications .research-list` 添加条目，并记录准确的标题、作者顺序、投稿或发表状态及可公开链接。尚无公开稿件的项目继续放在 Research。论文阅读与复现笔记可放入 Notes，不计为本人论文。

## 本地查看

在此文件夹打开终端：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。按 `Ctrl+C` 停止预览。也可以直接打开 `index.html`。

## 更新线上网站

```powershell
git add .
git commit -m "Update personal website"
git push
```

GitHub 仓库 Settings → Pages 的发布源为 `main` 分支根目录。`.nojekyll` 表示直接发布静态文件。提交后 GitHub 会自动部署，可在仓库 Actions 中查看进度。

所有上传的附件都可以通过公开仓库或网站地址访问。`.local-backup/` 保存本地原首页及样式备份，不上传；`.qa/`、日志、环境变量文件也被忽略。

GitHub Pages 只提供静态托管，外链的编程平台和交通系统仍在原服务器运行。

设计参考：[Xiangfei Qiu 的学术主页](https://qiu69.github.io/)。本网站独立实现排版与样式，没有复制参考站的个人内容或图片。
