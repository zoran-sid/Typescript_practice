export default {
  "title": "Day 05：会员账单函数",
  "exampleExpected": [
    "书桌面积: 120"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 05：会员账单函数",
      "expected": [
        "小计: 120",
        "优惠: 12",
        "应付: 108"
      ],
      "success": "你已经能从空文件用有类型的函数拆分输入、处理与输出。",
      "hints": [
        "calculateSubtotal 返回 quantity * unitPrice，不要在函数内打印。",
        "会员且 subtotal >= 100 时，calculateDiscount 返回 subtotal * 0.1。",
        "依次保存三个函数调用结果，最后统一输出。"
      ],
      "typeHints": [
        "三个函数的参数与返回值都应显式标注为题目指定类型。",
        "如果函数结果成为 void，请检查是否误用 console.log 代替 return。"
      ]
    },
    {
      "id": "practice02",
      "title": "书桌面积函数",
      "expected": [
        "书桌面积: 120"
      ],
      "success": "你已闭卷重建 书桌面积函数 的完整数据流。",
      "hints": [
        "声明参数类型与返回类型，用 return 交付计算结果。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
