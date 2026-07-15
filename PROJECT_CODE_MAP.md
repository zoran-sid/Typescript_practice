# 真实项目代码地图

课程中的示例经过缩小和去依赖处理，但类型问题来自下列主站源码。行号以创建本课程时的工作区为准；源码变化后可能略有偏移。

| 主题           | 真实源码                                       | 观察重点                            |
| -------------- | ---------------------------------------------- | ----------------------------------- |
| 字面量与推断   | `src/i18n/utils.ts:4-10`                       | `as const` 派生 Locale 联合         |
| 接口与键约束   | `src/i18n/utils.ts:15-185`                     | UIStrings、Record、keyof            |
| 泛型           | `src/lib/utils.ts:46-55`                       | `groupBy<T>` 与 `keyof T`           |
| 浏览器状态     | `src/lib/theme.ts:6-47`                        | 字面量类型、DOM、可空值             |
| 内容模型       | `src/content/config.ts:3-190`                  | 运行时 schema 与静态推断的区别      |
| Lab 路径       | `src/lib/lab.ts:4-37`                          | 映射常量、CollectionEntry、翻译查找 |
| 路线接口       | `src/lib/routes/gpx.ts:1-53`                   | 可选字段、接口继承、嵌套数组        |
| 类型守卫       | `src/lib/routes/gpx.ts:353-399`                | filter 谓词和外部 XML 解析          |
| Utility Types  | `src/lib/routes/gpx.ts:133-147`                | `Pick<RoutePoint, ...>`             |
| 端点回退       | `src/lib/routes/endpoints.ts:3-35`             | 联合、`in` 收窄、可选结果           |
| 分段状态       | `src/lib/routes/splits.ts:3-110`               | 累加器接口、Map、空值保护           |
| 不可变几何     | `src/lib/routes/display-geometry.ts:60-97`     | 展开运算和纯转换流水线              |
| 泛型集合算法   | `src/lib/routes/downsample.ts:21-61`           | Set、元组数组、边界条件             |
| 品牌 ID 原型   | `src/lib/routes/identity.ts:4-60`              | 正则验证、unknown 守卫、哈希 ID     |
| 外部 JSON      | `scripts/media-update.ts:73-229`               | unknown、验证、异常边界             |
| 安全写入       | `scripts/media-update.ts:326-341`              | Promise、try/finally、原子写入      |
| 联合状态       | `src/lib/media/list.ts:1-22`                   | 字符串联合、可选字段                |
| 搜索 API       | `src/pages/[locale]/search-index.json.ts:5-54` | 异步集合、映射、Response            |
| DOM 与动态导入 | `src/components/SearchModal.astro:50-120`      | querySelector 泛型、Promise、事件   |
| 导航事件       | `src/components/Navigation.astro:351-448`      | DOM 可空值、dataset、动画帧         |
| 测试           | `scripts/test-radar.ts:1-47`                   | 纯函数断言与边界用例                |
| 集成测试       | `scripts/media-update.test.ts:45-283`          | async 测试、mock fetch、清理        |

## 如何使用这张表

先读课程中的简化版本，再打开真实源码，回答三个问题：

1. 类型保证了什么？
2. 哪些风险仍然只能在运行时发现？
3. 若把练习成果迁回主站，必须保留哪些现有不变量和测试？

课程不要求修改这些真实文件。任何迁移都应该作为独立任务重新审查和测试。
