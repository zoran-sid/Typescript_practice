export default {
  "title": "Day 23 · 严格配置下的独立练习",
  "exampleExpected": [
    "先读: 第一条错误",
    "strict: 开启一组严格检查",
    "noEmit: 只检查，不生成文件",
    "target/module: 输出语法 / 模块规则"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "严格模式下的课程入口",
      "expected": [
        "找到: TypeScript",
        "没有找到",
        "第一项: 88",
        "列表为空",
        "主题字段: 不存在",
        "结果: 8",
        "无法计算"
      ],
      "success": "你已在多项严格规则下安全处理空值、数组索引、可选属性和 unknown。",
      "hints": [
        "find 与 scores[0] 的结果都包含 undefined，请显式分支。",
        "clearTheme 要真正移除属性，可用对象解构保留其余字段。",
        "double 的参数是 unknown，先用 typeof 收窄。"
      ],
      "typeHints": [
        "先处理终端中的第一条类型错误，不要用断言或忽略注释压掉它。",
        "exactOptionalPropertyTypes 下，属性缺席与属性值为 undefined 不相同。"
      ],
      "compilerOptions": {
        "strictNullChecks": true,
        "noImplicitAny": true,
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true
      }
    },
    {
      "id": "practice02",
      "title": "严格配置发布前检查",
      "expected": [
        "First step: fix first diagnostic",
        "type-check: no files emitted",
        "build: JavaScript emitted",
        "Runtime: ES2022/NodeNext",
        "Unknown option: rejected"
      ],
      "success": "你已比较类型检查与发布配置，并安全验证外部配置键。",
      "hints": [
        "firstDiagnostic 的空数组结果是 undefined。",
        "describeEmit 只根据 noEmit 决定是否写出 JavaScript。",
        "isKnownOption 只接受四个已知配置键。",
        "target/module 与 strict 解决的是不同问题。"
      ],
      "typeHints": [
        "不要用非空断言读取第一条诊断，也不要把外部字符串断言成 KnownOption。"
      ]
    }
  ]
};
