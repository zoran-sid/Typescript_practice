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
      "title": "带追踪的价格服务",
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
      "title": "可替换支付审计器",
      "expected": [
        "Paid: 24",
        "Audit count: 1",
        "Last audit: paid 3 x 8",
        "Invalid quantity: rejected",
        "Audit after failure: 1"
      ],
      "success": "你已用构造器组合可替换审计器，并保证失败请求不产生副作用。",
      "hints": [
        "MemoryAuditSink 自己保存 entries，只暴露 count 和 last。",
        "PaymentService 依赖 AuditSink 接口，不写死 MemoryAuditSink。",
        "所有输入检查都要发生在 record 之前。",
        "无效数量只接受 RangeError，其他错误不能吞掉。"
      ],
      "runtimeHints": [
        "如果失败后审计数变成 2，检查 record 是否放在校验之前。"
      ]
    }
  ]
};
