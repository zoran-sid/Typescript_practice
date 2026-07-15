# Day 13：Promise、`async/await` 与并发边界

## 今日目标

理解 Promise 泛型、async 返回类型、await 收窄、并行与串行、失败传播、依赖注入和缓存中的 Promise。

## 来自主站的素材

- `src/components/SearchModal.astro:60-75` 缓存一次加载 Promise，并并行导入 Fuse 与获取索引。
- `src/pages/[locale]/search-index.json.ts:11-54` 异步读取集合并返回 Response。
- `scripts/media/douban.ts:374-548` 注入 fetch、分页请求并拒绝不完整结果。

## 核心讲解

`async function f(): Promise<T>` 无论返回 T 还是抛错，调用者都得到 Promise。独立任务可用 `Promise.all` 并行；存在依赖或节流要求时才串行。

类型参数 `response.json() as Promise<T>` 仍只是断言，不能验证服务端数据。今天先验证数组基本形状，Day 21 会组成完整流水线。通过注入 `fetcher`，练习无需网络也能测试成功和失败。

## 动手任务

1. 实现 `loadSearchEntries`：检查 HTTP 状态、await JSON、验证数组条目。
2. 修复 `countEntries` 忘记 await 的故障。
3. 不得在测试中访问真实网络。

## 常见故障

- 忘记 `await`，对 Promise 读取业务属性。
- 未检查 `response.ok` 就解析错误页。
- `Promise.all` 中一个失败后误以为其他请求被自动取消。
- 缓存失败 Promise 后永远无法重试。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day13
```
