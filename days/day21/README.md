# Day 21：综合项目 - 类型安全搜索索引流水线

## 今日目标

综合使用接口、判别联合、泛型集合、收窄、字面量映射、不可变转换、排序、去重和穷尽检查，完成一个缩小版 Astro 搜索索引构建器。

## 来自主站的素材

- `src/pages/[locale]/search-index.json.ts:11-54` 获取多个内容集合、过滤语言、构造 URL、合并并按日期排序。
- `src/lib/lab.ts:4-17` 把 Lab 类型映射到 URL 段。
- `src/i18n/utils.ts:227-248` 统一本地化路径。
- `src/components/SearchModal.astro:50-120` 消费生成后的索引。

## 任务规格

实现 `buildSearchIndex(entries, locale)`：

1. 排除 draft 和其他语言；
2. 标准 routes 内容在索引中显示为 `map`；
3. Lab build 使用 `/lab/builds/slug`，其他 Lab 类型使用对应段；
4. URL 带当前语言前缀；
5. 按日期从新到旧排序；
6. 只删除同 collection + slug 的重复项，不能把不同栏目同 slug 的内容误删；
7. 不修改输入数组。

## 故障排查

`deduplicate` 当前只用 slug 作为键，因此 Blog 和 Lab 都叫 `wallet` 时会丢失一个。修复后再增加一条同 collection + slug 的重复数据，证明真正重复会被删除。

## 完成标准

- `npm run day -- day21` 通过；
- `npm run check` 通过；
- 不能使用 `any`；
- 能解释静态类型仍无法验证 Astro 内容文件本身，为什么真实主站还需要 collection schema。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day21
npm.cmd --prefix typescript_practice run test
```
