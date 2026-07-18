export default {
  title: "结课项目（一）：模型与外部数据边界",
  exampleExpected: [
    "Import succeeded: 2 tasks",
    "First: Validate data (doing since 09:00)",
    "Total planned minutes: 105",
  ],
  exercises: [
    {
      id: "01",
      title: "用判别联合描述任务状态",
      expected: [
        "Plan: Todo",
        "Practice: Doing since 09:00",
        "Review: Done at 10:30",
      ],
      success: "三种状态各自只能携带合法字段，并且分支已经完整处理。",
      hints: [
        "使用 switch (state.status)。",
        "doing 分支读取 startedAt，done 分支读取 completedAt。",
        "不要把所有字段改成可选来绕过收窄。",
      ],
    },
    {
      id: "02",
      title: "验证一条 unknown 任务",
      expected: [
        "Valid task: true",
        "Missing minutes: false",
        "Wrong state: false",
      ],
      success: "你已经用真实运行时检查兑现了类型谓词的承诺。",
      hints: [
        "先判断 value !== null && typeof value === 'object'。",
        "嵌套 state 也必须先确认是非 null 对象。",
        "status 为 doing 时还要检查 startedAt。",
      ],
    },
    {
      id: "03",
      title: "导入好坏混合的一批数据",
      expected: ["Accepted: 2", "Rejected: 1", "Minutes: 75"],
      success: "你已经能在外部数据边界留下有效值并报告无效值。",
      hints: [
        "先写一个 value is ImportedTask 的小验证器。",
        "filter 可以复用类型谓词，并把结果收窄成 ImportedTask[]。",
        "rejected 等于原数组长度减去有效数组长度。",
      ],
    },
  ],
};
