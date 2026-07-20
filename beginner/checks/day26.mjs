export default {
  title: "Day 26 · 结课项目（三）独立综合题",
  exampleExpected: ["State: loading", "State: success", "Tasks: 2", "Done: 1", "Minutes: 75"],
  expected: ["State: loading", "State: success", "Tasks: 2", "Done: 1", "Minutes: 75", "Tests passed: 4/4"],
  success: "你已从零完成异步仓库、运行时验证、加载状态、渲染和回归测试。",
  hints: ["先完成验证器和 loadDashboard，再写 render 与内存仓库。", "parseTasks([]) 应返回空数组，而不是 null。", "四条测试必须分别检查正常、空数组、坏数据和 offline。"],
  typeHints: ["仓库结果保持 unknown；不要用 as StudyTask[]。", "catch 值先 instanceof Error，再读取 message。"],
  runtimeHints: ["若 Tests passed 小于 4，逐条检查测试条件，而不是直接修改计数。", "若打印 Promise，检查调用 loadDashboard 和 runRegressionTests 的位置是否 await。"],
};
