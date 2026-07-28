export default {
  "title": "Day 30 · 声明文件与旧代码独立综合题",
  "exampleExpected": [
    "Legacy total: 60",
    "Legacy version: 1.0",
    "Merged: Declarations/40",
    "Modern status: published"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "旧计分模块兼容入口",
      "expected": [
        "Score: 60",
        "Declarations: 35 minutes",
        "Legacy: published",
        "Modern: draft"
      ],
      "success": "你已从单一入口正确消费声明模块，并读懂接口合并与旧枚举边界。",
      "hints": [
        "从 ./score.js 导入 score，辅助文件已经完整，不要修改。",
        "两个同名 LessonInfo 会合并，创建对象时两个字段都需要。",
        "normalizeStatus 将旧 Draft 与现代 draft 统一到 ModernStatus.Draft。"
      ],
      "typeHints": [
        "声明应与真实 JS 匹配；不要用 any 或断言让错误调用通过。"
      ]
    },
    {
      "id": "practice02",
      "title": "模块增强与运行时补丁",
      "expected": [
        "Module total: 60",
        "Module version: 1.0",
        "Before patch: undefined",
        "User label: Ada (legacy)"
      ],
      "success": "你已区分模块命名空间导入、模块增强和运行时原型补丁。",
      "hints": [
        "import * as 得到模块对象，不是 namespace 关键字声明。",
        "先在补丁前读取 typeof LegacyUser.prototype.label。",
        "declare module 只补类型；原型赋值才提供运行时函数。",
        "label 用普通 function 读取实例 this.name。"
      ],
      "typeHints": [
        "增强声明与运行时实现的成员名、参数和返回值必须一致。"
      ]
    }
  ]
};
