# TypeScript 零基础练习

这个仓库现在只保留面向零 JavaScript 基础学习者的 TypeScript 课程。

- Day 00–26：零基础主线，每天 60–90 分钟。
- Day 27–32：按需选修。
- 共 114 道练习，易错内容会在后续课程和 +1/+3/+7 复习中重复出现。

完整课程说明见 [beginner/README.md](./beginner/README.md)，复习方法见 [beginner/REVIEW.md](./beginner/REVIEW.md)，进度表见 [beginner/PROGRESS.md](./beginner/PROGRESS.md)。

## 第一次开始

在仓库根目录运行：

```powershell
npm install
npm run beginner:doctor
npm run beginner:example -- day00
npm run beginner -- day00
```

Day 04 以后每天有多道练习：

```powershell
# 运行完整示例
npm run beginner:example -- day10

# 检查指定练习或当天全部练习
npm run beginner -- day10 01
npm run beginner -- day10 all

# 卡住后再查看答案
npm run beginner:solution -- day10 01
```

## 验证课程

```powershell
# 统一 TypeScript 检查
npm run beginner:check

# 只验证一天
npm run beginner:verify -- day10

# 验证 Day00–32 的全部示例和答案
npm run beginner:verify

# 完整测试（类型检查 + 全量验证）
npm test
```

初始练习本来就应该失败；验证命令只检查课程示例和参考答案，不会要求未完成的 `practice` 通过。

## 目录

```text
beginner/
  day00/ ... day32/   每日教程、示例、练习与答案
  checks/             中文自动反馈配置
  scripts/            环境检查、逐题运行与全量验证
  README.md           完整课程导航
  REVIEW.md           间隔复习方法
  PROGRESS.md         学习进度表
```

课程以 TypeScript 官方手册为依据，但会先补足必要的 JavaScript 基础，而不是机械照搬手册顺序。
