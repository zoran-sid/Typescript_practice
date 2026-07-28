export default {
  "title": "Day 01：学习档案",
  "exampleExpected": [
    "Ada completed 1 lesson. Beginner: true",
    "Zoran completed 2 and Lesson Beginner is: true"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 01：学习档案",
      "expected": [
        "学习者: Lin",
        "课程: TypeScript",
        "已完成: 2",
        "初学者: true"
      ],
      "success": "你已经能从空文件使用变量、常用类型、重新赋值和模板字符串。",
      "hints": [
        "learnerName 与 courseName 是字符串，isBeginner 是不带引号的布尔值。",
        "completedLessons 从数字 0 开始，使用 let 并连续增加两次。",
        "四行输出都应读取变量，不要把完整结果写死。"
      ],
      "typeHints": [
        "如果提示不能给 const 重新赋值，请检查 completedLessons 是否误用了 const。",
        "基础类型值应分别使用字符串、数字和布尔值，不要把所有内容都加引号。"
      ]
    },
    {
      "id": "practice02",
      "title": "键盘库存快照",
      "expected": [
        "商品: Keyboard",
        "出库前库存: 5",
        "出库后库存: 3",
        "启用库存跟踪: true"
      ],
      "success": "你已经能先保存旧值快照，再更新当前库存并分别输出两个时刻。",
      "hints": [
        "beforeStock 要在第一次修改 stock 之前读取它。",
        "两次出库都要把减 1 的结果重新赋值给 stock。",
        "四条输出分别读取商品名、旧库存、新库存和布尔值。",
      ]
    }
  ]
};
