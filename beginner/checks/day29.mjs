export default {
  "title": "Day 29 · 类型派生独立综合题",
  "exampleExpected": [
    "Flags: true/false",
    "Topic: modules",
    "Handler: onReady",
    "Title: Advanced types"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "SDK 类型派生与品牌 ID",
      "expected": [
        "Flags: dark=true, retries=false",
        "Selected: modules",
        "Ready at 29",
        "Failed: invalid",
        "/users/usr_42"
      ],
      "success": "你已从零组合映射、条件、infer、键重映射和品牌类型。",
      "hints": [
        "Flags 的右侧固定为 boolean。",
        "ElementOf 匹配 readonly 数组并 infer Item。",
        "Handlers 在映射键后用 as 生成 onXxx。",
        "品牌构造器先验证，再集中做一次窄断言。"
      ],
      "typeHints": [
        "不要使用 any，也不要在调用处把普通 string 直接断言成 UserId。"
      ]
    },
    {
      "id": "practice02",
      "title": "API 客户端类型派生",
      "expected": [
        "Method: getUser",
        "User: Ada",
        "First order: keyboard",
        "Loaded orders: 2"
      ],
      "success": "你已从资源模型派生 getter、异步结果和数组元素类型。",
      "hints": [
        "GetterName 用模板字面量拼接 get 与大写开头的资源名。",
        "Getters 遍历 ApiModel 的键，并保留每个键对应的值类型。",
        "Resolved 与 ElementOf 分别在 Promise、只读数组中 infer。",
        "类型派生不会创建客户端方法，getUser/getOrders 仍要实现。"
      ],
      "typeHints": [
        "让客户端 satisfies Getters<ApiModel>，不要把方法表断言成目标类型。"
      ]
    }
  ]
};
