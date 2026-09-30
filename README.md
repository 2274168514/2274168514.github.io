# 孙光宇的个人主页

网站地址：https://2274168514.github.io/

纯 HTML / CSS / JavaScript 网站，无构建依赖，由 GitHub Pages 托管。采用个人资料侧栏、白底蓝色链接、研究图文条目与紧凑奖项列表；主页支持浅色 / 深色切换和移动端布局。

## 修改内容

- `index.html`：个人介绍、动态、研究、项目、奖项、技能及材料链接。
- `css/style.css`：首页布局、颜色与响应式样式。
- `js/script.js`：主题切换和导航高亮。
- `unitree-g1-videos.html`：五类姿态的 MuJoCo 仿真演示。
- `project-davis.html`：交通感知项目详情。
- `blog.html`：项目记录入口，目前没有独立文章。
- `css/pages.css`：三个子页的公共样式。
- `assets/`：头像、概念示意图、项目图片、证明附件与视频。

研究缩略图是原创概念示意，不是论文中的实验图。S-PDR 保留“投稿中”状态，G1 的指标标明来自仿真与合成数据。既有个人内容与附件保留；资料目录中存在不同版本及重复原件。

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
