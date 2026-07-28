export default {
  "title": "Day 28 · 高级函数独立综合题",
  "exampleExpected": [
    "Functions: 45m",
    "42",
    "types, modules",
    "[TS] typed this"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "课程函数工具箱",
      "expected": [
        "Progress: 3/4",
        "Total: 36",
        "Day 28",
        "types",
        "modules, generics",
        "Elective Day 28: Advanced functions"
      ],
      "success": "你已从零组合使用元组、可变参数泛型、重载和显式 this。",
      "hints": [
        "progress 返回固定二元组。",
        "invoke 直接 return fn(...args)。",
        "normalize 先写两条公开重载，再写联合实现。",
        "describe 通过 this.title 与 this.day 读取上下文。"
      ],
      "typeHints": [
        "使用 unknown[] 保留参数关系，不要换成 any[]。"
      ]
    },
    {
      "id": "practice02",
      "title": "通知与账单适配器",
      "expected": [
        "email -> learner@example.com",
        "Invoice: 216",
        "Single: learner@example.com",
        "Batch: a@example.com, b@example.com",
        "[billing] paid"
      ],
      "success": "你已根据调用需求区分元组、可变参数泛型、重载与显式 this。",
      "hints": [
        "DeliveryPair 的两个位置含义固定。",
        "invoke 用同一个 Args 连接函数参数和转发实参。",
        "单地址与地址数组各写一条公开重载。",
        "formatNotice.call 的第一个参数提供 this，不属于普通参数。"
      ],
      "typeHints": [
        "不要用 any[] 或 string | string[] 的宽结果切断调用关系。"
      ]
    }
  ]
};
