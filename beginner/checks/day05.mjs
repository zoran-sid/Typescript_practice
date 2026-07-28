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
      "title": "配送时效评估",
      "expected": [
        "A01: On time",
        "B02: Late by 10 minutes"
      ],
      "success": "你已经能让同一个函数处理不同输入，并把返回结果继续交给另一个函数。",
      "hints": [
        "actualMinutes 没有超过 estimatedMinutes 时都算 On time。",
        "超时分钟数由实际时间减预计时间得到。",
        "createDeliveryLine 只负责格式化，不重新计算是否超时。"
      ]
    }
  ]
};
