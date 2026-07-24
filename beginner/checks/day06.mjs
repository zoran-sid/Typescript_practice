export default {
  "title": "Day 06：学习任务副本与成绩报告",
  "exampleExpected": [
    "书名: TypeScript 入门",
    "页数: 320",
    "状态: 可借阅"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 06：学习任务副本与成绩报告",
      "expected": [
        "原任务完成: false",
        "副本完成: true",
        "学生: Mei（成都）",
        "平均分: 90"
      ],
      "success": "你已经能从空文件组合对象、嵌套数据、对象参数与独立副本。",
      "hints": [
        "copiedTask 必须是新对象，student 与 scores 也要使用新创建的数据。",
        "只修改 copiedTask.done，不要修改 originalTask.done。",
        "calculateAverage 循环累加 record.scores，再除以数组长度。"
      ]
    },
    {
      "id": "practice02",
      "title": "图书借阅卡",
      "expected": [
        "书名: TypeScript 入门",
        "页数: 320",
        "状态: 可借阅"
      ],
      "success": "你已闭卷重建 图书借阅卡 的完整数据流。",
      "hints": [
        "创建对象、读取属性，并让函数只通过参数取得对象数据。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    },
    {
      "id": "practice03",
      "title": "购物车深复制函数",
      "expected": [
        "Original items: 2",
        "Copied items: 3",
        "Copied total: 60",
        "Customer: Lin"
      ],
      "success": "你已独立完成 购物车深复制函数。",
      "hints": [
        "把购物车价格数组复制成独立数组，修改副本后计算总价，确认原购物车不受影响。",
        "按流程图逐步建立输入、处理、边界和输出。",
        "不要读取或修改其他 practice 文件夹。"
      ]
    }
  ]
};
