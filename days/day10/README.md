# Day 10：模板字面量类型与品牌类型

## 今日目标

用模板字面量描述字符串协议，用品牌类型区分结构相同但语义不同的字符串，并明确“类型格式”与“运行时验证”的边界。

## 来自主站的素材

- `src/content/config.ts:85-98` 在运行时验证 `route-` ID 和资源路径。
- `src/lib/routes/identity.ts:4-60` 创建哈希 ID，并通过类型守卫检查未知值。
- `src/i18n/utils.ts:227-248` 生成带 Locale 前缀的路径。

## 核心讲解

模板字面量类型可写成 ``type RoutePath = `/routes/${string}.gpx` ``，在编译期约束可见字符串。品牌类型 `string & { readonly __brand: unique symbol }` 让已验证 ID 与普通字符串不可互换。

但编译后的 JavaScript 不保留这些类型。来自文件、URL、JSON 的字符串必须先运行正则或解析器，再返回品牌类型。品牌应由少数验证函数创建，不能到处 `as RouteId`。

## 动手任务

1. 实现 `parseRouteId`：只接受 `route-` 加 12 位小写十六进制。
2. 修复 `localizePath`：输入已经有其他语言前缀时先移除，避免 `/zh-CN/en/...`。
3. 解释为何返回类型不能替代正则验证。

## 常见故障

- 用模板类型后跳过外部输入验证。
- 品牌构造器直接断言、不检查。
- 拼接路径时重复 locale 或遗漏斜杠。
- 过度品牌化普通 UI 字符串，增加无效复杂度。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day10
```
