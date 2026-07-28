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
      "title": "存储配额与状态边界",
      "expected": [
        "团队盘：已用 30/100 GB",
        "超额写入：拒绝",
        "配额 | 团队盘：已用 30/100 GB"
      ],
      "success": "配额对象守住了容量上限，拒绝请求未污染状态，面板也只依赖摘要接口。",
      "hints": [
        "consume 先检查正数和 used + gigabytes <= limit，通过后才更新 used。",
        "拒绝分支返回 false，不要先修改再撤销。",
        "summary 读取当前实例状态；QuotaPanel 只调用 provider.summary()。",
        "第三次写入 80 GB 会超过上限，used 应保持 30。"
      ]
    }
  ]
};
