# Day 20：判别联合状态机与业务不变量

## 今日目标

把“若干 boolean”改造成不可表示非法状态的判别联合，用事件驱动转换和穷尽检查保护工作流。

## 来自主站的素材

- `src/content/config.ts:144-179` 区分 planned、building、tested、verified 等状态。
- Web3 Lab 内容明确区分教育、测试网、未审计和不处理真实资金。
- `scripts/media-update.ts:326-389` 的读取 → 验证 → 临时写入 → 替换也是一种状态流程。

## 核心讲解

多个 boolean（`approved`, `broadcast`, `failed`）会组合出不合理状态，如“既失败又完成”。判别联合只列出允许状态，每个状态携带自己才需要的数据。转换函数接收当前 state 和 event，非法转换立即失败。

本课使用教育性测试网 withdrawal 模型，仅为了练习状态类型；它不是生产钱包实现，也不处理密钥或真实资金。

## 动手任务

1. 实现 `transition` 的 submit、approve、broadcast、confirm 四个合法路径。
2. 修复 `changeDestination`：审核后目的地址必须绑定，不能再修改。
3. 对非法转换抛出包含 state 和 event 的错误。

## 常见故障

- 用可选字段大对象表示所有阶段，调用者不知道哪些字段存在。
- 审批后仍允许修改目标地址。
- 链上成功直接等同业务完成。
- 新增状态后 default 静默放行。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day20
```
