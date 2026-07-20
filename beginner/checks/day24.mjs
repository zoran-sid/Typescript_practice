export default {
  title: "Day 24 · 结课项目（一）独立综合题",
  exampleExpected: ["Import succeeded: 2 tasks", "First: Validate data (doing since 09:00)", "Total planned minutes: 105"],
  expected: ["Import succeeded: 3 tasks", "Rejected: 1", "Plan: todo", "Practice: doing since 09:00", "Review: done at 10:30", "Total planned minutes: 105", "Invalid JSON: JSON format is invalid"],
  success: "你已从零建立任务模型，并把 unknown JSON 安全转换为经过验证的任务。",
  hints: ["先写模型，再从 isRecord 开始逐层组合验证器。", "数组用 filter(isStudyTask) 保留有效值，拒绝数是长度之差。", "describeState 使用 status 收窄，不要把时间字段都改成可选。"],
  typeHints: ["不要用 any、非空断言或 as StudyTask[] 跳过验证。", "先排除 null，再读取 unknown 对象的字段。"],
};
