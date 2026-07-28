export default {
  "title": "Day 24 · 结课项目（一）独立综合题",
  "exampleExpected": [
    "Import succeeded: 2 tasks",
    "First: Validate data (doing since 09:00)",
    "Total planned minutes: 105"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "任务 JSON 导入审查器",
      "expected": [
        "Import succeeded: 3 tasks",
        "Rejected: 1",
        "Plan: todo",
        "Practice: doing since 09:00",
        "Review: done at 10:30",
        "Total planned minutes: 105",
        "Invalid JSON: JSON format is invalid"
      ],
      "success": "你已从零建立任务模型，并把 unknown JSON 安全转换为经过验证的任务。",
      "hints": [
        "先写模型，再从 isRecord 开始逐层组合验证器。",
        "数组用 filter(isStudyTask) 保留有效值，拒绝数是长度之差。",
        "describeState 使用 status 收窄，不要把时间字段都改成可选。"
      ],
      "typeHints": [
        "不要用 any、非空断言或 as StudyTask[] 跳过验证。",
        "先排除 null，再读取 unknown 对象的字段。"
      ]
    },
    {
      "id": "practice02",
      "title": "任务导入边界",
      "expected": [
        "Import succeeded: 2 tasks",
        "First: Validate data (doing since 09:00)",
        "Total planned minutes: 105",
        "Invalid import: Task data is invalid"
      ],
      "success": "你已完成整批导入协议，并分别验证成功与字段错误两条路径。",
      "hints": [
        "成功批次要求每一项都通过 isStudyTask。",
        "minutes 为字符串的批次必须整体返回 failure。",
        "ok 为 true 读取 tasks，false 读取 message。"
      ]
    },
    {
      "id": "practice03",
      "title": "订单 JSON 导入边界",
      "expected": [
        "Accepted orders: 2",
        "Rejected orders: 1",
        "Order total: 160"
      ],
      "success": "你已独立完成 订单 JSON 导入边界。",
      "hints": [
        "从 unknown JSON 中筛出合法订单并统计金额，拒绝字段类型错误的数据。",
        "按流程图逐步建立输入、处理、边界和输出。",
        "不要读取或修改其他 practice 文件夹。"
      ]
    }
  ]
};
