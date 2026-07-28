# JavaScript 值判断速查

这份速查只整理“收到一个值后，怎样判断它是什么”这一类写法。它不会代替 Day 10 和 Day 20 的讲解；第一次学时仍按当天教程的顺序练习。

## 先分清：内置写法还是自己写的函数

JavaScript 直接提供 `typeof`、`Array.isArray()`、`Number.isFinite()`、`Number.isNaN()`、`instanceof` 和 `in`。JavaScript **没有**直接提供 `isString()`、`isNumber()`、`isRecord()`。

如果代码里出现下面这种名称，要先向上找它的 `function` 定义：

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

`isString` 是我们自己取的函数名。运行时它交回普通的 `true` 或 `false`；返回类型里的 `value is string` 额外告诉 TypeScript：“结果为 `true` 时，可以把这个 value 当作字符串使用。”

## 同一类判断写法

| 想确认什么 | 写法 | 结果为 `true` 的例子 | 容易忽略的边界 |
| --- | --- | --- | --- |
| 字符串 | `typeof value === "string"` | `"TypeScript"`、`""` | 空字符串仍然是字符串 |
| 数字类型 | `typeof value === "number"` | `12`、`NaN`、`Infinity` | `NaN` 和无穷值也属于 `number` |
| 可正常计算的有限数字 | `Number.isFinite(value)` | `12`、`0` | 字符串 `"12"` 不会自动转换 |
| 值正好是 `NaN` | `Number.isNaN(value)` | `Number("abc")` | 普通字符串 `"abc"` 本身不是 `NaN` |
| 布尔值 | `typeof value === "boolean"` | `true`、`false` | 字符串 `"false"` 仍然是字符串 |
| 数组 | `Array.isArray(value)` | `[]`、`["TS"]` | `typeof []` 得到的是 `"object"` |
| 非空对象 | `typeof value === "object" && value !== null` | `{ name: "Ada" }`、`[]` | 数组也是对象，需要时继续排除数组 |
| 普通记录对象 | `typeof value === "object" && value !== null && !Array.isArray(value)` | `{ name: "Ada" }` | 这里只确认“像普通对象”，还没验证内部字段 |
| `Error` 实例 | `value instanceof Error` | `new Error("失败")` | 别人也可能抛出字符串或其他值 |
| 对象拥有某个属性 | `"name" in value` | `{ name: "Ada" }` | 先确认 value 是非空对象再使用 |

## 输入和输出看一遍

```ts
const values: unknown[] = ["TS", 42, NaN, [], null];

for (const value of values) {
  console.log(
    typeof value,
    Array.isArray(value),
    Number.isFinite(value),
  );
}
```

输出：

```text
string false false
number false true
number false false
object true false
object false false
```

这里能看出三个重要区别：

1. `typeof null` 和 `typeof []` 都会显示 `"object"`，所以判断对象时还要继续排除。
2. `typeof NaN` 是 `"number"`，但 `Number.isFinite(NaN)` 是 `false`。
3. `Array.isArray()` 只回答“是不是数组”，不会检查数组里的每一项。

## 常用的自定义类型守卫

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
```

这三个函数解决的问题不同：

- `isString` 只接受字符串。
- `isFiniteNumber` 不接受数字字符串、`NaN` 或无穷值。
- `isRecord` 只确认可以继续按对象检查属性，不代表对象已经符合最终业务类型。

例如验证用户资料时，还要在 `isRecord(value)` 成功后继续检查：

```ts
if (isRecord(value) && isString(value.name)) {
  console.log(value.name.toUpperCase());
}
```

## 选择顺序

```text
unknown value
   ├── typeof ──> string / number / boolean 等基础类型
   ├── Array.isArray ──> 数组
   ├── 非 null object
   │      ├── instanceof ──> 某个类的实例
   │      └── in + 字段守卫 ──> 业务对象
   └── 都不匹配 ──> 失败分支或后备值
```

判断方式由真实需求决定。只想确认“是不是数字类型”时可以用 `typeof`；端口、金额、分钟数通常还要求有限数字，这时要继续使用 `Number.isFinite()`。类型判断通过也只说明当前检查过的事实，不会自动验证整个 JSON。

[返回文档中心](./README.md)
