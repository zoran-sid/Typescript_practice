# Git 分支学习工作流

本项目设计为一个 GitHub 仓库，而不是 21 个互不关联的仓库。每天和答案各有一个分支：

```text
main
day01 ... day21
solution/day01 ... solution/day21
```

`current-day.json` 是每个分支的课程指针；`npm run current` 会自动运行当前分支对应的练习或答案。

## 每日流程

```powershell
git switch day01
npm.cmd run current
```

第一次运行练习会失败。阅读 `days/day01/README.md`，修改 `days/day01/practice.ts`，然后重复运行：

```powershell
npm.cmd run current
npm.cmd run check
```

保存自己的成果：

```powershell
git add days/day01/practice.ts
git commit -m "practice: complete day01"
```

完成后查看参考实现：

```powershell
git switch solution/day01
npm.cmd run current
```

若 Git 阻止切换，说明当前练习还有未提交修改。先 commit 或 `git stash`，不要强制覆盖。

## 误删恢复

恢复一个尚未提交的误删文件：

```powershell
git restore days/day01/practice.ts
```

恢复为远程原始练习：

```powershell
git fetch origin
git restore --source origin/day01 -- days/day01/practice.ts
```

查看自己改了什么：

```powershell
git status
git diff
git log --oneline --decorate -10
```

## 发布到你自己的 GitHub

本项目不会自动连接 GitHub。创建一个名为 `typescript_practice` 的空仓库后，在本地项目目录执行：

```powershell
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
git push origin --all
```

`--all` 会把 day 和 solution 分支一起推送。不要把 Token、私钥、Cookie、真实钱包数据或主站私有文件加入本仓库。

## 从 GitHub 重新拉取

```powershell
git clone YOUR_REPOSITORY_URL typescript_practice
cd typescript_practice
npm install
git switch day01
npm run current
```

克隆后的仓库独立于 Astro 主站；`PROJECT_CODE_MAP.md` 中的路径用于说明案例来源，不是运行依赖。
