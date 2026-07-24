export default {
  "title": "类：把数据与行为放在一起",
  "exampleExpected": [
    "Types: 45 minutes",
    "Modules: 20 minutes",
    "Dashboard | Types: 45 minutes"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "类：把数据与行为放在一起",
      "expected": [
        "TypeScript: 45 minutes",
        "Modules: 20 minutes",
        "Dashboard | TypeScript: 45 minutes",
        "[学习] 完成复习"
      ],
      "success": "独立实例、受保护状态、接口组合和不会丢失 this 的回调都已正常工作。",
      "hints": [
        "StudyCounter.add 通过 this.minutes 访问实例字段，只处理正数。",
        "Dashboard 的 provider 类型是 SummaryProvider，render 调用 provider.summary()。",
        "MessageFormatter.format 使用箭头函数字段，而不是普通方法。",
        "先把 formatter.format 赋给 detachedFormat，再独立调用验证 this。"
      ],
      "runtimeHints": [
        "若最后一行提示无法读取 prefix，说明普通方法脱离实例后丢失了 this。"
      ]
    },
    {
      "id": "practice02",
      "title": "学习时段类",
      "expected": [
        "Types: 45 minutes",
        "Modules: 20 minutes",
        "Dashboard | Types: 45 minutes"
      ],
      "success": "你已闭卷重建 学习时段类 的完整数据流。",
      "hints": [
        "用 class、constructor、字段和方法组织实例状态。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
