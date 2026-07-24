export default {
  "title": "Day 32 · 标准装饰器、Mixin 与组合独立综合题",
  "exampleExpected": [
    "定义类: Calculator",
    "类别: utility",
    "调用方法: add",
    "结果: 5"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 32 · 标准装饰器、Mixin 与组合独立综合题",
      "expected": [
        "注册类: PriceCalculator",
        "标签: advanced",
        "调用: total",
        "总价: 24",
        "消息: TYPESCRIPT"
      ],
      "success": "你已从零完成 TS5 标准装饰器、类型安全 Mixin 和显式组合。",
      "hints": [
        "方法装饰器使用 target 与 context 两个参数。",
        "包装函数保留 this，并 return target.call(this, ...args)。",
        "withTag 返回原类型与只读 tag 的交叉类型。",
        "MessageService 调用注入的 formatter.format。"
      ],
      "typeHints": [
        "使用 Args extends unknown[]，不要用 any[] 或 legacy descriptor 签名。"
      ],
      "compilerOptions": {
        "experimentalDecorators": false
      }
    },
    {
      "id": "practice02",
      "title": "计算器方法日志",
      "expected": [
        "定义类: Calculator",
        "类别: utility",
        "调用方法: add",
        "结果: 5"
      ],
      "success": "你已闭卷重建 计算器方法日志 的完整数据流。",
      "hints": [
        "标准装饰器包装方法时保留 this、参数元组与返回类型。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
