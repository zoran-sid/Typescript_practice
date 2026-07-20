export default {
  title: "类：把数据与行为放在一起",
  exampleExpected: [
    "Types: 45 minutes",
    "Modules: 20 minutes",
    "Dashboard | Types: 45 minutes",
  ],
  expected: [
    "TypeScript: 45 minutes",
    "Modules: 20 minutes",
    "Dashboard | TypeScript: 45 minutes",
    "[学习] 完成复习",
  ],
  success: "独立实例、受保护状态、接口组合和不会丢失 this 的回调都已正常工作。",
  hints: [
    "StudyCounter.add 通过 this.minutes 访问实例字段，只处理正数。",
    "Dashboard 的 provider 类型是 SummaryProvider，render 调用 provider.summary()。",
    "MessageFormatter.format 使用箭头函数字段，而不是普通方法。",
    "先把 formatter.format 赋给 detachedFormat，再独立调用验证 this。",
  ],
  runtimeHints: [
    "若最后一行提示无法读取 prefix，说明普通方法脱离实例后丢失了 this。",
  ],
};
