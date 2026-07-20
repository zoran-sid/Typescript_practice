export default {
  title: "判别联合、switch 与完整分支",
  exampleExpected: [
    "等待开始",
    "正在加载",
    "已加载 2 项：变量、联合",
    "加载失败：网络不可用",
  ],
  expected: [
    "待开始：联合类型",
    "学习中：函数（45 分钟）",
    "已完成：对象（92 分）",
    "已完成：复习（待评分）",
    "失败：提交（网络中断）",
  ],
  success: "四种任务状态和可选分数都已安全处理，穷尽检查也已建立。",
  hints: [
    "先写带共同 status 字段的 StudyTask 判别联合。",
    "在 describeTask 中对 task.status 使用 switch。",
    "completed 分支的 score 仍可能缺失，可用 ??；不要使用非空断言。",
    "default 应把 task 传给参数类型为 never 的 assertNever。",
  ],
  typeHints: [
    "如果 default 中的 task 不能传给 never，请检查是否遗漏了某个 case。",
  ],
};
