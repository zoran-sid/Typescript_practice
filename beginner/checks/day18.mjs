export default {
  title: "类：把数据与行为放在一起",
  exampleExpected: [
    "Types: 45 minutes",
    "Modules: 20 minutes",
    "Dashboard | Types: 45 minutes",
  ],
  exercises: [
    {
      id: "01",
      title: "学习时长计数器",
      expected: ["Functions: 45 minutes"],
      success: "实例字段、构造器、方法和 this 已经协同工作。",
      hints: [
        "add 中通过 this.minutes 访问字段。",
        "只有 minutes > 0 时累加。",
        "describe 返回模板字符串，不是只 console.log。",
      ],
    },
    {
      id: "02",
      title: "实现进度摘要接口",
      expected: ["TypeScript: 2/2"],
      success: "类满足了接口，并保护了不应由外部任意修改的状态。",
      hints: [
        "先比较 this.completed < this.total。",
        "满足条件时 this.completed += 1。",
        "摘要读取 this.course、this.completed 和 this.total。",
      ],
    },
    {
      id: "03",
      title: "修复脱离实例的 this",
      expected: ["[TS] Learn classes"],
      success: "方法作为回调单独传递时仍然保留了正确实例。",
      runtimeHints: [
        "错误不是 prefix 不存在，而是普通方法被单独调用时 this 丢失。",
        "把 format 改成 `format = (message: string): string => { ... }`。",
      ],
      hints: ["使用箭头函数字段，让它捕获创建实例时的 this。"],
    },
  ],
};
