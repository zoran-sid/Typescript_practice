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
      "title": "Day 29 · 类型派生独立综合题",
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
      "title": "界面类型派生",
      "expected": [
        "Flags: true/false",
        "Topic: modules",
        "Handler: onReady",
        "Title: Advanced types"
      ],
      "success": "你已闭卷重建 界面类型派生 的完整数据流。",
      "hints": [
        "从现有类型派生映射、条件或模板字面量类型，避免重复手写。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
