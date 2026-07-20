export default {
  title: "Day 23 · 严格配置下的独立练习",
  exampleExpected: [
    "先读: 第一条错误",
    "strict: 开启一组严格检查",
    "noEmit: 只检查，不生成文件",
    "target/module: 输出语法 / 模块规则",
  ],
  expected: [
    "找到: TypeScript",
    "没有找到",
    "第一项: 88",
    "列表为空",
    "主题字段: 不存在",
    "结果: 8",
    "无法计算",
  ],
  success: "你已在多项严格规则下安全处理空值、数组索引、可选属性和 unknown。",
  hints: [
    "find 与 scores[0] 的结果都包含 undefined，请显式分支。",
    "clearTheme 要真正移除属性，可用对象解构保留其余字段。",
    "double 的参数是 unknown，先用 typeof 收窄。",
  ],
  typeHints: [
    "先处理终端中的第一条类型错误，不要用断言或忽略注释压掉它。",
    "exactOptionalPropertyTypes 下，属性缺席与属性值为 undefined 不相同。",
  ],
  compilerOptions: {
    strictNullChecks: true,
    noImplicitAny: true,
    noUncheckedIndexedAccess: true,
    exactOptionalPropertyTypes: true,
  },
};
